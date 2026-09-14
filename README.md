# Readme Studio Frontend

可视化搭建、预览和发布 GitHub Profile README 的静态前端。生产环境可部署到 GitHub Pages；GitHub OAuth 和仓库写入由独立的 Cloudflare Worker 处理。

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

`WORKER_API_URL` 不是密钥，可以公开。OAuth Client Secret 和会话加密密钥只能配置在 Worker 中。

## 仓库边界

- 本仓库只包含公开前端，不保存 GitHub Token 或 OAuth Client Secret。
- Worker 后端位于相邻的私有仓库 `../BeautifyYourGithubProfileWorker`。
- 未配置 Worker 地址时，编辑、预览、复制 Markdown 和下载 ZIP 仍可正常使用，一键发布会保持禁用。
