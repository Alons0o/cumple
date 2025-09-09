document.addEventListener('DOMContentLoaded', () => {
    // Busca el botón por su ID 'miBoton' y añade un 'escuchador de eventos'
    const boton = document.getElementById('miBoton');
    // Si el botón existe, le añade la función showMessage al evento 'click'
    if (boton) {
        boton.addEventListener('click', showMessage);
    }
});

function showMessage() {
    // Muestra el mensaje secreto
    document.getElementById("secret").style.display = "block";
    // Lanza el confeti
    launchConfetti();
}

// Confeti
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

function randomColor() {
    const colors = ["#ff5e78", "#feca57", "#48dbfb", "#1dd1a1", "#f368e0"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Crear globos flotando
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

// Llama a la función para crear los globos cuando se carga la página
createBalloons();
