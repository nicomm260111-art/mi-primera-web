const boton = document.getElementById("btnInfo");
const info = document.getElementById("extraInfo");

boton.addEventListener("click", () => {
  if (info.style.display === "none") {
    info.style.display = "block";
    boton.textContent = "Ocultar información";
  } else {
    info.style.display = "none";
    boton.textContent = "Más sobre mí";
  }
});

function mostrarInfo(tipo) {
  const descripcion = document.getElementById("descripcion");

  if (tipo === "html") {
    descripcion.innerHTML =
      "<p><strong>HTML</strong>: Lenguaje que se usa para crear la estructura de una página web.</p>";
  }

  if (tipo === "css") {
    descripcion.innerHTML =
      "<p><strong>CSS</strong>: Se utiliza para dar diseño, colores y estilo a la web.</p>";
  }

  if (tipo === "github") {
    descripcion.innerHTML =
      "<p><strong>GitHub</strong>: Plataforma para guardar proyectos y mostrar tu trabajo.</p>";
  }
}
