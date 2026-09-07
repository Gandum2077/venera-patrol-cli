import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import {
  enumerate,
  resolveCapability,
  isMutation,
  summarize,
} from "./capabilities.js";
import { brokenReason } from "./config.js";
import { PatrolError, Skip, assert, classify } from "./errors.js";
import { installObserver, httpCategory } from "./observer.js";
import {
  validateResult,
  comicList,
  firstChapter,
  optionDefaults,
  optionValue,
  entries,
  validId,
} from "./validate.js";

/** All runtime imports occur after the worker's private data directory is configured. */
export async function inspectSource(job, send) {
  const { descriptor, policy, mode } = job;
  let settings = job.settings,
    source,
    runtime,
    globals,
    stage = "runtime.load";
  const completed = new Set(),
    results = [],
    context = {};
  let capabilities = [];
  let sequence = 0;
  const emit = (event) => send({ kind: "trace", ...event });
  const observer = installObserver(policy, emit, () => stage);
  function skip(reason, message) {
    throw new Skip(reason, message);
  }
  function missing(message) {
    skip("missing_input", message);
  }
  async function step(
    path,
    action,
    { args, expect, validate = true, repeat = false } = {},
  ) {
    if (completed.has(path) && !repeat) return;
    completed.add(path);
    stage = path;
    const id = `stage-${++sequence}`;
    const start = Date.now();
    send({
      kind: "stage.start",
      id,
      path,
      startedAt: new Date(start).toISOString(),
    });
    let result;
    try {
      const reason = brokenReason(settings, path);
      if (reason) skip("manual_broken", reason);
      const value = await action();
      if (validate) validateResult(path, value, expect);
      result = {
        id,
        path,
        status: "passed",
        durationMs: Date.now() - start,
        input: args ? summarize(args) : undefined,
        output: summarize(value),
      };
      results.push(result);
      send({ kind: "stage.result", result });
      return value;
    } catch (error) {
      result = {
        id,
        path,
        status: error instanceof Skip ? "skipped" : "failed",
        category:
          path === "source.load" && !error.category
            ? "config_parse"
            : classify(error, observer.evidence.get(path)),
        reason: error.message ?? String(error),
        durationMs: Date.now() - start,
      };
      results.push(result);
      send({ kind: "stage.result", result });
      return undefined;
    }
  }
  async function call(path, getArgs = () => [], after, validate = true) {
    const { owner, value } = resolveCapability(source, path);
    if (typeof value !== "function") return;
    const test = settings.cases?.[path];
    const result = await step(
      path,
      async () => {
        if (isMutation(path) && !(settings.allowMutations === true && test))
          skip(
            "mutation_disabled",
            "Requires allowMutations:true and an explicit case",
          );
        const args = test?.args ?? getArgs();
        emit({ event: "capability.call", stage: path, args });
        const out = await value.apply(owner, args);
        if (validate) validateResult(path, out, test?.expect);
        if (after) await after(out, args);
        return out;
      },
      { validate: false },
    );
    return result;
  }
  function has(path) {
    return typeof resolveCapability(source, path).value === "function";
  }
  function input() {
    return settings.inputs ?? {};
  }
  function cid() {
    const id = input().comicId ?? context.comicId;
    if (!validId(id))
      missing("Provide inputs.comicId or a successful comic list");
    return String(id);
  }
  function eid() {
    cid();
    if (input().epId !== undefined) return input().epId;
    if (!context.details)
      missing("Provide inputs.epId or successful comic.loadInfo");
    return context.epId;
  }
  function select(comics) {
    if (!context.comicId && comics.length) {
      context.comicId = String(comics[0].id);
      context.cover = comics[0].cover;
    }
  }
  function categoryInput() {
    if (input().category)
      return [input().category, input().categoryParam ?? null];
    if (context.category) return context.category;
    for (const part of source.category?.parts ?? []) {
      if (
        brokenReason(
          settings,
          `category.parts[${source.category.parts.indexOf(part)}]`,
        )
      )
        continue;
      if (part.itemType && part.itemType !== "category") continue;
      const item = part.categories?.[0];
      if (typeof item === "string")
        return [item, part.groupParam ?? part.categoryParams?.[0] ?? null];
      const target = item?.target;
      if (target?.page === "category")
        return [
          target.attributes?.category ?? item.label,
          target.attributes?.param ?? null,
        ];
    }
    missing("Provide inputs.category and optional categoryParam");
  }
  async function list(path, makeArgs, explore = false) {
    let first, previous, next;
    const token = /loadNext|loadWithNext/.test(path);
    const custom = settings.cases?.[path];
    await call(
      path,
      () => makeArgs(1, null),
      (value) => {
        const comics = comicList(value, {
          explore,
          allowEmpty: path.startsWith("favorites."),
        });
        select(comics);
        first = value;
        previous = comics.map((c) => String(c.id));
        next = value?.next;
      },
    );
    if (!first || custom || policy.pages <= 1) return;
    const owner = resolveCapability(source, path).owner;
    const fn = resolveCapability(source, path).value;
    const exploreType = explore ? owner.type : undefined;
    if (
      explore &&
      !token &&
      !["multiPageComicList", "mixed"].includes(exploreType)
    )
      return;
    for (let page = 2; page <= policy.pages; page++) {
      // A cursor source with no next cursor or a known final page is complete.
      if (
        (token && !next) ||
        (first.maxPage !== undefined && page > first.maxPage) ||
        previous.length === 0
      )
        break;
      const path2 = `${path}.page[${page}]`;
      let nextValue;
      await step(
        path2,
        async () => {
          const value = await fn.apply(owner, makeArgs(page, next));
          const comics = comicList(value, { explore, allowEmpty: true });
          const ids = comics.map((c) => String(c.id));
          assert(
            !ids.length || JSON.stringify(ids) !== JSON.stringify(previous),
            "Pagination repeated the previous page",
          );
          assert(
            !token || value.next == null || value.next !== next,
            "Pagination returned the same cursor",
          );
          previous = ids;
          next = value.next;
          nextValue = value;
          return value;
        },
        { validate: false },
      );
      if (!nextValue) break;
    }
  }
  async function imageCheck(url, hookPath, args, label) {
    const suffix = label === "image" ? "image" : "thumbnail";
    if (!url) {
      await step(`${suffix}.download`, () =>
        missing("No image URL from upstream"),
      );
      return;
    }
    let config = {};
    if (has(hookPath)) {
      // A broken hook must not silently fall through to a raw request.
      config = await call(hookPath, () => args);
      if (results.at(-1)?.status !== "passed") {
        await step(`${suffix}.download`, () =>
          skip("dependency_failed", `${hookPath} did not pass`),
        );
        return;
      }
      config ??= {};
    }
    for (const key of ["onResponse", "modifyImage", "onLoadFailed"]) {
      if (
        config[key] &&
        !capabilities.some((c) => c.path === `${hookPath}.${key}`)
      )
        capabilities.push({
          path: `${hookPath}.${key}`,
          type: typeof config[key],
        });
    }
    send({ kind: "capabilities", capabilities });
    if (suffix === "thumbnail") {
      for (const key of ["modifyImage", "onLoadFailed"]) {
        if (config[key])
          await step(
            `${hookPath}.${key}`,
            () =>
              skip(
                "unsupported_thumbnail",
                `Venera does not apply ${key} to thumbnails`,
              ),
            { validate: false },
          );
      }
      config = { ...config, modifyImage: undefined, onLoadFailed: undefined };
    }
    async function download(loading) {
      return step(
        `${suffix}.download`,
        async () => {
          const r = await globals.Network.fetchBytes(
            loading.method ?? "GET",
            loading.url ?? url,
            loading.headers,
            loading.data,
            { timeout: policy.requestTimeoutMs },
          );
          if (r.status < 200 || r.status >= 300)
            throw new PatrolError(
              httpCategory(r.status) ?? "http_error",
              `Image HTTP ${r.status}`,
            );
          assert(r.body?.byteLength > 0, "Image response is empty");
          return r.body;
        },
        { repeat: true, validate: false },
      );
    }
    const recoverable = [];
    for (let attempt = 0; attempt < 2; attempt++) {
      const before = results.length;
      let bytes = await download(config);
      if (bytes && typeof config.onResponse === "function") {
        bytes = await step(
          `${hookPath}.onResponse`,
          async () => {
            const value = await config.onResponse(bytes);
            if (Array.isArray(value)) {
              assert(
                value.every((x) => Number.isInteger(x) && x >= 0 && x <= 255),
                "Invalid response byte array",
              );
              return Uint8Array.from(value).buffer;
            }
            assert(
              value instanceof ArrayBuffer || ArrayBuffer.isView(value),
              "onResponse must return bytes",
            );
            return value;
          },
          { repeat: true, validate: false },
        );
      }
      if (bytes && config.modifyImage)
        bytes = await step(
          `${hookPath}.modifyImage`,
          () => runtime.modifyImage(bytes, config.modifyImage),
          { repeat: true, validate: false },
        );
      const decoded =
        bytes &&
        (await step(
          `${suffix}.decode`,
          async () => {
            try {
              const image = await runtime.runtimeImages.decode(bytes);
              assert(
                image.width > 0 && image.height > 0,
                "Invalid image dimensions",
              );
              return {
                width: image.width,
                height: image.height,
                bytes: bytes.byteLength,
              };
            } catch (error) {
              throw new PatrolError(
                "image_decode_failed",
                String(error.message ?? error),
              );
            }
          },
          { repeat: true, validate: false },
        ));
      if (decoded) {
        for (const result of recoverable) {
          result.status = "recovered";
          send({ kind: "stage.update", result });
        }
        if (
          typeof config.onLoadFailed === "function" &&
          !completed.has(`${hookPath}.onLoadFailed`)
        )
          await step(
            `${hookPath}.onLoadFailed`,
            () =>
              skip(
                "not_triggered",
                "Image succeeded; failure recovery was not invoked",
              ),
            { validate: false },
          );
        return;
      }
      const failures = results
        .slice(before)
        .filter((r) => r.status === "failed");
      // Manual skips do not activate fallback, and recovery gets one bounded attempt.
      if (
        !failures.length ||
        attempt > 0 ||
        typeof config.onLoadFailed !== "function"
      )
        return;
      recoverable.push(...failures);
      const fallback = await step(
        `${hookPath}.onLoadFailed`,
        async () => {
          const value = await config.onLoadFailed();
          assert(
            value && typeof value === "object" && !Array.isArray(value),
            "onLoadFailed must return image configuration",
          );
          return value;
        },
        { repeat: true, validate: false },
      );
      if (!fallback) return;
      config = fallback;
    }
  }

  try {
    const loaded = await step(
      "runtime.load",
      async () => {
        const module = await import("venera-runtime");
        runtime = module.default;
        globals = runtime.createVeneraRuntime();
        // Capture logs without arbitrary raw payloads: source code may print generated tokens.
        globals.log = (level) =>
          emit({
            event: "log",
            stage,
            level,
            message: "Source log captured (content omitted)",
          });
        globals.console = Object.fromEntries(
          ["log", "warn", "error"].map((level) => [
            level,
            (...args) =>
              emit({ event: "log", stage, level, argumentCount: args.length }),
          ]),
        );
        globals.UI = {
          showMessage: () => emit({ event: "ui.message", stage }),
          showLoading: () => 1,
          cancelLoading: () => {},
          showInputDialog: async () => {
            throw new Skip(
              "interactive_required",
              "Source requested interactive input",
            );
          },
          showSelectDialog: async () => {
            throw new Skip(
              "interactive_required",
              "Source requested interactive selection",
            );
          },
          showDialog: async () => {
            throw new Skip("interactive_required", "Source requested a dialog");
          },
          launchUrl: () => {
            throw new Skip(
              "interactive_required",
              "Source requested a browser",
            );
          },
        };
        globals.getClipboard = async () => {
          throw new Skip("interactive_required", "Clipboard input unavailable");
        };
        globals.setClipboard = async () => {};
        return { version: globals.APP.version };
      },
      { validate: false },
    );
    if (!loaded) return;
    const code = await step(
      "source.load",
      async () => {
        const code = await readFile(descriptor.file, "utf8");
        source = runtime.loadVeneraConfigBySourceCode(code, globals, false);
        capabilities = enumerate(source);
        settings =
          job.resolveSettings && mode !== "list"
            ? job.resolveSettings(source.key)
            : settings;
        send({
          kind: "source",
          key: source.key,
          name: source.name,
          version: source.version,
          sourceSha256: createHash("sha256").update(code).digest("hex"),
          capabilities,
        });
        return true;
      },
      { validate: false },
    );
    if (!code) return;
    if (mode === "list") return;
    const configured = await step(
      "configuration.apply",
      async () => {
        for (const p of Object.keys(settings.brokenCapabilities ?? {})) {
          const prefix = p.replace(/\.\*$/, "");
          assert(
            prefix === "*" ||
              /^(image|thumbnail)(\.(download|decode))?$/.test(prefix) ||
              /^comic\.on(Image|Thumbnail)Load\.(onResponse|modifyImage|onLoadFailed)$/.test(
                prefix,
              ) ||
              ["configuration.apply", "source.load", "runtime.load"].includes(
                prefix,
              ) ||
              capabilities.some(
                (c) =>
                  c.path === prefix ||
                  c.path.startsWith(prefix + ".") ||
                  c.path.startsWith(prefix + "[") ||
                  prefix.startsWith(c.path + ".page["),
              ),
            `Unknown broken capability: ${p}`,
          );
        }
        for (const [key, value] of Object.entries(settings.settings ?? {})) {
          const def = source.settings?.[key];
          assert(def, `Unknown source setting: ${key}`);
          if (def.type === "switch")
            assert(
              typeof value === "boolean",
              `Setting ${key} requires boolean`,
            );
          if (def.type === "select")
            assert(
              def.options.some((o) => o.value === value),
              `Setting ${key} has invalid option`,
            );
          if (def.type === "input") {
            assert(typeof value === "string", `Setting ${key} requires string`);
            if (def.validator)
              assert(
                new RegExp(def.validator).test(value),
                `Setting ${key} failed validation`,
              );
          }
          assert(
            def.type !== "callback",
            `Setting ${key} is a callback; use cases instead`,
          );
          runtime.configManager.setSetting(source.key, key, value);
        }
        for (const [key, value] of Object.entries(settings.data ?? {}))
          source.saveData(key, value);
        const c = settings.credentials ?? {};
        if (c.browserToken)
          source.saveData(c.browserToken.dataKey, c.browserToken.value);
        for (const cookie of c.cookies ?? [])
          globals.Network.setCookies(cookie.url, cookie.values);
        return true;
      },
      { validate: false },
    );
    if (!configured) return;
    if (has("init")) {
      await call("init");
      if (results.at(-1)?.status === "failed") return;
      // init can add optional capabilities dynamically.
      capabilities = enumerate(source);
      send({ kind: "capabilities", capabilities });
    }
    const contracts = await step(
      "configuration.capabilities",
      () => {
        for (const p of Object.keys(settings.cases ?? {}))
          assert(
            capabilities.some((c) => c.path === p && c.type === "function"),
            `Case requires a callable capability: ${p}`,
          );
        for (const p of settings.expectedCapabilities ?? [])
          assert(
            capabilities.some((c) => c.path === p),
            `Expected capability does not exist: ${p}`,
          );
        return true;
      },
      { validate: false },
    );
    if (!contracts) return;
    const credentials = settings.credentials ?? {};
    await call(
      "account.login",
      () => {
        if (
          typeof credentials.username !== "string" ||
          typeof credentials.password !== "string"
        )
          skip(
            "credentials_missing",
            "Provide credentials.username and password",
          );
        return [credentials.username, credentials.password];
      },
      (_, args) => source.saveData("account", args),
    );
    await call(
      "account.loginWithCookies.validate",
      () => {
        if (!credentials.cookieValues)
          skip("credentials_missing", "Provide credentials.cookieValues");
        const values = Array.isArray(credentials.cookieValues)
          ? credentials.cookieValues
          : source.account.loginWithCookies.fields.map(
              (f) => credentials.cookieValues[f] ?? "",
            );
        return [values];
      },
      () => source.saveData("account", "cookies"),
    );
    await call("account.loginWithWebview.checkStatus", () => {
      if (!credentials.webview)
        skip(
          "interactive_required",
          "Provide observed browser URL/title and exported cookies or token",
        );
      return [credentials.webview.url, credentials.webview.title];
    });
    await call(
      "account.loginWithWebview.onLoginSuccess",
      () => {
        if (
          !results.some(
            (x) =>
              x.path === "account.loginWithWebview.checkStatus" &&
              x.status === "passed",
          )
        )
          skip("dependency_failed", "Webview checkStatus did not pass");
        return [];
      },
      () => source.saveData("account", "webview"),
    );

    // Static capabilities have structural checks rather than fake function calls.
    if (source.category)
      await step(
        "category",
        () => {
          assert(
            Array.isArray(source.category.parts),
            "category.parts must be an array",
          );
          return source.category;
        },
        { validate: false },
      );
    for (let i = 0; i < (source.category?.parts?.length ?? 0); i++) {
      await call(
        `category.parts[${i}].loader`,
        () => [],
        (items) => {
          const item = items?.find((x) => x.target?.page === "category");
          if (item)
            context.category = [
              item.target.attributes?.category ?? item.label,
              item.target.attributes?.param ?? null,
            ];
        },
      );
    }
    if (source.settings)
      await step(
        "settings",
        () => {
          for (const [k, v] of Object.entries(source.settings))
            assert(
              v && ["select", "switch", "input", "callback"].includes(v.type),
              `Unknown setting type: ${k}`,
            );
          return source.settings;
        },
        { validate: false },
      );
    const searchArgs = (page, next, token = false) => {
      if (typeof input().keyword !== "string" || !input().keyword)
        missing("Provide inputs.keyword");
      return [
        input().keyword,
        input().searchOptions ??
          optionDefaults(source.search.optionList, undefined, true),
        token ? next : page,
      ];
    };
    await list("search.load", (p, n) => searchArgs(p, n));
    await list("search.loadNext", (p, n) => searchArgs(p, n, true));
    for (let i = 0; i < (source.explore?.length ?? 0); i++) {
      await list(
        `explore[${i}].load`,
        (p) => [
          source.explore[i].type === "singlePageWithMultiPart" ? null : p,
        ],
        true,
      );
      await list(`explore[${i}].loadNext`, (_, n) => [n], true);
    }
    const dynamicOptions = await call(
      "categoryComics.optionLoader",
      categoryInput,
    );
    await list("categoryComics.load", (p) => {
      const [cat, param] = categoryInput();
      if (
        has("categoryComics.optionLoader") &&
        !dynamicOptions &&
        !input().categoryOptions
      )
        skip("dependency_failed", "categoryComics.optionLoader did not pass");
      return [
        cat,
        param,
        input().categoryOptions ??
          optionDefaults(
            dynamicOptions ?? source.categoryComics.optionList,
            cat,
          ),
        p,
      ];
    });
    const rank = () =>
      input().rankingOption ??
      optionValue(source.categoryComics?.ranking?.options?.[0]);
    await list("categoryComics.ranking.load", (p) => [rank(), p]);
    await list("categoryComics.ranking.loadWithNext", (_, n) => [rank(), n]);
    await call(
      "favorites.loadFolders",
      () => {
        if (!source.isLogged)
          skip(
            "credentials_missing",
            "Favorites require authenticated account data",
          );
        return [input().comicId ?? context.comicId ?? null];
      },
      (v) => {
        context.folderId = entries(v.folders)[0]?.[0];
      },
    );
    const folder = () => {
      if (!source.isLogged)
        skip(
          "credentials_missing",
          "Favorites require authenticated account data",
        );
      const id =
        input().folderId ??
        context.folderId ??
        source.favorites.allFavoritesId ??
        null;
      if (source.favorites.multiFolder && id == null)
        missing("Provide inputs.folderId or successful favorites.loadFolders");
      return id;
    };
    await list("favorites.loadComics", (p) => [p, folder()]);
    await list("favorites.loadNext", (_, n) => [n, folder()]);
    await call(
      "comic.loadInfo",
      () => [cid()],
      (info) => {
        context.details = info;
        context.epId = firstChapter(info.chapters);
        context.cover = info.cover;
        emit({
          event: "sample.selected",
          stage,
          comicId: cid(),
          epId: context.epId,
        });
      },
    );
    await call(
      "comic.loadEp",
      () => [cid(), eid()],
      (value) => {
        context.images = value.images;
      },
    );
    await call(
      "comic.loadThumbnails",
      () => [cid(), null],
      (v) => {
        context.thumbnails = v.thumbnails;
      },
    );
    await call("comic.loadComments", () => [
      cid(),
      context.details?.subId ?? null,
      1,
      null,
    ]);
    await call("comic.loadChapterComments", () => {
      const ep = eid();
      if (ep == null) missing("Chapter comments require inputs.epId");
      return [cid(), ep, 1, null];
    });
    await call(
      "comic.archive.getArchives",
      () => [cid()],
      (v) => {
        context.archiveId = v[0]?.id;
      },
    );
    await call("comic.archive.getDownloadUrl", () => {
      const id = input().archiveId ?? context.archiveId;
      if (!validId(id))
        missing("Provide inputs.archiveId or a nonempty archive list");
      return [cid(), id];
    });
    await call(
      "comic.link.linkToId",
      () => {
        const url = input().comicUrl ?? context.details?.url;
        if (!url) missing("Provide inputs.comicUrl");
        return [url];
      },
      (value) => assert(validId(value), "linkToId did not recognize the URL"),
    );
    const tagArgs = () => {
      if (input().tag) return [input().tag.namespace ?? "", input().tag.value];
      const tag = entries(context.details?.tags).find(
        ([, values]) => Array.isArray(values) && values.length,
      );
      if (!tag) missing("Provide inputs.tag or details tags");
      return [tag[0], tag[1][0]];
    };
    await call("comic.onClickTag", tagArgs, (v) =>
      assert(v != null, "Tag has no jump target"),
    );
    await call("search.onTagSuggestionSelected", tagArgs, (v) =>
      assert(
        typeof v === "string" && v.length,
        "Tag suggestion must return keyword",
      ),
    );
    if (source.comic?.idMatch)
      await step(
        "comic.idMatch",
        () => {
          assert(
            new RegExp(source.comic.idMatch).test(cid()),
            "Comic ID does not match idMatch",
          );
          return true;
        },
        { validate: false },
      );

    const images = context.images?.slice(0, policy.imageSamples) ?? [];
    if (!images.length && has("comic.loadEp"))
      await step("image.download", () =>
        skip("dependency_failed", "comic.loadEp produced no images"),
      );
    for (const url of images) {
      // Re-run URL-dependent hooks for each sample; the inventory still has one capability.
      completed.delete("comic.onImageLoad");
      await imageCheck(
        url,
        "comic.onImageLoad",
        [url, cid(), input().epId ?? context.epId ?? null],
        "image",
      );
    }
    const cover = context.thumbnails?.[0] ?? context.cover;
    if (cover)
      await imageCheck(cover, "comic.onThumbnailLoad", [cover], "thumbnail");
    // Extension capabilities are never silently discarded. Explicit cases make them executable.
    for (const c of capabilities.filter((c) => c.type === "function")) {
      if (completed.has(c.path) || /\.(onResponse|onLoadFailed)$/.test(c.path))
        continue;
      await call(c.path, () => {
        if (isMutation(c.path))
          skip(
            "mutation_disabled",
            "Requires allowMutations:true and an explicit case",
          );
        missing("No automatic adapter; provide cases[path].args and expect");
      });
    }
  } finally {
    for (const c of capabilities.filter((c) => c.type === "function")) {
      if (!completed.has(c.path) && mode !== "list") {
        const reason = brokenReason(settings, c.path);
        const result = {
          path: c.path,
          status: "skipped",
          category: reason ? "manual_broken" : "dependency_failed",
          reason: reason ?? "Source setup or initialization did not complete",
          durationMs: 0,
        };
        send({ kind: "stage.result", result });
      }
    }
    observer.restore();
    runtime?.dbManager?.close();
  }
}
