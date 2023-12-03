document.addEventListener('DOMContentLoaded', function () {
  const selectColores = document.getElementById('select-colores');
  const btnAgregar = document.getElementById('btn-agregar');
  const listaColoresSeleccionados = document.getElementById('colores-seleccionados');

  btnAgregar.addEventListener('click', function () {
      const selectedColor = selectColores.value;

      if (selectedColor) {
          agregarColor(selectedColor);
      } else {
          alert('Por favor, seleccione un color.');
      }
  });

  function agregarColor(color) {
      const listItem = document.createElement('li');
      listItem.className = 'color-item';

      const colorCell = document.createElement('div');
      colorCell.className = 'color-cell';
      colorCell.style.backgroundColor = color;

      const textoColor = document.createTextNode(color);

      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.addEventListener('click', function () {
          listaColoresSeleccionados.removeChild(listItem);
      });

      listItem.appendChild(colorCell);
      listItem.appendChild(textoColor);
      listItem.appendChild(btnEliminar);

      listaColoresSeleccionados.appendChild(listItem);

      // Limpiar el valor seleccionado en el select
      selectColores.value = '';
  }
});