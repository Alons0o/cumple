document.addEventListener('DOMContentLoaded', () => {
  // Lanza el confeti y los globos en la página del secreto
  if (document.body.classList.contains('secret-page')) {
    launchConfetti();
    
    const playButton = document.getElementById('play-video-btn');
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('animacion-chico');

    playButton.addEventListener('click', () => {
      videoContainer.style.display = 'block'; // Muestra el contenedor del video
      video.play(); // Reproduce el video
    });
  }

  // Crear globos flotantes (se crearán en ambas páginas)
  createBalloons();
});

// ... el resto de tus funciones (launchConfetti, randomColor, createBalloons) ...
