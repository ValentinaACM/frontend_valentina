//CotizacionValidaciones


function validarNomCliente() {
    var inputNombreCliente = document.getElementById('nombreCliente');
    var mensajeErrorCli = document.getElementById('mensajeErrorCliente');

    // Expresión regular para validar que solo contiene letras (sin espacios)
    var regex = /^[A-Za-z\s]+$/;

    if (regex.test(inputNombreCliente.value)) {
        inputNombreCliente.classList.remove('invalido');
        inputNombreCliente.classList.add('valido');
        mensajeErrorCli.textContent = '';
    } else {
        inputNombreCliente.classList.remove('valido');
        inputNombreCliente.classList.add('invalido');
        mensajeErrorCli.textContent = 'Ingrese un nombre válido (solo letras).';
    }
}


function validarProductoCot() {
    var inputNombreProducto = document.getElementById('nombreProductoCot');
    var mensajeErrorProducto = document.getElementById('mensajeErrorProducto');

    var regex = /^[A-Za-z\s]+$/; // La expresión regular ahora acepta uno o más dígitos


    if (regex.test(inputNombreProducto.value)) {
        inputNombreProducto.classList.remove('invalido');
        inputNombreProducto.classList.add('valido');
        mensajeErrorProducto.textContent = '';
    } else {
        inputNombreProducto.classList.remove('valido');
        inputNombreProducto.classList.add('invalido');
        mensajeErrorProducto.textContent = 'Ingrese un nombre para el producto válido (solo letras).';
    }
}

function validarCantidadII() {
    var inputCantidadII = document.getElementById('cantidadII');
    var mensajeErrorCantidadII = document.getElementById('mensajeErrorCantidadII');

    var regex = /^\d+$/;  // La expresión regular ahora acepta uno o más dígitos
    var cantidadII= inputCantidadII.value;  // Obtén el valor del input

    if (regex.test(cantidadII)) {
        inputCantidadII.classList.remove('invalido');
        inputCantidadII.classList.add('valido');
        mensajeErrorCantidadII.textContent = '';
    
    } else {
        inputCantidadII.classList.remove('valido');
        inputCantidadII.classList.add('invalido');
        mensajeErrorCantidadII.textContent = 'Ingrese una cantidad válida.';
    }
}

function validarDescripcion() {
    var inputDescripcion = document.getElementById('descripcion');
    var mensajeErrorDescripcion = document.getElementById('mensajeErrorDescripcion');

    // La expresión regular ahora permite cualquier combinación de números y letras
    var regex = /^[a-zA-Z0-9]+$/;
    var Descripcion = inputDescripcion.value;  // Obtén el valor del input

    if (regex.test(Descripcion)) {
        inputDescripcion.classList.remove('invalido');
        inputDescripcion.classList.add('valido');
        mensajeErrorDescripcion.textContent = '';
    } else {
        inputDescripcion.classList.remove('valido');
        inputDescripcion.classList.add('invalido');
        mensajeErrorDescripcion.textContent = 'Ingrese un recibo válido (solo números y letras).';
    }
}


