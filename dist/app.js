const COMPONENTS = [
  { type: "hero", group: "基础", icon: "H", label: "欢迎标题", desc: "问候语与个人定位", defaults: { title: "Hi, I'm The Octocat 👋", subtitle: "Open source explorer · Builder · Curious mind", align: "center" } },
  { type: "typing", group: "基础", icon: "⌨", label: "打字动画", desc: "循环展示多个身份", defaults: { lines: "Open Source Explorer,Creative Developer,Always Learning", color: "58A6FF", align: "center" } },
  { type: "capsule", group: "基础", icon: "⌒", label: "动态页头", desc: "Capsule 渐变横幅", defaults: { title: "Welcome to my profile", subtitle: "Build · Learn · Share", color: "gradient", height: "180", align: "center" } },
  { type: "about", group: "基础", icon: "☰", label: "关于我", desc: "用要点介绍自己", defaults: { heading: "About me", text: "🔭 Building delightful developer tools\n🌱 Learning something new every day\n💬 Ask me about open source", align: "left" } },
  { type: "skills", group: "展示", icon: "◆", label: "技术栈", desc: "语言与工具徽章", defaults: { heading: "Languages and tools", items: "TypeScript,React,Node.js,Python,Figma,Git", style: "flat", align: "left" } },
  { type: "stats", group: "展示", icon: "▥", label: "GitHub 统计", desc: "统计与常用语言", defaults: { heading: "GitHub stats", username: "octocat", theme: "github_dark", align: "center" } },
  { type: "streak", group: "展示", icon: "⌁", label: "连续贡献", desc: "提交连续天数", defaults: { username: "octocat", theme: "github-dark-blue", align: "center" } },
  { type: "trophy", group: "展示", icon: "♜", label: "成就奖杯", desc: "Profile Trophy 排列", defaults: { username: "octocat", theme: "onedark", align: "center" } },
  { type: "activity", group: "展示", icon: "▦", label: "贡献活动", desc: "活动图表组件", defaults: { heading: "Contribution activity", username: "octocat", color: "7C5CFF", align: "center" } },
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
  trophy: [["username", "GitHub 用户名", "text"], ["theme", "奖杯主题", "select", "", ["onedark", "darkhub", "discord", "flat"]]],
  activity: [["heading", "区块标题", "text"], ["username", "GitHub 用户名", "text"], ["color", "强调色（HEX）", "text"]],
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
  snake: { level: "action", label: "需要 Action" },
  metrics: { level: "action", label: "需要 Action" },
  contrib3d: { level: "action", label: "需要 Action" },
  spaceshooter: { level: "action", label: "需要 Action" },
  terminal: { level: "setup", label: "需要生成" },
  spotify: { level: "setup", label: "需要配置" },
  custom: { level: "setup", label: "检查依赖" }
};

const dependencyFor = type => DEPENDENCY_TYPES[type] || { level: "direct", label: "直接可用" };

const SOURCE_META = {
  typing: { repo: "https://github.com/DenverCoder1/readme-typing-svg", name: "DenverCoder1/readme-typing-svg", intro: "把多段文字渲染成可嵌入 README 的动态打字 SVG。" },
  capsule: { repo: "https://github.com/kyechan99/capsule-render", name: "kyechan99/capsule-render", intro: "通过 URL 参数生成波浪、渐变等动态页头。" },
  skills: { repo: "https://github.com/badges/shields", name: "badges/shields", intro: "为技术栈和社交链接生成一致的状态徽章。" },
  social: { repo: "https://github.com/badges/shields", name: "badges/shields", intro: "使用 Shields 徽章生成一致的社交链接入口。" },
  stats: { repo: "https://github.com/anuraghazra/github-readme-stats", name: "anuraghazra/github-readme-stats", intro: "动态展示 GitHub 统计数据和常用语言。" },
  streak: { repo: "https://github.com/DenverCoder1/github-readme-streak-stats", name: "DenverCoder1/github-readme-streak-stats", intro: "生成连续贡献天数与历史记录卡片。" },
  trophy: { repo: "https://github.com/ryo-ma/github-profile-trophy", name: "ryo-ma/github-profile-trophy", intro: "把 GitHub 活跃数据转换成可展示的奖杯。" },
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
  { name: "数据仪表盘", blocks: [["hero"], ["summary"], ["stats"], ["streak"], ["trophy"], ["visitor"]] },
  { name: "开源贡献者", blocks: [["capsule"], ["about"], ["activity"], ["snake"], ["stats"], ["social"]] },
  { name: "求职简历", blocks: [["hero"], ["about"], ["skills"], ["summary"], ["divider"], ["social"]] },
  { name: "创作者主页", blocks: [["capsule"], ["typing"], ["about"], ["spotify"], ["quote"], ["social"]] },
  { name: "技术专家", blocks: [["hero"], ["skills"], ["stats"], ["activity"], ["summary"], ["social"]] },
  { name: "社区建设者", blocks: [["hero"], ["about"], ["trophy"], ["streak"], ["visitor"], ["social"]] },
  { name: "视觉实验室", blocks: [["capsule"], ["typing"], ["skills"], ["activity"], ["quote"], ["visitor"]] },
  { name: "编辑手记", blocks: [["hero"], ["quote"], ["about"], ["divider", { spacing: "large" }], ["stats"], ["social"]] },
  { name: "紧凑徽章", blocks: [["hero"], ["skills", { style: "for-the-badge" }], ["summary"], ["trophy"], ["visitor"], ["social"]] },
  { name: "立体贡献者", blocks: [["hero"], ["contrib3d"], ["stats"], ["trophy"], ["social"]] },
  { name: "数据宇航员", blocks: [["capsule"], ["metrics"], ["spaceshooter"], ["skills"], ["social"]] }
];

const COLOR_THEMES = [
  { name: "GitHub", light: false, accent: "58A6FF", stats: "github_dark", summary: "github_dark", streak: "github-dark-blue", trophy: "darkhub", capsule: "0:0D1117,100:1F6FEB" },
  { name: "Nord", light: true, accent: "5E81AC", stats: "nord", summary: "nord_dark", streak: "nord", trophy: "flat", capsule: "0:2E3440,100:88C0D0" },
  { name: "Tokyo Night", light: false, accent: "7AA2F7", stats: "tokyonight", summary: "tokyonight", streak: "tokyonight", trophy: "onedark", capsule: "0:1A1B26,100:7AA2F7" },
  { name: "Dracula", light: false, accent: "BD93F9", stats: "radical", summary: "dracula", streak: "radical", trophy: "discord", capsule: "0:282A36,100:BD93F9" },
  { name: "Clear Sky", light: true, accent: "0969DA", stats: "transparent", summary: "transparent", streak: "transparent", trophy: "flat", capsule: "0:54AEFF,100:8250DF" }
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
let lastAuthorizationRevoked = true;

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
    showToast(`已连接 GitHub @${login}`);
  } else {
    clearPublishSession();
    setTimeout(() => showToast(error || "GitHub 授权没有完成"), 0);
  }
  return true;
}

function persist() {
  localStorage.setItem("readme-studio-state", JSON.stringify({ blocks: state.blocks, profile: state.profile, lightApp: state.lightApp, style: state.style }));
}

function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem("readme-studio-state"));
    if (saved?.blocks?.length) state.blocks = saved.blocks;
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
          <span class="component-copy"><strong>${escapeHTML(item.label)}</strong><small>${escapeHTML(item.desc)}</small><em class="dependency-badge dependency-${dependencyFor(item.type).level}">${dependencyFor(item.type).label}</em></span>
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
    if (block.type === "trophy") block.props.theme = theme.trophy;
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
  state.lightApp = theme.light;
  state.view = "preview";
  render();
  persist();
  const density = DENSITY_PRESETS[state.style.density];
  const modeLabel = { all: "随机组合", layout: "布局", theme: "配色", mood: "气质", density: "密度" }[mode];
  showToast(`${modeLabel}：${recipe.name} · ${theme.name} · ${mood.name} · ${density.name}`);
}

function blockPreview(block) {
  const p = block.props;
  const align = ["left", "center", "right"].includes(p.align) ? p.align : "left";
  const safeColor = /^([0-9a-f]{3}|[0-9a-f]{6})$/i.test(p.color || "") ? p.color : "7C5CFF";
  let content = "";
  if (block.type === "hero") content = `<div class="hero-block"><h1>${escapeHTML(p.title)}</h1><p>${escapeHTML(p.subtitle)}</p></div>`;
  if (block.type === "typing") content = `<div class="typing-placeholder"><span>${escapeHTML(csv(p.lines)[0] || "Always learning")}</span><i class="typing-caret"></i></div>`;
  if (block.type === "capsule") content = `<div class="capsule-preview" style="--capsule-height:${Math.max(100, Math.min(240, Number(p.height) || 180))}px"><div><strong>${escapeHTML(p.title)}</strong><span>${escapeHTML(p.subtitle)}</span></div></div>`;
  if (block.type === "about") content = `<h2>${escapeHTML(p.heading)}</h2><ul class="about-list">${lines(p.text).map(line => `<li>${escapeHTML(line)}</li>`).join("")}</ul>`;
  if (block.type === "skills") content = `<h2>${escapeHTML(p.heading)}</h2><div class="badge-row">${csv(p.items).map((item, index) => `<span class="tech-badge" style="--badge:${["#3178c6", "#61dafb", "#5fa04e", "#3776ab", "#f24e1e", "#f05032"][index % 6]}">${escapeHTML(item)}</span>`).join("")}</div>`;
  if (block.type === "stats") content = `<h2>${escapeHTML(p.heading)}</h2><div class="stat-cards"><div class="stat-card"><strong>${escapeHTML(p.username)}'s GitHub Stats</strong><div class="stat-number">2,486</div><p class="muted">Total contributions this year</p></div><div class="stat-card"><strong>Most used languages</strong><div class="stat-lines"><i style="--w:78%;--c:#3178c6"></i><i style="--w:62%;--c:#f1e05a"></i><i style="--w:38%;--c:#7c3aed"></i><i style="--w:25%;--c:#e34c26"></i></div></div></div>`;
  if (block.type === "streak") content = `<div class="streak-card"><div><strong>1,284</strong><small>Total contributions</small></div><div><strong>27</strong><small>Current streak</small></div><div><strong>89</strong><small>Longest streak</small></div></div>`;
  if (block.type === "trophy") content = `<div class="trophy-row">${[["★","Stars"],["⌁","Commits"],["⌘","Pull requests"],["◈","Repositories"]].map(t => `<div class="trophy"><b>${t[0]}</b>${t[1]}</div>`).join("")}</div>`;
  if (block.type === "activity") content = `<h2>${escapeHTML(p.heading)}</h2><div class="activity-grid">${Array.from({length: 104}, (_, i) => `<i style="--level:${["#161b22",`#${safeColor}35`,`#${safeColor}70`,`#${safeColor}b5`,`#${safeColor}`][(i * 7 + i % 11) % 5]}"></i>`).join("")}</div>`;
  if (block.type === "summary") content = `<div class="summary-card"><div><strong>${escapeHTML(p.username)}</strong><span>Profile details</span></div><div class="summary-metrics"><span><b>1.8k</b> commits</span><span><b>128</b> stars</span><span><b>24</b> repos</span></div><div class="summary-bars"><i></i><i></i><i></i><i></i></div></div>`;
  if (block.type === "snake") content = `<div class="snake-preview"><div class="snake-grid">${Array.from({length: 70}, (_, i) => `<i class="${[8,9,10,11,21,31,32,33,34,35,36,46,56,57,58][i] !== undefined ? "on" : ""}"></i>`).join("")}</div><span class="snake">●━━●━━●</span><small>GitHub contribution snake · ${escapeHTML(p.theme)}</small></div>`;
  if (block.type === "metrics") content = `<div class="metrics-preview"><div><span>METRICS</span><strong>${escapeHTML(p.username)}</strong></div><div class="metrics-grid"><i style="--v:82%"></i><i style="--v:58%"></i><i style="--v:73%"></i><i style="--v:44%"></i></div><small>Activity · Languages · Repositories · Habits</small></div>`;
  if (block.type === "contrib3d") content = `<div class="contrib3d-preview"><div class="contrib3d-grid">${Array.from({length: 84}, (_, i) => `<i style="--h:${5 + ((i * 13) % 26)}px;--o:${.25 + ((i * 7) % 70) / 100}"></i>`).join("")}</div><small>3D contribution calendar · ${escapeHTML(p.theme)}</small></div>`;
  if (block.type === "spaceshooter") content = `<div class="space-preview"><div class="space-stars">${Array.from({length: 24}, (_, i) => `<i style="--x:${(i * 37) % 100}%;--y:${(i * 53) % 100}%"></i>`).join("")}</div><span class="space-ship">△</span><span class="space-shot">····</span><div class="space-blocks">${Array.from({length: 18}, (_, i) => `<i class="${i % 4 ? "on" : ""}"></i>`).join("")}</div><small>Contribution Space Shooter · ${escapeHTML(p.strategy)}</small></div>`;
  if (block.type === "terminal") content = `<div class="terminal-preview"><div class="terminal-top"><i></i><i></i><i></i><span>profile — terminal</span></div><code><b>$</b> github-profile --user ${escapeHTML(state.profile.login || "developer")}<br><span>Loading repositories...</span><br><em>✓ Profile ready</em></code></div>`;
  if (block.type === "social") content = `<h2>${escapeHTML(p.heading)}</h2><div class="social-row">${csv(p.items).map(item => `<span class="social-pill">${escapeHTML(item.split(":")[0])} ↗</span>`).join("")}</div>`;
  if (block.type === "quote") content = `<div class="quote-card">“${escapeHTML(p.text)}”</div>`;
  if (block.type === "visitor") content = `<div class="visitor-counter"><span>${escapeHTML(p.label)}</span><b>12,840</b></div>`;
  if (block.type === "spotify") content = `<div class="spotify-card"><span class="spotify-cover">♫</span><div><small>LISTENING ON SPOTIFY</small><strong>Recently played track</strong><span>${escapeHTML(p.uid)}</span></div><i>•••</i></div>`;
  if (block.type === "divider") content = `<div class="readme-divider" style="margin-block:${p.spacing === "large" ? 22 : p.spacing === "small" ? 4 : 11}px"></div>`;
  if (block.type === "spacer") content = `<div style="height:${Math.max(8, Math.min(120, Number(p.height) || 24))}px"></div>`;
  if (block.type === "custom") content = `<div class="custom-preview">${escapeHTML(p.markdown)}</div>`;
  return `<div class="readme-content" style="text-align:${align}">${content}</div>`;
}

function renderCanvas() {
  const zone = $("#drop-zone");
  if (!state.blocks.length) {
    zone.innerHTML = `<div class="drop-empty"><div><strong>把第一个组件拖到这里</strong><span>从标题、关于我或技术栈开始</span></div></div>`;
  } else {
    zone.innerHTML = state.blocks.map((block, index) => {
      const component = COMPONENTS.find(item => item.type === block.type);
      return `<div class="readme-block ${state.selectedId === block.id ? "selected" : ""}" draggable="true" data-id="${block.id}" data-index="${index}" tabindex="0">
        <button class="block-remove" type="button" draggable="false" data-remove-id="${block.id}" aria-label="删除${escapeHTML(component?.label || block.type)}" title="删除组件">${UI_ICONS.close}</button>
        <button class="block-lock ${block.locked ? "locked" : ""}" type="button" draggable="false" data-lock-id="${block.id}" aria-label="${block.locked ? "解锁" : "锁定"}${escapeHTML(component?.label || block.type)}" aria-pressed="${Boolean(block.locked)}" title="${block.locked ? "解锁，允许随机替换" : "锁定，随机时保留"}">${block.locked ? UI_ICONS.lock : UI_ICONS.unlock}</button>
        <span class="block-tools">⠿ ${escapeHTML(component?.label || block.type)}</span>
        ${blockPreview(block)}
      </div>`;
    }).join("");
  }
  zone.hidden = state.view !== "preview";
  $("#markdown-output").hidden = state.view !== "code";
  $("#markdown-output").textContent = generateMarkdown();
  $("#block-count").textContent = `${state.blocks.length} 个组件`;

  zone.querySelectorAll(".readme-block").forEach(element => {
    const removeButton = element.querySelector(".block-remove");
    const lockButton = element.querySelector(".block-lock");
    removeButton.addEventListener("mousedown", event => event.stopPropagation());
    lockButton.addEventListener("mousedown", event => event.stopPropagation());
    removeButton.addEventListener("click", event => { event.preventDefault(); event.stopPropagation(); removeBlock(removeButton.dataset.removeId); });
    lockButton.addEventListener("click", event => {
      event.preventDefault(); event.stopPropagation();
      const block = state.blocks.find(item => item.id === lockButton.dataset.lockId);
      if (!block) return;
      block.locked = !block.locked;
      renderCanvas(); persist();
      showToast(block.locked ? "组件已锁定，随机时会保留" : "组件已解锁");
    });
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
  container.innerHTML = `<div class="settings-form">
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
  const open = p.align && p.align !== "left" ? `<div align="${p.align}">\n\n` : "";
  const close = open ? "\n\n</div>" : "";
  let md = "";
  if (block.type === "hero") md = `# ${p.title}\n\n${p.subtitle}`;
  if (block.type === "typing") md = `[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=${p.color || "58A6FF"}&center=true&vCenter=true&width=520&lines=${csv(p.lines).map(encodeURIComponent).join(";")})](https://git.io/typing-svg)`;
  if (block.type === "capsule") md = `<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=${encodeURIComponent(p.color)}&height=${encodeURIComponent(p.height)}&section=header&text=${encodeURIComponent(p.title)}&fontSize=38&fontColor=ffffff&animation=fadeIn&desc=${encodeURIComponent(p.subtitle)}&descAlignY=64" alt="Profile header" />`;
  if (block.type === "about") md = `## ${p.heading}\n\n${lines(p.text).map(line => `- ${line}`).join("\n")}`;
  if (block.type === "skills") md = `## ${p.heading}\n\n${csv(p.items).map(item => `![${item}](https://img.shields.io/badge/${encodeURIComponent(item)}-161B22?style=${p.style || "flat"}&logo=${encodeURIComponent(item.toLowerCase().replace(/\./g, "dot"))}&logoColor=white)`).join(" ")}`;
  if (block.type === "stats") md = `## ${p.heading}\n\n<img height="165" src="https://github-readme-stats.vercel.app/api?username=${encodeURIComponent(p.username)}&show_icons=true&theme=${encodeURIComponent(p.theme)}&hide_border=true" alt="GitHub stats" />\n<img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${encodeURIComponent(p.username)}&layout=compact&theme=${encodeURIComponent(p.theme)}&hide_border=true" alt="Top languages" />`;
  if (block.type === "streak") md = `<img src="https://streak-stats.demolab.com?user=${encodeURIComponent(p.username)}&theme=${encodeURIComponent(p.theme)}&hide_border=true" alt="GitHub streak" />`;
  if (block.type === "trophy") md = `<img src="https://github-profile-trophy.vercel.app/?username=${encodeURIComponent(p.username)}&theme=${encodeURIComponent(p.theme)}&no-frame=true&row=1&column=6" alt="GitHub trophies" />`;
  if (block.type === "activity") md = `## ${p.heading}\n\n<img src="https://github-readme-activity-graph.vercel.app/graph?username=${encodeURIComponent(p.username)}&bg_color=00000000&color=${p.color || "7C5CFF"}&line=${p.color || "7C5CFF"}&point=FFFFFF&hide_border=true" alt="Contribution activity" />`;
  if (block.type === "summary") md = `<img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${encodeURIComponent(p.username)}&theme=${encodeURIComponent(p.theme)}" alt="GitHub profile summary" />`;
  if (block.type === "snake") md = `<!-- Requires a Platane/snk GitHub Action that publishes to the ${safeGitRef(p.branch)} branch -->\n<img src="https://raw.githubusercontent.com/${encodeURIComponent(p.username)}/${encodeURIComponent(p.username)}/${encodeURIComponent(safeGitRef(p.branch))}/github-contribution-grid-snake-${p.theme}.svg" alt="Contribution snake" />`;
  if (block.type === "metrics") md = `<img src="./${safeRelativePath(p.filename, "github-metrics.svg")}" alt="GitHub Metrics" />`;
  if (block.type === "contrib3d") md = `<img src="./profile-3d-contrib/${safeRelativePath(p.theme, "profile-green-animate")}.svg" alt="3D contribution calendar" />`;
  if (block.type === "spaceshooter") md = `<img src="./${safeRelativePath(p.output, "game.gif")}" alt="GitHub contribution space shooter" />`;
  if (block.type === "terminal") md = `<img src="${String(p.image || "./terminal.gif").replace(/\"/g, "%22")}" alt="${String(p.alt || "GitHub terminal profile").replace(/\"/g, "&quot;")}" />`;
  if (block.type === "social") md = `## ${p.heading}\n\n${csv(p.items).map(item => { const split = item.indexOf(":"); const name = split > -1 ? item.slice(0, split) : item; const url = split > -1 ? item.slice(split + 1) : "#"; return `[![${name}](https://img.shields.io/badge/${encodeURIComponent(name)}-1F6FEB?style=flat&logoColor=white)](${url})`; }).join(" ")}`;
  if (block.type === "quote") md = `> “${p.text}”`;
  if (block.type === "visitor") md = `![${p.label}](https://komarev.com/ghpvc/?username=${encodeURIComponent(p.username)}&label=${encodeURIComponent(p.label)}&color=${p.color || "1F6FEB"}&style=flat)`;
  if (block.type === "spotify") md = `<img src="https://spotify-github-profile.kittinanx.com/api/view?uid=${encodeURIComponent(p.uid)}&cover_image=true&theme=${encodeURIComponent(p.theme)}&show_offline=false&background_color=121212" alt="Spotify now playing" />`;
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
  const checks = [{ level: "direct", icon: "✓", title: "README.md", detail: `${state.blocks.length} 个组件已生成，可直接放入同名 GitHub 主页仓库。`, status: "已就绪" }];
  const remoteTypes = ["typing", "capsule", "stats", "streak", "trophy", "activity", "summary", "visitor"].filter(type => types.has(type));
  if (remoteTypes.length) checks.push({ level: "direct", icon: "↗", title: "动态卡片服务", detail: "这些图片由第三方服务实时渲染，不需要 GitHub Action。", status: "无需配置" });
  if (types.has("snake")) checks.push({ level: "action", icon: "◆", title: "贡献贪吃蛇", detail: "ZIP 将包含每日生成 SVG 的 GitHub Actions 工作流。", status: "需要 Action" });
  if (types.has("metrics")) checks.push({ level: "action", icon: "M", title: "Metrics 信息图", detail: "ZIP 将包含工作流；运行前需添加 METRICS_TOKEN 仓库密钥。", status: "Action + 密钥" });
  if (types.has("contrib3d")) checks.push({ level: "action", icon: "3D", title: "3D 贡献图", detail: "ZIP 将包含每日生成并提交 3D SVG 的工作流。", status: "需要 Action" });
  if (types.has("spaceshooter")) checks.push({ level: "action", icon: "SS", title: "贡献太空射击", detail: "ZIP 将包含每日生成游戏 GIF 或 WebP 的工作流。", status: "需要 Action" });
  if (types.has("terminal")) checks.push({ level: "setup", icon: ">_", title: "终端动图", detail: "需要先用原项目生成 GIF，再把文件或 URL 提供给 README。", status: "需要生成" });
  if (types.has("spotify")) checks.push({ level: "setup", icon: "!", title: "Spotify 正在播放", detail: "发布前需要在 Spotify GitHub Profile 服务中完成绑定。", status: "需要配置" });
  if (types.has("custom")) checks.push({ level: "setup", icon: "?", title: "自定义 Markdown", detail: "请确认粘贴内容引用的图片、密钥或工作流已经配置。", status: "需要检查" });
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
  const snake = state.blocks.find(block => block.type === "snake");
  const branch = safeGitRef(snake?.props.branch);
  return [
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
    "    timeout-minutes: 5",
    "    steps:",
    "      - name: Generate contribution snake",
    "        uses: Platane/snk/svg-only@v3",
    "        with:",
    "          github_user_name: ${{ github.repository_owner }}",
    "          outputs: |",
    "            dist/github-contribution-grid-snake.svg",
    "            dist/github-contribution-grid-snake-dark.svg?palette=github-dark",
    "",
    "      - name: Publish SVG files",
    "        uses: crazy-max/ghaction-github-pages@v3.1.0",
    "        with:",
    `          target_branch: ${branch}`,
    "          build_dir: dist",
    "        env:",
    "          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}",
    ""
  ].join("\n");
}

function generateMetricsWorkflow() {
  const block = state.blocks.find(item => item.type === "metrics");
  const filename = safeRelativePath(block?.props.filename, "github-metrics.svg");
  return [
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
    "    steps:",
    "      - uses: lowlighter/metrics@latest",
    "        with:",
    "          token: ${{ secrets.METRICS_TOKEN }}",
    "          user: ${{ github.repository_owner }}",
    `          filename: ${filename}`,
    ""
  ].join("\n");
}

function generateContrib3dWorkflow() {
  return [
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
    "      - uses: actions/checkout@v5",
    "      - uses: yoshi389111/github-profile-3d-contrib@latest",
    "        env:",
    "          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}",
    "          USERNAME: ${{ github.repository_owner }}",
    "      - name: Commit and push",
    "        run: |",
    "          git config user.name github-actions",
    "          git config user.email github-actions@github.com",
    "          git add -A .",
    "          if git commit -m \"chore: update 3D contribution graph\"; then",
    "            git push",
    "          fi",
    ""
  ].join("\n");
}

function generateSpaceShooterWorkflow() {
  const block = state.blocks.find(item => item.type === "spaceshooter");
  const output = safeRelativePath(block?.props.output, "game.gif");
  const strategy = ["random", "column", "row"].includes(block?.props.strategy) ? block.props.strategy : "random";
  return [
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
    "          fetch-depth: 2",
    "      - uses: czl9707/gh-space-shooter@v2",
    "        with:",
    "          github-token: ${{ secrets.GITHUB_TOKEN }}",
    `          output-path: ${output}`,
    `          strategy: ${strategy}`,
    ""
  ].join("\n");
}

function generateSetupGuide() {
  const username = state.profile.login || "your-username";
  const hasSnake = state.blocks.some(block => block.type === "snake");
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
    "按照 https://github.com/x0rzavi/github-readme-terminal 的说明生成 GIF，并把文件提交到仓库，或在组件属性中填写可公开访问的图片 URL。"
  );
  if (hasSpotify) sections.push(
    "",
    "## Spotify 正在播放",
    "",
    "请先访问 https://spotify-github-profile.kittinanx.com/ 完成 Spotify 账号绑定，并确认组件中的 UID 正确。"
  );
  if (hasCustom) sections.push(
    "",
    "## 自定义 Markdown",
    "",
    "请自行检查其中引用的外部图片、服务、密钥或额外工作流。Readme Studio 会原样导出这部分内容。"
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
  topLabel.textContent = connected ? `@${publishSession.login}` : "GitHub 登录";
  result.hidden = !lastPublishedUrl;
  if (lastPublishedUrl) result.href = lastPublishedUrl;

  if (connected) {
    title.textContent = `已连接 @${publishSession.login}`;
    description.textContent = `将创建或更新 ${publishSession.login}/${publishSession.login}；完成后立即撤销本次令牌。`;
    action.textContent = `发布到 ${publishSession.login}/${publishSession.login}`;
    action.disabled = false;
  } else if (lastPublishedUrl) {
    title.textContent = lastAuthorizationRevoked ? "发布完成，授权已撤销" : "发布完成，请检查 GitHub 授权";
    description.textContent = lastAuthorizationRevoked
      ? "Readme Studio 不再持有本次 GitHub 访问令牌。需要再次发布时请重新登录。"
      : "自动撤销令牌未得到 GitHub 确认，请在 GitHub Settings → Applications 中手动撤销。";
    action.textContent = "再次登录发布";
    action.disabled = false;
  } else {
    title.textContent = "连接 GitHub 后一键发布";
    description.textContent = API_BASE_URL
      ? "只会创建或更新与你用户名同名的公开仓库；完成后立即撤销本次令牌。"
      : "后端地址尚未配置；编辑和下载功能不受影响。";
    action.textContent = "登录并发布";
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
    if (!response.ok) throw new Error(data.error || "发布失败，请重新登录后再试");
    lastPublishedUrl = data.repositoryUrl || `https://github.com/${publishSession.login}/${publishSession.login}`;
    lastAuthorizationRevoked = data.authorizationRevoked !== false;
    clearPublishSession();
    renderPublishPanel();
    showToast(lastAuthorizationRevoked ? "已发布到 GitHub，本次授权已撤销" : "发布完成，请手动检查 GitHub 授权");
  } catch (error) {
    clearPublishSession();
    renderPublishPanel();
    showToast(error.message || "发布失败，会话已结束，请检查 GitHub 授权");
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
