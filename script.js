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
    descripcion.innerHTML = "<p><strong>HTML</strong>: Es el lenguaje que estructura una página web. Define textos, títulos, imágenes y enlaces.</p>";
  }

  if (tipo === "css") {
    descripcion.innerHTML = "<p><strong>CSS</strong>: Se encarga del diseño de la web: colores, tamaños, posiciones y estilos.</p>";
  }

  if (tipo === "github") {
    descripcion.innerHTML = "<p><strong>GitHub</strong>: Plataforma para guardar proyectos, controlar versiones y mostrar tu trabajo al mundo.</p>";
  }
}
Botones interactivos para HTML, CSS y GitHub
alert("JS conectado correctamente");
