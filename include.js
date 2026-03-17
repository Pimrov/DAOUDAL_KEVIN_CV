function includeHTML(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur de chargement " + file);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // if pour HL
      if (id === "header") {
        highlightActiveLink();
      }
    })
    .catch(error => console.error(error));
}

includeHTML("header", "header.html");
includeHTML("banana", "footer.html");

// Color auto
function highlightActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}
