 
 // Mostrar el modal automáticamente cuando se carga la página
 window.onload = function() {
    document.getElementById('id01').style.display = 'block';
  }

  // Cerrar el modal cuando el usuario hace clic fuera del modal
  window.onclick = function(event) {
    var modal = document.getElementById('id01');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }