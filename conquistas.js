(function () {
  const triggerBtn = document.querySelector(".icon-btn.gold");
  if (!triggerBtn) return;

  const style = document.createElement("style");
  style.textContent = `
    .achievements-overlay {
      position: fixed;
      inset: 0;
      background: rgba(35, 29, 49, 0.14);
      backdrop-filter: blur(5px);
      z-index: 97;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease;
    }

    .achievements-overlay.open {
      opacity: 1;
      pointer-events: auto;
    }

    .achievements-box {
      position: fixed;
      right: 20px;
      bottom: 100px;
      width: 390px;
      max-width: calc(100vw - 24px);
      max-height: calc(100vh - 130px);
      overflow: hidden;
      background: rgba(255,255,255,0.96);
      border: 1px solid rgba(230, 220, 243, 0.92);
      border-radius: 30px;
      box-shadow: 0 24px 60px rgba(95, 82, 131, 0.18);
      z-index: 100;
      opacity: 0;
      transform: translateY(18px) scale(0.97);
      pointer-events: none;
      transition: opacity 0.26s ease, transform 0.26s ease;
      backdrop-filter: blur(14px);
      font-family: "Inter", sans-serif;
    }

    .achievements-box.open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    .achievements-header {
      background: linear-gradient(135deg, #f2e7ff, #f9f2ff);
      padding: 18px 18px 14px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      border-bottom: 1px solid rgba(231, 220, 243, 0.7);
    }

    .achievements-header-left {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }

    .achievements-icon {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #fff7dc;
      color: #d8a520;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      flex-shrink: 0;
    }

    .achievements-title {
      font-size: 16px;
      font-weight: 700;
      color: #4c5871;
      margin-bottom: 4px;
    }

    .achievements-subtitle {
      font-size: 12px;
      color: #8c98af;
    }

    .achievements-close {
      border: none;
      background: transparent;
      color: #b0b9ca;
      font-size: 26px;
      line-height: 1;
      cursor: pointer;
      padding: 0;
    }

    .achievements-body {
      padding: 16px;
      overflow-y: auto;
      max-height: calc(100vh - 220px);
    }

    .achievements-summary {
      background: #f8f4ff;
      border: 1px solid rgba(227, 216, 243, 0.9);
      border-radius: 20px;
      padding: 14px 14px;
      color: #7a87a0;
      font-size: 13px;
      line-height: 1.75;
      margin-bottom: 14px;
    }

    .achievements-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .achievement-card {
      border-radius: 22px;
      padding: 14px 14px;
      border: 1px solid rgba(229, 233, 240, 0.95);
      background: #fcfdff;
    }

    .achievement-card.unlocked {
      background: rgba(255, 250, 236, 0.92);
      border-color: rgba(240, 223, 163, 0.95);
    }

    .achievement-top {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .achievement-badge {
      width: 42px;
      height: 42px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      flex-shrink: 0;
      background: #eef2f7;
      color: #95a3bc;
    }

    .achievement-card.unlocked .achievement-badge {
      background: #fff2bf;
      color: #c99713;
    }

    .achievement-name {
      font-size: 14px;
      font-weight: 700;
      color: #495871;
      margin-bottom: 4px;
    }

    .achievement-desc {
      font-size: 12px;
      color: #8693aa;
      line-height: 1.7;
      margin-bottom: 8px;
    }

    .achievement-status {
      font-size: 11px;
      font-weight: 700;
    }

    .achievement-card.unlocked .achievement-status {
      color: #b8860b;
    }

    .achievement-card.locked .achievement-status {
      color: #9aa7bb;
    }

    .achievement-progress {
      width: 100%;
      height: 8px;
      border-radius: 999px;
      background: #edf1f6;
      overflow: hidden;
      margin-top: 8px;
    }

    .achievement-progress-bar {
      height: 100%;
      border-radius: 999px;
      background: linear-gradient(135deg, #c5a2f3, #a77ce9);
    }

    @media (max-width: 760px) {
      .achievements-box {
        right: 12px;
        bottom: 90px;
        max-width: calc(100vw - 24px);
      }
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement("div");
  overlay.className = "achievements-overlay";
  overlay.id = "achievementsOverlay";

  const box = document.createElement("div");
  box.className = "achievements-box";
  box.id = "achievementsBox";
  box.innerHTML = `
    <div class="achievements-header">
      <div class="achievements-header-left">
        <div class="achievements-icon">🏅</div>
        <div>
          <div class="achievements-title">As tuas conquistas</div>
          <div class="achievements-subtitle">Pequenos passos também contam</div>
        </div>
      </div>
      <button class="achievements-close" id="achievementsClose" type="button">×</button>
    </div>

    <div class="achievements-body">
      <div class="achievements-summary" id="achievementsSummary"></div>
      <div class="achievements-list" id="achievementsList"></div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(box);

  const closeBtn = box.querySelector("#achievementsClose");
  const summary = box.querySelector("#achievementsSummary");
  const list = box.querySelector("#achievementsList");

  function getPosts() {
    return JSON.parse(localStorage.getItem("abraco_desabafos") || "[]");
  }

  function getDiary() {
    return JSON.parse(localStorage.getItem("abraco_diario_emocional") || "{}");
  }

  function getSiteStats() {
    const posts = getPosts();
    const diary = getDiary();

    let hugsGiven = 0;
    let commentsMade = 0;
    let diaryEntries = 0;

    posts.forEach(post => {
      hugsGiven += post.hugs || 0;
      commentsMade += (post.comments || []).length;
    });

    Object.values(diary).forEach(entries => {
      diaryEntries += Array.isArray(entries) ? entries.length : 0;
    });

    const usedAreas = [
      posts.length > 0,
      hugsGiven > 0,
      commentsMade > 0,
      diaryEntries > 0
    ].filter(Boolean).length;

    const communityCombo = [
      posts.length > 0,
      hugsGiven > 0,
      commentsMade > 0
    ].filter(Boolean).length;

    return {
      posts: posts.length,
      hugs: hugsGiven,
      comments: commentsMade,
      diary: diaryEntries,
      usedAreas,
      communityCombo
    };
  }

  function buildAchievements(stats) {
    return [
      {
        icon: "🌱",
        name: "Primeiro passo",
        desc: "Partilhaste o teu primeiro desabafo.",
        current: stats.posts,
        target: 1
      },
      {
        icon: "💜",
        name: "Coração aberto",
        desc: "Partilhaste 3 desabafos.",
        current: stats.posts,
        target: 3
      },
      {
        icon: "🕊️",
        name: "Voz da alma",
        desc: "Partilhaste 10 desabafos.",
        current: stats.posts,
        target: 10
      },
      {
        icon: "🤍",
        name: "Primeiro abraço",
        desc: "Ofereceste 1 abraço.",
        current: stats.hugs,
        target: 1
      },
      {
        icon: "🤝",
        name: "Mãos que acolhem",
        desc: "Ofereceste 10 abraços.",
        current: stats.hugs,
        target: 10
      },
      {
        icon: "💬",
        name: "Palavra que conforta",
        desc: "Deixaste 1 mensagem de apoio.",
        current: stats.comments,
        target: 1
      },
      {
        icon: "✨",
        name: "Presença gentil",
        desc: "Deixaste 5 mensagens de apoio.",
        current: stats.comments,
        target: 5
      },
      {
        icon: "🗒️",
        name: "Olhar para dentro",
        desc: "Criaste a tua primeira entrada no diário.",
        current: stats.diary,
        target: 1
      },
      {
        icon: "🌸",
        name: "Cuidar de mim",
        desc: "Criaste 7 entradas no diário.",
        current: stats.diary,
        target: 7
      },
      {
        icon: "🌙",
        name: "Constância suave",
        desc: "Criaste 30 entradas no diário.",
        current: stats.diary,
        target: 30
      },
      {
        icon: "🧭",
        name: "Explorador emocional",
        desc: "Usaste pelo menos 3 áreas do site.",
        current: stats.usedAreas,
        target: 3
      },
      {
        icon: "🌍",
        name: "Comunidade viva",
        desc: "Desabafaste, abraçaste e comentaste.",
        current: stats.communityCombo,
        target: 3
      }
    ];
  }

  function renderAchievements() {
    const stats = getSiteStats();
    const items = buildAchievements(stats);
    const unlocked = items.filter(item => item.current >= item.target).length;

    summary.innerHTML = `
      Desbloqueaste <strong>${unlocked}</strong> de <strong>${items.length}</strong> conquistas.<br>
      Cada pequeno gesto de cuidado, coragem e presença também conta.
    `;

    list.innerHTML = items.map(item => {
      const isUnlocked = item.current >= item.target;
      const progress = Math.min((item.current / item.target) * 100, 100);

      return `
        <article class="achievement-card ${isUnlocked ? "unlocked" : "locked"}">
          <div class="achievement-top">
            <div class="achievement-badge">${item.icon}</div>
            <div style="flex:1;">
              <div class="achievement-name">${item.name}</div>
              <div class="achievement-desc">${item.desc}</div>
              <div class="achievement-status">
                ${isUnlocked ? "Desbloqueada" : `Progresso: ${item.current}/${item.target}`}
              </div>
              <div class="achievement-progress">
                <div class="achievement-progress-bar" style="width:${progress}%"></div>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  function openAchievements() {
    renderAchievements();
    box.classList.add("open");
    overlay.classList.add("open");
  }

  function closeAchievements() {
    box.classList.remove("open");
    overlay.classList.remove("open");
  }

  triggerBtn.addEventListener("click", openAchievements);
  closeBtn.addEventListener("click", closeAchievements);
  overlay.addEventListener("click", closeAchievements);
})();
