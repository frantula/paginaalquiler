
function boton1() {
  alert("Tu cancha ha sido alquilada")
  
}
function boton2() {
  alert("Tu cancha ha sido alquilada")
  
}
      
function boton3() {
  alert("Tu cancha ha sido alquilada")
  
}
      
function boton4() {
  alert("Tu cancha ha sido alquilada")
  
}
      
function boton5() {
  alert("Tu cancha ha sido alquilada")
  
}




      

function agregarComentario() {
  
  var comentarioInput = document.getElementById("comentario").value;
  if (comentarioInput === "") {
    return; 
  }

  // Obtener el contenedor de comentarios
  var contenedorComentarios = document.getElementById("contenedor-comentarios");

  // Crear un nuevo elemento div para el comentario
  var nuevoComentario = document.createElement("div");

  // Establecer el contenido del nuevo comentario con el valor del campo de comentario
  nuevoComentario.innerHTML = comentarioInput;

  // Agregar la clase "comentario" al nuevo comentario
  nuevoComentario.classList.add("comentario");

  // Agregar el nuevo comentario al contenedor de comentarios
  contenedorComentarios.appendChild(nuevoComentario);

  // Limpiar el campo de comentario después de agregar el comentario
  document.getElementById("comentario").value = "";
}
