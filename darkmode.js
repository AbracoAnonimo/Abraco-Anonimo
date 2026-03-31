(function () {
  const btn = document.querySelector(".icon-btn[title='Modo']");

  if (localStorage.getItem("abraco_theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (btn) btn.textContent = "☀";
  }

  if (!btn) return;

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("abraco_theme", isDark ? "dark" : "light");

    btn.textContent = isDark ? "☀" : "☾";
  });
})();
