//Inserto template

fetch("/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  })
  .catch((error) => console.error("Error al cargar el header:", error));

fetch("/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((error) => console.error("Error al cargar el footer:", error));

fetch("/newsletter.html")
  .then((response) => response.text())
  .then((data) => {
    const newsletterContainer = document.getElementById("newsletter");
    if (newsletterContainer) {
      newsletterContainer.innerHTML = data;
      agregarValidacion();
    }
  })
  .catch((error) => console.error("Error al cargar el newsletter:", error));
