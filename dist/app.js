const ACTIVITY_GRAPH_ENDPOINT = "https://github-readme-activity-graph.vercel.app/graph";

const COMPONENTS = [
  { type: "hero", group: "基础", icon: "H", label: "欢迎标题", desc: "问候语与个人定位", defaults: { title: "Hi, I'm The Octocat 👋", subtitle: "Open source explorer · Builder · Curious mind", align: "center" } },
  { type: "typing", group: "基础", icon: "⌨", label: "打字动画", desc: "循环展示多个身份", defaults: { lines: "Open Source Explorer,Creative Developer,Always Learning", color: "58A6FF", align: "center" } },
  { type: "capsule", group: "基础", icon: "⌒", label: "动态页头", desc: "Capsule 渐变横幅", defaults: { title: "Welcome to my profile", subtitle: "Build · Learn · Share", color: "gradient", height: "180", align: "center" } },
  { type: "about", group: "基础", icon: "☰", label: "关于我", desc: "用要点介绍自己", defaults: { heading: "About me", text: "🔭 Building delightful developer tools\n🌱 Learning something new every day\n💬 Ask me about open source", align: "left" } },
  { type: "skills", group: "展示", icon: "◆", label: "技术栈", desc: "语言与工具徽章", defaults: { heading: "Languages and tools", items: "TypeScript,React,Node.js,Python,Figma,Git", style: "flat", align: "left" } },
  { type: "stats", group: "展示", icon: "▥", label: "GitHub 统计", desc: "统计与常用语言", defaults: { heading: "GitHub stats", username: "octocat", theme: "github_dark", align: "center" } },
  { type: "streak", group: "展示", icon: "⌁", label: "连续贡献", desc: "提交连续天数", defaults: { username: "octocat", theme: "github-dark-blue", align: "center" } },
  { type: "activity", group: "展示", icon: "▦", label: "贡献活动", desc: "活动图表组件", defaults: { heading: "Contribution activity", username: "octocat", color: "7C5CFF", endpoint: ACTIVITY_GRAPH_ENDPOINT, align: "center" } },
  { type: "summary", group: "展示", icon: "▤", label: "资料摘要", desc: "Profile Summary 卡片", defaults: { username: "octocat", theme: "github_dark", align: "center" } },
  { type: "snake", group: "展示", icon: "〰", label: "贡献贪吃蛇", desc: "在贡献图上游动", defaults: { username: "octocat", branch: "output", theme: "dark", align: "center" } },
  { type: "metrics", group: "热门", icon: "M", label: "Metrics 信息图", desc: "高度可定制的账号数据图", defaults: { username: "octocat", filename: "github-metrics.svg", align: "center" } },
  { type: "contrib3d", group: "热门", icon: "3D", label: "3D 贡献图", desc: "立体呈现年度贡献日历", defaults: { username: "octocat", theme: "profile-green-animate", align: "center" } },
  { type: "spaceshooter", group: "热门", icon: "SS", label: "贡献太空射击", desc: "把贡献格子变成太空游戏", defaults: { username: "octocat", output: "game.gif", strategy: "random", align: "center" } },
  { type: "terminal", group: "热门", icon: ">_", label: "终端动图", desc: "复古终端风格个人信息", defaults: { image: "./terminal.gif", alt: "GitHub terminal profile", align: "center" } },
  { type: "social", group: "连接", icon: "↗", label: "社交链接", desc: "联系与关注入口", defaults: { heading: "Connect with me", items: "LinkedIn:https://linkedin.com,Website:https://example.com,X:https://x.com", align: "left" } },
  { type: "quote", group: "连接", icon: "“", label: "开发者语录", desc: "一句个人信条", defaults: { text: "Make it work, make it right, make it delightful.", align: "left" } },
  { type: "visitor", group: "连接", icon: "◎", label: "访问计数", desc: "Profile views 徽章", defaults: { username: "octocat", label: "Profile views", color: "1F6FEB", align: "left" } },
  { type: "spotify", group: "连接", icon: "♫", label: "Spotify 正在播放", desc: "展示最近播放状态", defaults: { uid: "your_spotify_uid", theme: "default", align: "center" } },
  { type: "divider", group: "布局", icon: "—", label: "分隔线", desc: "划分内容区域", defaults: { spacing: "medium", align: "left" } },
  { type: "spacer", group: "布局", icon: "↕", label: "留白", desc: "调整模块节奏", defaults: { height: "24", align: "left" } },
  { type: "custom", group: "布局", icon: "</>", label: "自定义 Markdown", desc: "粘贴任意片段", defaults: { markdown: "### A small corner for something uniquely yours ✨", align: "left" } }
];

const FIELD_SCHEMAS = {
  hero: [["title", "主标题", "text"], ["subtitle", "副标题", "textarea"]],
  typing: [["lines", "动画文案", "textarea", "使用英文逗号分隔多条文案"], ["color", "强调色（HEX）", "text"]],
  capsule: [["title", "横幅标题", "text"], ["subtitle", "副标题", "text"], ["color", "配色", "select", "", ["gradient", "auto", "0:7C5CFF,100:1F6FEB", "0:0D1117,100:30363D"]], ["height", "高度（px）", "number"]],
  about: [["heading", "区块标题", "text"], ["text", "介绍内容", "textarea", "每行会成为一个要点"]],
  skills: [["heading", "区块标题", "text"], ["items", "技术名称", "textarea", "使用英文逗号分隔"], ["style", "徽章样式", "select", "", ["flat", "flat-square", "for-the-badge"]]],
  stats: [["heading", "区块标题", "text"], ["username", "GitHub 用户名", "text"], ["theme", "卡片主题", "select", "", ["github_dark", "transparent", "tokyonight", "radical", "nord", "vue-dark"]]],
  streak: [["username", "GitHub 用户名", "text"], ["theme", "卡片主题", "select", "", ["github-dark-blue", "transparent", "tokyonight", "radical", "nord"]]],
  activity: [["heading", "区块标题", "text"], ["username", "GitHub 用户名", "text"], ["color", "强调色（HEX）", "text"], ["endpoint", "图表接口 URL", "text", "默认公开服务已停用；自部署后可填写完整的 /graph 地址"]],
  summary: [["username", "GitHub 用户名", "text"], ["theme", "卡片主题", "select", "", ["github_dark", "transparent", "tokyonight", "dracula", "nord_dark", "vue"]]],
  snake: [["username", "GitHub 用户名", "text"], ["branch", "输出分支", "text"], ["theme", "显示模式", "select", "", ["dark", "light"]]],
  metrics: [["username", "GitHub 用户名", "text"], ["filename", "输出文件名", "text", "工作流会把信息图写入这个 SVG 文件"]],
  contrib3d: [["username", "GitHub 用户名", "text"], ["theme", "3D 主题", "select", "", ["profile-green-animate", "profile-season-animate", "profile-night-view", "profile-night-rainbow", "profile-gitblock"]]],
  spaceshooter: [["username", "GitHub 用户名", "text"], ["output", "输出文件名", "text", "支持 GIF 或 WebP"], ["strategy", "攻击路线", "select", "", ["random", "column", "row"]]],
  terminal: [["image", "动图地址", "text", "先使用原项目生成 GIF，再填写仓库相对路径或图片 URL"], ["alt", "替代文字", "text"]],
  social: [["heading", "区块标题", "text"], ["items", "链接", "textarea", "每项格式：名称:URL，使用英文逗号分隔"]],
  quote: [["text", "语录", "textarea"]],
  visitor: [["username", "GitHub 用户名", "text"], ["label", "标签", "text"], ["color", "颜色（HEX）", "text"]],
  spotify: [["uid", "Spotify UID", "text", "需要先在 Spotify GitHub Profile 服务中完成绑定"], ["theme", "卡片主题", "select", "", ["default", "natemoo-re", "novatorem"]]],
  divider: [["spacing", "上下间距", "select", "", ["small", "medium", "large"]]],
  spacer: [["height", "高度（px）", "number"]],
  custom: [["markdown", "Markdown 内容", "textarea", "导出时将原样保留"]]
};

const DEPENDENCY_TYPES = {
  activity: { level: "setup", label: "服务异常" },
  snake: { level: "action", label: "需要 Action" },
  metrics: { level: "action", label: "需要 Action" },
  contrib3d: { level: "action", label: "需要 Action" },
  spaceshooter: { level: "action", label: "需要 Action" },
  terminal: { level: "setup", label: "需要生成" },
  spotify: { level: "setup", label: "需要配置" },
  custom: { level: "setup", label: "检查依赖" }
};

const dependencyFor = type => DEPENDENCY_TYPES[type] || { level: "direct", label: "直接可用" };

const GENERATION_NOTICES = {
  activity: { mode: "unavailable", label: "服务状态", title: "公开预览服务当前不可用", detail: "上游部署返回 DEPLOYMENT_DISABLED。此问题不需要 GitHub Action；请等待服务恢复或改用自部署地址。" },
  snake: { mode: "action", label: "需要 Action", title: "通过 GitHub Action 生成", detail: "导出或发布时会附带生成工作流；首次运行完成后，贡献贪吃蛇才会显示。" },
  metrics: { mode: "action", label: "Action + 密钥", title: "通过 GitHub Action 生成", detail: "导出或发布时会附带生成工作流；运行前还需要添加 METRICS_TOKEN 仓库密钥。" },
  contrib3d: { mode: "action", label: "需要 Action", title: "通过 GitHub Action 生成", detail: "导出或发布时会附带生成工作流；首次运行完成后，3D 贡献图才会显示。" },
  spaceshooter: { mode: "action", label: "需要 Action", title: "通过 GitHub Action 生成", detail: "导出或发布时会附带生成工作流；首次运行完成后，游戏动图才会显示。" },
  terminal: { mode: "manual", label: "外部生成", title: "需要在外部项目生成", detail: "当前项目不会直接生成终端 GIF。请先使用原项目生成，再填写图片地址或提交生成文件。相对路径会从主页仓库预览。" },
  spotify: { mode: "manual", label: "需要绑定", title: "先绑定 Spotify 账号", detail: "默认 UID 是占位值。请先在 Spotify GitHub Profile 服务完成授权，再填写服务提供的真实 UID；无需 GitHub Action。" }
};

const SOURCE_META = {
  typing: { repo: "https://github.com/DenverCoder1/readme-typing-svg", name: "DenverCoder1/readme-typing-svg", intro: "把多段文字渲染成可嵌入 README 的动态打字 SVG。" },
  capsule: { repo: "https://github.com/kyechan99/capsule-render", name: "kyechan99/capsule-render", intro: "通过 URL 参数生成波浪、渐变等动态页头。" },
  skills: { repo: "https://github.com/badges/shields", name: "badges/shields", intro: "为技术栈和社交链接生成一致的状态徽章。" },
  social: { repo: "https://github.com/badges/shields", name: "badges/shields", intro: "使用 Shields 徽章生成一致的社交链接入口。" },
  stats: { repo: "https://github.com/stats-organization/github-stats-extended", name: "stats-organization/github-stats-extended", intro: "持续维护的 GitHub 统计与常用语言动态卡片服务。" },
  streak: { repo: "https://github.com/DenverCoder1/github-readme-streak-stats", name: "DenverCoder1/github-readme-streak-stats", intro: "生成连续贡献天数与历史记录卡片。" },
  activity: { repo: "https://github.com/Ashutosh00710/github-readme-activity-graph", name: "Ashutosh00710/github-readme-activity-graph", intro: "用折线图展示近期 GitHub 贡献活动。" },
  summary: { repo: "https://github.com/vn7n24fzkq/github-profile-summary-cards", name: "vn7n24fzkq/github-profile-summary-cards", intro: "生成包含提交、语言与仓库数据的资料摘要卡。" },
  snake: { repo: "https://github.com/Platane/snk", name: "Platane/snk", intro: "通过 GitHub Action 生成吃掉贡献格子的贪吃蛇动画。" },
  visitor: { repo: "https://github.com/antonkomarev/github-profile-views-counter", name: "antonkomarev/github-profile-views-counter", intro: "为 GitHub 主页提供轻量的访问次数徽章。" },
  spotify: { repo: "https://github.com/kittinan/spotify-github-profile", name: "kittinan/spotify-github-profile", intro: "把 Spotify 正在播放或最近播放状态嵌入主页。" },
  metrics: { repo: "https://github.com/lowlighter/metrics", name: "lowlighter/metrics", intro: "用丰富插件生成高度可定制的 GitHub 账号信息图。" },
  contrib3d: { repo: "https://github.com/yoshi389111/github-profile-3d-contrib", name: "yoshi389111/github-profile-3d-contrib", intro: "通过 GitHub Action 生成立体的年度贡献日历。" },
  spaceshooter: { repo: "https://github.com/czl9707/gh-space-shooter", name: "czl9707/gh-space-shooter", intro: "把贡献图转换成会每日更新的太空射击动画。" },
  terminal: { repo: "https://github.com/x0rzavi/github-readme-terminal", name: "x0rzavi/github-readme-terminal", intro: "生成可高度定制的复古终端 GIF。" }
};

const ACKNOWLEDGEMENTS = [
  { repo: "https://github.com/abhisheknaiidu/awesome-github-profile-readme", name: "abhisheknaiidu/awesome-github-profile-readme" },
  { repo: "https://github.com/rzashakeri/beautify-github-profile", name: "rzashakeri/beautify-github-profile" },
  ...Object.values(SOURCE_META).map(({ repo, name }) => ({ repo, name }))
].filter((item, index, list) => list.findIndex(candidate => candidate.repo === item.repo) === index);

const UI_ICONS = {
  close: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  lock: '<svg class="ui-icon small" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>',
  unlock: '<svg class="ui-icon small" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 017.5-2"/></svg>',
  sun: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></svg>',
  moon: '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.1A8.5 8.5 0 118.9 4a7 7 0 0011.1 11.1z"/></svg>'
};

const DEMO_BLOCKS = [
  { type: "hero", props: { title: "Hi, I'm The Octocat 👋", subtitle: "Open source explorer · Builder · Curious mind", align: "center" } },
  { type: "typing", props: { lines: "Open Source Explorer,Creative Developer,Always Learning", color: "58A6FF", align: "center" } },
  { type: "about", props: { heading: "About me", text: "🔭 Building delightful developer tools\n🌱 Learning something new every day\n💬 Ask me about open source", align: "left" } },
  { type: "skills", props: { heading: "Languages and tools", items: "TypeScript,React,Node.js,Python,Figma,Git", style: "flat", align: "left" } },
  { type: "stats", props: { heading: "GitHub stats", username: "octocat", theme: "github_dark", align: "center" } }
];

const LAYOUT_RECIPES = [
  { name: "极简名片", blocks: [["hero"], ["about"], ["skills"], ["divider"], ["social"]] },
  { name: "数据仪表盘", blocks: [["hero"], ["summary"], ["stats"], ["streak"], ["visitor"]] },
  { name: "开源贡献者", blocks: [["capsule"], ["about"], ["activity"], ["snake"], ["stats"], ["social"]] },
  { name: "求职简历", blocks: [["hero"], ["about"], ["skills"], ["summary"], ["divider"], ["social"]] },
  { name: "创作者主页", blocks: [["capsule"], ["typing"], ["about"], ["spotify"], ["quote"], ["social"]] },
  { name: "技术专家", blocks: [["hero"], ["skills"], ["stats"], ["activity"], ["summary"], ["social"]] },
  { name: "社区建设者", blocks: [["hero"], ["about"], ["streak"], ["visitor"], ["social"]] },
  { name: "视觉实验室", blocks: [["capsule"], ["typing"], ["skills"], ["activity"], ["quote"], ["visitor"]] },
  { name: "编辑手记", blocks: [["hero"], ["quote"], ["about"], ["divider", { spacing: "large" }], ["stats"], ["social"]] },
  { name: "紧凑徽章", blocks: [["hero"], ["skills", { style: "for-the-badge" }], ["summary"], ["visitor"], ["social"]] },
  { name: "立体贡献者", blocks: [["hero"], ["contrib3d"], ["stats"], ["social"]] },
  { name: "数据宇航员", blocks: [["capsule"], ["metrics"], ["spaceshooter"], ["skills"], ["social"]] }
];

const COLOR_THEMES = [
  { name: "GitHub", light: false, accent: "58A6FF", stats: "github_dark", summary: "github_dark", streak: "github-dark-blue", capsule: "0:0D1117,100:1F6FEB" },
  { name: "Nord", light: true, accent: "5E81AC", stats: "nord", summary: "nord_dark", streak: "nord", capsule: "0:2E3440,100:88C0D0" },
  { name: "Tokyo Night", light: false, accent: "7AA2F7", stats: "tokyonight", summary: "tokyonight", streak: "tokyonight", capsule: "0:1A1B26,100:7AA2F7" },
  { name: "Dracula", light: false, accent: "BD93F9", stats: "radical", summary: "dracula", streak: "radical", capsule: "0:282A36,100:BD93F9" },
  { name: "Clear Sky", light: true, accent: "0969DA", stats: "transparent", summary: "transparent", streak: "transparent", capsule: "0:54AEFF,100:8250DF" }
];

const DENSITY_PRESETS = [
  { name: "紧凑", id: "compact" },
  { name: "均衡", id: "balanced" },
  { name: "舒展", id: "airy" }
];

const MOOD_PACKS = [
  {
    name: "专业",
    copy: {
      hero: { title: "Hi, I'm {name}", subtitle: "Software developer · Open source contributor" },
      capsule: { title: "{name}", subtitle: "Engineering thoughtful software" },
      typing: { lines: "Software Developer,Open Source Contributor,Product-minded Engineer" },
      about: { heading: "About me" }, skills: { heading: "Technical toolkit", style: "flat-square" },
      stats: { heading: "GitHub overview" }, social: { heading: "Let's connect" },
      quote: { text: "Clarity in thinking becomes quality in software." }
    }
  },
  {
    name: "极客",
    copy: {
      hero: { title: "Hello, world! I'm {name} 👾", subtitle: "Turning coffee into commits since forever" },
      capsule: { title: "Welcome to my terminal", subtitle: "sudo make something awesome" },
      typing: { lines: "Code compiles,Coffee acquired,Ship it!" },
      about: { heading: "~/about-me" }, skills: { heading: "My loadout", style: "for-the-badge" },
      stats: { heading: "System metrics" }, social: { heading: "Open a connection" },
      quote: { text: "There is no place like 127.0.0.1." }
    }
  },
  {
    name: "创意",
    copy: {
      hero: { title: "Crafting ideas into pixels ✦", subtitle: "Creative developer · Digital maker · Curious human" },
      capsule: { title: "A digital garden by {name}", subtitle: "Code · Create · Explore" },
      typing: { lines: "Creative Developer,Designing with code,Building in public" },
      about: { heading: "Currently exploring" }, skills: { heading: "Creative toolkit", style: "flat" },
      stats: { heading: "Creative momentum" }, social: { heading: "Find me around the web" },
      quote: { text: "Make it useful, then make it delightful." }
    }
  },
  {
    name: "友好",
    copy: {
      hero: { title: "Hey there, I'm {name} 👋", subtitle: "Learning, sharing, and building together" },
      capsule: { title: "Thanks for stopping by!", subtitle: "Let's build something good together" },
      typing: { lines: "Always learning,Happy to collaborate,Ask me anything" },
      about: { heading: "Nice to meet you" }, skills: { heading: "Things I work with", style: "flat-square" },
      stats: { heading: "A little progress" }, social: { heading: "Say hello" },
      quote: { text: "Great software starts with generous collaboration." }
    }
  }
];

let state = {
  blocks: [],
  selectedId: null,
  view: "preview",
  device: "desktop",
  lightApp: false,
  style: { layout: 0, theme: 0, mood: 0, density: 1 },
  profile: { login: "octocat", name: "The Octocat", bio: "GitHub's friendly mascot and open source explorer.", avatar_url: "https://github.com/octocat.png", followers: 15200, following: 9, location: "San Francisco", blog: "github.blog" }
};

const API_BASE_URL = String(window.README_STUDIO_CONFIG?.apiBaseUrl || "").trim().replace(/\/$/, "");
const PUBLISH_SESSION_KEY = "readme-studio-publish-session";
const PUBLISH_SESSION_MAX_AGE = 9 * 60 * 1000;
let publishSession = null;
let lastPublishedUrl = "";
let lastInstallationRemoved = true;
let lastPublishError = "";

const $ = (selector) => document.querySelector(selector);
const escapeHTML = (value = "") => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
const lines = value => String(value || "").split("\n").map(v => v.trim()).filter(Boolean);
const csv = value => String(value || "").split(",").map(v => v.trim()).filter(Boolean);
const id = () => `block-${Date.now()}-${Math.random().toString(16).slice(2)}`;

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function restorePublishSession() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(PUBLISH_SESSION_KEY));
    if (saved?.id && saved?.login && Date.now() - saved.createdAt < PUBLISH_SESSION_MAX_AGE) publishSession = saved;
    else sessionStorage.removeItem(PUBLISH_SESSION_KEY);
  } catch (_) {
    sessionStorage.removeItem(PUBLISH_SESSION_KEY);
  }
}

function clearPublishSession() {
  publishSession = null;
  sessionStorage.removeItem(PUBLISH_SESSION_KEY);
}

function handleAuthReturn() {
  const params = new URLSearchParams(location.hash.replace(/^#/, ""));
  const sessionId = params.get("github_session");
  const login = params.get("github_login");
  const error = params.get("github_error");
  if (!sessionId && !error) return false;
  history.replaceState(null, "", `${location.pathname}${location.search}`);
  if (sessionId && login) {
    publishSession = { id: sessionId, login, createdAt: Date.now() };
    sessionStorage.setItem(PUBLISH_SESSION_KEY, JSON.stringify(publishSession));
    lastPublishError = "";
    showToast(`已验证 GitHub App @${login}`);
  } else {
    clearPublishSession();
    lastPublishError = error || "GitHub App 安装没有完成";
    setTimeout(() => showToast(lastPublishError), 0);
  }
  return true;
}

function persist() {
  localStorage.setItem("readme-studio-state", JSON.stringify({ blocks: state.blocks, profile: state.profile, lightApp: state.lightApp, style: state.style }));
}

function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem("readme-studio-state"));
    if (saved?.blocks?.length) state.blocks = saved.blocks
      .filter(block => block?.type !== "trophy")
      .map(block => {
        const defaults = COMPONENTS.find(component => component.type === block.type)?.defaults || {};
        return { ...block, props: { ...defaults, ...(block.props || {}) } };
      });
    if (saved?.profile) state.profile = { ...state.profile, ...saved.profile };
    if (saved?.lightApp) state.lightApp = true;
    if (saved?.style) state.style = { ...state.style, ...saved.style };
  } catch (_) { /* ignore malformed local state */ }
  if (!state.blocks.length) state.blocks = DEMO_BLOCKS.map(block => ({ ...block, id: id(), props: { ...block.props } }));
  state.selectedId = state.blocks[0]?.id || null;
}

function renderComponentLibrary(query = "") {
  const normalized = query.trim().toLowerCase();
  const filtered = COMPONENTS.filter(item => `${item.label} ${item.desc} ${item.group}`.toLowerCase().includes(normalized));
  const groups = [...new Set(filtered.map(item => item.group))];
  $("#component-groups").innerHTML = groups.map(group => {
    const items = filtered.filter(item => item.group === group);
    return `<section class="component-group">
      <div class="group-title"><span>${escapeHTML(group)}</span><span>${items.length}</span></div>
      <div class="component-list">${items.map(item => `
        <div class="component-item" draggable="true" tabindex="0" role="button" data-component="${item.type}" aria-label="添加${escapeHTML(item.label)}">
          <span class="component-icon">${escapeHTML(item.icon)}</span>
          <span class="component-copy"><strong>${escapeHTML(item.label)}</strong><small>${escapeHTML(item.desc)}</small>${dependencyFor(item.type).level === "direct" ? "" : `<em class="dependency-badge dependency-${dependencyFor(item.type).level}">${dependencyFor(item.type).label}</em>`}</span>
          <span class="drag-handle">⠿</span>
        </div>`).join("")}</div>
    </section>`;
  }).join("") || `<div class="settings-empty"><div><strong>没有找到组件</strong><p>换一个关键词试试。</p></div></div>`;

  document.querySelectorAll(".component-item").forEach(item => {
    item.addEventListener("dragstart", event => {
      event.dataTransfer.setData("application/readme-component", item.dataset.component);
      event.dataTransfer.effectAllowed = "copy";
    });
    item.addEventListener("click", () => addBlock(item.dataset.component));
    item.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); addBlock(item.dataset.component); }
    });
  });
}

function addBlock(type, atIndex = state.blocks.length) {
  const component = COMPONENTS.find(item => item.type === type);
  if (!component) return;
  const props = { ...component.defaults };
  if ("username" in props) props.username = state.profile.login || "octocat";
  const block = { id: id(), type, props };
  state.blocks.splice(atIndex, 0, block);
  state.selectedId = block.id;
  state.view = "preview";
  render();
  persist();
}

function createBlock(type, overrides = {}) {
  const component = COMPONENTS.find(item => item.type === type);
  const props = { ...(component?.defaults || {}), ...overrides };
  if ("username" in props) props.username = state.profile.login || "octocat";
  return { id: id(), type, props };
}

function randomIndex(length, current) {
  if (length < 2) return 0;
  const candidate = Math.floor(Math.random() * (length - 1));
  return candidate >= current ? candidate + 1 : candidate;
}

function applyTheme(blocks, theme, includeLocked = false) {
  blocks.forEach(block => {
    if (block.locked && !includeLocked) return;
    if (block.type === "capsule") block.props.color = theme.capsule;
    if (block.type === "typing" || block.type === "activity" || block.type === "visitor") block.props.color = theme.accent;
    if (block.type === "stats") block.props.theme = theme.stats;
    if (block.type === "summary") block.props.theme = theme.summary;
    if (block.type === "streak") block.props.theme = theme.streak;
    if (block.type === "snake") block.props.theme = theme.light ? "light" : "dark";
  });
}

function applyMood(blocks, mood, includeLocked = false) {
  const displayName = state.profile.name || state.profile.login || "Developer";
  blocks.forEach(block => {
    if (block.locked && !includeLocked) return;
    const overrides = mood.copy[block.type];
    if (!overrides) return;
    Object.entries(overrides).forEach(([key, value]) => {
      block.props[key] = String(value).replaceAll("{name}", displayName);
    });
  });
}

function mergeLockedBlocks(generated) {
  const locked = state.blocks.map((block, index) => ({ block, index })).filter(item => item.block.locked);
  locked.forEach(({ block, index }) => {
    const duplicate = generated.findIndex(item => item.type === block.type);
    if (duplicate >= 0) generated.splice(duplicate, 1);
    generated.splice(Math.min(index, generated.length), 0, block);
  });
  return generated;
}

function randomizeStyle(mode = "all") {
  if (mode === "all" || mode === "layout") state.style.layout = randomIndex(LAYOUT_RECIPES.length, state.style.layout);
  if (mode === "all" || mode === "theme") state.style.theme = randomIndex(COLOR_THEMES.length, state.style.theme);
  if (mode === "all" || mode === "mood") state.style.mood = randomIndex(MOOD_PACKS.length, state.style.mood);
  if (mode === "all" || mode === "density") state.style.density = randomIndex(DENSITY_PRESETS.length, state.style.density);

  const recipe = LAYOUT_RECIPES[state.style.layout];
  const theme = COLOR_THEMES[state.style.theme];
  const mood = MOOD_PACKS[state.style.mood];

  if (mode === "all" || mode === "layout") {
    const generated = recipe.blocks.map(([type, overrides = {}]) => createBlock(type, overrides));
    applyTheme(generated, theme, true);
    applyMood(generated, mood, true);
    state.blocks = mergeLockedBlocks(generated);
  } else {
    if (mode === "theme") applyTheme(state.blocks, theme);
    if (mode === "mood") applyMood(state.blocks, mood);
  }

  state.selectedId = state.blocks[0]?.id || null;
  state.view = "preview";
  render();
  persist();
  const density = DENSITY_PRESETS[state.style.density];
  const modeLabel = { all: "随机组合", layout: "布局", theme: "配色", mood: "气质", density: "密度" }[mode];
  showToast(`${modeLabel}：${recipe.name} · ${theme.name} · ${mood.name} · ${density.name}`);
}

function assetUrl(base, params = {}) {
  const url = new URL(base);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, String(value ?? "")));
  return url.toString();
}

function socialItem(value) {
  const split = value.indexOf(":");
  const rawHref = split > -1 ? value.slice(split + 1) : "#";
  let href = "#";
  try {
    const url = new URL(rawHref);
    if (["http:", "https:"].includes(url.protocol)) href = url.toString();
  } catch (_) { /* keep invalid links inert in preview */ }
  return {
    name: split > -1 ? value.slice(0, split) : value,
    href
  };
}

function isRemoteImage(value) {
  try {
    return ["http:", "https:"].includes(new URL(String(value)).protocol);
  } catch (_) {
    return false;
  }
}

function safeGithubUser(value, fallback = "octocat") {
  const cleaned = String(value || fallback).trim().replace(/[^A-Za-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "").slice(0, 39);
  return cleaned || fallback;
}

function profileRepositoryOwner() {
  return safeGithubUser(state.profile.login, "octocat");
}

function encodePath(value) {
  return String(value).split("/").filter(Boolean).map(encodeURIComponent).join("/");
}

function repositoryAssetUrl(path, ref = "HEAD") {
  const owner = profileRepositoryOwner();
  return `https://raw.githubusercontent.com/${encodeURIComponent(owner)}/${encodeURIComponent(owner)}/${encodePath(ref)}/${encodePath(path)}`;
}

function appendPathSuffix(path, suffix) {
  const slash = path.lastIndexOf("/");
  const dot = path.lastIndexOf(".");
  const insertAt = dot > slash ? dot : path.length;
  return `${path.slice(0, insertAt)}-${suffix}${path.slice(insertAt)}`;
}

function resolvedOutputPath(block, property, fallback) {
  const blocks = state.blocks.filter(item => item.type === block.type);
  const targetIndex = blocks.findIndex(item => item === block || (block.id && item.id === block.id));
  if (targetIndex < 0) return safeRelativePath(block.props[property], fallback);
  const used = new Set();
  let targetPath = safeRelativePath(block.props[property], fallback);
  blocks.forEach((item, index) => {
    const requested = safeRelativePath(item.props[property], fallback);
    let resolved = requested;
    let suffix = 2;
    while (used.has(resolved)) resolved = appendPathSuffix(requested, suffix++);
    used.add(resolved);
    if (index === targetIndex) targetPath = resolved;
  });
  return targetPath;
}

function snakeAssetNames(block) {
  const blocks = state.blocks.filter(item => item.type === "snake");
  if (blocks.length < 2) return { light: "github-contribution-grid-snake.svg", dark: "github-contribution-grid-snake-dark.svg" };
  const targetIndex = blocks.findIndex(item => item === block || (block.id && item.id === block.id));
  const usernames = new Map();
  const keys = blocks.map(item => {
    const username = safeGithubUser(item.props.username);
    const count = (usernames.get(username) || 0) + 1;
    usernames.set(username, count);
    return count === 1 ? username : `${username}-${count}`;
  });
  const key = keys[Math.max(0, targetIndex)];
  return {
    light: `github-contribution-grid-snake-${key}.svg`,
    dark: `github-contribution-grid-snake-${key}-dark.svg`
  };
}

function contrib3dGroups() {
  const blocks = state.blocks.filter(item => item.type === "contrib3d");
  const usernames = [...new Map(blocks.map(item => {
    const username = safeGithubUser(item.props.username);
    return [username.toLowerCase(), username];
  })).values()];
  return usernames.map(username => ({
    username,
    directory: usernames.length === 1 ? "profile-3d-contrib" : `profile-3d-contrib-${username.toLowerCase()}`
  }));
}

function contrib3dDirectory(block) {
  const username = safeGithubUser(block.props.username);
  return contrib3dGroups().find(group => group.username.toLowerCase() === username.toLowerCase())?.directory || "profile-3d-contrib";
}

function spotifyUidConfigured(value) {
  const uid = String(value || "").trim().toLowerCase();
  return Boolean(uid && !["your_spotify_uid", "your-spotify-uid", "your uid", "uid"].includes(uid));
}

function safeRemoteEndpoint(value, fallback) {
  try {
    const url = new URL(String(value || fallback));
    return ["http:", "https:"].includes(url.protocol) ? url.toString() : fallback;
  } catch (_) {
    return fallback;
  }
}

function generationNoticeFor(block) {
  if (block.type === "activity") {
    const endpoint = safeRemoteEndpoint(block.props.endpoint, ACTIVITY_GRAPH_ENDPOINT);
    if (endpoint !== ACTIVITY_GRAPH_ENDPOINT) return { mode: "manual", label: "自定义服务", title: "正在使用自部署接口", detail: "Readme Studio 会直接请求这个地址；请确认它公开可访问，并返回 SVG 图片。无需 GitHub Action。" };
  }
  if (block.type === "spotify" && spotifyUidConfigured(block.props.uid)) return { mode: "manual", label: "检查授权", title: "已填写 Spotify UID", detail: "如果真实预览仍失败，请回到 Spotify GitHub Profile 服务重新绑定或刷新授权。无需 GitHub Action。" };
  return GENERATION_NOTICES[block.type];
}

function directAssetsFor(block) {
  const p = block.props;
  if (block.type === "typing") return [{
    src: assetUrl("https://readme-typing-svg.demolab.com", { font: "Fira Code", pause: 1000, color: p.color || "58A6FF", center: true, vCenter: true, width: 520, lines: csv(p.lines).join(";") }),
    alt: "Typing animation",
    kind: "banner"
  }];
  if (block.type === "capsule") return [{
    src: assetUrl("https://capsule-render.vercel.app/api", { type: "waving", color: p.color, height: p.height, section: "header", text: p.title, fontSize: 38, fontColor: "ffffff", animation: "fadeIn", desc: p.subtitle, descAlignY: 64 }),
    alt: "Profile header",
    kind: "banner"
  }];
  if (block.type === "skills") return csv(p.items).map(item => ({
    src: assetUrl(`https://img.shields.io/badge/${encodeURIComponent(item)}-161B22`, { style: p.style || "flat", logo: item.toLowerCase().replace(/\./g, "dot"), logoColor: "white" }),
    alt: item,
    kind: "badge"
  }));
  if (block.type === "stats") return [
    { src: assetUrl("https://github-stats-extended.vercel.app/api", { username: p.username, show_icons: true, theme: p.theme, hide_border: true }), alt: "GitHub stats", kind: "card" },
    { src: assetUrl("https://github-stats-extended.vercel.app/api/top-langs/", { username: p.username, layout: "compact", theme: p.theme, hide_border: true }), alt: "Top languages", kind: "card" }
  ];
  if (block.type === "streak") return [{
    src: assetUrl("https://streak-stats.demolab.com", { user: p.username, theme: p.theme, hide_border: true }),
    alt: "GitHub streak",
    kind: "banner"
  }];
  if (block.type === "activity") {
    const endpoint = safeRemoteEndpoint(p.endpoint, ACTIVITY_GRAPH_ENDPOINT);
    return [{
      src: assetUrl(endpoint, { username: p.username, bg_color: "00000000", color: p.color || "7C5CFF", line: p.color || "7C5CFF", point: "FFFFFF", hide_border: true }),
      alt: "Contribution activity",
      kind: "banner",
      errorMessage: endpoint === ACTIVITY_GRAPH_ENDPOINT ? "贡献活动服务当前已停用，无需配置 GitHub Action" : "自定义图表接口未返回可显示的图片，请检查地址和服务状态"
    }];
  }
  if (block.type === "summary") return [{
    src: assetUrl("https://github-profile-summary-cards.vercel.app/api/cards/profile-details", { username: p.username, theme: p.theme }),
    alt: "GitHub profile summary",
    kind: "banner"
  }];
  if (block.type === "social") return csv(p.items).map(value => {
    const item = socialItem(value);
    return {
      src: assetUrl(`https://img.shields.io/badge/${encodeURIComponent(item.name)}-1F6FEB`, { style: "flat", logoColor: "white" }),
      alt: item.name,
      href: item.href,
      kind: "badge"
    };
  });
  if (block.type === "visitor") return [{
    src: assetUrl("https://komarev.com/ghpvc/", { username: p.username, label: p.label, color: p.color || "1F6FEB", style: "flat" }),
    alt: p.label || "Profile views",
    kind: "badge"
  }];
  if (block.type === "spotify" && spotifyUidConfigured(p.uid)) return [{
    src: assetUrl("https://spotify-github-profile.kittinanx.com/api/view", { uid: p.uid, cover_image: true, theme: p.theme, show_offline: false, background_color: "121212" }),
    alt: "Spotify now playing",
    kind: "card",
    errorMessage: "Spotify 授权无效或已过期，请重新绑定账号"
  }];
  if (block.type === "snake") {
    const names = snakeAssetNames(block);
    const filename = p.theme === "dark" ? names.dark : names.light;
    return [{ src: repositoryAssetUrl(filename, safeGitRef(p.branch)), alt: "Contribution snake", kind: "banner", generated: true, errorMessage: "尚未找到生成的贪吃蛇 SVG，请先运行导出的 Action" }];
  }
  if (block.type === "metrics") {
    const filename = resolvedOutputPath(block, "filename", "github-metrics.svg");
    return [{ src: repositoryAssetUrl(filename), alt: "GitHub Metrics", kind: "banner", generated: true, errorMessage: "尚未找到 Metrics SVG，请配置 METRICS_TOKEN 并运行 Action" }];
  }
  if (block.type === "contrib3d") {
    const path = `${contrib3dDirectory(block)}/${safeRelativePath(p.theme, "profile-green-animate")}.svg`;
    return [{ src: repositoryAssetUrl(path), alt: "3D contribution calendar", kind: "banner", generated: true, errorMessage: "尚未找到 3D 贡献图，请先运行导出的 Action" }];
  }
  if (block.type === "spaceshooter") {
    const output = resolvedOutputPath(block, "output", "game.gif");
    return [{ src: repositoryAssetUrl(output), alt: "GitHub contribution space shooter", kind: "banner", generated: true, errorMessage: "尚未找到太空射击动图，请先运行导出的 Action" }];
  }
  if (block.type === "terminal" && p.image) {
    const src = isRemoteImage(p.image) ? p.image : repositoryAssetUrl(safeRelativePath(p.image, "terminal.gif"));
    return [{ src, alt: p.alt || "GitHub terminal profile", kind: "card", generated: !isRemoteImage(p.image), errorMessage: "尚未找到终端动图，请先生成并提交文件，或填写公开图片 URL" }];
  }
  return [];
}

function livePreviewImage(asset) {
  const image = `<img class="live-preview-image" src="${escapeHTML(asset.src)}" alt="${escapeHTML(asset.alt)}" loading="eager" referrerpolicy="no-referrer" />`;
  const media = asset.href && asset.href !== "#" ? `<a href="${escapeHTML(asset.href)}" target="_blank" rel="noreferrer">${image}</a>` : image;
  return `<span class="live-preview-shell live-preview-${asset.kind || "card"} ${asset.generated ? "generated" : ""}">
    <span class="live-preview-loading">${asset.generated ? "正在查找生成产物…" : "正在载入真实预览…"}</span>
    <span class="live-preview-error">${escapeHTML(asset.errorMessage || "远程预览暂不可用")}</span>
    ${media}
  </span>`;
}

function livePreview(assets) {
  return `<div class="live-preview-row">${assets.map(livePreviewImage).join("")}</div>`;
}

function blockPreview(block) {
  const p = block.props;
  const align = ["left", "center", "right"].includes(p.align) ? p.align : "left";
  const justify = align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start";
  const directAssets = directAssetsFor(block);
  let content = "";
  if (block.type === "hero") content = `<div class="hero-block"><h1>${escapeHTML(p.title)}</h1><p>${escapeHTML(p.subtitle)}</p></div>`;
  if (block.type === "typing" || block.type === "capsule") content = livePreview(directAssets);
  if (block.type === "about") content = `<h2>${escapeHTML(p.heading)}</h2><ul class="about-list">${lines(p.text).map(line => `<li>${escapeHTML(line)}</li>`).join("")}</ul>`;
  if (block.type === "skills") content = `<h2>${escapeHTML(p.heading)}</h2>${livePreview(directAssets)}`;
  if (block.type === "stats") content = `<h2>${escapeHTML(p.heading)}</h2>${livePreview(directAssets)}`;
  if (["streak", "summary", "visitor"].includes(block.type)) content = livePreview(directAssets);
  if (block.type === "spotify") content = directAssets.length
    ? livePreview(directAssets)
    : `<div class="preview-status preview-status-setup"><strong>需要绑定 Spotify</strong><span>先完成 Spotify GitHub Profile 授权，再填写服务提供的真实 UID。此组件不需要 GitHub Action。</span></div>`;
  if (block.type === "activity") content = `<h2>${escapeHTML(p.heading)}</h2>${livePreview(directAssets)}`;
  if (["snake", "metrics", "contrib3d", "spaceshooter"].includes(block.type)) content = livePreview(directAssets);
  if (block.type === "terminal") content = directAssets.length
    ? livePreview(directAssets)
    : `<div class="preview-status preview-status-setup"><strong>需要终端动图</strong><span>先使用上游工具生成 GIF 并填写仓库相对路径，或填写公开图片 URL。</span></div>`;
  if (block.type === "social") content = `<h2>${escapeHTML(p.heading)}</h2>${livePreview(directAssets)}`;
  if (block.type === "quote") content = `<div class="quote-card">“${escapeHTML(p.text)}”</div>`;
  if (block.type === "divider") content = `<div class="readme-divider" style="margin-block:${p.spacing === "large" ? 22 : p.spacing === "small" ? 4 : 11}px"></div>`;
  if (block.type === "spacer") content = `<div style="height:${Math.max(8, Math.min(120, Number(p.height) || 24))}px"></div>`;
  if (block.type === "custom") content = `<div class="custom-preview"><strong>Markdown 源码预览</strong><small>这里不会加载其中的图片、HTML 或工作流；导出时会原样保留。</small><code>${escapeHTML(p.markdown)}</code></div>`;
  return `<div class="readme-content" style="text-align:${align};--preview-justify:${justify}">${content}</div>`;
}

function renderCanvas() {
  const zone = $("#drop-zone");
  if (!state.blocks.length) {
    zone.innerHTML = `<div class="drop-empty"><div><strong>把第一个组件拖到这里</strong><span>从标题、关于我或技术栈开始</span></div></div>`;
  } else {
    zone.innerHTML = state.blocks.map((block, index) => {
      const component = COMPONENTS.find(item => item.type === block.type);
      const isSelected = state.selectedId === block.id;
      const selectedTools = isSelected ? `
        <button class="block-remove" type="button" draggable="false" data-remove-id="${block.id}" aria-label="删除${escapeHTML(component?.label || block.type)}" title="删除组件">${UI_ICONS.close}</button>
        <button class="block-lock ${block.locked ? "locked" : ""}" type="button" draggable="false" data-lock-id="${block.id}" aria-label="${block.locked ? "解锁" : "锁定"}${escapeHTML(component?.label || block.type)}" aria-pressed="${Boolean(block.locked)}" title="${block.locked ? "解锁，允许随机替换" : "锁定，随机时保留"}">${block.locked ? UI_ICONS.lock : UI_ICONS.unlock}</button>
        <span class="block-tools">⠿ ${escapeHTML(component?.label || block.type)}</span>` : "";
      return `<div class="readme-block ${isSelected ? "selected" : ""}" draggable="true" data-id="${block.id}" data-index="${index}" tabindex="0">${selectedTools}
        ${blockPreview(block)}
      </div>`;
    }).join("");
  }
  zone.hidden = state.view !== "preview";
  $("#markdown-output").hidden = state.view !== "code";
  $("#markdown-output").textContent = generateMarkdown();
  $("#block-count").textContent = `${state.blocks.length} 个组件`;

  zone.querySelectorAll(".live-preview-image").forEach(image => {
    const shell = image.closest(".live-preview-shell");
    const settle = loaded => {
      shell.classList.toggle("loaded", loaded);
      shell.classList.toggle("failed", !loaded);
    };
    image.addEventListener("load", () => settle(true));
    image.addEventListener("error", () => settle(false));
    if (image.complete) settle(image.naturalWidth > 0);
  });

  zone.querySelectorAll(".readme-block").forEach(element => {
    const removeButton = element.querySelector(".block-remove");
    const lockButton = element.querySelector(".block-lock");
    if (removeButton) {
      removeButton.addEventListener("mousedown", event => event.stopPropagation());
      removeButton.addEventListener("click", event => { event.preventDefault(); event.stopPropagation(); removeBlock(removeButton.dataset.removeId); });
    }
    if (lockButton) {
      lockButton.addEventListener("mousedown", event => event.stopPropagation());
      lockButton.addEventListener("click", event => {
        event.preventDefault(); event.stopPropagation();
        const block = state.blocks.find(item => item.id === lockButton.dataset.lockId);
        if (!block) return;
        block.locked = !block.locked;
        renderCanvas(); persist();
        showToast(block.locked ? "组件已锁定，随机时会保留" : "组件已解锁");
      });
    }
    element.addEventListener("click", event => { event.stopPropagation(); state.selectedId = element.dataset.id; renderCanvas(); renderSettings(); });
    element.addEventListener("focus", () => { state.selectedId = element.dataset.id; renderCanvas(); renderSettings(); });
    element.addEventListener("dragstart", event => {
      element.classList.add("dragging");
      event.dataTransfer.setData("application/readme-block", element.dataset.id);
      event.dataTransfer.effectAllowed = "move";
    });
    element.addEventListener("dragend", () => element.classList.remove("dragging"));
    element.addEventListener("dragover", event => event.preventDefault());
    element.addEventListener("drop", event => {
      event.preventDefault(); event.stopPropagation();
      handleDrop(event, Number(element.dataset.index));
    });
  });
}

function handleDrop(event, index) {
  const newType = event.dataTransfer.getData("application/readme-component");
  const movingId = event.dataTransfer.getData("application/readme-block");
  if (newType) return addBlock(newType, index);
  if (movingId) {
    const from = state.blocks.findIndex(block => block.id === movingId);
    if (from < 0) return;
    const [moving] = state.blocks.splice(from, 1);
    const destination = from < index ? index - 1 : index;
    state.blocks.splice(destination, 0, moving);
    state.selectedId = moving.id;
    render(); persist();
  }
}

function renderSettings() {
  const container = $("#settings-content");
  const block = state.blocks.find(item => item.id === state.selectedId);
  $("#delete-block").style.visibility = block ? "visible" : "hidden";
  if (!block) {
    container.innerHTML = `<div class="settings-empty"><div><span class="empty-icon">⌁</span><strong>选择一个组件</strong><p>点击画布中的内容，即可调整文案、颜色和对齐方式。</p></div></div>`;
    return;
  }
  const component = COMPONENTS.find(item => item.type === block.type);
  const fields = FIELD_SCHEMAS[block.type] || [];
  const source = SOURCE_META[block.type];
  const generationNotice = generationNoticeFor(block);
  container.innerHTML = `<div class="settings-form">
    ${generationNotice ? `<aside class="generation-notice generation-${generationNotice.mode}" role="note">
      <span class="generation-notice-mark" aria-hidden="true">${generationNotice.mode === "action" ? "◆" : "!"}</span>
      <span class="generation-notice-copy"><em>${escapeHTML(generationNotice.label)}</em><strong>${escapeHTML(generationNotice.title)}</strong><small>${escapeHTML(generationNotice.detail)}</small></span>
    </aside>` : ""}
    <div class="selected-type"><span class="component-icon">${escapeHTML(component.icon)}</span><span><strong>${escapeHTML(component.label)}</strong><small>${escapeHTML(component.desc)}</small></span></div>
    ${source ? `<aside class="component-source"><span class="source-kicker">开源组件</span><p>${escapeHTML(source.intro)}</p><a href="${source.repo}" target="_blank" rel="noreferrer">${escapeHTML(source.name)} <span aria-hidden="true">↗</span></a></aside>` : ""}
    ${fields.map(([key, label, type, help, options]) => {
      const value = block.props[key] ?? "";
      const controlId = `field-${block.id}-${key}`;
      let control = `<input id="${controlId}" data-field="${key}" type="${type}" value="${escapeHTML(value)}" />`;
      if (type === "textarea") control = `<textarea id="${controlId}" data-field="${key}">${escapeHTML(value)}</textarea>`;
      if (type === "select") control = `<select id="${controlId}" data-field="${key}">${options.map(option => `<option value="${escapeHTML(option)}" ${option === value ? "selected" : ""}>${escapeHTML(option)}</option>`).join("")}</select>`;
      return `<div class="field"><label for="${controlId}">${escapeHTML(label)}</label>${control}${help ? `<small>${escapeHTML(help)}</small>` : ""}</div>`;
    }).join("")}
    ${block.type !== "divider" && block.type !== "spacer" ? `<div class="field"><label>对齐方式</label><div class="align-control">${[["left","≡ 左"],["center","≡ 中"],["right","≡ 右"]].map(([value,label]) => `<button type="button" data-align="${value}" class="${block.props.align === value ? "active" : ""}">${label}</button>`).join("")}</div></div>` : ""}
    <div class="move-actions"><button type="button" data-move="up">↑ 上移</button><button type="button" data-move="down">↓ 下移</button></div>
  </div>`;

  container.querySelectorAll("[data-field]").forEach(input => {
    input.addEventListener("input", () => { block.props[input.dataset.field] = input.value; renderCanvas(); persist(); });
  });
  container.querySelectorAll("[data-align]").forEach(button => {
    button.addEventListener("click", () => { block.props.align = button.dataset.align; render(); persist(); });
  });
  container.querySelectorAll("[data-move]").forEach(button => {
    button.addEventListener("click", () => moveSelected(button.dataset.move === "up" ? -1 : 1));
  });
}

function moveSelected(delta) {
  const index = state.blocks.findIndex(block => block.id === state.selectedId);
  const next = index + delta;
  if (index < 0 || next < 0 || next >= state.blocks.length) return;
  [state.blocks[index], state.blocks[next]] = [state.blocks[next], state.blocks[index]];
  render(); persist();
}

function removeBlock(blockId) {
  const index = state.blocks.findIndex(block => block.id === blockId);
  if (index < 0) return;
  state.blocks.splice(index, 1);
  state.selectedId = state.blocks[Math.min(index, state.blocks.length - 1)]?.id || null;
  render(); persist(); showToast("组件已删除");
}

function markdownFor(block) {
  const p = block.props;
  const assets = directAssetsFor(block);
  const open = p.align && p.align !== "left" ? `<div align="${p.align}">\n\n` : "";
  const close = open ? "\n\n</div>" : "";
  let md = "";
  if (block.type === "hero") md = `# ${p.title}\n\n${p.subtitle}`;
  if (block.type === "typing") md = `[![Typing SVG](${assets[0].src})](https://git.io/typing-svg)`;
  if (block.type === "capsule") md = `<img width="100%" src="${assets[0].src}" alt="Profile header" />`;
  if (block.type === "about") md = `## ${p.heading}\n\n${lines(p.text).map(line => `- ${line}`).join("\n")}`;
  if (block.type === "skills") md = `## ${p.heading}\n\n${assets.map(asset => `![${asset.alt}](${asset.src})`).join(" ")}`;
  if (block.type === "stats") md = `## ${p.heading}\n\n<img height="165" src="${assets[0].src}" alt="GitHub stats" />\n<img height="165" src="${assets[1].src}" alt="Top languages" />`;
  if (block.type === "streak") md = `<img src="${assets[0].src}" alt="GitHub streak" />`;
  if (block.type === "activity") md = `## ${p.heading}\n\n<img src="${assets[0].src}" alt="Contribution activity" />`;
  if (block.type === "summary") md = `<img src="${assets[0].src}" alt="GitHub profile summary" />`;
  if (block.type === "snake") {
    const names = snakeAssetNames(block);
    const filename = p.theme === "dark" ? names.dark : names.light;
    md = `<!-- Requires a Platane/snk GitHub Action that publishes to the ${safeGitRef(p.branch)} branch -->\n<img src="${repositoryAssetUrl(filename, safeGitRef(p.branch))}" alt="Contribution snake" />`;
  }
  if (block.type === "metrics") md = `<img src="./${resolvedOutputPath(block, "filename", "github-metrics.svg")}" alt="GitHub Metrics" />`;
  if (block.type === "contrib3d") md = `<img src="./${contrib3dDirectory(block)}/${safeRelativePath(p.theme, "profile-green-animate")}.svg" alt="3D contribution calendar" />`;
  if (block.type === "spaceshooter") md = `<img src="./${resolvedOutputPath(block, "output", "game.gif")}" alt="GitHub contribution space shooter" />`;
  if (block.type === "terminal") md = `<img src="${String(p.image || "./terminal.gif").replace(/\"/g, "%22")}" alt="${String(p.alt || "GitHub terminal profile").replace(/\"/g, "&quot;")}" />`;
  if (block.type === "social") md = `## ${p.heading}\n\n${assets.map(asset => `[![${asset.alt}](${asset.src})](${asset.href})`).join(" ")}`;
  if (block.type === "quote") md = `> “${p.text}”`;
  if (block.type === "visitor") md = `![${p.label}](${assets[0].src})`;
  if (block.type === "spotify") md = assets.length
    ? `<img src="${assets[0].src}" alt="Spotify now playing" />`
    : "<!-- Spotify component omitted: bind Spotify and enter a real UID before publishing. -->";
  if (block.type === "divider") md = "---";
  if (block.type === "spacer") md = `<br clear="both" />`;
  if (block.type === "custom") return p.markdown;
  return `${open}${md}${close}`;
}

function generateMarkdown() {
  return state.blocks.map(markdownFor).join("\n\n");
}

function getExportChecks() {
  const types = new Set(state.blocks.map(block => block.type));
  const needsFollowUp = ["activity", "snake", "metrics", "contrib3d", "spaceshooter", "terminal", "spotify", "custom"].some(type => types.has(type));
  const checks = [{ level: "direct", icon: "✓", title: "README.md", detail: needsFollowUp ? `${state.blocks.length} 个组件已生成；发布前请完成下列服务、Action 或文件检查。` : `${state.blocks.length} 个组件已生成，可直接放入同名 GitHub 主页仓库。`, status: needsFollowUp ? "已生成" : "已就绪" }];
  const remoteTypes = ["typing", "capsule", "skills", "stats", "streak", "summary", "social", "visitor"].filter(type => types.has(type));
  if (remoteTypes.length) checks.push({ level: "direct", icon: "↗", title: "动态卡片服务", detail: "这些图片由第三方服务实时渲染，不需要 GitHub Action。", status: "无需配置" });
  if (types.has("activity")) {
    const customEndpoint = state.blocks.filter(block => block.type === "activity").every(block => safeRemoteEndpoint(block.props.endpoint, ACTIVITY_GRAPH_ENDPOINT) !== ACTIVITY_GRAPH_ENDPOINT);
    checks.push({ level: "setup", icon: "!", title: "贡献活动", detail: customEndpoint ? "正在使用自定义图表接口；请确认预览成功后再发布。" : "上游公开部署当前已停用；添加 GitHub Action 无法修复，请等待服务恢复或填写自部署的 /graph 地址。", status: customEndpoint ? "检查接口" : "服务不可用" });
  }
  if (types.has("snake")) checks.push({ level: "action", icon: "◆", title: "贡献贪吃蛇", detail: "ZIP 将包含每日生成 SVG 的 GitHub Actions 工作流。", status: "需要 Action" });
  if (types.has("metrics")) checks.push({ level: "action", icon: "M", title: "Metrics 信息图", detail: "ZIP 将包含工作流；运行前需添加 METRICS_TOKEN 仓库密钥。", status: "Action + 密钥" });
  if (types.has("contrib3d")) checks.push({ level: "action", icon: "3D", title: "3D 贡献图", detail: "ZIP 将包含每日生成并提交 3D SVG 的工作流。", status: "需要 Action" });
  if (types.has("spaceshooter")) checks.push({ level: "action", icon: "SS", title: "贡献太空射击", detail: "ZIP 将包含每日生成游戏 GIF 或 WebP 的工作流。", status: "需要 Action" });
  if (types.has("terminal")) checks.push({ level: "setup", icon: ">_", title: "终端动图", detail: "需要先用原项目生成 GIF，再把文件或 URL 提供给 README。", status: "需要生成" });
  if (types.has("spotify")) {
    const configured = state.blocks.filter(block => block.type === "spotify").every(block => spotifyUidConfigured(block.props.uid));
    checks.push({ level: "setup", icon: "!", title: "Spotify 正在播放", detail: configured ? "已填写 UID；如果预览失败，请重新绑定或刷新 Spotify 授权。" : "当前仍是占位 UID；请先绑定 Spotify，再填写服务提供的真实 UID。", status: configured ? "检查授权" : "需要绑定" });
  }
  if (types.has("custom")) checks.push({ level: "setup", icon: "?", title: "自定义 Markdown", detail: "画布只显示源码，不加载其中的图片或 HTML；导出时会原样保留。", status: "源码预览" });
  return checks;
}

function renderExportChecklist() {
  $("#export-checklist").innerHTML = getExportChecks().map(item => `<div class="export-check-item ${item.level}">
    <span class="export-check-icon" aria-hidden="true">${item.icon}</span>
    <span class="export-check-copy"><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(item.detail)}</small></span>
    <span class="export-status">${escapeHTML(item.status)}</span>
  </div>`).join("");
}

function safeGitRef(value) {
  const cleaned = String(value || "output").trim().replace(/[^A-Za-z0-9._/-]/g, "-").replace(/\/{2,}/g, "/").replace(/^[-/.]+|[-/.]+$/g, "");
  return cleaned && !cleaned.includes("..") ? cleaned : "output";
}

function safeRelativePath(value, fallback) {
  const cleaned = String(value || fallback).trim().replace(/[^A-Za-z0-9._/-]/g, "-").replace(/\/{2,}/g, "/").replace(/^\/+/, "");
  return cleaned && !cleaned.includes("..") ? cleaned : fallback;
}

function generateSnakeWorkflow() {
  const blocks = state.blocks.filter(block => block.type === "snake");
  const groups = [];
  blocks.forEach(block => {
    const branch = safeGitRef(block.props.branch);
    let group = groups.find(item => item.branch === branch);
    if (!group) {
      group = { branch, directory: blocks.length === 1 ? "dist" : `dist-snake-${groups.length + 1}`, blocks: [] };
      groups.push(group);
    }
    group.blocks.push(block);
  });
  const workflow = [
    "name: Generate contribution snake",
    "",
    "on:",
    "  schedule:",
    "    - cron: \"0 0 * * *\"",
    "  workflow_dispatch:",
    "",
    "jobs:",
    "  generate:",
    "    permissions:",
    "      contents: write",
    "    runs-on: ubuntu-latest",
    "    timeout-minutes: 10",
    "    steps:"
  ];
  groups.forEach(group => {
    group.blocks.forEach(block => {
      const names = snakeAssetNames(block);
      workflow.push(
        `      - name: Generate snake for ${safeGithubUser(block.props.username)}`,
        "        uses: Platane/snk/svg-only@v3",
        "        with:",
        `          github_user_name: ${safeGithubUser(block.props.username)}`,
        "          outputs: |",
        `            ${group.directory}/${names.light}`,
        `            ${group.directory}/${names.dark}?palette=github-dark`,
        ""
      );
    });
    workflow.push(
      `      - name: Publish SVG files to ${group.branch}`,
      "        uses: crazy-max/ghaction-github-pages@v3.1.0",
      "        with:",
      `          target_branch: ${group.branch}`,
      `          build_dir: ${group.directory}`,
      "        env:",
      "          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}",
      ""
    );
  });
  return workflow.join("\n");
}

function generateMetricsWorkflow() {
  const blocks = state.blocks.filter(item => item.type === "metrics");
  const workflow = [
    "name: GitHub Metrics",
    "",
    "on:",
    "  schedule:",
    "    - cron: \"0 0 * * *\"",
    "  workflow_dispatch:",
    "",
    "jobs:",
    "  github-metrics:",
    "    runs-on: ubuntu-latest",
    "    permissions:",
    "      contents: write",
    "    steps:"
  ];
  blocks.forEach(block => {
    workflow.push(
      `      - name: Generate ${resolvedOutputPath(block, "filename", "github-metrics.svg")}`,
      "        uses: lowlighter/metrics@latest",
      "        with:",
      "          token: ${{ secrets.METRICS_TOKEN }}",
      `          user: ${safeGithubUser(block.props.username)}`,
      `          filename: ${resolvedOutputPath(block, "filename", "github-metrics.svg")}`,
      ""
    );
  });
  return workflow.join("\n");
}

function generateContrib3dWorkflow() {
  const groups = contrib3dGroups();
  const workflow = [
    "name: GitHub Profile 3D Contrib",
    "",
    "on:",
    "  schedule:",
    "    - cron: \"0 18 * * *\"",
    "  workflow_dispatch:",
    "",
    "permissions:",
    "  contents: write",
    "",
    "jobs:",
    "  build:",
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/checkout@v5"
  ];
  groups.forEach(group => {
    workflow.push(
      `      - name: Generate 3D contributions for ${group.username}`,
      "        uses: yoshi389111/github-profile-3d-contrib@latest",
      "        env:",
      "          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}",
      `          USERNAME: ${group.username}`
    );
    if (groups.length > 1) workflow.push(
      `      - name: Store ${group.username} output`,
      "        run: |",
      `          rm -rf ${group.directory}`,
      `          mv profile-3d-contrib ${group.directory}`
    );
  });
  workflow.push(
    "      - name: Commit and push",
    "        run: |",
    "          git config user.name github-actions",
    "          git config user.email github-actions@github.com",
    "          git add -A .",
    "          if git commit -m \"chore: update 3D contribution graph\"; then",
    "            git push",
    "          fi",
    ""
  );
  return workflow.join("\n");
}

function generateSpaceShooterWorkflow() {
  const blocks = state.blocks.filter(item => item.type === "spaceshooter");
  const workflow = [
    "name: Update Space Shooter Game",
    "",
    "on:",
    "  schedule:",
    "    - cron: \"0 0 * * *\"",
    "  workflow_dispatch:",
    "",
    "permissions:",
    "  contents: write",
    "",
    "jobs:",
    "  update-game:",
    "    runs-on: ubuntu-latest",
    "    steps:",
    "      - uses: actions/checkout@v6",
    "        with:",
    "          fetch-depth: 2"
  ];
  blocks.forEach(block => {
    const output = resolvedOutputPath(block, "output", "game.gif");
    const strategy = ["random", "column", "row"].includes(block.props.strategy) ? block.props.strategy : "random";
    workflow.push(
      `      - name: Generate ${output}`,
      "        uses: czl9707/gh-space-shooter@v2",
      "        with:",
      "          github-token: ${{ secrets.GITHUB_TOKEN }}",
      `          username: ${safeGithubUser(block.props.username)}`,
      `          output-path: ${output}`,
      `          strategy: ${strategy}`,
      `          commit-message: "chore: update ${output}"`,
      ""
    );
  });
  return workflow.join("\n");
}

function generateSetupGuide() {
  const username = state.profile.login || "your-username";
  const hasSnake = state.blocks.some(block => block.type === "snake");
  const hasActivity = state.blocks.some(block => block.type === "activity");
  const hasMetrics = state.blocks.some(block => block.type === "metrics");
  const hasContrib3d = state.blocks.some(block => block.type === "contrib3d");
  const hasSpaceShooter = state.blocks.some(block => block.type === "spaceshooter");
  const hasTerminal = state.blocks.some(block => block.type === "terminal");
  const hasSpotify = state.blocks.some(block => block.type === "spotify");
  const hasCustom = state.blocks.some(block => block.type === "custom");
  const sections = [
    "# GitHub Profile README 配置说明",
    "",
    `1. 在 GitHub 创建或打开名为 \`${username}\` 的公开仓库。仓库名需要与用户名完全相同。`,
    "2. 把 `README.md` 放在仓库根目录并提交。"
  ];
  if (hasSnake) sections.push(
    "",
    "## 贡献贪吃蛇",
    "",
    "1. 保留 `.github/workflows/snake.yml` 的目录结构并提交。",
    "2. 在仓库的 Settings → Actions → General 中允许工作流拥有读写权限。",
    "3. 打开 Actions，手动运行一次 Generate contribution snake。之后工作流会每天自动更新。",
    "4. 首次运行完成后，README 中的贪吃蛇图片才会出现。"
  );
  if (hasActivity) sections.push(
    "",
    "## 贡献活动",
    "",
    "默认的公开图表部署目前不可用，而且不由仓库内的 GitHub Action 生成。可以等待上游恢复，或自部署服务后在组件属性中填写完整的 `/graph` 接口地址。发布前请确认真实预览已经成功加载。"
  );
  if (hasMetrics) sections.push(
    "",
    "## Metrics 信息图",
    "",
    "1. 保留 `.github/workflows/metrics.yml` 并提交。",
    "2. 创建权限尽量精简的 GitHub Personal Access Token。",
    "3. 在仓库 Settings → Secrets and variables → Actions 中新增名为 `METRICS_TOKEN` 的密钥。",
    "4. 手动运行一次 GitHub Metrics 工作流。"
  );
  if (hasContrib3d) sections.push(
    "",
    "## 3D 贡献图",
    "",
    "保留 `.github/workflows/profile-3d.yml` 并提交，然后在 Actions 中手动运行一次 GitHub Profile 3D Contrib。"
  );
  if (hasSpaceShooter) sections.push(
    "",
    "## 贡献太空射击",
    "",
    "保留 `.github/workflows/space-shooter.yml` 并提交，然后手动运行一次 Update Space Shooter Game。"
  );
  if (hasTerminal) sections.push(
    "",
    "## 终端动图",
    "",
    "按照 https://github.com/x0rzavi/github-readme-terminal 的说明生成 GIF，并把文件提交到仓库，或在组件属性中填写可公开访问的图片 URL。相对路径会从同名主页仓库的默认分支读取；文件不存在时，画布会显示待生成提示。"
  );
  if (hasSpotify) sections.push(
    "",
    "## Spotify 正在播放",
    "",
    "请先访问 https://spotify-github-profile.kittinanx.com/ 完成 Spotify 账号绑定，并确认组件中的 UID 正确。占位 UID 不会导出损坏的图片，只会留下配置注释。"
  );
  if (hasCustom) sections.push(
    "",
    "## 自定义 Markdown",
    "",
    "画布仅显示 Markdown 源码，不会加载其中的图片或 HTML。请自行检查引用的外部图片、服务、密钥或额外工作流；Readme Studio 会原样导出这部分内容。"
  );
  sections.push("", "## 说明", "", "统计卡片、连续贡献、奖杯等动态图片由第三方服务提供，通常不需要仓库内的 GitHub Action，但服务短暂不可用时图片可能无法加载。", "");
  return sections.join("\n");
}

function getProjectFiles({ includeSetup = true } = {}) {
  const files = [{ name: "README.md", content: `${generateMarkdown()}\n` }];
  if (includeSetup) files.push({ name: "SETUP.md", content: generateSetupGuide() });
  if (state.blocks.some(block => block.type === "snake")) files.push({ name: ".github/workflows/snake.yml", content: generateSnakeWorkflow() });
  if (state.blocks.some(block => block.type === "metrics")) files.push({ name: ".github/workflows/metrics.yml", content: generateMetricsWorkflow() });
  if (state.blocks.some(block => block.type === "contrib3d")) files.push({ name: ".github/workflows/profile-3d.yml", content: generateContrib3dWorkflow() });
  if (state.blocks.some(block => block.type === "spaceshooter")) files.push({ name: ".github/workflows/space-shooter.yml", content: generateSpaceShooterWorkflow() });
  return files;
}

function beginGitHubLogin() {
  if (!API_BASE_URL) {
    showToast("一键发布后端尚未配置，仍可下载 ZIP");
    return;
  }
  lastPublishError = "";
  const returnTo = `${location.origin}${location.pathname}${location.search}`;
  location.assign(`${API_BASE_URL}/auth/start?return_to=${encodeURIComponent(returnTo)}`);
}

function renderPublishPanel() {
  const panel = $("#publish-panel");
  const topButton = $("#github-login");
  const topLabel = $("#github-login-label");
  const action = $("#publish-action");
  const title = $("#publish-title");
  const description = $("#publish-description");
  const result = $("#publish-result");
  if (!panel || !topButton || !action) return;

  const connected = Boolean(publishSession);
  panel.classList.toggle("connected", connected);
  topButton.classList.toggle("connected", connected);
  topLabel.textContent = connected ? `@${publishSession.login}` : "连接 GitHub";
  result.hidden = !lastPublishedUrl;
  if (lastPublishedUrl) result.href = lastPublishedUrl;

  if (connected) {
    title.textContent = `已安全连接 @${publishSession.login}`;
    description.textContent = `只会更新 ${publishSession.login}/${publishSession.login}；短期令牌仅限该仓库，发布后自动卸载 App。`;
    action.textContent = `发布到 ${publishSession.login}/${publishSession.login}`;
    action.disabled = false;
  } else if (lastPublishError) {
    title.textContent = "GitHub App 安装未完成";
    description.textContent = lastPublishError;
    action.textContent = "重新安装";
    action.disabled = false;
  } else if (lastPublishedUrl) {
    title.textContent = lastInstallationRemoved ? "发布完成，GitHub App 已卸载" : "发布完成，请检查 GitHub App 安装";
    description.textContent = lastInstallationRemoved
      ? "短期安装令牌已结束，Readme Studio 已解除对仓库的访问；再次发布时需要重新安装。"
      : "自动卸载未得到 GitHub 确认，请在 GitHub Settings → Applications 中手动卸载 Readme Studio。";
    action.textContent = "再次安装并发布";
    action.disabled = false;
  } else {
    title.textContent = "安装 GitHub App 后安全发布";
    description.textContent = API_BASE_URL
      ? "请先创建与你用户名同名的公开仓库；安装时只选择该仓库，发布后自动卸载 App。"
      : "后端地址尚未配置；编辑和下载功能不受影响。";
    action.textContent = "安装并发布";
    action.disabled = false;
  }
}

async function publishToGitHub() {
  if (!publishSession) {
    beginGitHubLogin();
    return;
  }
  const button = $("#publish-action");
  button.disabled = true;
  button.textContent = "正在安全发布…";
  try {
    const response = await fetch(`${API_BASE_URL}/api/publish`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${publishSession.id}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ files: getProjectFiles({ includeSetup: false }) })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "发布失败，请重新安装 GitHub App 后再试");
    lastPublishedUrl = data.repositoryUrl || `https://github.com/${publishSession.login}/${publishSession.login}`;
    lastInstallationRemoved = data.installationRemoved !== false;
    lastPublishError = "";
    clearPublishSession();
    renderPublishPanel();
    showToast(lastInstallationRemoved ? "已发布到 GitHub，App 已自动卸载" : "发布完成，请手动检查 GitHub App 安装");
  } catch (error) {
    clearPublishSession();
    lastPublishError = error.message || "发布失败，会话已结束，请检查 GitHub App 安装";
    renderPublishPanel();
    showToast(lastPublishError);
  } finally {
    button.disabled = false;
  }
}

function crc32(bytes) {
  if (!crc32.table) crc32.table = Array.from({ length: 256 }, (_, index) => {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) value = (value & 1) ? (0xEDB88320 ^ (value >>> 1)) : (value >>> 1);
    return value >>> 0;
  });
  let crc = 0xFFFFFFFF;
  bytes.forEach(byte => { crc = crc32.table[(crc ^ byte) & 0xFF] ^ (crc >>> 8); });
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function createZip(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  const now = new Date();
  const dosTime = ((now.getHours() & 31) << 11) | ((now.getMinutes() & 63) << 5) | ((now.getSeconds() / 2) & 31);
  const dosDate = (((now.getFullYear() - 1980) & 127) << 9) | (((now.getMonth() + 1) & 15) << 5) | (now.getDate() & 31);

  files.forEach(file => {
    const name = encoder.encode(file.name);
    const data = encoder.encode(file.content);
    const checksum = crc32(data);
    const local = new Uint8Array(30 + name.length + data.length);
    const localView = new DataView(local.buffer);
    localView.setUint32(0, 0x04034B50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(6, 0x0800, true);
    localView.setUint16(8, 0, true);
    localView.setUint16(10, dosTime, true);
    localView.setUint16(12, dosDate, true);
    localView.setUint32(14, checksum, true);
    localView.setUint32(18, data.length, true);
    localView.setUint32(22, data.length, true);
    localView.setUint16(26, name.length, true);
    local.set(name, 30);
    local.set(data, 30 + name.length);
    localParts.push(local);

    const central = new Uint8Array(46 + name.length);
    const centralView = new DataView(central.buffer);
    centralView.setUint32(0, 0x02014B50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(8, 0x0800, true);
    centralView.setUint16(10, 0, true);
    centralView.setUint16(12, dosTime, true);
    centralView.setUint16(14, dosDate, true);
    centralView.setUint32(16, checksum, true);
    centralView.setUint32(20, data.length, true);
    centralView.setUint32(24, data.length, true);
    centralView.setUint16(28, name.length, true);
    centralView.setUint32(42, offset, true);
    central.set(name, 46);
    centralParts.push(central);
    offset += local.length;
  });

  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  endView.setUint32(0, 0x06054B50, true);
  endView.setUint16(8, files.length, true);
  endView.setUint16(10, files.length, true);
  endView.setUint32(12, centralSize, true);
  endView.setUint32(16, offset, true);
  return new Blob([...localParts, ...centralParts, end], { type: "application/zip" });
}

function downloadProject() {
  const files = getProjectFiles();
  const blob = createZip(files);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const username = String(state.profile.login || "github-profile").replace(/[^A-Za-z0-9._-]/g, "-");
  link.href = url;
  link.download = `${username}-github-profile.zip`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("完整项目 ZIP 已下载");
}

function renderProfile() {
  const p = state.profile;
  $("#username").value = p.login;
  $("#profile-avatar").src = p.avatar_url || `https://github.com/${encodeURIComponent(p.login)}.png`;
  $("#profile-name").textContent = p.name || p.login;
  $("#profile-login").textContent = p.login;
  $("#profile-bio").textContent = p.bio || "No bio yet.";
  $("#followers-count").textContent = formatNumber(p.followers || 0);
  $("#following-count").textContent = formatNumber(p.following || 0);
  $("#repo-owner").textContent = p.login;
  const meta = document.querySelectorAll(".profile-meta span");
  meta[0].textContent = `⌂ ${p.location || "Somewhere on GitHub"}`;
  meta[1].textContent = `⌁ ${p.blog || "github.com"}`;
}

function formatNumber(value) {
  return value >= 1000 ? `${(value / 1000).toFixed(value >= 10000 ? 1 : 2).replace(/\.0+$/, "")}k` : String(value);
}

async function loadProfile() {
  const username = $("#username").value.trim().replace(/^@/, "");
  if (!username) return;
  const button = $("#load-profile");
  button.disabled = true;
  button.textContent = "载入中…";
  try {
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, { headers: { Accept: "application/vnd.github+json" } });
    if (!response.ok) throw new Error("not found");
    const data = await response.json();
    state.profile = data;
    state.blocks.forEach(block => { if ("username" in block.props) block.props.username = data.login; });
    render(); persist(); showToast(`已载入 @${data.login}`);
  } catch (_) {
    showToast("没有找到这个 GitHub 用户，已保留当前画布");
  } finally {
    button.disabled = false;
    button.textContent = "载入资料";
  }
}

function renderAcknowledgements() {
  const container = $("#acknowledgement-links");
  if (!container) return;
  container.innerHTML = ACKNOWLEDGEMENTS.map(item => `<a href="${item.repo}" target="_blank" rel="noreferrer">${escapeHTML(item.name)} <span aria-hidden="true">↗</span></a>`).join("");
}

function render() {
  document.body.classList.toggle("light-app", state.lightApp);
  $("#theme-toggle").innerHTML = state.lightApp ? UI_ICONS.sun : UI_ICONS.moon;
  $("#theme-toggle").setAttribute("aria-label", state.lightApp ? "切换为深色主题" : "切换为浅色主题");
  $("#theme-toggle").title = state.lightApp ? "切换为深色主题" : "切换为浅色主题";
  $("#profile-frame").dataset.device = state.device;
  $("#profile-frame").dataset.density = DENSITY_PRESETS[state.style.density]?.id || "balanced";
  const recipe = LAYOUT_RECIPES[state.style.layout] || LAYOUT_RECIPES[0];
  const theme = COLOR_THEMES[state.style.theme] || COLOR_THEMES[0];
  const mood = MOOD_PACKS[state.style.mood] || MOOD_PACKS[0];
  const density = DENSITY_PRESETS[state.style.density] || DENSITY_PRESETS[1];
  const combination = state.style.layout * COLOR_THEMES.length * MOOD_PACKS.length * DENSITY_PRESETS.length + state.style.theme * MOOD_PACKS.length * DENSITY_PRESETS.length + state.style.mood * DENSITY_PRESETS.length + state.style.density + 1;
  const totalCombinations = LAYOUT_RECIPES.length * COLOR_THEMES.length * MOOD_PACKS.length * DENSITY_PRESETS.length;
  $("#style-label").textContent = `${recipe.name} · ${theme.name} · ${mood.name} · ${density.name}　${combination}/${totalCombinations}`;
  document.querySelectorAll(".segment").forEach(button => button.classList.toggle("active", button.dataset.view === state.view));
  document.querySelectorAll(".device-button").forEach(button => button.classList.toggle("active", button.dataset.device === state.device));
  renderProfile(); renderCanvas(); renderSettings();
  renderPublishPanel();
}

function bindEvents() {
  const settingsDialog = $("#settings-dialog");
  const exportDialog = $("#export-dialog");
  const openDialog = dialog => {
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  };
  const closeDialog = dialog => {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  };
  const openSettings = () => {
    openDialog(settingsDialog);
  };
  $("#settings-button").addEventListener("click", openSettings);
  $("#settings-dialog-close").addEventListener("click", () => closeDialog(settingsDialog));
  $("#export-dialog-close").addEventListener("click", () => closeDialog(exportDialog));
  [settingsDialog, exportDialog].forEach(dialog => dialog.addEventListener("click", event => { if (event.target === dialog) closeDialog(dialog); }));
  $("#component-search").addEventListener("input", event => renderComponentLibrary(event.target.value));
  $("#random-style").addEventListener("click", () => randomizeStyle("all"));
  $("#random-menu-toggle").addEventListener("click", event => {
    event.stopPropagation();
    const menu = $("#random-menu");
    menu.hidden = !menu.hidden;
    $("#random-menu-toggle").setAttribute("aria-expanded", String(!menu.hidden));
  });
  document.querySelectorAll("[data-random-mode]").forEach(button => button.addEventListener("click", () => {
    randomizeStyle(button.dataset.randomMode);
    $("#random-menu").hidden = true;
    $("#random-menu-toggle").setAttribute("aria-expanded", "false");
  }));
  document.addEventListener("click", event => {
    if (event.target.closest(".random-wrap")) return;
    $("#random-menu").hidden = true;
    $("#random-menu-toggle").setAttribute("aria-expanded", "false");
  });
  $("#load-profile").addEventListener("click", loadProfile);
  $("#username").addEventListener("keydown", event => { if (event.key === "Enter") loadProfile(); });
  $("#theme-toggle").addEventListener("click", () => { state.lightApp = !state.lightApp; render(); persist(); });
  $("#github-login").addEventListener("click", () => {
    if (publishSession) {
      renderExportChecklist(); renderPublishPanel(); openDialog(exportDialog);
    } else beginGitHubLogin();
  });
  $("#export-button").addEventListener("click", () => { renderExportChecklist(); renderPublishPanel(); openDialog(exportDialog); });
  $("#publish-action").addEventListener("click", publishToGitHub);
  $("#copy-readme").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(generateMarkdown()); showToast("README Markdown 已复制"); }
    catch (_) { showToast("复制失败，请切换到 Markdown 手动复制"); }
  });
  $("#download-project").addEventListener("click", downloadProject);
  $("#delete-block").addEventListener("click", () => removeBlock(state.selectedId));
  $("#reset-button").addEventListener("click", () => {
    state.blocks = DEMO_BLOCKS.map(block => ({ ...block, id: id(), props: { ...block.props, ...(block.props.username ? { username: state.profile.login } : {}) } }));
    state.style = { layout: 0, theme: 0, mood: 0, density: 1 };
    state.lightApp = false;
    state.selectedId = state.blocks[0].id;
    render(); persist(); showToast("已恢复示例布局");
  });
  document.querySelectorAll(".segment").forEach(button => button.addEventListener("click", () => { state.view = button.dataset.view; render(); }));
  document.querySelectorAll(".device-button").forEach(button => button.addEventListener("click", () => { state.device = button.dataset.device; render(); }));
  const zone = $("#drop-zone");
  zone.addEventListener("dragover", event => { event.preventDefault(); zone.classList.add("drag-over"); });
  zone.addEventListener("dragleave", event => { if (!zone.contains(event.relatedTarget)) zone.classList.remove("drag-over"); });
  zone.addEventListener("drop", event => { event.preventDefault(); zone.classList.remove("drag-over"); handleDrop(event, state.blocks.length); });
  zone.addEventListener("click", () => { state.selectedId = null; renderCanvas(); renderSettings(); });
}

restorePublishSession();
const returnedFromGitHub = handleAuthReturn();
restore();
renderComponentLibrary();
renderAcknowledgements();
bindEvents();
render();
if (returnedFromGitHub) $("#export-button").click();

const modelContext = typeof document === "undefined" ? undefined : document.modelContext;
if (modelContext?.registerTool) {
  modelContext.registerTool({
    name: "add_readme_component",
    title: "添加 README 组件",
    description: "Add a component to the GitHub Profile README canvas.",
    inputSchema: { type: "object", properties: { type: { type: "string", enum: COMPONENTS.map(item => item.type) } }, required: ["type"], additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute: ({ type }) => {
      if (!COMPONENTS.some(item => item.type === type)) throw new Error("Unsupported component type");
      addBlock(type);
      return { componentType: type, componentCount: state.blocks.length };
    }
  });
  modelContext.registerTool({
    name: "randomize_readme_style",
    title: "随机 README 风格",
    description: "Randomize the README layout, color theme, mood, or all three while preserving locked components.",
    inputSchema: { type: "object", properties: { mode: { type: "string", enum: ["all", "layout", "theme", "mood", "density"] } }, required: ["mode"], additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute: ({ mode }) => {
      if (!["all", "layout", "theme", "mood", "density"].includes(mode)) throw new Error("Unsupported random mode");
      randomizeStyle(mode);
      return { mode, layout: LAYOUT_RECIPES[state.style.layout].name, theme: COLOR_THEMES[state.style.theme].name, mood: MOOD_PACKS[state.style.mood].name, density: DENSITY_PRESETS[state.style.density].name, componentCount: state.blocks.length };
    }
  });
  modelContext.registerTool({
    name: "get_readme_markdown",
    title: "读取 README Markdown",
    description: "Return the Markdown generated by the current README canvas.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: true },
    execute: () => ({ markdown: generateMarkdown(), componentCount: state.blocks.length })
  });
}
