function modalClose() {
    alert('Cambios guardados con exito');
    console.log('Cambios guardados con exito');
    // Cierra la modal
    var miModal = new bootstrap.Modal(document.getElementById('miModal'));
    miModal.hide();
  }
