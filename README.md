# venera-patrol-cli

基于 **venera-runtime** 的 Venera 漫画源巡检工具。运行时负责执行原始配置；本项目负责能力枚举、参数与凭据注入、巡检编排、隔离、校验和脱敏报告。不修改 venera-runtime 或漫画源文件。

## 安装

建议 Node.js 22 LTS；运行时包含 SQLite 和图片处理原生依赖，安装与执行应使用同一个 Node 版本。

运行时通过 npm 正式发布版安装，无需单独检出或编译。漫画源配置仍从本地目录读取，默认目录结构如下：

```text
Projects/
├── venera-patrol-cli/
└── Github/venera-configs/
```

在本项目执行：

```bash
npm ci --ignore-scripts
npm rebuild better-sqlite3
cp .env.example .env  # 可选；需要登录的源请填写授权信息
npm run patrol -- list --config patrol.config.json
npm run patrol -- check copy_manga --config patrol.config.json
npm run patrol -- check-all --config patrol.config.json
```

`npm ci` 按锁文件安装 npm 依赖；`--ignore-scripts` 跳过安装脚本，之后通过 `npm rebuild better-sqlite3` 构建 SQLite 原生依赖。仓库已提供可同步的公开配置；请按需调整每源关键词、设置和损坏标记。未配置授权的能力会明确显示为未完整检查。

也可以 `npm link` 安装 `venera-patrol` 命令。项目无构建步骤；公共 API 从 `src/index.js` 导出。

## 命令

```bash
# 只加载并枚举能力，不运行 init、登录或业务调用
venera-patrol list [source-key或file.js] --config patrol.config.json

# 单源 / 全部
venera-patrol check copy_manga --config patrol.config.json
venera-patrol check-all --config patrol.config.json --output reports

# stdout 输出完整 JSON；常规模式输出摘要和报告路径
venera-patrol check copy_manga --json

# 缺少凭据或测试输入等导致未完整检查时，也令 CI 失败
venera-patrol check-all --strict

# 使用当前配置、当前源代码和凭据重新巡检指定报告中的源
venera-patrol reproduce reports/<run-id>/report.json --source copy_manga
```

`reproduce` 是重跑整个单源巡检，不是录制 HTTP 响应回放；报告保存源文件 SHA-256，可用于比对版本。报告不保存密码，重跑仍需配置文件和环境变量。

退出码：`0` 无失败；`1` 有失败，或 `--strict` 下有未完整检查；`2` 参数/配置加载错误；`130` 被中断。`SIGINT` / `SIGTERM` 会停止子进程并尽量写出已有报告。各源独立运行，一个源异常不会阻止其余源。

## 配置与授权分离

`patrol.config.json` 是可提交到 Git 的公开配置，包含源文件路径、巡检参数、非敏感 settings、损坏标记和授权引用。`patrol.example.json` 是精简示例。本地私有覆盖可以保存在已忽略的 `patrol.local.json`，通过 `--config` 选择。

```json
{
  "version": 1,
  "configPaths": ["../Github/venera-configs"],
  "output": "reports",
  "sources": {
    "picacg": {
      "auth": "picacg",
      "inputs": { "keyword": "漫画" },
      "settings": {},
      "brokenCapabilities": { "comic.archive": "归档维护中" }
    }
  }
}
```

`configPaths` 接受本地 JS、目录或 `index.json`，相对路径按配置文件所在目录解析；目录优先使用索引。`sources` 按源 key 匹配，直接 JS 路径在加载前以文件名标识。

实际授权信息在 `PATROL_AUTH` 环境变量中保存为 JSON：

```json
{
  "picacg": {
    "credentials": { "username": "实际用户名", "password": "实际密码" }
  },
  "custom_source": {
    "credentials": {
      "browserToken": { "dataKey": "token", "value": "实际浏览器 Token" },
      "cookies": [
        {
          "url": "https://example.com",
          "values": [
            {
              "name": "session",
              "value": "实际 Cookie",
              "domain": "example.com",
              "path": "/"
            }
          ]
        }
      ]
    },
    "data": { "account": "按该源要求填写的账号状态" },
    "settings": { "apiToken": "敏感设置值" }
  }
}
```

公开配置中的 `auth` 对应此 JSON 的一级键。授权条目只能包含 `credentials`、`data` 和 `settings`，不能通过 Secret 改写巡检范围或启用写操作。Secret 中的 settings 覆盖公开同名设置。

本地复制 `.env.example` 为 `.env` 后填写；JSON 用单引号包裹并保持在一行，例如：

```dotenv
PATROL_AUTH='{"picacg":{"credentials":{"username":"user","password":"password"}}}'
```

CLI 默认自动读取配置文件同目录的 `.env`，已有环境变量优先。可使用 `--env-file /path/to/.env` 指定文件，或 `--no-env` 禁用本地加载。`.env*` 已加入 `.gitignore`，只有不含真实凭据的 `.env.example` 可提交。GitHub Actions 使用同名的 `PATROL_AUTH` Secret，粘贴上面的 JSON 本身，不包含 shell 单引号。

缺少授权条目会记录 `credentials_missing`，仍检查可公开访问的能力。`${ENV_NAME}` 引用继续可用，但变量缺失会报错。公开文件禁止直接写 `credentials`、非空 `data` 或明显敏感的 settings 常量；调用登录接口的显式 case 也必须使用环境引用。旧配置请将这些字段移到 `PATROL_AUTH`，并用 `auth` 引用。

### 登录与设置

下列 credentials/data 字段放在 Secret 的授权条目内；普通 settings 可放公开配置，敏感 settings 放 Secret。

| 字段                            | 行为                                                                                           |
| ------------------------------- | ---------------------------------------------------------------------------------------------- |
| `credentials.username/password` | 调用 `account.login`，成功后依照 Venera 保存 `account` 数据                                    |
| `credentials.cookieValues`      | 按 `account.loginWithCookies.fields` 排序，调用 `.validate`；也支持已排序数组                  |
| `credentials.cookies`           | 在 init 前导入浏览器导出的 Cookie，保留域、路径、安全属性                                      |
| `credentials.browserToken`      | 把 `value` 写到源实际使用的 `loadData(dataKey)` 字段                                           |
| `credentials.webview`           | `{ "url": "浏览器实际成功页", "title": "实际标题" }`，调用 `.checkStatus` 和 `.onLoginSuccess` |
| `data`                          | 初始 `loadData` 数据，适配各源自己的会话结构                                                   |
| `settings`                      | 校验源声明的设置类型/选项后，在 init 前写入运行时                                              |

浏览器 Token 没有跨源统一字段，需参照对应源代码选择 `dataKey`。如果源同时检查 `isLogged`，应按该源要求在 `data.account` 中提供账号状态。工具不打开浏览器、不自动完成验证码；提供 URL/title 只能测试网页状态判断函数，不能代替真实服务端登录验证，后续实际读接口会继续验证会话可用性。

配置中没有凭据的登录能力会报告 `credentials_missing`，不会伪造登录成功。多个登录方式分别检查，报告可能因此是 `partial`。设置按钮回调属于潜在写操作，不会因配置 settings 自动点击。

### 手动标记损坏

- 整源：`"broken": "维护原因"` 或 `true`，不加载、不运行、不登录。
- 功能：`"brokenCapabilities": { "search.load": "原因" }`。
- 父级：`"comic": "原因"` 会匹配全部子级；支持 `comic.*`、`explore[0]`、`*`。
- 正文图片下载及解码可使用 `image`，封面/缩略图可使用 `thumbnail`。

被标记的功能不会执行。若图片回调被标记损坏，不会擅自省略回调后直接下载。依赖链没有取得漫画或章节时，会给后续能力记录缺少输入/依赖失败；提供固定 `comicId`、`epId` 可使其他功能独立检查。未知能力标记会报错，避免拼写错误导致跳过规则无效。

### 测试输入和扩展用例

`inputs` 支持：`keyword`、`searchOptions`、`comicId`、`epId`、`category`、`categoryParam`、`categoryOptions`、`rankingOption`、`folderId`、`comicUrl`、`archiveId`、`tag: {namespace, value}`。

默认从列表选择第一本漫画、从详情选择第一个章节、从静态/动态分类选择一个可用类别。搜索关键词没有跨源默认值，请提供有代表性的关键词。固定样本适合日常巡检，避免最新漫画本身不可读导致误报。

所有已枚举函数都可以用 `cases` 指定完整参数和预期结果，未知扩展函数没有用例时明确跳过。例如：

```json
{
  "cases": {
    "account.reLogin": {
      "args": [],
      "expect": { "type": "boolean", "equals": true }
    },
    "search.load": {
      "args": ["测试", ["all"], 1],
      "expect": { "type": "object", "requiredKeys": ["comics"] }
    }
  }
}
```

`expect` 支持 `type`、`equals`、`nonEmpty`、`requiredKeys`，并叠加已知接口的内置结果校验。自定义分页调用只执行所给参数，不自动推断下一页。`args` 是 JSON 数组，不支持表达式或变量引用（环境变量替换除外）。

发评论、点赞、评分、增删收藏/收藏夹、退出登录、设置按钮和分类按钮，仅在该源同时配置 `allowMutations: true` **以及对应函数的显式 case** 时执行。这样做可能改变账号数据，不承诺自动回滚。默认完整巡检包含这些能力的枚举和跳过原因，不能把它们视为已验证。

## 检查范围与报告

空函数（例如 Hitomi 的 `loadNext(next) {}`，以及仅有注释、空语句的函数）视为能力不存在：不会枚举、调用或计入覆盖率。有 return、throw 或其他语句的函数仍视为已实现。判断通过 Acorn 解析函数体完成，不执行函数探测。

流程为：加载 → 递归能力枚举 → 应用配置 → 等待 init → 登录 → 搜索/发现/分类/排行/收藏 → 详情 → 章节 → 图片回调 → 实际下载 → 响应转换/图片变换 → 解码。同时覆盖只读评论、缩略图、归档信息/下载 URL、链接解析、标签回调。归档检查不会下载整个压缩包。

报告中的 `capabilities` 包含函数、容器、声明字段及数组下标，例如 `account.loginWithCookies.validate`、`categoryComics.ranking.loadWithNext`、`explore[0].load`。`stages` 描述真实执行结果；声明字段仅枚举，设置和分类等另做结构校验。init 动态添加的能力会重新枚举；图片回调返回的 `onResponse`、`modifyImage`、`onLoadFailed` 也会追加记录。下载成功时不故意制造失败，`onLoadFailed` 报告 `not_triggered`。

列表校验不是“没抛异常就通过”：检查非空列表、漫画标识/标题/封面、详情及章节形状、分页是否重复、图片能否真正解码。收藏和评论允许合法空结果。图像处理使用运行时自身的 `modifyImage` 和 `runtimeImages.decode`。按 Venera 的约定，缩略图不执行 `modifyImage` 和 `onLoadFailed`；若源声明了它们，报告会明确记录不支持。

每次运行写入 `reports/<run-id>/`：

| 文件                      | 内容                                                                      |
| ------------------------- | ------------------------------------------------------------------------- |
| `report.json`             | schemaVersion=1，运行策略、源文件哈希、能力树、每阶段状态、耗时和结果摘要 |
| `report.md`               | 人类可读的源报告、失败说明和完整能力清单                                  |
| `*.trace.jsonl`           | 关联 runId/sourceKey/stage/requestId 的调用和 HTTP 事件                   |
| `failed-sources.json`     | 失败源 key 数组，方便 CI matrix 消费                                      |
| `repairable-sources.json` | 可能属于配置/契约错误的源提示，不是自动修复结论                           |

源状态：`passed`（本次全部执行项通过）、`partial`（含未执行项）、`failed`、`skipped`（整源手动跳过）、`listed`。能力覆盖统计以函数路径去重；不同图片、不同分页单独保留执行记录。图片失败回调最多尝试恢复一次，恢复成功的原失败阶段标为 `recovered`，保留诊断但不计入未恢复失败。**完整巡检指遍历全部发现源和已枚举能力，不是穷举所有漫画、所有选项组合和所有分页。**

HTTP 追踪覆盖运行时 Network、兼容 fetch 及 Node 全局 fetch，记录方法、脱敏 URL、状态码、Content-Type、大小、SHA-256 和耗时。默认不存响应正文，不存原始控制台日志，避免会话内容泄漏；仅允许少数非凭据请求头保留值。配置中凭据、data/settings 字符串以及常见敏感键会脱敏，URL 查询值统一脱敏。错误分类包括超时、DNS/TLS、HTTP、限流、登录、反爬、地区限制、契约异常、图片解码失败等；HTTP 状态/页面特征只能提供诊断线索。

## 执行限制

| defaults 字段          |   默认值 | 说明                                                      |
| ---------------------- | -------: | --------------------------------------------------------- |
| `concurrency`          |        2 | 并行源数，上限 16                                         |
| `stageTimeoutMs`       |    30000 | 父进程强制终止超时阶段，包含同步死循环                    |
| `sourceTimeoutMs`      |   300000 | 每源总时限                                                |
| `requestTimeoutMs`     |    15000 | 请求与响应读取时限                                        |
| `retries`              |        1 | 仅 GET/HEAD 的瞬时网络错误和 429/502/503/504 重试，上限 5 |
| `minRequestIntervalMs` |      250 | 每源请求启动间隔                                          |
| `pages`                |        2 | 每个支持分页的入口最多检查页数，上限 10                   |
| `imageSamples`         |        2 | 正文图片样本上限，上限 20；另检查一张封面/缩略图          |
| `maxRequests`          |      200 | 每源实际请求次数上限，含重试                              |
| `maxResponseBytes`     | 20971520 | 单响应流式读取上限（20 MiB）                              |
| `maxTraceEvents`       |     2000 | 每源 trace 上限，超出后写截断标识                         |

每个源有独立临时数据目录，结束后清理；会话不跨运行持久化。Node 子进程堆上限 512 MiB。这是运行隔离，**不是执行恶意 JS 的安全沙箱**；仅运行可信源。全局 fetch 拦截不涵盖源自行加载的其他原生网络库；重定向由 Node fetch 处理，trace 记录最终地址，不逐跳记录。

## 验证与 CI

```bash
npm run check
npm test
```

测试使用真实 venera-runtime、独立进程和离线图片/接口夹具，不依赖漫画网站在线状态。覆盖能力枚举、凭据/设置、章节、分页、图片变换、脱敏、传输限制、故障分类和强制终止。CI 会通过 npm 安装锁文件固定的正式运行时版本并运行测试。

内置 `Daily patrol` 每天在 UTC 02:23（北京时间 10:23）运行，并支持手动全量或单源巡检。脱敏结果保存到 `patrol-results` 分支，随后部署 GitHub Pages。前端变更会触发 `Refresh Pages`，使用已保存历史重新部署。

完整设置步骤、Secrets 格式、历史保留规则和本地预览见 [GitHub Actions 与 Pages](docs/actions.md)。本项目不会自动发消息、启动修复 Agent 或创建 PR。

```bash
# 浏览器界面测试（首次需要安装 Chromium）
npx playwright install chromium
npm run test:ui
```
