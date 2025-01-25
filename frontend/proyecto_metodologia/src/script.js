document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("registro").onclick = function() {
    window.location.href = "assets/select_type_user.html";
  };
  document.getElementById("ini_sesion").onclick = function() {
    window.location.href = "assets/iniciar_sesion.html";
  };

  let index = 0;
  const images = document.querySelectorAll('.carrusel_inicio img');

  function showNextImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }

  setInterval(showNextImage, 5000); // Cambia de imagen cada 5 segundos
});
