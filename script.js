document.addEventListener('DOMContentLoaded', () => {
    // Esto se ejecuta cuando el HTML está cargado
    
    // Si estamos en la página del secreto, se lanzan confeti y globos
    if (document.body.classList.contains('secret-page')) {
        launchConfetti();
        createBalloons();

        // Manejador del botón para reproducir videos
        const playButton = document.getElementById('play-video-btn');
        const videoChicoContainer = document.getElementById('video-chico-container');
        const videoChico = document.getElementById('animacion-chico');
        
        // Obtenemos los nuevos elementos del video de la chica
        const videoChicaContainer = document.getElementById('video-chica-container');
        const videoChica = document.getElementById('animacion-chica');

        if (playButton) {
            playButton.addEventListener('click', () => {
                videoChicoContainer.style.display = 'block';
                videoChico.play();
                
                // Muestra y reproduce el video de la chica también
                videoChicaContainer.style.display = 'block';
                videoChica.play();
            });
        }
    }
});

// ... el resto de tus funciones (showMessage, launchConfetti, etc.)
