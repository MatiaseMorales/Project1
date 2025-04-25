//Funcion para subir con flecha

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