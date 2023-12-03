var coloresSeleccionados = document.getElementById('colores-seleccionados');
agregarColorSeleccionado('Rojo', );
agregarColorSeleccionado('Negro', );
agregarColorSeleccionado('Blanco',);

function agregarColorSeleccionado(nombre, color) {
    var nuevoColor = document.createElement('li');
    nuevoColor.textContent = nombre;
    nuevoColor.style.backgroundColor = color;
    coloresSeleccionados.appendChild(nuevoColor);
}

// Agregar lógica para manejar el botón Agregar
var btnAgregar = document.getElementById('btn-agregar');
btnAgregar.addEventListener('click', function() {
    var colorSeleccionado = document.getElementById('select-colores');
    if (colorSeleccionado.value) {
        agregarColorSeleccionado(colorSeleccionado.options[colorSeleccionado.selectedIndex].text, colorSeleccionado.value);
    }
});
