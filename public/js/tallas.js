var selectedTallas = [];

function toggleSelection(index) {
  var circle = document.getElementById("tallas").children[index];
  
  if (selectedTallas.includes(index)) {
    // Si la talla ya está seleccionada, la eliminamos del arreglo y removemos la clase "selected"
    var position = selectedTallas.indexOf(index);
    selectedTallas.splice(position, 1);
    circle.classList.remove("selected");
  } else {
    // Si la talla no está seleccionada, la agregamos al arreglo y añadimos la clase "selected"
    selectedTallas.push(index);
    circle.classList.add("selected");
  }
  
  console.log("Tallas seleccionadas: ", selectedTallas);
}