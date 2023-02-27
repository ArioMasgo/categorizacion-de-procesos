// Obtener las etiquetas y las celdas de la tabla

const etiquetas = document.querySelectorAll(".etiqueta");
const celdas = document.querySelectorAll(".celda");


// Añadir event listeners a las etiquetas para poder arrastrarlas
etiquetas.forEach(etiqueta => {
  etiqueta.addEventListener("dragstart", dragStart);
  etiqueta.addEventListener("dragend", dragEnd);
});

// Añadir event listeners a las celdas para poder soltar las etiquetas
celdas.forEach(celda => {
  celda.addEventListener("dragover", dragOver);
  celda.addEventListener("dragenter", dragEnter);
  celda.addEventListener("dragleave", dragLeave);
  celda.addEventListener("drop", dragDrop);
});

// Variables para almacenar la etiqueta arrastrada y la celda seleccionada
let etiquetaArrastrada;
let celdaSeleccionada;

// Funciones para arrastrar y soltar las etiquetas
function dragStart() {
  etiquetaArrastrada = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
}

function dragEnd() {
  etiquetaArrastrada = null;
  this.style.display = "block";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.style.background = "lightgray";
}

function dragLeave() {
  this.style.background = "";
}

function dragDrop() {
  celdaSeleccionada = this;
  this.appendChild(etiquetaArrastrada);
  this.style.background = "";
}
// Función para verificar la coincidencia entre la etiqueta y la celda
function verificarCoincidencia() {
  if (etiquetaArrastrada.classList.contains(celdaSeleccionada.classList[1])) {
    etiquetaArrastrada.style.backgroundColor = "green";
  } else {
    etiquetaArrastrada.style.backgroundColor = "red";
  }
}
// Obtener el repositorio y añadir event listeners para poder soltar las etiquetas en él
const repositorio = document.querySelector(".repositorio");
repositorio.addEventListener("dragover", dragOver);
repositorio.addEventListener("dragenter", dragEnter);
repositorio.addEventListener("dragleave", dragLeave);
repositorio.addEventListener("drop", repositorioDrop);

function repositorioDrop() {
  celdaSeleccionada = null;
  this.appendChild(etiquetaArrastrada);
  etiquetaArrastrada.style.backgroundColor = "";
}
