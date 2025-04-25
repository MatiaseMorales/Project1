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

  /*si le pongo la / no valida pero si en el html, y si se la pongo aqui pero no en el html, no valida*/

  fetch("/newsletter.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("newsletter").innerHTML = data;
  })
  .catch((error) => console.error("Error al cargar el newsletter:", error));

  
