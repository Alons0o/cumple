document.addEventListener('DOMContentLoaded', () => {
    // Esto se ejecuta cuando el HTML está cargado
    
    // Si estamos en la página del secreto, se lanzan confeti y globos
    if (document.body.classList.contains('secret-page')) {
        launchConfetti();
        createBalloons();

        // Manejador del botón para reproducir video
        const playButton = document.getElementById('play-video-btn');
        const videoContainer = document.getElementById('video-container');
        const video = document.getElementById('animacion-chico');

        if (playButton) {
            playButton.addEventListener('click', () => {
                videoContainer.style.display = 'block';
                video.play();
            });
        }
    }
});

// --- Todas las funciones ahora se definen fuera del DOMContentLoaded para ser accesibles ---

// Función para mostrar el mensaje y lanzar confeti
function showMessage() {
    document.getElementById("secret").style.display = "block";
    launchConfetti();
}

// Función para el confeti
function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.backgroundColor = randomColor();
        confetti.style.top = "-10px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.opacity = 0.7;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);

        let fall = setInterval(() => {
            let top = parseFloat(confetti.style.top);
            if (top > window.innerHeight) {
                clearInterval(fall);
                confetti.remove();
            } else {
                confetti.style.top = top + 4 + "px";
                confetti.style.left =
                    parseFloat(confetti.style.left) + (Math.random() - 0.5) * 4 + "px";
            }
        }, 20);
    }
}

// Función para obtener un color aleatorio
function randomColor() {
    const colors = ["#ff5e78", "#feca57", "#48dbfb", "#1dd1a1", "#f368e0"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Función para crear globos flotantes
function createBalloons() {
    const colors = ["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1", "#f368e0"];
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDuration = 5 + Math.random() * 5 + "s";
        document.getElementById("balloons").appendChild(balloon);
    }
}
