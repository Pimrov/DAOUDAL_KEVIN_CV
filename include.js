// function includeHTML(id, file) {
//   fetch(file)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Erreur de chargement " + file);
//       }
//       return response.text();
//     })
//     .then(data => {
//       document.getElementById(id).innerHTML = data;

//       // if pour HL
//       if (id === "header") {
//         highlightActiveLink();
//       }
//     })
//     .catch(error => console.error(error));
// }

// includeHTML("header", "header.html");
// includeHTML("banana", "footer.html");

// // Color auto
// function highlightActiveLink() {
//   const currentPage = window.location.pathname.split("/").pop();

//   document.querySelectorAll("nav a").forEach(link => {
//     if (link.getAttribute("href") === currentPage) {
//       link.classList.add("active");
//     }
//   });
// }

const inc = (id, f) => fetch(f).then(r => r.ok ? r.text() : Promise.reject(f)).then(h => document.getElementById(id).innerHTML = h);

Promise.all([inc("header","header.html"), inc("banana","footer.html")])
  .then(() => { const p = location.pathname.split("/").pop(); document.querySelectorAll("nav a").forEach(a => a.getAttribute("href") === p && a.classList.add("active")); })
  .catch(console.error);

  
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});
``
