var botonDescargar = document.getElementById('descargar-btn');

function mostrarImagenSeleccionada(input) {
    var archivoSeleccionado = input.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('imgComprobante').src = e.target.result;
        document.getElementById('contenedorImg2').style.display = 'block';

        // Habilita el botón de descarga
        botonDescargar.disabled = false;
    };

    reader.readAsDataURL(archivoSeleccionado);
}

function descargarImagen() {
    var imagenSrc = document.getElementById('imgComprobante').src;

    // Crea un enlace temporal para descargar la imagen
    var enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = imagenSrc;
    enlaceDescarga.download = 'imagen_descargada.jpg'; // Nombre del archivo para descargar
    enlaceDescarga.style.display = 'none';

    // Agrega el enlace al DOM y haz clic en él para iniciar la descarga
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();

    // Elimina el enlace del DOM después de la descarga
    document.body.removeChild(enlaceDescarga);

    // Deshabilita el botón de descarga después de la descarga
    botonDescargar.disabled = true;
}
function agregarInsumo() {
    var html = '<li class="list-group-item"><input type="text" class="form-control" placeholder="Ingrese un insumo"><input type="number" class="form-control" placeholder="Cantidad"><input type="text" class="form-control" placeholder="Ingrese el precio"><button type="button" class="btn btncolor btn-sm float-right " onclick="eliminarInsumo(this)">Eliminar</button></li>';
   $('#insumos').append(html);
}
  


 function eliminarInsumo(btn) {
   $(btn).closest('li').remove();
 }





  //validaciones de campos
  function validarNombre() {
    var inputNombre = document.getElementById('nombreProducto');
    var mensajeError = document.getElementById('mensajeError');

    // Expresión regular para validar que solo contiene letras y espacios
    var regex = /^[A-Z][a-zA-Z\s]{10,49}$/


    if (regex.test(inputNombre.value)) {
        inputNombre.classList.remove('invalido');
        inputNombre.classList.add('valido');
        mensajeError.textContent = '';
    } else {
        inputNombre.classList.remove('valido');
        inputNombre.classList.add('invalido');
        mensajeError.textContent = 'Ingrese un nombre válido (primera letra mayuscula).';
    }
}
  //validacion de la cantidad
  function validarCostoProducto() {
    const costoProductoInput = document.getElementById("costoproducto");
    const mensajeErrorCostoProducto = document.getElementById("mensajeErrorCostoproducto");

    if (costoProductoInput.value > 0) {
        costoProductoInput.classList.remove("invalido");
        costoProductoInput.classList.add("valido");
        mensajeErrorCostoProducto.innerHTML = "";
    } else {
        costoProductoInput.classList.remove("valido");
        costoProductoInput.classList.add("invalido");
        mensajeErrorCostoProducto.innerHTML = "El costo del producto debe ser mayor que cero.";
    }
}
//validar stock
function validarStock() {
    var stockInput = document.getElementById('cantidadstock');
    var mensajeError = document.getElementById('mensajeErrorcantidadstock');
    var cantidadStock = stockInput.value.trim();

    // Validación de cantidad en stock: solo números no negativos
    if (isNaN(cantidadStock) || cantidadStock <= 0) {
        // Si la validación no pasa, muestra el borde en rojo
        stockInput.classList.remove('valido');
        stockInput.classList.add('invalido');
        mensajeError.textContent = 'Ingrese una cantidad no negativa.';
        mensajeError.style.color = 'red';
    } else {
        // Si la validación pasa, muestra el borde en verde y elimina el mensaje de error
        stockInput.classList.remove('invalido');
        stockInput.classList.add('valido');
        mensajeError.textContent = ''; // Limpiar el mensaje de error
    }
}
function validarcostoTotal() {
    var stockInput = document.getElementById('costototal');
    var mensajeError = document.getElementById('mensajeErrorcostototal');
    var cantidadStock = stockInput.value.trim();

    // Validación de cantidad en stock: solo números no negativos
    if (isNaN(cantidadStock) || cantidadStock <= 0) {
        // Si la validación no pasa, muestra el borde en rojo
        stockInput.classList.remove('valido');
        stockInput.classList.add('invalido');
        mensajeError.textContent = 'Ingrese una cantidad no negativa.';
        mensajeError.style.color = 'red';
    } else {
        // Si la validación pasa, muestra el borde en verde y elimina el mensaje de error
        stockInput.classList.remove('invalido');
        stockInput.classList.add('valido');
        mensajeError.textContent = ''; // Limpiar el mensaje de error
    }
}
function validarprecioventa() {
    var stockInput = document.getElementById('precioventa');
    var mensajeError = document.getElementById('mensajeErrorprecioventa');
    var cantidadStock = stockInput.value.trim();

    // Validación de cantidad en stock: solo números no negativos
    if (isNaN(cantidadStock) || cantidadStock <= 0) {
        // Si la validación no pasa, muestra el borde en rojo
        stockInput.classList.remove('valido');
        stockInput.classList.add('invalido');
        mensajeError.textContent = 'Ingrese una cantidad no negativa.';
        mensajeError.style.color = 'red';
    } else {
        // Si la validación pasa, muestra el borde en verde y elimina el mensaje de error
        stockInput.classList.remove('invalido');
        stockInput.classList.add('valido');
        mensajeError.textContent = ''; // Limpiar el mensaje de error
    }
}

//modal
function mostrarModal() {
    // Obtiene la instancia de la modal utilizando Bootstrap
    var miModal = new bootstrap.Modal(document.getElementById('miModal'));
    
    
    miModal.show();
  }

  //redirigir el aceptar al formulario
  document.getElementById('btnAceptar').addEventListener('click', function() {
  
    window.location.href = 'ejemplo.html';  // Reemplaza '/ruta-de-tu-formulario.html' con la ruta correcta
  });

//MODAL DE CANCELAR
function realizarAccionCancelar() {
    // Aquí puedes agregar lógica adicional si es necesario
    // Por ejemplo, redirección a otra página o ejecutar alguna acción específica
    console.log('Acción de cancelar realizada');

    // Cierra el modal después de realizar la acción
    var miModal = new bootstrap.Modal(document.getElementById('mimodal'));
    miModal.hide();
}
document.getElementById('btnCancelar').addEventListener('click', function() {
  
    window.location.href = 'ejemplo.html';  // Reemplaza '/ruta-de-tu-formulario.html' con la ruta correcta
  });



  function irAOtraVista() {
    // Cambia la URL a la vista deseada
    window.location.href = '/fichatecnica';  // Reemplaza 'url-de-otra-vista.html' con la URL real de tu otra vista
  }


   
