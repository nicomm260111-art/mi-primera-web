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
