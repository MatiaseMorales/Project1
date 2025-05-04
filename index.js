//Inserto template

fetch("/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    const burgerMenu = document.getElementById("burger-menu");
    const navList = document.getElementById("nav-list");

    if (burgerMenu && navList) {
      burgerMenu.addEventListener("click", () => {
        navList.classList.toggle("active");
      });
    }
  })
  .catch((error) => console.error("Error al cargar el header:", error));

fetch("/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;

    const logoLink = document.getElementById("footer-logo-link");
    if (logoLink) {
      logoLink.href = `${window.location.origin}/index.html`;
    }

    const footerLinks = document.querySelectorAll("#footer a");

    footerLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || href.trim() === "" || href.trim() === "#") {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          window.location.href = "/404.html";
        });
      }
    });
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

//Error 404

document.addEventListener("DOMContentLoaded", () => {
  const allLinks = document.querySelectorAll("a");

  allLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (!href || href.trim() === "" || href.trim() === "#") {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "/404.html";
      });
    }
  });
});
