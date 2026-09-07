export function summarizeSource(source, mode = "check") {
  const counts = { passed: 0, failed: 0, skipped: 0, recovered: 0 };
  for (const stage of source.stages) counts[stage.status]++;
  const checked = new Set(
    source.stages
      .filter((x) => ["passed", "failed", "recovered"].includes(x.status))
      .map((x) => x.path),
  );
  const functions = source.capabilities.filter((x) => x.type === "function");
  source.summary = {
    ...counts,
    callableCapabilities: functions.length,
    checkedCapabilities: functions.filter((x) => checked.has(x.path)).length,
  };
  source.status = counts.failed
    ? "failed"
    : mode === "list"
      ? "listed"
      : source.stages.length &&
          source.stages.every((s) => s.category === "manual_broken")
        ? "skipped"
        : counts.skipped
          ? "partial"
          : "passed";
  return source;
}
export function finishReport(report) {
  report.finishedAt = new Date().toISOString();
  report.durationMs =
    Date.parse(report.finishedAt) - Date.parse(report.startedAt);
  report.summary = {
    total: report.sources.length,
    passed: 0,
    failed: 0,
    partial: 0,
    skipped: 0,
    listed: 0,
  };
  for (const s of report.sources) report.summary[s.status]++;
  report.failedSources = report.sources
    .filter((s) => s.status === "failed")
    .map((s) => s.key);
  // Conservative hint for a repair orchestrator; no agent is dispatched by this CLI.
  report.repairableSources = report.sources
    .filter((s) =>
      s.stages.some(
        (x) =>
          x.status === "failed" &&
          ["contract_violation", "config_error", "config_parse"].includes(
            x.category,
          ),
      ),
    )
    .map((s) => s.key);
  return report;
}
const cell = (value) =>
  String(value ?? "")
    .replaceAll("|", "\\|")
    .replace(/[\r\n]/g, " ");
export function markdown(report) {
  const lines = [
    "# Venera 巡检报告",
    "",
    `运行：${report.runId}`,
    ``,
    `源：${report.summary.total}；通过：${report.summary.passed}；失败：${report.summary.failed}；未完整检查：${report.summary.partial}；手动跳过：${report.summary.skipped}`,
    "",
    "通过仅表示本次样本和参数通过，不代表所有漫画、设置组合或所有分页均正常。",
    "",
  ];
  for (const source of report.sources) {
    lines.push(
      `## ${cell(source.key)} — ${source.status}`,
      "",
      `能力检查：${source.summary.checkedCapabilities}/${source.summary.callableCapabilities}；源版本：${cell(source.version)}`,
      "",
      "| 能力 / 阶段 | 状态 | 分类 | 耗时 ms | 说明 |",
      "|---|---|---|---:|---|",
    );
    for (const stage of source.stages)
      lines.push(
        `| ${cell(stage.path)} | ${stage.status} | ${cell(stage.category)} | ${stage.durationMs} | ${cell(stage.reason)} |`,
      );
    lines.push(
      "",
      "<details><summary>完整能力清单（包括子级和声明字段）</summary>",
      "",
      "| 路径 | 类型 |",
      "|---|---|",
    );
    for (const c of source.capabilities)
      lines.push(`| ${cell(c.path)} | ${c.type} |`);
    lines.push("", "</details>", "");
  }
  return lines.join("\n");
}
