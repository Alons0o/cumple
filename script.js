document.addEventListener('DOMContentLoaded', () => {
    // Código para el botón
    const boton = document.getElementById('miBoton');
    if (boton) {
        boton.addEventListener('click', showMessage);
    }

    // Código para la animación del personaje
    const personaje = document.getElementById('personaje-animado');
    let numCuadrosCaminar = 4;
    let duracionCaminar = 0.5;
    let cuadrosLeer = 2;
    let duracionLeer = 0.8;

    personaje.style.animation = `
        moverHorizontal 4s linear forwards,
        caminar ${duracionCaminar}s steps(${numCuadrosCaminar}) infinite
    `;

    personaje.addEventListener('animationend', (event) => {
        if (event.animationName === 'moverHorizontal') {
            personaje.style.animation = 'none';

            setTimeout(() => {
                personaje.style.animation = `leer ${duracionLeer}s steps(${cuadrosLeer}) infinite alternate`;
            }, 1000);
        }
    });

    // Llama a la función para crear los globos cuando se carga la página
    createBalloons();
});

// Funciones
function showMessage() {
  document.getElementById("secret").style.display = "block";
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
