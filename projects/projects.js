const API_URL =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

const urlParams = new URLSearchParams(window.location.search);
let uuidSeleccionado = urlParams.get("uuid");

if (!uuidSeleccionado) {
  uuidSeleccionado = localStorage.getItem("uuidSeleccionado");
} else {
  localStorage.setItem("uuidSeleccionado", uuidSeleccionado);
}

let proyectosData = [];

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    proyectosData = data;

    console.log(data);

    let proyectoPrincipal;

    if (uuidSeleccionado) {
      proyectoPrincipal = data.find(
        (project) => project.uuid === uuidSeleccionado
      );
    }

    // Si no hay uno válido, uso el primero
    if (!proyectoPrincipal) {
      proyectoPrincipal = data[0];
      uuidSeleccionado = proyectoPrincipal.uuid;
      localStorage.setItem("uuidSeleccionado", uuidSeleccionado);
    }

    // Excluyo el proyecto principal de los otros
    const otrosProyectos = data.filter(
      (project) => project.uuid !== uuidSeleccionado
    );

    mostrarProyectoPrincipal(proyectoPrincipal);
    mostrarOtrosProyectos(otrosProyectos);
  })
  .catch((error) => console.error("Error al cargar la API:", error));

function mostrarProyectoPrincipal(proyecto) {
  if (!proyecto) {
    console.error("No se encontró el proyecto principal");
    return;
  }

  const contenedor = document.getElementById("proyecto-principal");

  contenedor.innerHTML = `
      <div class="info-general">
        <div class="info-principal">
          <h1 id="nombre-proyecto">${proyecto.name}</h1>
          <p id="descripcion-proyecto">${proyecto.description}</p>
        </div>
        <div class="info-completado" id="completado-proyecto">
          Completed on ${proyecto.completed_on}
        </div>
      </div>
      <div class="imagen">
        <img src="${proyecto.image}" alt="${proyecto.name}" />
      </div>
      <div class="contenido" id="contenido-proyecto">
        ${proyecto.content}
      </div>
    `;
}

function mostrarOtrosProyectos(proyectos) {
  const contenedor = document.getElementById("otros-proyectos");

  contenedor.innerHTML = "";

  proyectos.forEach((proyecto) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <img src="${proyecto.image}" alt="${proyecto.name}" width="200">
      <h4>${proyecto.name}</h4>
      <p>${proyecto.description}</p>
      <a href="javascript:void(0);" class="learn-more">Learn more</a>
    `;

    div.querySelector("a").addEventListener("click", (event) => {
      event.preventDefault();
      const nuevoUuid = proyecto.uuid;

      // Guardo el nuevo UUID en localStorage
      localStorage.setItem("uuidSeleccionado", nuevoUuid);

      const nuevoProyecto = proyectosData.find((p) => p.uuid === nuevoUuid);
      mostrarProyectoPrincipal(nuevoProyecto);

      const proyectosRestantes = proyectosData.filter(
        (p) => p.uuid !== nuevoUuid
      );
      mostrarOtrosProyectos(proyectosRestantes);
    });

    contenedor.appendChild(div);
  });
}
