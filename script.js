document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('secret-page')) {
        // Inicializa confeti y globos solo en la página secreta
        launchConfetti();
        createBalloons();

        const playButton = document.getElementById('play-video-btn');
        const videoContainer = document.getElementById('video-container');
        const video = document.getElementById('animacion-chico');

        playButton.addEventListener('click', () => {
            videoContainer.style.display = 'block';
            video.play();
        });
    }
});

function showMessage() {
    document.getElementById("secret").style.display = "block";
    launchConfetti();
}

// ...el resto de tus funciones: launchConfetti, randomColor, createBalloons...
