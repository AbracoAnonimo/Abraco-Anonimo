document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const menu = document.querySelector(".menu");

  if (!nav || !menu) return;

  // 🔒 SÓ cria botão se for telemóvel
  if (window.innerWidth <= 760) {
    const toggle = document.createElement("button");
    toggle.innerHTML = "☰";
    toggle.className = "menu-toggle";

    nav.insertBefore(toggle, menu);

    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  // 🎨 CSS automático
  const style = document.createElement("style");
  style.innerHTML = `
    
   style.innerHTML = `

/* BOTÃO escondido no desktop */
.menu-toggle {
  display: none;
}

@media (max-width: 760px) {

  /* NAV em linha (logo + botão) */
  .nav {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    padding: 10px 14px !important;
  }

  /* LOGO / NOME */
  .brand {
    width: auto !important;
    justify-content: flex-start !important;
  }

  /* BOTÃO ☰ */
  .menu-toggle {
    display: block;
    border: none;
    background: #f4f5f8;
    border-radius: 10px;
    padding: 8px 14px;
    font-size: 18px;
    cursor: pointer;
  }

  /* ESCONDER MENU */
  .menu {
    display: none !important;
    flex-direction: column !important;
    width: 100%;
    background: rgba(255,255,255,0.95);
    border-radius: 16px;
    padding: 10px;
    margin-top: 10px;
  }

  /* MENU ABERTO */
  .menu.open {
    display: flex !important;
  }

  .menu a {
    text-align: center;
    padding: 10px !important;
    font-size: 13px !important;
  }

  /* ESCONDER ICONES */
  .nav-icons {
    display: none !important;
  }

  /* GRID MOBILE */
  .impact-grid,
  .how-grid,
  .cards-grid,
  .support-grid,
  .rules-grid {
    grid-template-columns: 1fr !important;
  }

  /* BOTÕES */
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
