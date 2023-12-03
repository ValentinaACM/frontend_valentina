//ComprasValidaciones


function validarInsumo() {
    var inputNombre = document.getElementById('nombreInsumo');
    var mensajeError = document.getElementById('mensajeErrorInsumo');

    // Expresión regular para validar que solo contiene letras (sin espacios)
    var regex = /^[A-Za-z\s]+$/;

    if (regex.test(inputNombre.value)) {
        inputNombre.classList.remove('invalido');
        inputNombre.classList.add('valido');
        mensajeError.textContent = '';
    } else {
        inputNombre.classList.remove('valido');
        inputNombre.classList.add('invalido');
        mensajeError.textContent = 'Ingrese un nombre válido (solo letras).';
    }
}


function validarNumCompra() {
    var inputNumCompra = document.getElementById('numCompra');
    var mensajeError = document.getElementById('mensajeErrorNumCom');

    var regex = /^\d+$/;  // La expresión regular ahora acepta uno o más dígitos
    var numCompra = inputNumCompra.value;  // Obtén el valor del input

    if (regex.test(numCompra)) {
        inputNumCompra.classList.remove('invalido');
        inputNumCompra.classList.add('valido');
        mensajeError.textContent = '';

    } else {
        inputNumCompra.classList.remove('valido');
        inputNumCompra.classList.add('invalido');
        mensajeError.textContent = 'Ingrese un número de compra válido.';
    }
}

function validarCantidadI() {
    var inputCantidadI = document.getElementById('cantidadI');
    var mensajeError = document.getElementById('mensajeErrorCantidadI');

    var regex = /^\d+$/;  // La expresión regular ahora acepta uno o más dígitos
    var cantidadI= inputCantidadI.value;  // Obtén el valor del input

    if (regex.test(cantidadI)) {
        inputCantidadI.classList.remove('invalido');
        inputCantidadI.classList.add('valido');
        mensajeError.textContent = '';
    
    } else {
        inputCantidadI.classList.remove('valido');
        inputCantidadI.classList.add('invalido');
        mensajeError.textContent = 'Ingrese una cantidad válida.';
    }
}

function validarRecibo() {
    var inputRecibo = document.getElementById('recibo');
    var mensajeError = document.getElementById('mensajeErrorRecibo');

    // La expresión regular ahora permite cualquier combinación de números y letras
    var regex = /^[a-zA-Z0-9]+$/;
    var recibo = inputRecibo.value;  // Obtén el valor del input

    if (regex.test(recibo)) {
        inputRecibo.classList.remove('invalido');
        inputRecibo.classList.add('valido');
        mensajeError.textContent = '';
    } else {
        inputRecibo.classList.remove('valido');
        inputRecibo.classList.add('invalido');
        mensajeError.textContent = 'Ingrese un recibo válido (solo números y letras).';
    }
}



function validarIVA() {
    var inputIVA = document.getElementById('IVA');
    var mensajeError = document.getElementById('mensajeErrorIVA');

    // La expresión regular ahora acepta uno o más dígitos, seguido opcionalmente por un punto y más dígitos
    var regex = /^\d+(\.\d+)?%?$/;
    var IVA = inputIVA.value;  // Obtén el valor del input

    if (regex.test(IVA)) {
        inputIVA.classList.remove('invalido');
        inputIVA.classList.add('valido');
        mensajeError.textContent = '';
    } else {
        inputIVA.classList.remove('valido');
        inputIVA.classList.add('invalido');
        mensajeError.textContent = 'Ingrese una cantidad válida en formato de porcentaje.';
    }
}


function validarTotal() {
    var inputTotal = document.getElementById('total');
    var mensajeError = document.getElementById('mensajeErrorTotal');

    var regex = /^\d+$/;  // La expresión regular ahora acepta uno o más dígitos
    var total = inputTotal.value;  // Obtén el valor del input

    if (regex.test(total)) {
        inputTotal.classList.remove('invalido');
        inputTotal.classList.add('valido');
        mensajeError.textContent = '';

    } else {
        inputTotal.classList.remove('valido');
        inputTotal.classList.add('invalido');
        mensajeError.textContent = 'Ingrese un total válido.';
    }
}