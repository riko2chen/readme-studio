# Readme Studio Frontend

可视化搭建、预览和发布 GitHub Profile README 的静态前端。生产环境部署到 GitHub Pages；GitHub App 安装验证和仓库写入由独立的 Cloudflare Worker 处理。

## 本地运行

```bash
npm run build
npm run dev
```

打开 `http://127.0.0.1:4173`。本地 Worker 默认运行在 `http://127.0.0.1:8787`，也可以在构建时指定：

```bash
WORKER_API_URL=https://your-worker.workers.dev npm run build
```

## GitHub Pages

仓库已包含 Pages 工作流。创建 GitHub 仓库后：

1. 在仓库 Settings → Pages 中把 Source 设为 **GitHub Actions**。
2. 在 Settings → Secrets and variables → Actions → Variables 中添加 `WORKER_API_URL`，值为 Worker 的公开地址。
3. 推送 `main` 分支，工作流会发布 `dist/`。

`WORKER_API_URL` 不是密钥，可以公开。GitHub App Private Key、Client Secret 和会话加密密钥只能配置在 Worker 中。

## 安全发布流程

一键发布使用 GitHub App，不再申请可访问用户全部公开仓库的 OAuth Token：

1. 用户预先创建公开的 `username/username` Profile 仓库。
2. 安装 GitHub App 时选择个人账号、选择 **Only select repositories**，并且只选择该 Profile 仓库。
3. Worker 使用短暂的 GitHub App 用户令牌验证安装归属，确认后立即撤销；该令牌不会写入存储或返回浏览器。
4. 发布时只生成绑定该 repository ID 的短期 installation token，只允许写入 README 和本项目支持的工作流文件。
5. 发布结束或十分钟会话过期后自动卸载 GitHub App。

## 仓库边界

- 本仓库只包含公开前端，不保存 GitHub Token、GitHub App Private Key 或 Client Secret。
- Worker 后端位于相邻的私有仓库 `../BeautifyYourGithubProfileWorker`。
- 未配置 Worker 地址时，编辑、预览、复制 Markdown 和下载 ZIP 仍可正常使用，一键发布会保持禁用。
