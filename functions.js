//Funcion de flecha hacia arriba

function irArriba() {
  window.addEventListener("scroll", () => {
    var scroll = document.documentElement.scrollTop;

    var botonArriba = document.getElementsByClassName("botonArriba");

    if (scroll > 700) {
      botonArriba[0].style.right = "20px";
    } else {
      botonArriba[0].style.right = "-100px";
    }
  });
}

irArriba();

//funcion de validacion mail

const email = document.getElementById("email");
const form = document.getElementById("subscribeForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value.includes("@")) {
    mensaje.innerHTML = "¡Gracias por suscribirte!";
    mensaje.style.color = "green";
    form.reset();

    setTimeout(() => {
      mensaje.innerHTML = "";
    }, 3000);
  } else {
    mensaje.innerHTML = "Por favor, ingrese un correo electrónico válido.";
    mensaje.style.color = "red";
    form.reset();
    setTimeout(() => {
      mensaje.innerHTML = "";
    }, 3000);
  }
});
