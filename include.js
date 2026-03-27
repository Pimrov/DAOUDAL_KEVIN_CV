// Fonction d'inclusion
const inc = (id, f) =>
  fetch(f)
    .then(r => r.ok ? r.text() : Promise.reject(f))
    .then(h => (document.getElementById(id).innerHTML = h));

Promise.all([
  inc("header", "header.html"),
  inc("banana", "footer.html")
])
  .then(() => {

    const p = location.pathname.split("/").pop();
    document.querySelectorAll("nav a").forEach(a =>
      a.getAttribute("href") === p && a.classList.add("active")
    );

    // --- DARK MODE ---

    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-theme");
    }

    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-theme");


      if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });

    // --- BURGER ---

    const burger = document.getElementById("burger");
    const nav = document.getElementById("main-nav");

    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", isOpen);
      burger.textContent = isOpen ? "✕" : "☰";
    });

    // Ferme le menu si on clique sur un lien
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", false);
        burger.textContent = "☰";
      });
    });

  })
  .catch(console.error);