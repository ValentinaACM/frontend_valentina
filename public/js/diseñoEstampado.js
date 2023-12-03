let estampadosArray = [
  {
    id: "1",
    nombre: "Estampado Rojo",
    descripcion: "Estampado de la cara de...",
    estado: "Activo",
    imagen: "css/more.ico",
  },
  {
    id: "2",
    nombre: "Estampado Azul",
    descripcion: "Estampado de la serie...",
    estado: "Inactivo",
    imagen: "css/more.ico",
  },
];

function cambiarEstado(estampadoId) {
  var switchElement = document.getElementById(`switch-${estampadoId}`);

  if (!switchElement.checked) {
    $("#confirmarCambioEstadoModal").modal("show");
  } else {
    $("#confirmarCambioEstadoModal").modal("show");
  }
}

function eliminarEstampado(id) {
  estampadoIdToDelete = id;
  $("#confirmarEliminarModal").modal("show");
}

function confirmarEliminarEstampado() {
  const index = estampadosArray.findIndex(
    (estampado) => estampado.id === estampadoIdToDelete
  );

  estampadosArray.splice(index, 1);

  llenarTabla();

  $("#confirmarEliminarModal").modal("hide");

  $("#eliminadoExitosamenteModal").modal("show");
}

let estampadoIdToEdit = null;

function editarEstampado(id) {
  const estampadoToEdit = estampadosArray.find(
    (estampado) => estampado.id == id
  );
  estampadoIdToEdit = id;

  document.getElementById("nombreAccion").textContent =
    "Editar diseño estampado";
  document.getElementById("inputNombreEstampado").value =
    estampadoToEdit.nombre;
  document.getElementById("descripcion").value = estampadoToEdit.descripcion;
  document.getElementById("imagenes").value = estampadoToEdit.imagen;

  $("#registroEstampadoModal").modal("show");

  // Desplazar hacia la parte superior de la página
  const topElement = document.getElementById("nombreAccion");
  topElement.scrollIntoView({ behavior: "smooth" });
}

var tabla = document.getElementById("tablaEstampados");

function crearFila(estampado) {
  var fila = tabla.insertRow();

  var idCell = fila.insertCell(0);
  var nombreCell = fila.insertCell(1);
  var descripcionCell = fila.insertCell(2);
  var estadoCell = fila.insertCell(3);
  var imagenCell = fila.insertCell(4);

  idCell.textContent = estampado.id;
  nombreCell.textContent = estampado.nombre;
  descripcionCell.textContent = estampado.descripcion;
  estadoCell.textContent = estampado.estado;
  imagenCell.innerHTML = `<img src="${estampado.imagen}" alt="${estampado.nombre}" style="width: 28px; height: 28px;">`;

  var accionesCell = fila.insertCell(5);
  accionesCell.style.display = "flex";
  accionesCell.style.justifyContent = "center";

  accionesCell.innerHTML = `
        <button type="button" class="btn" onclick="editarEstampado( ${
          estampado.id
        } )">
            <img src="img/pencil.ico" alt="Editar" class="iconos-listar">
        </button>
        <button type="button" class="btn" onclick="eliminarEstampado('${
          estampado.id
        }')">
            <img src="img/delete.ico" alt="Borrar" class="iconos-listar">
        </button>
        <div class="form-check form-switch checkeo" style="margin-top: 5px;">
            <input class="form-check-input" type="checkbox" role="switch" id="switch-${
              estampado.id
            }"
                ${estampado.activo ? "checked" : ""} onchange="cambiarEstado(${
    estampado.id
  })">
        </div>`;
}

function llenarTabla() {
  while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
  }

  for (var i = 0; i < estampadosArray.length; i++) {
    var estampado = estampadosArray[i];
    crearFila(estampado);
  }
}

llenarTabla();

function mostrarConfirmacionModal(estampadoId) {
  $("#confirmacionModal").modal("show");

  document
    .getElementById("confirmarEliminarBtn")
    .setAttribute("data-estampado-id", estampadoId);
}

document
  .getElementById("confirmarEliminarBtn")
  .addEventListener("click", function () {
    var estampadoId = this.getAttribute("data-estampado-id");

    estampadosArray = estampadosArray.filter(
      (estampado) => estampado.id !== estampadoId
    );

    $("#confirmacionModal").modal("hide");

    llenarTabla();
  });

function validarNombreEstampado() {
  var inputNombre = document.getElementById("inputNombreEstampado");
  var mensajeError = document.getElementById("mensajeErrorNombre");

  var nombre = inputNombre.value.trim();

  if (nombre === "") {
    inputNombre.classList.remove("valido");
    inputNombre.classList.add("invalido");
    mensajeError.textContent = "Este campo no puede estar vacío.";
  } else if (!/^[A-Za-z\s]+$/.test(nombre)) {
    inputNombre.classList.remove("valido");
    inputNombre.classList.add("invalido");
    mensajeError.textContent =
      "Ingrese un nombre válido (solo letras y espacios).";
  } else if (!/^[A-Z][a-zA-Z\s]{2,49}$/.test(nombre)) {
    inputNombre.classList.remove("valido");
    inputNombre.classList.add("invalido");
    mensajeError.textContent =
      "El nombre debe comenzar con mayúscula y tener entre 3 y 50 caracteres.";
  } else {
    inputNombre.classList.remove("invalido");
    inputNombre.classList.add("valido");
    mensajeError.textContent = "";
  }
}

function validarDescripcionEstampado() {
  var descripcionInput = document.getElementById("descripcion");
  var descripcionError = document.getElementById("descripcionError");

  var descripcion = descripcionInput.value.trim();

  if (descripcion === "") {
    descripcionInput.classList.remove("valido");
    descripcionInput.classList.add("invalido");
    descripcionError.textContent = "Este campo no puede estar vacío.";
  } else {
    descripcionInput.classList.remove("invalido");
    descripcionInput.classList.add("valido");
    descripcionError.textContent = "";
  }
}

function validarImagenEstampado() {
  var imagenesInput = document.getElementById("imagenes");
  var imagenesError = document.getElementById("imagenesError");

  if (imagenesInput.files.length === 0) {
    imagenesInput.classList.remove("valido");
    imagenesInput.classList.add("invalido");
    imagenesError.textContent = "Seleccione al menos una imagen.";
  } else {
    imagenesInput.classList.remove("invalido");
    imagenesInput.classList.add("valido");
    imagenesError.textContent = "";
  }
}

document
  .getElementById("inputNombreEstampado")
  .addEventListener("input", validarNombreEstampado);
document
  .getElementById("descripcion")
  .addEventListener("input", validarDescripcionEstampado);
document
  .getElementById("imagenes")
  .addEventListener("change", validarImagenEstampado);

function guardarCambiosEstampado() {
  var nombreEstampado = document.getElementById("inputNombreEstampado").value;
  var descripcion = document.getElementById("descripcion").value;
  var imagenes = document.getElementById("imagenes").files;

  validarNombreEstampado();
  if (
    !document
      .getElementById("inputNombreEstampado")
      .classList.contains("valido")
  ) {
    return;
  }

  validarDescripcionEstampado();
  if (!document.getElementById("descripcion").classList.contains("valido")) {
    return;
  }

  validarImagenEstampado();
  if (!document.getElementById("imagenes").classList.contains("valido")) {
    return;
  }

  if (estampadoIdToEdit !== null) {
    const indexToEdit = estampadosArray.findIndex(
      (estampado) => estampado.id == estampadoIdToEdit
    );

    estampadosArray[indexToEdit].nombre = nombreEstampado;
    estampadosArray[indexToEdit].descripcion = descripcion;
    // estampadosArray[indexToEdit].imagen = ...

    estampadoIdToEdit = null;

    $("#exitoModalEstampadoEdit").modal("show");
    document.getElementById("nombreAccion").textContent =
      "Registrar diseño estampado";
  } else {
    const nuevoEstampado = {
      id: "0003",
      nombre: nombreEstampado,
      descripcion: descripcion,
      estado: "Activo",
      diseño: "Diseño 3",
      activo: true,
    };

    estampadosArray.push(nuevoEstampado);

    $("#exitoModalEstampado").modal("show");
  }

  document.getElementById("inputNombreEstampado").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("imagenes").value = "";

  llenarTabla();
}
