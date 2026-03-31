<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin | Abraço Anónimo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <style>
    :root {
      --bg-1: #fcfbfa;
      --bg-2: #fbf8ff;
      --text: #34425f;
      --muted: #72829f;
      --muted-2: #9ba8bd;
      --purple-1: #a77ce9;
      --purple-2: #9b73e8;
      --purple-soft: #f3e8fb;
      --shadow: 0 18px 50px rgba(119, 95, 168, 0.10);
      --shadow-soft: 0 10px 30px rgba(87, 104, 139, 0.06);
      --border: rgba(220, 212, 234, 0.48);
      --success-bg: #eaf8ef;
      --success-text: #30b464;
      --danger-bg: #fff1f4;
      --danger-text: #db6d82;
      --blue-bg: #eef5ff;
      --blue-text: #6e98de;
      --yellow-bg: #fff8de;
      --yellow-text: #d39a18;
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      font-family: "Inter", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(244,236,255,0.75), transparent 30%),
        radial-gradient(circle at top right, rgba(255,239,243,0.7), transparent 25%),
        linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);
      min-height: 100vh;
    }

    .topbar {
      position: sticky;
      top: 0;
      z-index: 60;
      background: rgba(255,255,255,0.78);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(223, 216, 236, 0.65);
    }

    .nav {
      max-width: 1280px;
      margin: 0 auto;
      padding: 12px 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .brand-logo {
      width: 30px;
      height: 30px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }

    .brand-name {
      font-size: 15px;
      font-weight: 700;
      color: #34425f;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .top-btn {
      border: none;
      border-radius: 999px;
      padding: 10px 14px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      font-family: inherit;
    }

    .top-btn.back {
      background: #f4f5f8;
      color: #7c8ba6;
    }

    .top-btn.logout {
      background: #fff1f4;
      color: #db6d82;
      display: none;
    }

    .page {
      max-width: 1180px;
      margin: 0 auto;
      padding: 34px 22px 80px;
    }

    .hero,
    .login-card,
    .admin-wrap {
      opacity: 0;
      transform: translateY(24px);
      animation: riseFade 0.7s ease forwards;
    }

    .login-card,
    .admin-wrap {
      animation-delay: 0.12s;
    }

    @keyframes riseFade {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .hero {
      text-align: center;
      margin-bottom: 26px;
    }

    .hero-icon {
      width: 56px;
      height: 56px;
      border-radius: 18px;
      margin: 0 auto 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f3e8fb;
      color: #b08fe8;
      font-size: 24px;
    }

    .hero h1 {
      margin: 0 0 12px;
      font-size: clamp(24px, 3.4vw, 40px);
      line-height: 1.08;
      letter-spacing: -0.03em;
      font-weight: 800;
    }

    .hero p {
      margin: 0 auto;
      max-width: 760px;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.8;
    }

    .login-card,
    .stats-card,
    .panel-card,
    .item-card {
      background: rgba(255,255,255,0.84);
      border: 1px solid var(--border);
      border-radius: 28px;
      box-shadow: var(--shadow-soft);
    }

    .login-card {
      max-width: 460px;
      margin: 0 auto;
      padding: 28px 24px;
    }

    .login-title {
      font-size: 17px;
      font-weight: 800;
      text-align: center;
      margin-bottom: 10px;
    }

    .login-text {
      font-size: 13px;
      color: var(--muted);
      text-align: center;
      line-height: 1.8;
      margin-bottom: 18px;
    }

    .input,
    .search-input,
    .select {
      width: 100%;
      border: 1.5px solid rgba(214, 221, 233, 0.86);
      background: rgba(255,255,255,0.94);
      border-radius: 18px;
      padding: 14px 15px;
      font-size: 14px;
      outline: none;
      color: var(--text);
      font-family: inherit;
    }

    .input::placeholder,
    .search-input::placeholder {
      color: #b3bfce;
    }

    .primary-btn,
    .secondary-btn,
    .danger-btn,
    .soft-btn {
      border: none;
      border-radius: 999px;
      padding: 12px 16px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;
    }

    .primary-btn {
      width: 100%;
      background: linear-gradient(135deg, var(--purple-1), var(--purple-2));
      color: white;
      box-shadow: 0 12px 24px rgba(155, 115, 232, 0.20);
    }

    .secondary-btn {
      background: var(--blue-bg);
      color: var(--blue-text);
    }

    .soft-btn {
      background: var(--purple-soft);
      color: #9d73e7;
    }

    .danger-btn {
      background: var(--danger-bg);
      color: var(--danger-text);
    }

    .admin-wrap {
      display: none;
    }

    .admin-wrap.open {
      display: block;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 16px;
      margin-bottom: 20px;
    }

    .stats-card {
      padding: 20px 18px;
    }

    .stats-label {
      font-size: 12px;
      color: var(--muted-2);
      margin-bottom: 8px;
    }

    .stats-value {
      font-size: 26px;
      font-weight: 800;
    }

    .panel-card {
      padding: 20px;
      margin-bottom: 20px;
    }

    .panel-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }

    .panel-title {
      font-size: 16px;
      font-weight: 800;
    }

    .tabs {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }

    .tab-btn {
      border: none;
      border-radius: 999px;
      padding: 10px 14px;
      background: #f3f5f8;
      color: #71809c;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;
    }

    .tab-btn.active {
      background: linear-gradient(135deg, #9d71e7, #a681eb);
      color: white;
    }

    .tools {
      display: grid;
      grid-template-columns: 1.7fr 1fr;
      gap: 12px;
      margin-bottom: 18px;
    }

    .list {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .item-card {
      padding: 18px;
    }

    .item-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 10px;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #f4f5f8;
      color: #6f7e99;
      border-radius: 999px;
      padding: 8px 12px;
      font-size: 12px;
      font-weight: 700;
    }

    .meta {
      font-size: 12px;
      color: #a3aec0;
    }

    .item-text {
      white-space: pre-wrap;
      line-height: 1.8;
      font-size: 14px;
      color: #55647f;
      margin-bottom: 12px;
    }

    .sub-info {
      font-size: 12px;
      color: #94a2b8;
      line-height: 1.8;
      margin-bottom: 12px;
    }

    .actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .comments-box,
    .entries-box {
      display: none;
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px solid rgba(225, 229, 237, 0.9);
      gap: 10px;
      flex-direction: column;
    }

    .comments-box.open,
    .entries-box.open {
      display: flex;
    }

    .inner-card {
      background: #f8fafc;
      border-radius: 18px;
      padding: 12px 14px;
      border: 1px solid rgba(229, 233, 240, 0.95);
    }

    .inner-title {
      font-size: 12px;
      font-weight: 700;
      color: #72829f;
      margin-bottom: 8px;
    }

    .inner-text {
      white-space: pre-wrap;
      line-height: 1.7;
      font-size: 13px;
      color: #5f6f8c;
      margin-bottom: 10px;
    }

    .empty {
      text-align: center;
      color: #a8b3c4;
      font-size: 13px;
      padding: 24px 10px;
    }

    .pill-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 10px;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
    }

    .pill.success {
      background: var(--success-bg);
      color: var(--success-text);
    }

    .pill.warning {
      background: var(--yellow-bg);
      color: var(--yellow-text);
    }

    .toast {
      position: fixed;
      top: 22px;
      left: 50%;
      transform: translateX(-50%);
      min-width: 280px;
      max-width: calc(100vw - 30px);
      padding: 16px 20px;
      border-radius: 18px;
      color: white;
      font-weight: 600;
      box-shadow: 0 18px 35px rgba(76, 82, 108, 0.22);
      z-index: 120;
      display: none;
      font-size: 14px;
    }

    .toast.success {
      background: linear-gradient(135deg, #61c788, #49b46f);
    }

    .toast.error {
      background: linear-gradient(135deg, #ef7f93, #e05d71);
    }

    @media (max-width: 1050px) {
      .stats-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      .tools {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 760px) {
      .nav {
        flex-direction: column;
        align-items: stretch;
      }

      .brand,
      .nav-actions {
        justify-content: center;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .page {
        padding-top: 28px;
      }
    }
  </style>
</head>
<body>
  <div class="toast" id="toast"></div>

  <header class="topbar">
    <nav class="nav">
      <div class="brand">
        <div class="brand-logo">🤍</div>
        <div class="brand-name">Abraço Anónimo — Admin</div>
      </div>

      <div class="nav-actions">
        <a class="top-btn back" href="index.html">Voltar ao site</a>
        <button class="top-btn logout" id="logoutBtn" type="button">Terminar sessão</button>
      </div>
    </nav>
  </header>

  <main class="page">
    <section class="hero">
      <div class="hero-icon">🛠</div>
      <h1>Painel de Administração</h1>
      <p>
        Gestão local dos desabafos, comentários, denúncias e diário emocional.
      </p>
    </section>

    <section class="login-card" id="loginCard">
      <div class="login-title">Entrar no painel</div>
      <div class="login-text">
        Esta área é privada. Introduz a tua palavra-passe de administração.
      </div>
      <input class="input" type="password" id="adminPassword" placeholder="Palavra-passe" />
      <button class="primary-btn" id="loginBtn" type="button">Entrar</button>
    </section>

    <section class="admin-wrap" id="adminWrap">
      <div class="stats-grid">
        <div class="stats-card">
          <div class="stats-label">Desabafos</div>
          <div class="stats-value" id="statPosts">0</div>
        </div>
        <div class="stats-card">
          <div class="stats-label">Comentários</div>
          <div class="stats-value" id="statComments">0</div>
        </div>
        <div class="stats-card">
          <div class="stats-label">Abraços</div>
          <div class="stats-value" id="statHugs">0</div>
        </div>
        <div class="stats-card">
          <div class="stats-label">Denúncias</div>
          <div class="stats-value" id="statReports">0</div>
        </div>
        <div class="stats-card">
          <div class="stats-label">Entradas do diário</div>
          <div class="stats-value" id="statDiary">0</div>
        </div>
      </div>

      <section class="panel-card">
        <div class="panel-top">
          <div class="panel-title">Gestão de conteúdo</div>
        </div>

        <div class="tabs">
          <button class="tab-btn active" type="button" data-tab="posts">Desabafos</button>
          <button class="tab-btn" type="button" data-tab="reports">Denúncias</button>
          <button class="tab-btn" type="button" data-tab="diary">Diário</button>
        </div>

        <div class="tools">
          <input class="search-input" id="searchInput" type="text" placeholder="Pesquisar texto, tag ou data..." />
          <select class="select" id="sortSelect">
            <option value="newest">Mais recentes primeiro</option>
            <option value="oldest">Mais antigos primeiro</option>
          </select>
        </div>

        <div id="tabContent"></div>
      </section>
    </section>
  </main>

  <script>
    const ADMIN_PASSWORD = "abracoadmin123";
    const SESSION_KEY = "abraco_admin_session";

    const toast = document.getElementById("toast");
    const loginCard = document.getElementById("loginCard");
    const adminWrap = document.getElementById("adminWrap");
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const adminPassword = document.getElementById("adminPassword");
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContent = document.getElementById("tabContent");
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");

    let currentTab = "posts";

    function showToast(message, type = "success") {
      toast.textContent = message;
      toast.className = "toast " + type;
      toast.style.display = "block";

      clearTimeout(window.toastTimer);
      window.toastTimer = setTimeout(() => {
        toast.style.display = "none";
      }, 2600);
    }

    function getPosts() {
      return JSON.parse(localStorage.getItem("abraco_desabafos") || "[]");
    }

    function savePosts(posts) {
      localStorage.setItem("abraco_desabafos", JSON.stringify(posts));
    }

    function getReports() {
      return JSON.parse(localStorage.getItem("abraco_reportados") || "[]");
    }

    function saveReports(reports) {
      localStorage.setItem("abraco_reportados", JSON.stringify(reports));
    }

    function getDiary() {
      return JSON.parse(localStorage.getItem("abraco_diario_emocional") || "{}");
    }

    function saveDiary(diary) {
      localStorage.setItem("abraco_diario_emocional", JSON.stringify(diary));
    }

    function escapeHtml(text) {
      return String(text || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function formatDateTime(iso) {
      if (!iso) return "";
      const d = new Date(iso);
      return d.toLocaleDateString("pt-PT") + " " + d.toLocaleTimeString("pt-PT", {
        hour: "2-digit",
        minute: "2-digit"
      });
    }

    function dateOnly(iso) {
      if (!iso) return "";
      return new Date(iso).toLocaleDateString("pt-PT");
    }

    function getDiaryEntriesFlat() {
      const diary = getDiary();
      const flat = [];

      Object.entries(diary).forEach(([dateKey, entries]) => {
        (entries || []).forEach(entry => {
          flat.push({
            dateKey,
            id: entry.id,
            mood: entry.mood,
            note: entry.note || "",
            createdAt: entry.createdAt
          });
        });
      });

      return flat;
    }

    function updateStats() {
      const posts = getPosts();
      const reports = getReports();
      const diaryEntries = getDiaryEntriesFlat();

      let totalComments = 0;
      let totalHugs = 0;

      posts.forEach(post => {
        totalComments += (post.comments || []).length;
        totalHugs += (post.hugs || 0);
      });

      document.getElementById("statPosts").textContent = posts.length;
      document.getElementById("statComments").textContent = totalComments;
      document.getElementById("statHugs").textContent = totalHugs;
      document.getElementById("statReports").textContent = reports.length;
      document.getElementById("statDiary").textContent = diaryEntries.length;
    }

    function getSearchValue() {
      return searchInput.value.trim().toLowerCase();
    }

    function applySort(items, dateField = "createdAt") {
      const sorted = [...items];
      sorted.sort((a, b) => {
        const da = new Date(a[dateField] || 0).getTime();
        const db = new Date(b[dateField] || 0).getTime();
        return sortSelect.value === "newest" ? db - da : da - db;
      });
      return sorted;
    }

    function renderPostsTab() {
      let posts = getPosts();
      const search = getSearchValue();

      if (search) {
        posts = posts.filter(post => {
          const blob = [
            post.tag || "",
            post.text || "",
            formatDateTime(post.createdAt),
            ...(post.comments || []).map(c => c.text || "")
          ].join(" ").toLowerCase();

          return blob.includes(search);
        });
      }

      posts = applySort(posts);

      if (!posts.length) {
        tabContent.innerHTML = `<div class="empty">Não existem desabafos para mostrar.</div>`;
        return;
      }

      tabContent.innerHTML = `
        <div class="list">
          ${posts.map(post => `
            <article class="item-card">
              <div class="pill-row">
                <div class="pill success">🤍 Abraços: ${post.hugs || 0}</div>
                <div class="pill warning">💬 Comentários: ${(post.comments || []).length}</div>
              </div>

              <div class="item-top">
                <div class="tag">${escapeHtml(post.tag || "Outro")}</div>
                <div class="meta">${formatDateTime(post.createdAt)}</div>
              </div>

              <div class="item-text">${escapeHtml(post.text || "")}</div>

              <div class="actions">
                <button class="secondary-btn" type="button" onclick="toggleAdminComments(${post.id})">
                  Ver comentários
                </button>
                <button class="danger-btn" type="button" onclick="deleteAdminPost(${post.id})">
                  Apagar desabafo
                </button>
              </div>

              <div class="comments-box" id="comments-${post.id}">
                ${
                  (post.comments || []).length
                    ? post.comments.map(comment => `
                        <div class="inner-card">
                          <div class="inner-title">Comentário</div>
                          <div class="inner-text">${escapeHtml(comment.text || "")}</div>
                          <button class="danger-btn" type="button" onclick="deleteAdminComment(${post.id}, ${comment.id})">
                            Apagar comentário
                          </button>
                        </div>
                      `).join("")
                    : `<div class="empty" style="padding:12px 0 0;">Sem comentários.</div>`
                }
              </div>
            </article>
          `).join("")}
        </div>
      `;
    }

    function renderReportsTab() {
      let reports = getReports();
      const posts = getPosts();
      const search = getSearchValue();

      if (search) {
        reports = reports.filter(report => {
          const relatedPost = posts.find(post => post.id === report.postId);
          const blob = [
            report.type || "",
            report.postId || "",
            formatDateTime(report.createdAt),
            relatedPost ? relatedPost.text : ""
          ].join(" ").toLowerCase();

          return blob.includes(search);
        });
      }

      reports = applySort(reports);

      if (!reports.length) {
        tabContent.innerHTML = `<div class="empty">Não existem denúncias neste momento.</div>`;
        return;
      }

      tabContent.innerHTML = `
        <div class="list">
          ${reports.map(report => {
            const relatedPost = posts.find(post => post.id === report.postId);
            return `
              <article class="item-card">
                <div class="item-top">
                  <div class="tag">🚩 Denúncia</div>
                  <div class="meta">${formatDateTime(report.createdAt)}</div>
                </div>

                <div class="sub-info">
                  ID do desabafo: ${report.postId}<br>
                  Tipo: ${escapeHtml(report.type || "desabafo")}
                </div>

                <div class="item-text">
                  ${relatedPost ? escapeHtml(relatedPost.text || "") : "O desabafo associado já não existe."}
                </div>

                <div class="actions">
                  <button class="soft-btn" type="button" onclick="clearAdminReport(${report.id})">
                    Remover denúncia
                  </button>
                  ${
                    relatedPost
                      ? `<button class="danger-btn" type="button" onclick="deleteAdminPost(${relatedPost.id}, true)">
                          Apagar desabafo
                        </button>`
                      : ``
                  }
                </div>
              </article>
            `;
          }).join("")}
        </div>
      `;
    }

    function renderDiaryTab() {
      let entries = getDiaryEntriesFlat();
      const search = getSearchValue();

      if (search) {
        entries = entries.filter(entry => {
          const blob = [
            entry.dateKey,
            entry.mood || "",
            entry.note || "",
            formatDateTime(entry.createdAt)
          ].join(" ").toLowerCase();

          return blob.includes(search);
        });
      }

      entries = applySort(entries);

      if (!entries.length) {
        tabContent.innerHTML = `<div class="empty">Ainda não existem entradas do diário.</div>`;
        return;
      }

      tabContent.innerHTML = `
        <div class="list">
          ${entries.map(entry => `
            <article class="item-card">
              <div class="item-top">
                <div class="tag">🗒️ ${escapeHtml(entry.mood || "Sem humor")}</div>
                <div class="meta">${dateOnly(entry.dateKey)} · ${formatDateTime(entry.createdAt)}</div>
              </div>

              <div class="item-text">${escapeHtml(entry.note || "Sem nota adicional.")}</div>

              <div class="actions">
                <button class="danger-btn" type="button" onclick="deleteAdminDiaryEntry('${entry.dateKey}', ${entry.id})">
                  Apagar entrada
                </button>
              </div>
            </article>
          `).join("")}
        </div>
      `;
    }

    function renderCurrentTab() {
      updateStats();

      tabButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.tab === currentTab);
      });

      if (currentTab === "posts") {
        renderPostsTab();
      } else if (currentTab === "reports") {
        renderReportsTab();
      } else {
        renderDiaryTab();
      }
    }

    function openAdmin() {
      loginCard.style.display = "none";
      adminWrap.classList.add("open");
      logoutBtn.style.display = "inline-flex";
      renderCurrentTab();
    }

    function closeAdmin() {
      localStorage.removeItem(SESSION_KEY);
      adminWrap.classList.remove("open");
      logoutBtn.style.display = "none";
      loginCard.style.display = "block";
      adminPassword.value = "";
    }

    loginBtn.addEventListener("click", () => {
      const password = adminPassword.value.trim();

      if (password !== ADMIN_PASSWORD) {
        showToast("Palavra-passe incorreta.", "error");
        return;
      }

      localStorage.setItem(SESSION_KEY, "true");
      openAdmin();
      showToast("Sessão iniciada com sucesso 🤍", "success");
    });

    adminPassword.addEventListener("keydown", (e) => {
      if (e.key === "Enter") loginBtn.click();
    });

    logoutBtn.addEventListener("click", () => {
      closeAdmin();
      showToast("Sessão terminada.", "success");
    });

    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        currentTab = btn.dataset.tab;
        renderCurrentTab();
      });
    });

    searchInput.addEventListener("input", renderCurrentTab);
    sortSelect.addEventListener("change", renderCurrentTab);

    window.toggleAdminComments = function(postId) {
      const box = document.getElementById(`comments-${postId}`);
      if (!box) return;
      box.classList.toggle("open");
    };

    window.deleteAdminComment = function(postId, commentId) {
      const posts = getPosts();
      const index = posts.findIndex(post => post.id === postId);
      if (index === -1) return;

      posts[index].comments = (posts[index].comments || []).filter(comment => comment.id !== commentId);
      savePosts(posts);
      renderCurrentTab();
      showToast("Comentário apagado.", "success");
    };

    window.deleteAdminPost = function(postId, fromReport = false) {
      const posts = getPosts().filter(post => post.id !== postId);
      savePosts(posts);

      const reports = getReports().filter(report => report.postId !== postId);
      saveReports(reports);

      renderCurrentTab();
      showToast(fromReport ? "Desabafo denunciado apagado." : "Desabafo apagado.", "success");
    };

    window.clearAdminReport = function(reportId) {
      const reports = getReports().filter(report => report.id !== reportId);
      saveReports(reports);
      renderCurrentTab();
      showToast("Denúncia removida.", "success");
    };

    window.deleteAdminDiaryEntry = function(dateKey, entryId) {
      const diary = getDiary();
      if (!diary[dateKey]) return;

      diary[dateKey] = diary[dateKey].filter(entry => entry.id !== entryId);

      if (!diary[dateKey].length) {
        delete diary[dateKey];
      }

      saveDiary(diary);
      renderCurrentTab();
      showToast("Entrada do diário apagada.", "success");
    };

    if (localStorage.getItem(SESSION_KEY) === "true") {
      openAdmin();
    }
  </script>
</body>
</html>
