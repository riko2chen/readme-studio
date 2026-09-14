import { access, writeFile } from "node:fs/promises";

const requiredFiles = ["dist/index.html", "dist/styles.css", "dist/app.js"];
await Promise.all(requiredFiles.map(file => access(file)));

const apiBaseUrl = String(process.env.WORKER_API_URL || "").trim().replace(/\/$/, "");
const config = `window.README_STUDIO_CONFIG = ${JSON.stringify({ apiBaseUrl }, null, 2)};\n`;
await writeFile("dist/config.js", config, "utf8");

console.log(`Readme Studio static build ready${apiBaseUrl ? ` with API ${apiBaseUrl}` : " (GitHub publishing disabled until WORKER_API_URL is set)"}.`);
