# GitHub Actions 与 Pages

## 首次启用

1. 将本项目提交到 GitHub 仓库的默认分支。工作流仅在默认分支上巡检与部署，PR 不会获得巡检凭据。
2. 在 **Settings → Secrets and variables → Actions → Secrets** 添加 `PATROL_AUTH`。值是 JSON 对象，对应公开配置的 `auth` 标识；不需要登录时可以不添加。
3. 在 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
4. 确认仓库/组织允许工作流使用 `contents: write` 并推送 `patrol-results` 分支；如果分支规则禁止机器人推送，需要为结果分支配置允许的规则。
5. 在 **Actions → Daily patrol → Run workflow** 首次运行。`source` 留空巡检全部源，也可填 `copy_manga` 等索引 key。
6. 结果写入 `patrol-results` 分支，Pages 地址显示在 `publish` job 的 `github-pages` environment 链接中。也可以先手动运行 **Refresh Pages** 部署无记录的初始页面。

部署使用官方 Pages artifact 流程和 `pages: write` / `id-token: write` 权限。[GitHub 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

本地仓库未配置 Git remote 时，代码和本地预览仍可使用，但不能完成远端推送、Secret 创建或 Pages 启用。仓库的组织策略、分支保护和 environment 审批仍需由仓库管理员配置。

## 公开配置与授权信息

可提交的 `patrol.config.json`：

```json
{
  "version": 1,
  "configPaths": ["../Github/venera-configs"],
  "sources": {
    "picacg": { "auth": "picacg", "inputs": { "keyword": "漫画" } },
    "ehentai": {
      "auth": "ehentai",
      "inputs": { "keyword": "language:chinese" }
    }
  }
}
```

本地 `.env`（不提交）：

```dotenv
PATROL_AUTH='{"picacg":{"credentials":{"username":"YOUR_USERNAME","password":"YOUR_PASSWORD"}},"ehentai":{"credentials":{"cookieValues":{"ipb_member_id":"YOUR_MEMBER_ID","ipb_pass_hash":"YOUR_PASS_HASH","igneous":"YOUR_IGNEOUS","star":""}}}}'
```

Actions Secret `PATROL_AUTH` 是同一个 JSON：

```json
{
  "picacg": {
    "credentials": { "username": "YOUR_USERNAME", "password": "YOUR_PASSWORD" }
  },
  "ehentai": {
    "credentials": {
      "cookieValues": {
        "ipb_member_id": "YOUR_MEMBER_ID",
        "ipb_pass_hash": "YOUR_PASS_HASH",
        "igneous": "YOUR_IGNEOUS",
        "star": ""
      }
    }
  }
}
```

每个授权条目可以包含 `credentials`、`data` 和敏感 `settings`。浏览器 Token 使用 `credentials.browserToken: { dataKey, value }`；导出的 Cookie 使用 `credentials.cookies: [{ url, values: Cookie[] }]`。详细字段见主 README。授权信息只提供给巡检 job，发布 job 不接收它。

对于自托管漫画库，不要把含用户名密码的 URL 或其他私密地址写进公开配置；使用授权条目的 settings/data 注入。GitHub 托管 Runner 还需要能访问对应服务。网页、结果分支和公开 artifacts 保存的是脱敏报告，仍可能包含漫画标题、源标识、公开请求路径等诊断内容。

## 工作流如何运行

`Daily patrol` 默认每天 UTC 02:23（北京时间 10:23）运行，GitHub 调度可能有延迟。

1. 检出本仓库和 `Gandum2077/venera-configs` 的 `fix/copy-manga-key-conflict` 分支，暂时使用修复源 ID 冲突的 fork。
2. 使用 Node 22，按锁文件从 npm 安装 CLI 依赖（包含正式版 `venera-runtime`），并构建 SQLite 原生依赖；漫画源提交号写入报告。
3. 注入 `PATROL_AUTH`，执行全量或单源巡检。该 job 不保存 checkout 的 Git 凭据。
4. 将报告再次脱敏，清除本机路径，导出 `report.json`、`report.md`、失败源列表和引用的 JSONL trace。不会整体复制原始输出目录、数据库、`.env` 或响应正文。
5. 上传 `public-patrol-run` artifact。即使漫画源失败，报告仍会上传，巡检 job 同时保留失败状态。
6. 发布 job 下载脱敏 artifact，将完整运行目录追加到 `patrol-results`，更新历史索引，再构建并部署 Pages。

工作流通过同一 concurrency group 串行发布；结果推送仅允许 fast-forward，不会强制覆盖他人的更新。发生安装/上传故障时，缺失 artifact 会使发布失败，已有 Pages 保持不变。

机器人使用 `GITHUB_TOKEN` 推送的提交不会触发新的 Pages 构建，因此巡检工作流中直接调用 Pages 部署，而不是等待结果分支触发第二个工作流。[GitHub 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

`Refresh Pages` 在前端相关文件推送到默认分支时运行，也支持手动运行。它读取已保存的结果，不执行在线巡检，也不需要授权 Secret。

## 结果与历史

专用结果分支的内容：

```text
index.json
runs/
  <run-id>/
    report.json
    report.md
    failed-sources.json
    repairable-sources.json
    traces/
      0.jsonl
      1.jsonl
```

主分支只保存代码、工作流和公开配置。每条运行记录按开始时间倒序排列；相同 run ID 不允许覆盖成不同报告。

默认在结果分支当前目录和 Pages 中保留最近 **90 次**运行，包括单源运行。可在 Actions **Variables** 添加 `PATROL_HISTORY_LIMIT`（1～1000）调整。超过上限的目录从当前分支快照移除，但 Git 的旧提交仍有记录；这不会自动压缩 Git 仓库历史。工作流 artifact 保留 14 天，Pages 历史不依赖 artifact 到期时间。

页面默认显示最近一次运行，并明确标注全量或单源范围。可以切换历史、筛选源状态、搜索源名称或能力，展开每次能力执行查看错误分类、输入/输出摘要和关联 HTTP 记录。多张图片或多次执行保留各自记录。完整报告和 trace 可以直接下载。深链接格式：

```text
#run=<run-id>&source=copy_manga&capability=search.load
```

前端是无框架静态页面，不使用第三方 CDN 或外部字体，支持项目型 Pages 的子路径和手机宽度。所有报告内容按纯文本渲染，避免源返回内容成为 HTML。`listed` 仅代表能力枚举，`partial` 代表有未检查项；它们都不会被显示为全部通过。

## 本地预览与发布测试

```bash
# 先运行本地巡检
npm run patrol -- check copy_manga

# 将指定报告脱敏并加入本地历史
npm run report:archive -- --report reports/<run-id>/report.json

# 构建静态站点并预览
npm run pages:build
npm run pages:preview
```

打开 `http://127.0.0.1:4173`。默认历史目录 `.patrol-history/` 和构建目录 `site-dist/` 已忽略。第一次没有报告时，页面会明确显示“尚无巡检记录”，不会伪造数据。

```bash
npm test
npm run check
npx playwright install chromium
npm run test:ui
```

单元/集成测试覆盖凭据分离、空函数、脱敏导出、历史排序与保留、路径约束、以及向临时 Git 仓库首次/增量推送结果。浏览器测试使用明确标记的演示数据，覆盖详情展开、历史翻阅、筛选、错误/空状态、HTML 注入防护和移动端布局。

## 常见问题

- **Pages 没有更新**：检查 `publish` job，确认 Pages Source 是 GitHub Actions、environment 允许默认分支部署。
- **推送被拒绝**：确认写权限与结果分支规则；如果分支被其他任务并发修改，重新运行工作流，不要 force push。
- **有源失败，但页面已经更新**：这是预期行为；失败报告也必须保存，方便诊断。
- **缺少凭据**：检查 Secret 名称、JSON 一级键与公开配置的 `auth` 是否对应。无需为了匿名访问把源手动标记成损坏。
- **部署成功但没有记录**：首次 `Refresh Pages` 允许空历史；运行 `Daily patrol` 后会出现记录。
- **Hitomi 的空 loadNext 不显示**：空函数按不存在处理，不计入覆盖率，不报告失败。
