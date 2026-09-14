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
  stats: [["heading", "区块标题", "text"], ["username", "GitHub 用户名", "text"], ["theme", "卡片主题", "select", "", ["github_dark", "transparent", "tokyonight", "radical", "vue-dark"]]],
  streak: [["username", "GitHub 用户名", "text"], ["theme", "卡片主题", "select", "", ["github-dark-blue", "transparent", "tokyonight", "radical"]]],
  trophy: [["username", "GitHub 用户名", "text"], ["theme", "奖杯主题", "select", "", ["onedark", "darkhub", "discord", "flat"]]],
  activity: [["heading", "区块标题", "text"], ["username", "GitHub 用户名", "text"], ["color", "强调色（HEX）", "text"]],
  summary: [["username", "GitHub 用户名", "text"], ["theme", "卡片主题", "select", "", ["github_dark", "transparent", "tokyonight", "radical", "vue"]]],
  snake: [["username", "GitHub 用户名", "text"], ["branch", "输出分支", "text"], ["theme", "显示模式", "select", "", ["dark", "light"]]],
  social: [["heading", "区块标题", "text"], ["items", "链接", "textarea", "每项格式：名称:URL，使用英文逗号分隔"]],
  quote: [["text", "语录", "textarea"]],
  visitor: [["username", "GitHub 用户名", "text"], ["label", "标签", "text"], ["color", "颜色（HEX）", "text"]],
  spotify: [["uid", "Spotify UID", "text", "需要先在 Spotify GitHub Profile 服务中完成绑定"], ["theme", "卡片主题", "select", "", ["default", "natemoo-re", "novatorem"]]],
  divider: [["spacing", "上下间距", "select", "", ["small", "medium", "large"]]],
  spacer: [["height", "高度（px）", "number"]],
  custom: [["markdown", "Markdown 内容", "textarea", "导出时将原样保留"]]
};

const DEMO_BLOCKS = [
  { type: "hero", props: { title: "Hi, I'm The Octocat 👋", subtitle: "Open source explorer · Builder · Curious mind", align: "center" } },
  { type: "typing", props: { lines: "Open Source Explorer,Creative Developer,Always Learning", color: "58A6FF", align: "center" } },
  { type: "about", props: { heading: "About me", text: "🔭 Building delightful developer tools\n🌱 Learning something new every day\n💬 Ask me about open source", align: "left" } },
  { type: "skills", props: { heading: "Languages and tools", items: "TypeScript,React,Node.js,Python,Figma,Git", style: "flat", align: "left" } },
  { type: "stats", props: { heading: "GitHub stats", username: "octocat", theme: "github_dark", align: "center" } }
];

let state = {
  blocks: [],
  selectedId: null,
  view: "preview",
  device: "desktop",
  lightApp: false,
  profile: { login: "octocat", name: "The Octocat", bio: "GitHub's friendly mascot and open source explorer.", avatar_url: "https://github.com/octocat.png", followers: 15200, following: 9, location: "San Francisco", blog: "github.blog" }
};

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

function persist() {
  localStorage.setItem("readme-studio-state", JSON.stringify({ blocks: state.blocks, profile: state.profile, lightApp: state.lightApp }));
}

function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem("readme-studio-state"));
    if (saved?.blocks?.length) state.blocks = saved.blocks;
    if (saved?.profile) state.profile = { ...state.profile, ...saved.profile };
    if (saved?.lightApp) state.lightApp = true;
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
          <span class="component-copy"><strong>${escapeHTML(item.label)}</strong><small>${escapeHTML(item.desc)}</small></span>
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
  container.innerHTML = `<div class="settings-form">
    <div class="selected-type"><span class="component-icon">${escapeHTML(component.icon)}</span><span><strong>${escapeHTML(component.label)}</strong><small>${escapeHTML(component.desc)}</small></span></div>
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
  if (block.type === "snake") md = `<!-- Requires a Platane/snk GitHub Action that publishes to the ${p.branch} branch -->\n<img src="https://raw.githubusercontent.com/${encodeURIComponent(p.username)}/${encodeURIComponent(p.username)}/${encodeURIComponent(p.branch)}/github-contribution-grid-snake-${p.theme}.svg" alt="Contribution snake" />`;
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

function render() {
  document.body.classList.toggle("light-app", state.lightApp);
  $("#profile-frame").dataset.device = state.device;
  document.querySelectorAll(".segment").forEach(button => button.classList.toggle("active", button.dataset.view === state.view));
  document.querySelectorAll(".device-button").forEach(button => button.classList.toggle("active", button.dataset.device === state.device));
  renderProfile(); renderCanvas(); renderSettings();
}

function bindEvents() {
  $("#component-search").addEventListener("input", event => renderComponentLibrary(event.target.value));
  $("#load-profile").addEventListener("click", loadProfile);
  $("#username").addEventListener("keydown", event => { if (event.key === "Enter") loadProfile(); });
  $("#theme-toggle").addEventListener("click", () => { state.lightApp = !state.lightApp; render(); persist(); });
  $("#export-button").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(generateMarkdown()); showToast("README Markdown 已复制"); }
    catch (_) { showToast("复制失败，请切换到 Markdown 手动复制"); }
  });
  $("#delete-block").addEventListener("click", () => {
    const index = state.blocks.findIndex(block => block.id === state.selectedId);
    if (index < 0) return;
    state.blocks.splice(index, 1);
    state.selectedId = state.blocks[Math.min(index, state.blocks.length - 1)]?.id || null;
    render(); persist();
  });
  $("#reset-button").addEventListener("click", () => {
    state.blocks = DEMO_BLOCKS.map(block => ({ ...block, id: id(), props: { ...block.props, ...(block.props.username ? { username: state.profile.login } : {}) } }));
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

restore();
renderComponentLibrary();
bindEvents();
render();

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
    name: "get_readme_markdown",
    title: "读取 README Markdown",
    description: "Return the Markdown generated by the current README canvas.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: true },
    execute: () => ({ markdown: generateMarkdown(), componentCount: state.blocks.length })
  });
}
