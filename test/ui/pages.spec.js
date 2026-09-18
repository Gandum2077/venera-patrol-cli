import { test, expect } from "@playwright/test";
const source = (key, name, status, stages) => ({
  key,
  name,
  status,
  version: "1.2.0",
  sourceSha256: "a".repeat(64),
  durationMs: 3800,
  file: `${key}.js`,
  traceFile: "traces/0.jsonl",
  capabilities: [
    { path: "search", type: "object" },
    { path: "search.load", type: "function" },
  ],
  stages,
  summary: {
    passed: status === "passed" ? 1 : 0,
    failed: status === "failed" ? 1 : 0,
    skipped: 0,
    checkedCapabilities: 1,
    callableCapabilities: 1,
  },
});
const reports = {
  "run-new": {
    schemaVersion: 1,
    runId: "run-new",
    startedAt: "2026-09-07T02:23:00Z",
    durationMs: 32000,
    metadata: { trigger: "demo" },
    summary: {
      total: 3,
      passed: 1,
      failed: 1,
      partial: 1,
      skipped: 0,
      listed: 0,
    },
    sources: [
      source("copy_manga", "拷贝漫画", "failed", [
        {
          id: "stage-1",
          path: "search.load",
          status: "failed",
          category: "http_error",
          reason: "接口返回 HTTP 503，请查看请求记录。",
          durationMs: 1600,
        },
      ]),
      source("Komiic", "Komiic", "passed", [
        {
          path: "search.load",
          status: "passed",
          durationMs: 350,
          output: { type: "object", counts: { comics: 20 } },
        },
      ]),
      source("hitomi", "Hitomi", "partial", [
        {
          path: "authentication",
          status: "skipped",
          category: "credentials_missing",
          reason: "缺少授权信息",
          durationMs: 0,
        },
      ]),
    ],
  },
  "run-old": {
    schemaVersion: 1,
    runId: "run-old",
    startedAt: "2026-09-06T02:23:00Z",
    durationMs: 30000,
    metadata: { trigger: "demo" },
    summary: {
      total: 1,
      passed: 1,
      failed: 0,
      partial: 0,
      skipped: 0,
      listed: 0,
    },
    sources: [
      source("copy_manga", "拷贝漫画", "passed", [
        {
          path: "search.load",
          status: "passed",
          durationMs: 400,
          output: { counts: { comics: 18 } },
        },
      ]),
    ],
  },
};
const index = {
  schemaVersion: 1,
  updatedAt: "2026-09-07T02:24:00Z",
  runs: Object.values(reports).map((r) => ({
    runId: r.runId,
    startedAt: r.startedAt,
    summary: r.summary,
  })),
};
async function mock(page) {
  await page.route("**/data/**", (route) => {
    const url = new URL(route.request().url());
    let body;
    if (url.pathname.endsWith("/index.json")) body = index;
    else if (url.pathname.endsWith(".jsonl"))
      return route.fulfill({
        contentType: "text/plain",
        body:
          JSON.stringify({
            event: "http.response",
            stage: "search.load",
            requestId: "req-1",
            method: "GET",
            url: "https://example.com/search?q=%5BREDACTED%5D",
            status: 503,
            responseBytes: 100,
            durationMs: 500,
          }) + "\n",
      });
    else {
      const id = url.pathname.split("/runs/")[1]?.split("/")[0];
      body = reports[id];
    }
    return route.fulfill({
      status: body ? 200 : 404,
      contentType: "application/json",
      body: JSON.stringify(body ?? {}),
    });
  });
}
test("latest report, source filtering, capability details and history navigation", async ({
  page,
}) => {
  await mock(page);
  await page.goto("/");
  await expect(page.locator("#latest-badge")).toBeVisible();
  await expect(page.locator("#source-detail h2")).toHaveText("拷贝漫画");
  await page.locator(".capability summary").first().click();
  await expect(page.locator(".network-url")).toContainText(
    "example.com/search",
  );
  await expect(page.locator(".network-line")).toContainText("503");
  await page.locator("#source-search").fill("Komiic");
  await expect(page.locator(".source-item")).toHaveCount(1);
  await page.locator(".source-item").click();
  await expect(page.locator("#source-detail h2")).toHaveText("Komiic");
  await page.locator("#older").click();
  await expect(page.locator("#run-select")).toHaveValue("run-old");
  await expect(page.locator("#source-detail .source-heading .pill")).toHaveText(
    "通过",
  );
  await expect(page.locator("#older")).toBeDisabled();
  await page.locator("#latest").click();
  await expect(page.locator("#run-select")).toHaveValue("run-new");
  await expect(page.locator(".source-item")).toHaveCount(3);
  await page.screenshot({
    path: "test-results/pages-desktop.png",
    fullPage: true,
  });
});
test("mobile layout remains within viewport and capability deep links work", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await mock(page);
  await page.goto("/#run=run-new&source=copy_manga&capability=search.load");
  await expect(page.locator(".capability")).toHaveAttribute("open", "");
  await expect(page.locator(".network-url")).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: "test-results/pages-mobile.png",
    fullPage: true,
  });
});
test("source content is rendered as text, not executable markup", async ({
  page,
}) => {
  await mock(page);
  await page.route("**/runs/run-new/report.json", (route) =>
    route.fulfill({
      json: {
        ...reports["run-new"],
        sources: [
          source("x", '<img src=x onerror="window.pwned=true">', "failed", [
            {
              path: "search.load",
              status: "failed",
              durationMs: 1,
              reason: "<script>window.pwned=true</script>",
            },
          ]),
        ],
      },
    }),
  );
  await page.goto("/");
  await expect(page.locator("#source-detail h2")).toContainText("<img");
  await expect(page.locator("#source-detail img")).toHaveCount(0);
  expect(await page.evaluate(() => window.pwned)).toBeUndefined();
});
test("empty history and missing reports show actionable states", async ({
  page,
}) => {
  await page.route("**/data/index.json", (route) =>
    route.fulfill({ json: { schemaVersion: 1, runs: [] } }),
  );
  await page.goto("/");
  await expect(page.locator("#notice")).toContainText("尚无巡检记录");
  await expect(page.locator("#workspace")).toBeHidden();
  await page.unrouteAll();
  await mock(page);
  await page.route("**/runs/run-new/report.json", (route) =>
    route.fulfill({ status: 404, body: "missing" }),
  );
  await page.reload();
  await expect(page.locator("#notice")).toContainText("HTTP 404");
});
test("project Pages subpaths resolve without root-relative assets", async ({
  page,
}) => {
  await page.route("**/project/**", async (route) => {
    const url = new URL(route.request().url());
    if (url.pathname.includes("/data/")) return route.fallback();
    const response = await page.request.get(url.href.replace("/project/", "/"));
    return route.fulfill({ response });
  });
  await mock(page);
  await page.goto("/project/");
  await expect(page.locator("#source-detail h2")).toHaveText("拷贝漫画");
});
