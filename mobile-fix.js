document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const menu = document.querySelector(".menu");

  if (!nav || !menu) return;

  // FUNÇÃO PARA VER SE É TELEMÓVEL
  function isMobile() {
    return window.innerWidth <= 760;
  }

  let toggle = null;

  function setupMenu() {
    // Se NÃO for mobile → limpar tudo
    if (!isMobile()) {
      if (toggle) {
        toggle.remove();
        toggle = null;
      }
      menu.classList.remove("open");
      menu.style.display = "";
      return;
    }

    // Se já existe botão → não criar outro
    if (toggle) return;

    // CRIAR BOTÃO ☰
    toggle = document.createElement("button");
    toggle.innerHTML = "☰";
    toggle.className = "menu-toggle";

    nav.insertBefore(toggle, menu);

    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  // CSS DINÂMICO (só mobile)
  const style = document.createElement("style");
  style.innerHTML = `
    @media (max-width: 760px) {

      .menu-toggle {
        border: none;
        background: #f4f5f8;
        border-radius: 10px;
        padding: 8px 14px;
        font-size: 18px;
        cursor: pointer;
      }

      .menu {
        display: none !important;
        flex-direction: column !important;
        width: 100% !important;
        background: rgba(255,255,255,0.95);
        border-radius: 16px;
        padding: 10px;
        margin-top: 10px;
        gap: 6px !important;
      }

      .menu.open {
        display: flex !important;
      }

      .menu a {
        text-align: center;
        padding: 10px !important;
        font-size: 13px !important;
      }

      .nav-icons {
        display: none !important;
      }

      .nav {
        flex-direction: column !important;
        align-items: center !important;
        gap: 10px !important;
      }

      .impact-grid,
      .how-grid,
      .cards-grid,
      .support-grid,
      .rules-grid {
        grid-template-columns: 1fr !important;
      }

      .hero-buttons {
        flex-direction: column !important;
        align-items: center !important;
      }

      .primary-btn,
      .secondary-btn,
      .hug-btn {
        width: 100% !important;
        max-width: 300px !important;
      }
    }
  `;
  document.head.appendChild(style);

  // correr ao início
  setupMenu();

  // correr quando muda tamanho do ecrã
  window.addEventListener("resize", setupMenu);
});
