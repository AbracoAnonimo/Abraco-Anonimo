(function () {
  if (document.getElementById("supportFab")) return;

  const style = document.createElement("style");
  style.textContent = `
    .support-fab {
      position: fixed;
      right: 20px;
      bottom: 20px;
      width: 66px;
      height: 66px;
      border: none;
      border-radius: 50%;
      background: linear-gradient(135deg, #e6d6fa, #cbb4f5);
      color: #6b5b7a;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 14px 30px rgba(180, 150, 230, 0.25);
      z-index: 1000;
      transition: all 0.25s ease;
    }

    .support-fab:hover {
      transform: translateY(-2px) scale(1.03);
      box-shadow: 0 18px 38px rgba(180, 150, 230, 0.30);
    }

    .support-overlay {
      position: fixed;
      inset: 0;
      background: rgba(60, 50, 90, 0.10);
      backdrop-filter: blur(6px);
      z-index: 998;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .support-overlay.open {
      opacity: 1;
      pointer-events: auto;
    }

    .support-box {
      position: fixed;
      right: 20px;
      bottom: 100px;
      width: 340px;
      max-width: calc(100vw - 24px);
      background: rgba(255,255,255,0.96);
      border-radius: 26px;
      box-shadow: 0 25px 60px rgba(140, 120, 180, 0.18);
      overflow: hidden;
      z-index: 1000;
      opacity: 0;
      transform: translateY(20px) scale(0.96);
      pointer-events: none;
      transition: all 0.28s ease;
      backdrop-filter: blur(14px);
      font-family: "Inter", sans-serif;
    }

    .support-box.open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    .support-header {
      background: linear-gradient(135deg, #d9c7f5, #e8dcfb);
      color: #5f4e6b;
      padding: 18px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .support-header-left {
      display: flex;
      gap: 10px;
      align-items: flex-start;
    }

    .support-bubble-icon {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: rgba(255,255,255,0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
    }

    .support-title {
      font-size: 15px;
      font-weight: 600;
    }

    .support-subtitle {
      font-size: 12px;
      color: #7c6f88;
    }

    .support-close {
      border: none;
      background: transparent;
      font-size: 22px;
      color: #7c6f88;
      cursor: pointer;
    }

    .support-body {
      padding: 18px;
    }

    .support-intro {
      font-size: 13px;
      color: #7d8aa3;
      line-height: 1.7;
      margin-bottom: 14px;
      text-align: center;
    }

    .support-textarea {
      width: 100%;
      min-height: 110px;
      border-radius: 16px;
      border: 1px solid #ebe4f6;
      background: #faf7fd;
      padding: 14px;
      font-size: 13px;
      line-height: 1.6;
      resize: none;
      outline: none;
      color: #5b4b63;
      margin-bottom: 14px;
      transition: 0.2s ease;
    }

    .support-textarea:focus {
      background: white;
      border-color: #d8c4f2;
      box-shadow: 0 0 0 4px rgba(200, 180, 240, 0.12);
    }

    .support-send {
      width: 100%;
      border: none;
      border-radius: 999px;
      padding: 11px;
      background: linear-gradient(135deg, #d7c3f5, #c4adef);
      color: #5d4a6d;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: 12px;
      transition: 0.2s ease;
    }

    .support-send:hover {
      transform: translateY(-1px);
    }

    .support-divider {
      text-align: center;
      font-size: 11px;
      color: #b0bac9;
      margin: 10px 0;
    }

    .support-email-btn {
      display: block;
      text-align: center;
      padding: 11px;
      border-radius: 999px;
      background: #f3ebff;
      color: #8a69d8;
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .support-note {
      font-size: 11px;
      color: #9aa7bb;
      text-align: center;
    }

    .support-urgent {
      font-size: 11px;
      text-align: center;
      margin-top: 6px;
      color: #8a97ae;
    }

    .support-urgent a {
      color: #9b73e8;
      text-decoration: none;
      font-weight: 600;
    }
  `;
  document.head.appendChild(style);

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <button class="support-fab" id="supportFab">🤍</button>
    <div class="support-overlay" id="supportOverlay"></div>

    <div class="support-box" id="supportBox">
      <div class="support-header">
        <div class="support-header-left">
          <div class="support-bubble-icon">🌸</div>
          <div>
            <div class="support-title">Estou aqui para te ouvir</div>
            <div class="support-subtitle">Podes escrever com calma</div>
          </div>
        </div>
        <button class="support-close" id="supportClose">×</button>
      </div>

      <div class="support-body">
        <div class="support-intro">
          Não precisas de ter as palavras perfeitas.  
          Só escreve o que sentes 🤍
        </div>

        <textarea id="supportMessage" class="support-textarea" placeholder="Escreve aqui..."></textarea>

        <button class="support-send" id="supportSend">Enviar mensagem</button>

        <div class="support-divider">ou</div>

        <a class="support-email-btn"
          href="mailto:abracoanonimo.apoio@gmail.com?subject=Pedido%20de%20Apoio%20-%20Abra%C3%A7o%20An%C3%B3nimo">
          Enviar email diretamente
        </a>

        <div class="support-note">
          Podes manter-te anónima se quiseres 🤍
        </div>

        <div class="support-urgent">
          Precisas de ajuda urgente?  
          <a href="linhas.html">Ver linhas de apoio</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(wrapper);

  const fab = document.getElementById("supportFab");
  const box = document.getElementById("supportBox");
  const overlay = document.getElementById("supportOverlay");
  const close = document.getElementById("supportClose");
  const send = document.getElementById("supportSend");
  const message = document.getElementById("supportMessage");

  function openBox() {
    box.classList.add("open");
    overlay.classList.add("open");
  }

  function closeBox() {
    box.classList.remove("open");
    overlay.classList.remove("open");
  }

  fab.onclick = openBox;
  close.onclick = closeBox;
  overlay.onclick = closeBox;

  send.onclick = () => {
    const msg = message.value.trim();
    if (!msg) return alert("Escreve primeiro 🤍");

    const subject = "Pedido de Apoio - Abraço Anónimo";
    const body = msg + "\\n\\n— Enviado do site Abraço Anónimo";

    window.location.href =
      `mailto:abracoanonimo.apoio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
})();
