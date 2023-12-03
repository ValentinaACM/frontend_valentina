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
