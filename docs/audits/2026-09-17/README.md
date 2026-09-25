# 全组件远程预览检查记录

检查日期：2026-09-17，Asia/Singapore。对象为检查时的本地工作区 `dist/app.js`，包含当时已有的未提交修改；代码指纹见 [audit-metadata.json](audit-metadata.json)。本次仅新增检查记录，未修复产品代码。

已覆盖全部 **21 种组件**。默认配置中的 **18 张远程图片，16 张成功、2 张失败**，对应失败组件是贡献活动和 Spotify。另有 **4 种 Action 生成组件、1 种外部生成组件、6 种本地内容组件**；这些不能算作远程图片加载成功。

> 后续执行状态：本报告列出的处理顺序已在同日完成。当前实现已增加贡献活动与 Spotify 的具体提示、自部署活动图接口、Action 多实例与用户名支持、真实生成产物预览、终端相对路径预览，以及自定义 Markdown 源码标识。下文保留检查时的原始现象和证据，用于追溯修复原因。

## 检查方法与范围

- 在本地启动当前前端，通过 ego-browser 将全部组件的默认配置放入临时画布，检查图片 `complete`、`naturalWidth` 和实际 `loaded/failed` 状态，未保存测试画布。
- 默认 GitHub 用户名为 `octocat`，Spotify 为项目自带占位值 `your_spotify_uid`；未使用用户私人账号或凭据。
- 对 18 个默认图片地址发起 GET，记录 HTTP 状态、Content-Type、SVG 文本或错误正文；避免仅根据 HTTP 200 判断成功。
- 补查下拉框中非默认的主题、配色和徽章样式，共 36 个地址；另查 6 个诊断地址，共 60 个 HTTP 检查结果。36 个变体中 34 个返回正常 SVG，2 个 Spotify 主题均返回同一授权错误。
- 逐项对照上游 README、当前导出 Markdown 和工作流。Action 结论来自代码与文档核对，**没有在 GitHub 执行工作流**，不等于已经验证所有账号下的工作流运行成功。
- 浏览器截图接口超时，未保留截图；浏览器图片加载结果及 HTTP 响应证据均已保存。结果反映本次检查时点，第三方服务可能变化。

## 21 种组件逐项结果

| 组件 | 默认预览实测 | 是否需要 Action | 结论与处理 |
| --- | --- | --- | --- |
| 欢迎标题 `hero` | 本地 HTML，无远程请求 | 否 | 正常，未发现远程依赖 |
| 打字动画 `typing` | 200 SVG，520×50，可解码 | 否 | 正常，第三方实时生成 |
| 动态页头 `capsule` | 200 SVG，854×180，可解码 | 否 | 正常；额外 3 种配色也通过 |
| 关于我 `about` | 本地 HTML，无远程请求 | 否 | 正常，未发现远程依赖 |
| 技术栈 `skills` | 6/6 徽章成功 | 否 | 正常；两种额外样式的 12 张徽章也通过 |
| GitHub 统计 `stats` | 统计卡与语言卡均 200 SVG | 否 | 正常，正文有真实统计字段；额外 5 个主题的 10 张卡也通过 |
| 连续贡献 `streak` | 200 SVG，495×195，可解码 | 否 | 正常；额外 4 个主题也通过。当前连续贡献为 0 是数据内容，不是失败 |
| 贡献活动 `activity` | **402，非图片，浏览器 failed** | **否** | **上游部署被停用**，详见 A01 |
| 资料摘要 `summary` | 200 SVG，700×200，可解码 | 否，当前用公开 API | 正常；额外 5 个主题也通过。上游另支持 Action，但不是当前实现的前提 |
| 贡献贪吃蛇 `snake` | 本地 CSS 示意图，没有加载远程图片 | **是，按本项目导出方案** | 首次运行生成 output 分支图片；另有浅色文件名错误及账号/分支问题，详见 A03、A08、A09 |
| Metrics 信息图 `metrics` | 本地 CSS 示意图，没有加载远程图片 | **是 + METRICS_TOKEN** | 需生成 `github-metrics.svg`；详见 A04、A08、A09 |
| 3D 贡献图 `contrib3d` | 本地 CSS 示意图，没有加载远程图片 | **是，按本项目导出方案** | 需生成 `profile-3d-contrib/*.svg`；详见 A05、A08 |
| 贡献太空射击 `spaceshooter` | 本地 CSS 示意图，没有加载远程图片 | **是，按本项目导出方案** | 需生成 `game.gif`；详见 A06、A08、A09 |
| 终端动图 `terminal` | 默认 `./terminal.gif` 不进入远程加载逻辑 | **不强制，需外部生成** | 缺省文件未提供，且相对路径不能在编辑器预览；详见 A07 |
| 社交链接 `social` | 3/3 徽章成功 | 否 | 图片正常；链接默认目标只是示例，不代表个人账号已配置 |
| 开发者语录 `quote` | 本地文本，无远程请求 | 否 | 正常，未发现远程依赖 |
| 访问计数 `visitor` | 200 SVG，121×20，可解码 | 否 | 正常；服务按访问更新计数 |
| Spotify 正在播放 `spotify` | **200 HTML 错误文本，浏览器 failed** | **否，需要 Spotify 授权绑定** | **默认 UID 是占位值**，详见 A02 |
| 分隔线 `divider` | 本地 CSS，无远程请求 | 否 | 正常，未发现远程依赖 |
| 留白 `spacer` | 本地 CSS，无远程请求 | 否 | 正常，未发现远程依赖 |
| 自定义 Markdown `custom` | 将内容转义为文本展示 | 取决于用户内容 | 默认内容无远程依赖；当前不会解析并加载 Markdown 图片，详见 A10 |

## 失败及未就绪项目

### A01 — 贡献活动：上游部署被停用

- 分类：已复现的远程服务故障；不是缺少 Action。
- 请求：`https://github-readme-activity-graph.vercel.app/graph?username=octocat&bg_color=00000000&color=7C5CFF&line=7C5CFF&point=FFFFFF&hide_border=true`。
- 返回：HTTP **402**，`text/plain`，正文包含 `Payment required` 与 `DEPLOYMENT_DISABLED`。
- 去掉所有样式参数、换成上游示例用户名 `Ashutosh00710`、访问部署根路径，均得到同样结果。因此本次故障不是用户名或颜色参数造成的，也不是浏览器图片跨域读取限制。
- 当前地址与[上游文档](https://github.com/Ashutosh00710/github-readme-activity-graph#how-to-use)公布的部署一致；不是项目仍在使用旧 Heroku/Cyclic 地址。
- 建议：显示明确的服务停用提示；等待上游恢复、验证新的可用服务，或按上游说明自部署并替换基础地址。给用户仓库增加普通 GitHub Action 不会恢复这台远程服务。
- 证据：[默认请求](http-defaults.json)、[三个对照请求](http-variants-and-controls.json)、[浏览器结果](browser-defaults.json)。部署被停用的具体账务原因未获证实。

### A02 — Spotify：占位 UID 未绑定，响应不是图片

- 分类：已复现的配置缺失；不是缺少 Action。
- 请求使用 `uid=your_spotify_uid`，HTTP 虽然是 **200**，Content-Type 却为 `text/html`。
- 响应说明 Spotify access token 或 refresh token 无效，并要求重新登录；浏览器图片宽高为 0。三个可选主题都一样，因此不是主题不兼容。
- 建议：按[上游绑定流程](https://github.com/kittinan/spotify-github-profile#connect-with-spotify)完成授权，填写服务给出的真实 UID。以前可用而现在失效的真实 UID，还需检查授权是否撤销、是否需要重新绑定。
- 界面应先识别空值/占位 UID，显示“请先绑定 Spotify”，避免发送必定失败的请求或只显示通用网络错误。
- 未绑定实际账号，本次没有验证个人播放状态。不能由占位 UID 的失败推断整个 Spotify 服务不可用。
- 证据：[http-defaults.json](http-defaults.json)、[http-variants-and-controls.json](http-variants-and-controls.json)。上游对应实现：[api/view.py](https://github.com/kittinan/spotify-github-profile/blob/HEAD/api/view.py)。

### A03 — 贡献贪吃蛇：需要生成，浅色路径还存在确定性错误

- 按本项目设计，提交导出的 `.github/workflows/snake.yml`，运行 Action 后将 SVG 发布到配置的分支，默认 `output`。首次生成前 README 图片没有来源。[上游说明](https://github.com/Platane/snk#github-action)
- **已复现的代码错误**：浅色 Markdown 引用 `github-contribution-grid-snake-light.svg`，但工作流只生成 `github-contribution-grid-snake.svg` 和 `github-contribution-grid-snake-dark.svg`。因此浅色模式在 Action 成功后仍会引用不存在的文件。
- 随机配色中的 Nord、Clear Sky 也会把贪吃蛇设成 `light`，会触发同一问题。
- 修复建议：浅色引用不带 `-light` 的文件名，或修改工作流使其生成一致的名称。深色默认文件名匹配。
- 代码：`dist/app.js:328`、`:665`、`:740`。实际生成的 Markdown 与工作流保存在 [variants-and-workflows.json](variants-and-workflows.json)。上游示例的深、浅色两张图片本次均返回 200 SVG。

### A04 — Metrics：需要 Action 与仓库密钥

- 按本项目方案，导出 `.github/workflows/metrics.yml`，并添加 `METRICS_TOKEN`，运行后生成配置中的 SVG 文件。只放入 README 不会生成图片。[上游](https://github.com/lowlighter/metrics)
- 默认 `filename: github-metrics.svg` 与 Markdown 的 `./github-metrics.svg` 一致。
- 画布中的柱形图是固定 CSS 示意，没有读取账号数据或生成文件。即使仓库已生成图片，当前编辑器也不会自动显示该文件。
- 建议：首次运行前明确标记“待生成”；提供生成图片 URL 或仓库路径解析能力；核对密钥和写入权限。额外问题见 A08、A09。

### A05 — 3D 贡献图：需要 Action 生成仓库内 SVG

- 导出 `.github/workflows/profile-3d.yml`，以 `GITHUB_TOKEN` 运行生成器并提交文件；公开数据通常使用 GitHub 自动提供的 token 即可。[上游流程](https://github.com/yoshi389111/github-profile-3d-contrib#how-to-use-github-actions---basic)
- 当前五个主题名均对应上游列出的输出文件。默认 Markdown 路径 `./profile-3d-contrib/profile-green-animate.svg` 与输出目录一致。
- 本地 3D 格子由固定数学公式生成，没有加载远程数据。Action 首次运行完成仅让仓库里的 README 有图片，不会改变当前画布的示意实现。
- 建议：明确生成状态，并支持读取实际产物。账号属性问题见 A08。

### A06 — 太空射击：需要 Action 生成 GIF/WebP

- 导出 `.github/workflows/space-shooter.yml`，通过上游 Action 生成并提交 `game.gif`（或用户配置的输出路径）。默认输出路径与 Markdown 一致。[上游使用方式](https://github.com/czl9707/gh-space-shooter#github-action)
- 当前三个策略 `random/column/row` 与上游输入匹配；已包含上游要求的 `fetch-depth: 2` 及写权限。
- 画布中的星空、飞船和格子为本地 CSS 示意，不是生成的 GIF。
- Action 是本项目采用的自动更新方案，并非上游唯一运行方式；上游也有命令行和一次性生成入口。
- 建议：执行首次生成并展示真实产物地址；账号与多实例问题见 A08、A09。

### A07 — 终端动图：需要外部生成，且相对路径预览未实现

- 默认值是 `./terminal.gif`，项目和导出包均没有生成或附带该文件，也没有终端生成工作流。
- `directAssetsFor()` 只接受完整 HTTP(S) 图片 URL；仓库相对路径即使在 GitHub README 中有效，在当前编辑器也不会触发图片加载。属性说明允许相对路径，但画布仍要求填写 URL，行为不一致。
- 用[上游样例 GIF](https://raw.githubusercontent.com/x0rzavi/github-readme-terminal/HEAD/docs/assets/sample.gif)作对照，本次返回 200 `image/gif`；浏览器验证详见 [browser-terminal.json](browser-terminal.json)。说明远程图片通路可用，默认缺图来自文件尚未生成/路径未解析。
- 建议：按[上游 Python 工具说明](https://github.com/x0rzavi/github-readme-terminal#-usage)生成并提交图片，预览时使用可访问的绝对 URL；若要支持仓库相对路径，应增加仓库和分支解析。Action 可以自行增加，但不是必需条件。

## 会导致“Action 跑完仍不对”的代码问题

### A08 — 四种生成组件的用户名与产物预览没有贯通

- `snake/metrics/contrib3d/spaceshooter` 均提供可编辑的 GitHub 用户名。
- Snake、Metrics、3D 工作流固定使用 `github.repository_owner`；Space Shooter 未传 `username`，上游默认也是仓库所有者。因此组件填写其他用户名不会生成该用户的数据。
- Snake 更严重：Markdown 使用组件用户名拼出 `{username}/{username}` 仓库，而 Action 实际在接收工作流的仓库发布文件。两者不同会指向错误仓库；相同且采用同名主页仓库时才匹配。
- 所有这四类的 `blockPreview()` 都未请求实际生成产物，不能将本地示意图视为“远程预览通过”。
- 建议：明确支持“仓库所有者”还是“指定用户”；让工作流输入、仓库定位与预览地址保持一致。
- 代码：`dist/app.js:497`–`:500`、`:665`–`:668`、`:738`、`:774`、`:803`、`:844`。Space Shooter 的上游输入定义见 [action.yml](https://github.com/czl9707/gh-space-shooter/blob/HEAD/action.yml)。

### A09 — 多个生成组件只导出第一份配置

- `generateSnakeWorkflow()`、`generateMetricsWorkflow()`、`generateSpaceShooterWorkflow()` 用 `.find()` 读取第一个同类型组件，每种类型只导出一个工作流。
- 已用两份 Metrics（`first.svg`、`second.svg`）及两份太空射击（`first.gif`、`second.gif`）复现：README 引用四个文件，但工作流仅生成 `first.svg` 和 `first.gif`。首次导出到没有历史产物的仓库时，第二份会缺图。
- 两条贪吃蛇使用不同输出分支时也只有第一条的分支被发布。相同输出配置则不一定受影响。
- 3D 生成器一次生成所有已支持的主题文件，不能把“第二个主题缺图”同样归因于此问题。
- 建议：收集并去重全部输出配置，生成多步骤/矩阵工作流，或明确限制每类只能添加一份。
- 证据：[export-edge-cases.json](export-edge-cases.json) 保存了实际生成的 README 与工作流。

### A10 — 自定义 Markdown 没有渲染远程图片

- 该组件通过 `escapeHTML(p.markdown)` 显示原始文字，导出时原样保留。嵌入 `![...](https://...)` 不会在编辑器发起图片请求。
- 这是预览能力限制，不是远程服务错误；Markdown 引用内容是否需要 Action 只能逐个判断。
- 建议：若产品承诺 Markdown 预览，应增加带安全过滤的渲染支持；否则明确标注“源码预览”。代码：`dist/app.js:506`、`:675`。

## 后续处理顺序（已执行）

1. 修正贡献活动的服务不可用提示、Spotify 的未绑定提示，避免误导用户去开启 Action。
2. 修正贪吃蛇浅色文件名、多实例输出遗漏和用户名不一致问题。
3. 为四种生成组件区分“示意图 / 待生成 / 实际图片”，让已生成产物可在画布中预览。
4. 明确终端相对路径和自定义 Markdown 的预览限制。

以上项目已依次实施并完成本地浏览器回归。远程图片服务成功并不保证将来持续可用；本次仍未在用户仓库执行真实 GitHub Actions，因此不会把尚未运行的 Action 标记为成功。

## 原始证据索引

- [inventory.json](inventory.json)：21 种组件、默认参数、来源仓库、图片 URL、导出 Markdown。
- [browser-defaults.json](browser-defaults.json)：全部默认组件的浏览器图片解码与加载状态。`text` 包含隐藏的错误提示模板，应以 `images[].status` 和宽高判断。
- [http-defaults.json](http-defaults.json)：18 个默认图片请求及响应摘要。
- [variants-and-workflows.json](variants-and-workflows.json)：36 个额外变体地址、4 份导出工作流、浅色贪吃蛇 Markdown。
- [http-variants-and-controls.json](http-variants-and-controls.json)：36 个变体和 6 个诊断地址的 HTTP 结果。
- [export-edge-cases.json](export-edge-cases.json)：多个生成组件的实际导出结果、终端地址筛选结果。
- [browser-terminal.json](browser-terminal.json)：终端 GIF 在现有预览渲染函数中的解码结果。
- [upstream-index.json](upstream-index.json)：15 条上游文档来源、抓取结果和内容哈希；不在仓库重复保存完整上游文档。
- [audit-metadata.json](audit-metadata.json)：检查版本、计数与限制。
