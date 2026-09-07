import { isDeepStrictEqual } from "node:util";
import { assert, PatrolError } from "./errors.js";

export const entries = (value) =>
  value instanceof Map ? [...value.entries()] : Object.entries(value ?? {});
export const validId = (value) =>
  (typeof value === "string" && value.length > 0) ||
  (typeof value === "number" && Number.isFinite(value));
export const optionValue = (option) => String(option ?? "").split("-")[0];
export function optionDefaults(list = [], category, search = false) {
  return list
    .filter(
      (x) =>
        (!x.showWhen || x.showWhen.includes(category)) &&
        !x.notShowWhen?.includes(category),
    )
    .map((x) => {
      if (search && x.default != null) return JSON.stringify(x.default);
      const value = x.default ?? optionValue(x.options?.[0]);
      return Array.isArray(value) ? value.join(",") : String(value);
    });
}
export function comicList(
  result,
  { allowEmpty = false, explore = false } = {},
) {
  let comics;
  if (Array.isArray(result?.comics)) comics = result.comics;
  else if (explore && Array.isArray(result))
    comics = result.flatMap(
      (x) => x?.comics ?? (x?.id !== undefined ? [x] : []),
    );
  else if (explore && Array.isArray(result?.data))
    comics = result.data.flatMap((x) =>
      Array.isArray(x) ? x : (x?.comics ?? []),
    );
  else if (
    explore &&
    result &&
    typeof result === "object" &&
    Object.values(result).every(Array.isArray)
  )
    comics = Object.values(result).flat();
  assert(Array.isArray(comics), "Expected a comics array");
  assert(
    allowEmpty || comics.length > 0,
    "Comic list is empty; provide a representative keyword or case",
  );
  for (const c of comics)
    assert(
      c &&
        validId(c.id) &&
        typeof c.title === "string" &&
        c.title.trim() &&
        typeof c.cover === "string" &&
        c.cover.length,
      "Comic requires valid id, title and cover",
    );
  if (result?.maxPage !== undefined)
    assert(
      Number.isInteger(result.maxPage) && result.maxPage >= 0,
      "maxPage must be a nonnegative integer",
    );
  if (result?.next != null)
    assert(typeof result.next === "string", "next must be a string or null");
  return comics;
}
export function firstChapter(chapters) {
  if (chapters == null) return null;
  const all = entries(chapters);
  assert(all.length > 0, "Chapter map is empty");
  let first;
  for (const [id, value] of all) {
    if (typeof value === "string") {
      assert(validId(id) && value.length, "Chapter requires id and title");
      first ??= String(id);
    } else if (value && typeof value === "object" && !Array.isArray(value)) {
      const child = firstChapter(value);
      first ??= child;
    } else assert(false, "Expected chapter map or grouped chapter map");
  }
  return first;
}
export function validateResult(path, result, expectation = {}) {
  if (
    /^(search\.(load|loadNext)|categoryComics\.(load|ranking\.(load|loadWithNext))|favorites\.(loadComics|loadNext))$/.test(
      path,
    )
  )
    comicList(result, { allowEmpty: path.startsWith("favorites.") });
  else if (/^explore\[\d+\]\.(load|loadNext)$/.test(path))
    comicList(result, { explore: true });
  else if (path === "comic.loadInfo") {
    assert(
      result &&
        typeof result.title === "string" &&
        result.title.trim() &&
        typeof result.cover === "string" &&
        result.cover.length,
      "Details require title and cover",
    );
    firstChapter(result.chapters);
  } else if (path === "comic.loadEp" || path === "comic.loadThumbnails") {
    const list = result?.[path === "comic.loadEp" ? "images" : "thumbnails"];
    assert(
      Array.isArray(list) &&
        list.length &&
        list.every((x) => typeof x === "string" && x.length),
      "Expected nonempty image URL array",
    );
  } else if (/^comic\.load(Chapter)?Comments$/.test(path)) {
    assert(Array.isArray(result?.comments), "Expected comments array");
    for (const c of result.comments)
      assert(
        typeof c.userName === "string" && typeof c.content === "string",
        "Invalid comment",
      );
  } else if (path === "favorites.loadFolders")
    assert(
      result?.folders &&
        typeof result.folders === "object" &&
        !Array.isArray(result.folders),
      "Expected folders map",
    );
  else if (path === "categoryComics.optionLoader")
    assert(
      Array.isArray(result) &&
        result.every(
          (x) =>
            Array.isArray(x.options) &&
            x.options.every((y) => typeof y === "string"),
        ),
      "Expected option definitions",
    );
  else if (/^category\.parts\[\d+\]\.loader$/.test(path))
    assert(
      Array.isArray(result) &&
        result.every(
          (x) => x && typeof x.label === "string" && x.target != null,
        ),
      "Expected category items with label and target",
    );
  else if (path === "comic.archive.getArchives")
    assert(
      Array.isArray(result) &&
        result.every((x) => x && validId(x.id) && typeof x.title === "string"),
      "Expected archive descriptors",
    );
  else if (path === "comic.archive.getDownloadUrl")
    assert(
      typeof result === "string" && /^https?:\/\//.test(result),
      "Expected archive HTTP URL",
    );
  else if (/^comic\.on(Image|Thumbnail)Load$/.test(path))
    assert(
      result == null || (typeof result === "object" && !Array.isArray(result)),
      "Expected image loading configuration",
    );
  else if (
    path === "account.loginWithCookies.validate" ||
    path === "account.loginWithWebview.checkStatus"
  ) {
    if (result !== true)
      throw new PatrolError(
        "auth_required",
        "Login validation did not return true",
      );
  } else if (path === "account.login") {
    if (result === false)
      throw new PatrolError("auth_required", "Login rejected credentials");
  }
  if (expectation.type)
    assert(
      expectation.type ===
        (Array.isArray(result)
          ? "array"
          : result === null
            ? "null"
            : typeof result),
      `Expected type ${expectation.type}`,
    );
  if (expectation.nonEmpty)
    assert(
      result != null &&
        (typeof result === "object"
          ? entries(result).length > 0
          : String(result).length > 0),
      "Expected nonempty result",
    );
  if ("equals" in expectation)
    assert(
      isDeepStrictEqual(result, expectation.equals),
      "Result differs from expected value",
    );
  for (const key of expectation.requiredKeys ?? [])
    assert(
      result != null && Object.hasOwn(result, key),
      `Missing required field: ${key}`,
    );
}
