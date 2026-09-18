const $ = (id) => document.getElementById(id);
const labels = {
  passed: "通过",
  failed: "失败",
  partial: "未完整检查",
  skipped: "跳过",
  listed: "仅枚举",
  recovered: "已恢复",
  untested: "未执行",
};
const categories = {
  manual_broken: "手动标记损坏",
  credentials_missing: "缺少授权信息",
  missing_input: "缺少测试输入",
  dependency_failed: "前置步骤未完成",
  mutation_disabled: "写操作未启用",
  not_triggered: "条件未触发",
  unsupported_thumbnail: "缩略图不支持此回调",
  timeout: "请求超时",
  stage_timeout: "阶段超时",
  source_timeout: "整源超时",
  auth_required: "登录失效或需要授权",
  anti_bot: "访问验证",
  rate_limited: "请求限流",
  contract_violation: "返回数据不符合预期",
  image_decode_failed: "图片解码失败",
  config_error: "源执行异常",
  config_parse: "源加载失败",
  config_invalid: "配置错误",
  network_error: "网络错误",
  dns_error: "域名解析失败",
  http_error: "HTTP 错误",
  interactive_required: "需要交互操作",
  runtime_dependency: "运行时依赖异常",
};
const state = {
  index: null,
  report: null,
  runId: null,
  source: null,
  generation: 0,
  traces: new Map(),
};
const fmt = (value) =>
  value ? new Date(value).toLocaleString("zh-CN", { hour12: false }) : "—";
const ms = (n) =>
  Number.isFinite(n)
    ? n < 1000
      ? `${Math.round(n)} ms`
      : `${(n / 1000).toFixed(1)} s`
    : "—";
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = String(text);
  return node;
}
function badge(status) {
  return el(
    "span",
    `pill ${Object.hasOwn(labels, status) ? status : "neutral"}`,
    labels[status] ?? status ?? "未执行",
  );
}
function safeRun(id) {
  return /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/.test(id);
}
async function fetchJSON(url) {
  const response = await fetch(url, { cache: "no-cache" });
  if (!response.ok) throw Error(`无法读取报告（HTTP ${response.status}）`);
  return response.json();
}
function reportURL(id) {
  if (!safeRun(id)) throw Error("无效的巡检标识");
  return `./data/runs/${encodeURIComponent(id)}/`;
}
function link(text, href) {
  const a = el("a", "", text);
  a.href = href;
  return a;
}
function setNotice(text = "", error = false) {
  $("notice").textContent = text;
  $("notice").className = error ? "error-banner" : "";
}
function updateHash(run, source, capability) {
  const params = new URLSearchParams();
  if (run) params.set("run", run);
  if (source) params.set("source", source);
  if (capability) params.set("capability", capability);
  history.replaceState(null, "", `#${params}`);
}
function stats(report) {
  const s = report.summary ?? {};
  const box = $("summary");
  box.replaceChildren();
  for (const [label, value, note, cls] of [
    ["巡检漫画源", s.total ?? report.sources.length, "本次运行包含的源", ""],
    ["通过", s.passed ?? 0, "全部执行项通过", "pass"],
    ["失败", s.failed ?? 0, "存在未恢复的失败", "fail"],
    [
      "未完整检查",
      (s.partial ?? 0) + (s.skipped ?? 0) + (s.listed ?? 0),
      `跳过 ${s.skipped ?? 0} · 仅枚举 ${s.listed ?? 0}`,
      "",
    ],
  ]) {
    const card = el("div", `stat ${cls}`);
    card.append(
      el("p", "stat-label", label),
      el("p", "stat-number", value),
      el("p", "stat-note", note),
    );
    box.append(card);
  }
  box.hidden = false;
}
function renderSources() {
  if (!state.report) return;
  const query = $("source-search").value.trim().toLowerCase(),
    filter = $("status-filter").value;
  const order = { failed: 0, partial: 1, passed: 2, skipped: 3, listed: 4 };
  const sources = state.report.sources
    .filter(
      (s) =>
        (filter === "all" || s.status === filter) &&
        `${s.name ?? ""} ${s.key}`.toLowerCase().includes(query),
    )
    .sort(
      (a, b) =>
        (order[a.status] ?? 9) - (order[b.status] ?? 9) ||
        a.key.localeCompare(b.key),
    );
  $("source-count").textContent =
    `${sources.length} / ${state.report.sources.length}`;
  const list = $("source-list");
  list.replaceChildren();
  if (!sources.length) {
    list.append(el("p", "empty", "没有匹配的漫画源"));
    return;
  }
  for (const s of sources) {
    const button = el("button", "source-item");
    button.type = "button";
    button.setAttribute("aria-current", String(state.source?.key === s.key));
    const top = el("span", "source-item-top");
    top.append(el("span", "source-name", s.name ?? s.key), badge(s.status));
    const bottom = el("span", "source-item-bottom");
    bottom.append(
      el("code", "", s.key),
      el(
        "span",
        "",
        `${s.summary?.checkedCapabilities ?? 0}/${s.summary?.callableCapabilities ?? 0} 能力`,
      ),
    );
    button.append(top, bottom);
    button.onclick = () => selectSource(s.key);
    list.append(button);
  }
}
function groupStatus(stages) {
  if (stages.some((s) => s.status === "failed")) return "failed";
  if (stages.some((s) => s.status === "skipped")) return "skipped";
  if (stages.some((s) => s.status === "recovered")) return "recovered";
  return stages.length ? "passed" : "untested";
}
async function sourceTrace(source, runId) {
  if (!source.traceFile) return [];
  if (!/^traces\/\d+\.jsonl$/.test(source.traceFile))
    throw Error("无效的请求记录路径");
  const key = `${runId}/${source.traceFile}`;
  if (!state.traces.has(key))
    state.traces.set(
      key,
      fetch(reportURL(runId) + source.traceFile).then(async (response) => {
        if (!response.ok)
          throw Error(`请求记录加载失败（HTTP ${response.status}）`);
        return (await response.text())
          .split("\n")
          .filter(Boolean)
          .map(JSON.parse);
      }),
    );
  try {
    return await state.traces.get(key);
  } catch (e) {
    state.traces.delete(key);
    throw e;
  }
}
function showEvent(event) {
  const item = el("div", "network-event");
  if (event.event?.startsWith("http.")) {
    const line = el("div", "network-line");
    line.append(
      el("strong", "", event.method ?? "HTTP"),
      el("span", "", event.status ?? event.category ?? event.event),
      el("span", "muted", ms(event.durationMs)),
      el(
        "span",
        "muted",
        event.responseBytes == null
          ? ""
          : `${event.responseBytes.toLocaleString()} B`,
      ),
    );
    item.append(
      line,
      el("p", "network-url", event.finalUrl ?? event.url ?? ""),
    );
  }
  const detail = el("details");
  detail.append(
    el(
      "summary",
      "",
      `${event.event ?? event.kind ?? "事件"} · ${event.requestId ?? event.id ?? ""}`,
    ),
    el("pre", "", JSON.stringify(event, null, 2)),
  );
  item.append(detail);
  return item;
}
function capabilityCard(path, stages, source, runId) {
  const details = el("details", "capability");
  details.dataset.path = path;
  const summary = el("summary");
  summary.append(
    el("code", "", path),
    badge(groupStatus(stages)),
    el(
      "span",
      "duration",
      ms(stages.reduce((n, s) => n + (s.durationMs ?? 0), 0)),
    ),
  );
  details.append(summary);
  const body = el("div", "cap-body");
  if (!stages.length)
    body.append(el("p", "reason", "已声明此能力，但本次没有执行记录。"));
  for (const [i, stage] of stages.entries()) {
    const attempt = el("section", "attempt"),
      header = el("div", "attempt-header");
    header.append(
      el("strong", "", stages.length > 1 ? `样本 / 执行 ${i + 1}` : "执行结果"),
      badge(stage.status),
      el("span", "muted", ms(stage.durationMs)),
    );
    attempt.append(header);
    if (stage.category)
      attempt.append(
        el(
          "p",
          "category-code",
          `${categories[stage.category] ?? stage.category} · ${stage.category}`,
        ),
      );
    if (stage.reason) attempt.append(el("p", "reason", stage.reason));
    for (const [key, label] of [
      ["input", "输入摘要"],
      ["output", "输出摘要"],
    ])
      if (stage[key] !== undefined)
        attempt.append(
          el("p", "small-title", label),
          el("pre", "", JSON.stringify(stage[key], null, 2)),
        );
    body.append(attempt);
  }
  const trace = el("section");
  body.append(trace);
  details.append(body);
  let loaded = false;
  details.addEventListener("toggle", async () => {
    if (
      !details.open ||
      loaded ||
      !details.isConnected ||
      runId !== state.runId ||
      source.key !== state.source?.key
    )
      return;
    loaded = true;
    updateHash(runId, source.key, path);
    trace.append(
      el("p", "small-title", "调用与网络记录"),
      el("p", "muted", "正在加载…"),
    );
    try {
      const events = await sourceTrace(source, runId),
        matching = events.filter(
          (e) => e.stage === path || e.path === path || e.result?.path === path,
        );
      trace.replaceChildren(
        el("p", "small-title", `调用与网络记录 · ${matching.length} 条`),
      );
      if (events.some((e) => e.event === "trace.truncated"))
        trace.append(
          el("p", "reason", "本次追踪达到事件上限，后续事件未保存。"),
        );
      if (!matching.length)
        trace.append(el("p", "muted", "此阶段没有请求或追踪记录。"));
      for (const event of matching) trace.append(showEvent(event));
    } catch (error) {
      trace.replaceChildren(el("p", "reason", error.message));
      const retry = el("button", "", "重试加载");
      retry.onclick = () => {
        loaded = false;
        details.open = false;
        details.open = true;
      };
      trace.append(retry);
    }
  });
  return details;
}
function selectSource(key, capability) {
  const source = state.report.sources.find((s) => s.key === key);
  state.source = source ?? null;
  renderSources();
  const panel = $("source-detail");
  panel.replaceChildren();
  if (!source) {
    panel.append(el("p", "empty", "请选择左侧漫画源查看详情。"));
    return;
  }
  updateHash(state.runId, source.key, capability);
  const heading = el("div", "source-heading"),
    title = el("div");
  title.append(
    el("h2", "", source.name ?? source.key),
    el(
      "p",
      "source-meta muted",
      `${source.key} · v${source.version ?? "未知"}${source.sourceSha256 ? ` · SHA ${source.sourceSha256.slice(0, 12)}` : ""}`,
    ),
  );
  heading.append(title, badge(source.status));
  panel.append(heading);
  const metrics = el("div", "source-metrics");
  for (const text of [
    `能力已检查 ${source.summary?.checkedCapabilities ?? 0} / ${source.summary?.callableCapabilities ?? 0}`,
    `通过 ${source.summary?.passed ?? 0}`,
    `失败 ${source.summary?.failed ?? 0}`,
    `跳过 ${source.summary?.skipped ?? 0}`,
    `用时 ${ms(source.durationMs)}`,
  ])
    metrics.append(el("span", "", text));
  panel.append(metrics);
  const section = el("div", "section-heading");
  section.append(el("h3", "", "能力与执行阶段"));
  const downloads = el("div", "downloads");
  downloads.append(
    link("完整 JSON", reportURL(state.runId) + "report.json"),
    link("Markdown", reportURL(state.runId) + "report.md"),
  );
  if (/^traces\/\d+\.jsonl$/.test(source.traceFile ?? ""))
    downloads.append(
      link("请求记录", reportURL(state.runId) + source.traceFile),
    );
  section.append(downloads);
  panel.append(section);
  const toolbar = el("div", "cap-toolbar"),
    search = el("input");
  search.type = "search";
  search.placeholder = "筛选能力，例如 search.load";
  search.setAttribute("aria-label", "筛选能力名称");
  const filter = el("select");
  filter.setAttribute("aria-label", "筛选能力状态");
  for (const [v, t] of [
    ["all", "全部执行状态"],
    ["failed", "仅失败"],
    ["skipped", "仅跳过"],
    ["passed", "仅通过"],
    ["recovered", "已恢复"],
  ]) {
    const option = el("option", "", t);
    option.value = v;
    filter.append(option);
  }
  toolbar.append(search, filter);
  panel.append(toolbar);
  const groups = new Map();
  for (const s of source.stages) {
    if (!groups.has(s.path)) groups.set(s.path, []);
    groups.get(s.path).push(s);
  }
  for (const c of source.capabilities.filter((c) => c.type === "function"))
    if (!groups.has(c.path)) groups.set(c.path, []);
  const cards = el("div");
  panel.append(cards);
  const runId = state.runId;
  function renderCards() {
    cards.replaceChildren();
    for (const [name, stages] of groups) {
      if (
        !name.toLowerCase().includes(search.value.trim().toLowerCase()) ||
        (filter.value !== "all" && groupStatus(stages) !== filter.value)
      )
        continue;
      const card = capabilityCard(name, stages, source, runId);
      cards.append(card);
      if (name === capability) card.open = true;
    }
    if (!cards.children.length)
      cards.append(el("p", "empty", "没有匹配的执行阶段。"));
  }
  search.oninput = renderCards;
  filter.onchange = renderCards;
  renderCards();
  const inventory = el("details", "inventory");
  inventory.append(
    el(
      "summary",
      "",
      `完整声明清单 · ${source.capabilities.length} 项（包含字段与容器）`,
    ),
  );
  const table = el("table", "inventory-table");
  for (const c of source.capabilities) {
    const row = el("tr");
    row.append(el("td", "", c.path), el("td", "", c.type));
    table.append(row);
  }
  inventory.append(table);
  panel.append(inventory);
}
async function loadRun(runId, sourceKey, capability) {
  const generation = ++state.generation;
  const record = state.index.runs.find((r) => r.runId === runId);
  if (!record) {
    setNotice(
      "找不到这次巡检，记录可能已超过保留期限。请切换到最近一次。",
      true,
    );
    $("workspace").hidden = true;
    $("summary").hidden = true;
    return;
  }
  state.runId = runId;
  state.report = null;
  state.source = null;
  $("workspace").hidden = true;
  $("summary").hidden = true;
  setNotice("正在加载完整报告…");
  $("run-select").value = runId;
  const i = state.index.runs.indexOf(record);
  $("newer").disabled = i === 0;
  $("older").disabled = i === state.index.runs.length - 1;
  $("latest").disabled = i === 0;
  $("latest-badge").hidden = i !== 0;
  try {
    const report = await fetchJSON(reportURL(runId) + "report.json");
    if (generation !== state.generation) return;
    if (
      report.schemaVersion !== 1 ||
      report.runId !== runId ||
      !Array.isArray(report.sources)
    )
      throw Error("报告格式不受支持");
    state.report = report;
    $("run-meta").textContent =
      `${fmt(report.startedAt)} · 用时 ${ms(report.durationMs)} · ${report.metadata?.source ? `单源巡检：${report.metadata.source}` : "全量巡检"}${report.metadata?.sourceCommit ? ` · 源版本 ${report.metadata.sourceCommit.slice(0, 12)}` : ""}`;
    const action = $("actions-link");
    action.hidden = true;
    const actionURL = report.metadata?.actionsUrl;
    if (
      typeof actionURL === "string" &&
      /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/actions\/runs\/\d+$/.test(
        actionURL,
      )
    ) {
      action.href = actionURL;
      action.hidden = false;
    }
    setNotice(
      report.error ? `本次巡检未完成：${report.error.message}` : "",
      !!report.error,
    );
    if (report.metadata?.trigger === "demo") {
      setNotice("演示数据 · 用于界面预览，不代表漫画源的在线状态。");
      $("notice").className = "demo-banner";
    }
    stats(report);
    $("workspace").hidden = !report.sources.length;
    $("source-search").value = "";
    $("status-filter").value = "all";
    selectSource(
      sourceKey ??
        report.sources.find((s) => s.status === "failed")?.key ??
        report.sources[0]?.key,
      capability,
    );
  } catch (error) {
    if (generation === state.generation)
      setNotice(error.message + "。可刷新页面重试。", true);
  }
}
function selectedIndex() {
  return state.index?.runs.findIndex((r) => r.runId === state.runId) ?? -1;
}
$("source-search").oninput = renderSources;
$("status-filter").onchange = renderSources;
$("run-select").onchange = (e) => loadRun(e.target.value);
$("newer").onclick = () => loadRun(state.index.runs[selectedIndex() - 1].runId);
$("older").onclick = () => loadRun(state.index.runs[selectedIndex() + 1].runId);
$("latest").onclick = () => loadRun(state.index.runs[0].runId);
async function route() {
  const hash = new URLSearchParams(location.hash.slice(1));
  await loadRun(
    hash.get("run") ?? state.index.runs[0].runId,
    hash.get("source"),
    hash.get("capability"),
  );
}
window.addEventListener("hashchange", () => {
  if (state.index?.runs.length) route();
});
try {
  state.index = await fetchJSON("./data/index.json");
  if (state.index.schemaVersion !== 1 || !Array.isArray(state.index.runs))
    throw Error("历史索引格式不受支持");
  const select = $("run-select");
  select.replaceChildren();
  if (!state.index.runs.length) {
    select.append(el("option", "", "尚无巡检记录"));
    setNotice(
      "尚无巡检记录。请在仓库 Actions 中运行 Daily patrol，完成后报告会显示在这里。",
    );
  } else {
    for (const [i, r] of state.index.runs.entries()) {
      const option = el(
        "option",
        "",
        `${fmt(r.startedAt)}${i === 0 ? " · 最近一次" : ""}${r.error ? " · 运行异常" : ""}`,
      );
      option.value = r.runId;
      select.append(option);
    }
    select.disabled = false;
    $("latest").disabled = false;
    $("updated-at").textContent = `更新于 ${fmt(state.index.updatedAt)}`;
    await route();
  }
} catch (error) {
  setNotice(`无法加载巡检记录：${error.message}`, true);
  $("run-select").replaceChildren(el("option", "", "记录加载失败"));
}
