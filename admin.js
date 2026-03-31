(function () {

  const PASSWORD = "abracoadmin123";

  function openAdmin() {

    const pass = prompt("Palavra-passe:");

    if (pass !== PASSWORD) {
      alert("Acesso negado.");
      return;
    }

    const posts = JSON.parse(localStorage.getItem("abraco_desabafos") || "[]");

    let html = `
      <div style="
        position:fixed;
        inset:0;
        background:rgba(0,0,0,0.4);
        z-index:9999;
        display:flex;
        align-items:center;
        justify-content:center;
        font-family:Inter,sans-serif;
      ">
        <div style="
          background:white;
          width:90%;
          max-width:800px;
          max-height:80vh;
          overflow:auto;
          border-radius:20px;
          padding:20px;
        ">
          <h2 style="margin-bottom:10px;">Admin</h2>
          <button onclick="this.closest('div').parentElement.remove()">Fechar</button>
          <hr style="margin:15px 0;">
    `;

    if (!posts.length) {
      html += `<p>Sem desabafos.</p>`;
    } else {
      posts.forEach(post => {
        html += `
          <div style="margin-bottom:20px;border-bottom:1px solid #ddd;padding-bottom:10px;">
            <p><strong>${post.tag || "Outro"}</strong></p>
            <p>${post.text}</p>
            <p>🤍 ${post.hugs || 0} | 💬 ${(post.comments || []).length}</p>

            <button onclick="deletePost(${post.id})">
              Apagar
            </button>
          </div>
        `;
      });
    }

    html += `</div></div>`;

    document.body.insertAdjacentHTML("beforeend", html);
  }

  function deletePost(id) {
    let posts = JSON.parse(localStorage.getItem("abraco_desabafos") || "[]");
    posts = posts.filter(p => p.id !== id);
    localStorage.setItem("abraco_desabafos", JSON.stringify(posts));
    location.reload();
  }

  window.abracoAdmin = openAdmin;
  window.deletePost = deletePost;

})();
