
function validarNombreCatInsumo() {
    var inputNombre = document.getElementById('nomCatInsumo');
    var mensajeError = document.getElementById('mensajeError');
  
    // Expresión regular para validar que solo contiene letras y espacios
    var regex = /^[a-zA-ZñÑ\s]+$/;
  
    if (inputNombre.value.trim() !== '') {
        // Verificar longitud mayor a 3 caracteres y menor a 20 caracteres
        if (inputNombre.value.length > 3 && inputNombre.value.length < 20) {
            // Verificar si la cadena solo contiene letras y espacios
            if (regex.test(inputNombre.value)) {
                inputNombre.classList.remove('invalido');
                inputNombre.classList.add('valido');
                mensajeError.textContent = '';
                return true;  // Devolver true si la validación es exitosa
            } else {
                inputNombre.classList.remove('valido');
                inputNombre.classList.add('invalido');
                mensajeError.style.color = 'red';
                mensajeError.textContent = 'El nombre solo puede contener letras y espacios.';
            }
        } else {
            inputNombre.classList.remove('valido');
            inputNombre.classList.add('invalido');
            mensajeError.style.color = 'red';
            mensajeError.textContent = 'El nombre debe tener entre 4 y 19 caracteres.';
        }
    } else {
        inputNombre.classList.remove('valido');
        inputNombre.classList.add('invalido');
        mensajeError.style.color = 'red';
        mensajeError.textContent = 'Este campo es obligatorio.';
    }
     // Devolver false si la validación no es exitosa
     return false;
  }
  
  function validarDetalleCatInsumo() {
    var inputDetalleCatInsumo = document.getElementById('detalleCatInsumo');
    var mensajeErrorDetalle = document.getElementById('mensajeErrorDetalle');
  
    // Expresión regular para validar que solo contiene letras y espacios
    var regex = /^[a-zA-Z0-9\s]+$/;
  
    if (inputDetalleCatInsumo.value.trim() !== '') {
        // Verificar si la cadena solo contiene letras y espacios
        if (regex.test(inputDetalleCatInsumo.value)) {
            inputDetalleCatInsumo.classList.remove('invalido');
            inputDetalleCatInsumo.classList.add('valido');
            mensajeErrorDetalle.textContent = '';
            return true;  // Devolver true si la validación es exitosa
        } else {
            inputDetalleCatInsumo.classList.remove('valido');
            inputDetalleCatInsumo.classList.add('invalido');
            mensajeErrorDetalle.style.color = 'red';
            mensajeErrorDetalle.textContent = 'La descripción no puede tener caracteres especiales';
        }
    } else {
        inputDetalleCatInsumo.classList.remove('valido');
        inputDetalleCatInsumo.classList.add('invalido');
        mensajeErrorDetalle.style.color = 'red';
        mensajeErrorDetalle.textContent = 'Este campo es obligatorio.';
  
    }
  
    // Devolver false si la validación no es exitosa
    return false;
  }

// URL de la API
  const url = 'http://localhost:8383/catInsumo';

  // Función para listar las categorías de insumos
  const listarCategoriasInsumos = async () => {
      fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: { "Content-type": "application/json; charset=UTF-8" }
      })
      .then((res) => res.json())
      .then(function (data) {
          let listaCatInsumo = data.msg;
          const tbody = document.getElementById('contenido');
          tbody.innerHTML = '';

          listaCatInsumo.forEach(function (catInsumo) {
              // Convertir el objeto catInsumo a una cadena de consulta
              objetoCatInsumo = Object.keys(catInsumo).map(key => key + '=' + encodeURIComponent(catInsumo[key])).join('&');

              // Crear una fila HTML para la tabla
              let filaHTML = `<tr>` +
                  `<td>${catInsumo.nombreCatInsumo}</td>` +
                  `<td>${catInsumo.descripcionCatInsumo}</td>` +
                  `<td>${catInsumo.estadoCatInsumo ? 'Activo' : 'Inactivo'}</td>` +
                  `<td>
                      <div class="btn-group" role="group" aria-label="Acciones">
                          <button type="button" class="btn" onclick='editarCategoriaInsumo(${JSON.stringify(catInsumo)})'>
                              <img src="img/pencil.ico" alt="Editar" class="iconos-listar">
                          </button>
                          <button type="button" class="btn" onclick="abrirConfirmarEliminar('${catInsumo._id}')">
                              <img src="img/delete.ico" alt="Borrar" class="iconos-listar">
                          </button>
                          <div class="form-check form-switch checkeo" style="margin-top: 5px;">
                              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                                  onclick="cambiarEstadoCategoriaInsumoModal('${catInsumo._id}','${catInsumo.estadoCatInsumo}', event)"
                                  ${catInsumo.estadoCatInsumo ? 'checked' : ''}>
                          </div>
                      </div>
                  </td>` +
              `</tr>`;

              tbody.innerHTML += filaHTML;
          });
      });
  };

  // Variables globales para el estado de la categoría seleccionada
  let idCambioEstado = '';
  let estadoCambioEstado = '';

  // Función para abrir el modal de confirmación de cambio de estado
  function cambiarEstadoCategoriaInsumoModal(id, estado, event) {
      event.preventDefault();
      event.stopPropagation();
      $('#confirmarCambioEstadoModal').modal('show');
      idCambioEstado = id;
      estadoCambioEstado = estado;
  }

  // Función para cambiar el estado de la categoría de insumo
  const cambiarEstadoCategoriaInsumo = async () => {
      console.log(estadoCambioEstado);

      // Invertir el estado actual
      estadoCambioEstado = estadoCambioEstado === 'false' ? 'true' : 'false';

      // Objeto con la información de la categoría de insumo
      let categoriaInsumo = {
          _id: idCambioEstado,
          estadoCatInsumo: estadoCambioEstado 
      };

      // Hacer la solicitud PUT para cambiar el estado
      fetch(url, {
          method: 'PUT',
          mode: 'cors',
          body: JSON.stringify(categoriaInsumo),
          headers: { "Content-Type": "application/json; charset=UTF-8" }
      })
      .then((res) => res.json())
      .then(json => {
          // Actualizar la lista después de cambiar el estado
          listarCategoriasInsumos();
          $('#edicionExitosaModal').modal('show');
      });

      // Ocultar el modal de confirmación
      $('#confirmarCambioEstadoModal').modal('hide');
  }

  // Variable para controlar si se está editando
  let isEditing = false;

  // Agregar un listener al botón de guardar cambios
  document.getElementById('guardarCambiosBtn').addEventListener('click', function () {
      if (isEditing) {
          actualizarCategoriaInsumo();
      } else {
          crearCategoriaInsumo();
      }
  });

  // Función para editar una categoría de insumo
  const editarCategoriaInsumo = async (categoriaInsumo) => {
      document.getElementById('nomCatInsumo').value = categoriaInsumo.nombreCatInsumo;
      document.getElementById('detalleCatInsumo').value = categoriaInsumo.descripcionCatInsumo;
      document.getElementById('idCatInsumo').value = categoriaInsumo._id;
      
      document.getElementById('texto-principal').textContent = 'Editar categoría insumo';
      
      // Mover la página hacia arriba suavemente
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

      // Cambiar el estado de edición a verdadero
      isEditing = true;
  };

  // Función para actualizar una categoría de insumo
  const actualizarCategoriaInsumo = async () => {
       if (!validarNombreCatInsumo() || !validarDetalleCatInsumo()) {
      // Mostrar un mensaje de error o realizar alguna acción adecuada
      return;
  }
      // Obtener valores de los campos
      const nombreCategoriaInsumo = document.getElementById('nomCatInsumo').value;
      const descripcionCategoriaInsumo = document.getElementById('detalleCatInsumo').value;
      const idCategoriaInsumo = document.getElementById('idCatInsumo').value;

      // Crear objeto de categoría de insumo
      let categoriaInsumo = {
          _id: idCategoriaInsumo,
          nombreCatInsumo: nombreCategoriaInsumo,
          descripcionCatInsumo: descripcionCategoriaInsumo,
      };

      // Hacer la solicitud PUT para actualizar la categoría de insumo
      fetch(url, {
          method: 'PUT',
          mode: 'cors',
          body: JSON.stringify(categoriaInsumo),
          headers: { "Content-Type": "application/json; charset=UTF-8" }
      })
      .then((res) => res.json())
      .then(json => {
          // Actualizar la lista después de la actualización
          listarCategoriasInsumos();
          // Limpiar campos y clases CSS
          document.getElementById('nomCatInsumo').value = '';
          document.getElementById('detalleCatInsumo').value = '';
              document.getElementById('texto-principal').textContent = 'Registrar categoría insumo';

          const inputs = document.querySelectorAll('.btnInput');
          inputs.forEach(input => {
              input.classList.remove('valido', 'invalido');
              input.classList.add('btnInput');
          });
          // Mostrar modal de edición exitosa
          $('#edicionExitosaModal').modal('show');
      });

      // Cambiar el estado de edición a falso
      isEditing = false;
  };

  // Función para crear una nueva categoría de insumo
  const crearCategoriaInsumo = async () => {

if(!validarNombreCatInsumo() || !validarDetalleCatInsumo()){
  return
}
      // Obtener valores de los campos
      const nombreCategoriaInsumo = document.getElementById('nomCatInsumo').value;
      const descripcionCategoriaInsumo = document.getElementById('detalleCatInsumo').value;
      const estado = true; // No está claro de dónde viene este valor, asumí que es siempre true

      // Crear objeto de registro de categoría de insumo
      let registroCategoriaInsumo = {
          nombreCatInsumo: nombreCategoriaInsumo,
          descripcionCatInsumo: descripcionCategoriaInsumo,
          estadoCatInsumo: estado
      };

      // Hacer la solicitud POST para crear la categoría de insumo
      fetch(url, {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(registroCategoriaInsumo),
          headers: { "Content-type": "application/json; charset=UTF-8" }
      })
      .then(() => {
          // Actualizar la lista después de la creación
          listarCategoriasInsumos();
          // Limpiar campos y clases CSS
          document.getElementById('nomCatInsumo').value = '';
          document.getElementById('detalleCatInsumo').value = '';
          const inputs = document.querySelectorAll('.btnInput');
          inputs.forEach(input => {
              input.classList.remove('valido', 'invalido');
              input.classList.add('btnInput');
          });
          // Mostrar modal de éxito
          $('#successModal').modal('show');
      })
      .catch(error => {
          console.error('Error al crear categoría de insumo:', error);
      });
  };

  // Variable para almacenar el ID de la categoría a eliminar
  let idEliminar = '';

  // Función para abrir el modal de confirmación de eliminación
  const abrirConfirmarEliminar = (id) => {
      $('#confirmarEliminarModal').modal('show');
      idEliminar = id;
  };

  // Función para confirmar la eliminación de la categoría de insumo
  const confirmarEliminar = () => {
              $('#confirmarEliminarModal').modal('hide');

      fetch(url, {
          method: 'DELETE',
          mode: 'cors',
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify({ _id: idEliminar })
      });

      // Mostrar modal de eliminación exitosa
      $('#eliminadoExitosamenteModal').modal('show');
      // Actualizar la lista después de la eliminación
      listarCategoriasInsumos();
  };