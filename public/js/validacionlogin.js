function login() {
    // Valida los datos de inicio de sesión
    if (validarCorreo() && validarContraseña()) {
      // Realiza la solicitud de inicio de sesión
      $.ajax({
        url: "",
        type: "POST",
        data: {
          correoElectronico: $("#correoElectronico").val(),
          contraseña: $("#password").val(),
        },
        success: function(respuesta) {
          // Si la respuesta es exitosa, muestra una alerta
          if (respuesta.exito) {
            Swal.fire({
              title: "Inicio de sesión exitoso",
              text: "Has iniciado sesión correctamente.",
              icon: "success",
            });
  
            // Redirecciona al usuario a la página principal
            window.location.href = "/";
          } else {
            // Si la respuesta es fallida, muestra una alerta
            Swal.fire({
              title: "Inicio de sesión fallido",
              text: respuesta.mensaje,
              icon: "error",
            });
          }
        },
        error: function(error) {
          // Si hay un error, muestra una alerta
          Swal.fire({
            title: "Inicio de sesión fallido",
            text: "Ha ocurrido un error al iniciar sesión.",
            icon: "error",
          });
        },
      });
    }
  }
  