const ventasArray = [
  {
    id: "0001",
    nombreCliente: "Pepito Perano",
    fechaVenta: "27/07/2023",
    montoVenta: "$38000",
  },
  {
    id: "0002",
    nombreCliente: "Rosa Maria",
    fechaVenta: "12/04/2023",
    montoVenta: "$650000",
  },
];

var tablaVentas = document.getElementById("tablaVentas");

function crearFilaVenta(venta) {
  var fila = tablaVentas.insertRow();

  var idCell = fila.insertCell(0);
  var nombreClienteCell = fila.insertCell(1);
  var fechaVentaCell = fila.insertCell(2);
  var montoVentaCell = fila.insertCell(3);
  var accionesCell = fila.insertCell(4);

  idCell.textContent = venta.id;
  nombreClienteCell.textContent = venta.nombreCliente;
  fechaVentaCell.textContent = venta.fechaVenta;
  montoVentaCell.textContent = venta.montoVenta;
  accionesCell.style.display = "flex";
  accionesCell.style.justifyContent = "center";

  accionesCell.innerHTML = `
    <button type="button" class="btn" onclick="verMas('${venta.id}')">
        <img src="img/show.ico" alt="Ver" class="iconos-listar">
    </button>
    <div class="form-check form-switch checkeo" style="margin-top: 5px;">
        <input class="form-check-input" type="checkbox" role="switch" id="switch-${venta.id}"
            onchange="cambiarEstado('${venta.id}')">
    </div>`;
}

function llenarTablaVentas() {
  while (tablaVentas.rows.length > 1) {
    tablaVentas.deleteRow(1);
  }

  for (var i = 0; i < ventasArray.length; i++) {
    var venta = ventasArray[i];
    crearFilaVenta(venta);
  }
}

function verMas(id) {
  var idCodificado = encodeURIComponent(id);
  window.location.href = `detalleVenta`;
}

llenarTablaVentas();

function cambiarEstado(ventaId) {
  var switchElement = document.getElementById(`switch-${ventaId}`);

  if (!switchElement.checked) {
    document
      .getElementById("confirmarCambioEstadoBtn")
      .setAttribute("data-venta-id", ventaId);

    $("#confirmarCambioEstadoModal").modal("show");
  } else {
    $("#confirmarCambioEstadoModal").modal("show");
  }
}

document
  .getElementById("confirmarCambioEstadoBtn")
  .addEventListener("click", function () {
    var ventaId = this.getAttribute("data-venta-id");

    cambiarEstadoConfirmado(ventaId);

    $("#confirmarCambioEstadoModal").modal("hide");
  });

function cambiarEstadoConfirmado(ventaId) {
  var switchElement = document.getElementById(`switch-${ventaId}`);
  switchElement.checked = !switchElement.checked;
}


document.getElementById('descargarFacturaBtn').addEventListener('click', function () {
    descargarFactura();
});

function descargarFactura() {
    const blob = new Blob([''], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'factura.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}