document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
  
    if (!form || !name || !email || !phone || !message) return;
  
    const limpiarErrores = () => {
      const errores = form.querySelectorAll(".error-msg");
      errores.forEach((e) => e.remove());
    };
  
    const mostrarError = (inputElement, mensaje) => {
        const errorContainer = inputElement.parentElement.querySelector(".error-container");
        if (!errorContainer) return;
      
        errorContainer.innerHTML = ""; // Limpio errores previos
        const error = document.createElement("p");
        error.textContent = mensaje;
        error.classList.add("error-msg");
        errorContainer.appendChild(error);
      };
      
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      limpiarErrores();
      let tieneErrores = false;
  
      if (name.value.trim() === "") {
        mostrarError(name, "El nombre es obligatorio.");
        tieneErrores = true;
      }else if(name.value.trim() === "Ironhack" || name.value.trim() === "ironhack" || name.value.trim() === "IRONHACK"){
        mostrarError(name, "No puedes ser " + name.value.trim() + ", por que yo soy " + name.value.trim() + ".");
        tieneErrores = true;
      }
  
      if (email.value.trim() === "" ) {
        mostrarError(email, "El correo es obligatorio.");
        tieneErrores = true;
        } else if (!email.value.includes("@")) {
        mostrarError(email, "El correo no es válido.");
        tieneErrores = true;
      }
  
      const phoneValue = phone.value.trim();
      if (phoneValue === "") {
        mostrarError(phone, "El teléfono es obligatorio.");
        tieneErrores = true;
      } else if (!/^\d+$/.test(phoneValue)) {
        mostrarError(phone, "El teléfono solo debe contener números.");
        tieneErrores = true;
      } else if (phoneValue.length < 7 || phoneValue.length > 15) {
        mostrarError(phone, "El teléfono debe tener entre 7 y 15 dígitos.");
        tieneErrores = true;
      }
  
      if (message.value.trim() === "") {
        mostrarError(message, "El mensaje es obligatorio.");
        tieneErrores = true;
      }
  
      if (tieneErrores) return;
  
      // Si no hay errores doy este mensaje
      const exito = document.createElement("p");
      exito.textContent = "¡Formulario enviado correctamente!";
      exito.style.color = "green";
      form.appendChild(exito);
      form.reset();
  
      setTimeout(() => {
        exito.remove();
      }, 3000);
    });
  });
  