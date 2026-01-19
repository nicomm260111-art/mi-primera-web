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
      "<p><strong>HTML</strong>: HTML es el lenguaje base de la web. Sirve para crear la estructura de una página, como títulos, textos, imágenes y enlaces.
</p>";
  }

  if (tipo === "css") {
    descripcion.innerHTML =
      "<p><strong>CSS</strong>: CSS se usa para dar estilo y diseño a una página web. Permite cambiar colores, tamaños, fuentes y la forma en que se ve el contenido.
</p>";
  }

  if (tipo === "github") {
    descripcion.innerHTML =
      "<p><strong>GitHub</strong>: GitHub es una plataforma donde se guardan proyectos de programación. Se utiliza para controlar cambios y mostrar el trabajo realizado.
</p>";
  }
}
