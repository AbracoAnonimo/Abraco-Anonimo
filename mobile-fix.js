document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const menu = document.querySelector(".menu");

  if (!nav || !menu) return;

  // CRIAR BOTÃO ☰
  const toggle = document.createElement("button");
  toggle.innerHTML = "☰";
  toggle.className = "menu-toggle";

  nav.insertBefore(toggle, menu);

  // TOGGLE MENU
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // CRIAR ESTILO (CSS) DINÂMICO
  const style = document.createElement("style");
  style.innerHTML = `
    @media (max-width: 760px) {

      .nav {
        flex-direction: column !important;
        align-items: center !important;
        gap: 10px !important;
        padding: 10px 14px !important;
      }

      .brand {
        justify-content: center !important;
        width: 100% !important;
      }

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

      .page {
        padding-top: 20px !important;
      }

      .hero {
        padding-top: 10px !important;
      }

      .hero h1 {
        font-size: 28px !important;
        line-height: 1.1 !important;
      }

      .hero-subtitle,
      .hero p {
        font-size: 14px !important;
      }

      .hero-small-text {
        font-size: 13px !important;
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

      .impact-grid {
        grid-template-columns: 1fr !important;
      }

      .how-grid {
        grid-template-columns: 1fr !important;
      }

      .cards-grid {
        grid-template-columns: 1fr !important;
      }

      .support-grid {
        grid-template-columns: 1fr !important;
      }

      .rules-grid {
        grid-template-columns: 1fr !important;
      }

    }
  `;
  document.head.appendChild(style);
});
