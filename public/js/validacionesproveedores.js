function validarNombreProveedor() {
    var inputNombreProveedor = document.getElementById('nombreProveedor');
    var mensajeError = document.getElementById('mensajeError');

    // Expresión regular para validar que solo contiene letras y espacios
    var regex = /^[A-Z][a-zA-Z\s]{10,49}$/


    if (regex.test(inputNombreProveedor.value)) {
        inputNombreProveedor.classList.remove('invalido');
        inputNombreProveedor.classList.add('valido');
        mensajeError.textContent = '';
    } else {
        inputNombreProveedor.classList.remove('valido');
        inputNombreProveedor.classList.add('invalido');
        mensajeError.textContent = 'Ingrese un nombre válido (primera letra mayuscula).';
    }
}
//verificacion del nit
function validarNIT() {
    var inputNIT = document.getElementById('nit');
    var mensajeErrorNIT = document.getElementById('mensajeErrorNit');

    // Expresión regular para validar un NIT en Colombia
    var regexNIT = /^\d{9}-\d$/;

    if (regexNIT.test(inputNIT.value.trim())) {
        inputNIT.classList.remove('invalido');
        inputNIT.classList.add('valido');
        mensajeErrorNIT.textContent = '';
    } else {
        inputNIT.classList.remove('valido');
        inputNIT.classList.add('invalido');
        mensajeErrorNIT.textContent = 'Ingrese un NIT válido en el formato correcto (xxxxxxxxx-y).';
    }
}
//validar direccion
function validarDireccion() {
    var inputDireccion = document.getElementById('direccion');
    var mensajeErrorDireccion = document.getElementById('mensajeErrorDireccion');

    // Expresión regular básica para validar una dirección en Colombia
    var regexDireccion = /^[A-Za-z1-9\s#.,-]{5,10}$/


    if (inputDireccion.value.trim() === '') {
        // La dirección está vacía, muestra un mensaje de error
        mensajeErrorDireccion.textContent = 'Por favor, ingrese una dirección.';
        mensajeErrorDireccion.style.color = 'red';
        inputDireccion.classList.remove('valido');
        inputDireccion.classList.add('invalido');
    } else if (regexDireccion.test(inputDireccion.value.trim())) {
        // La dirección es válida, borra el mensaje de error y aplica estilos de validación
        mensajeErrorDireccion.textContent = '';
        inputDireccion.classList.remove('invalido');
        inputDireccion.classList.add('valido');
    } else {
        // La dirección no cumple con el formato, muestra un mensaje de error
        mensajeErrorDireccion.textContent = 'Ingrese una dirección válida.';
        mensajeErrorDireccion.style.color = 'red';
        inputDireccion.classList.remove('valido');
        inputDireccion.classList.add('invalido');
    }
}

//validar correo
function validarCorreo() {
    var correoInput = document.getElementById('correo');
    var mensajeErrorCorreo = document.getElementById('mensajeErrorCorreo');
    
    // Expresión regular para validar el formato de correo electrónico
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correoInput.value.trim() === '') {
      // El campo está vacío, muestra un mensaje de error y aplica el estilo de entrada inválida
      mensajeErrorCorreo.innerHTML = 'Por favor, ingrese su correo electrónico.';
      mensajeErrorCorreo.style.color = 'red';
      correoInput.classList.remove('valido');
      correoInput.classList.add('invalido');
    } else if (!regexCorreo.test(correoInput.value)) {
      // El formato del correo electrónico no es válido, muestra un mensaje de error y aplica el estilo de entrada inválida
      mensajeErrorCorreo.innerHTML = 'Por favor, ingrese un correo electrónico válido.';
      mensajeErrorCorreo.style.color = 'red';
      correoInput.classList.remove('valido');
      correoInput.classList.add('invalido');
    } else {
      // La entrada es válida, borra el mensaje de error y aplica el estilo de entrada válida
      mensajeErrorCorreo.innerHTML = '';
      mensajeErrorCorreo.style.color = 'green';
      correoInput.classList.add('valido');
      correoInput.classList.remove('invalido');
    }
}

  //validar nombre contacto

function validarNombreContacto() {
    var inputNombrecontacto = document.getElementById('nombreContacto');
    var mensajeError = document.getElementById('mensajeErrorcontacto');

    // Expresión regular para validar que solo contiene letras y espacios
    var regex = /^[A-Z][a-zA-Z\s]{10,49}$/


    if (regex.test(inputNombrecontacto.value)) {
        inputNombrecontacto.classList.remove('invalido');
        inputNombrecontacto.classList.add('valido');
        mensajeError.textContent = '';
    } else {
        inputNombrecontacto.classList.remove('valido');
        inputNombrecontacto.classList.add('invalido');
        mensajeError.textContent = 'Ingrese un nombre válido (primera letra mayuscula).'
        mensajeErrorcontacto.style.color = 'red';
    }
}

//validacion numero de telefono
function validarNumeroContacto() {
    var inputNumerocontacto = document.getElementById('numerocontacto');
    var mensajeErrorTelefono = document.getElementById('mensajeErrorTelefono');

    var regexNumerocontacto = /^[0-9]{7,10}$/;

    if (regexNumerocontacto.test(inputNumerocontacto.value.trim())) {
        inputNumerocontacto.classList.remove('invalido');
        inputNumerocontacto.classList.add('valido');
        mensajeErrorTelefono.textContent = '';
    } else {
        inputNumerocontacto.classList.remove('valido');
        inputNumerocontacto.classList.add('invalido');
        mensajeErrorTelefono.textContent = 'Ingrese un número de teléfono válido (10 dígitos numéricos).'
        mensajeErrorTelefono.style.color = 'red';;
    }
}
// //modal de guardar
// function mostrarModal() {
//     // Obtiene la instancia de la modal utilizando Bootstrap
//     var miModal = new bootstrap.Modal(document.getElementById('miModal'));
    
    
//     miModal.show();
//   }
  
//   //redirigir el aceptar al formulario
//   document.getElementById('btnAceptar').addEventListener('click', function() {
  
//     window.location.href = 'formularioProveedores.html';  // Reemplaza '/ruta-de-tu-formulario.html' con la ruta correcta
//   });
  

    //modal de cancelar
// function realizarAccionCancelar() {
//     // Aquí puedes agregar lógica adicional si es necesario
//     // Por ejemplo, redirección a otra página o ejecutar alguna acción específica
//     console.log('Acción de cancelar realizada');

//     // Cierra el modal después de realizar la acción
//     var miModal = new bootstrap.Modal(document.getElementById('miModal'));
//     miModal.hide();
// }
// document.getElementById('btnCancelar').addEventListener('click', function() {
  
//     window.location.href = 'formularioProveedores.html';  // Reemplaza '/ruta-de-tu-formulario.html' con la ruta correcta
//   });


  //modal para cambio de estado
//   var switchElement = document.getElementById('flexSwitchCheckDefault');
//   switchElement.addEventListener('change', function() {
//     // Muestra u oculta el modal según el estado del switch
//     var modal = new bootstrap.Modal(document.getElementById('modalestado'));
//     if (switchElement.checked) {
//       modal.show();
//     } else {
//       modal.hide();
//     }
//   });




