document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('miBoton');
    if (boton) {
        boton.addEventListener('click', showMessage);
    }

    const personaje = document.getElementById('personaje-animado');
    let numCuadrosCaminar = 4; // Cambia esto al número de cuadros de caminata en tu sprite sheet
    let duracionCaminar = 0.5; // Duración de un ciclo de la animación de caminar
    let cuadrosLeer = 2; // Número de cuadros para la animación de lectura
    let duracionLeer = 0.8; // Duración de la animación de lectura

    // Animación inicial: Caminar y Moverse
    personaje.style.animation = `
        moverHorizontal 4s linear forwards, /* Mueve al personaje de izq a der */
        caminar ${duracionCaminar}s steps(${numCuadrosCaminar}) infinite /* Anima las piernas mientras camina */
    `;

    // Escuchar cuando termina la animación de moverHorizontal
    personaje.addEventListener('animationend', (event) => {
        if (event.animationName === 'moverHorizontal') {
            // Cuando termina de moverse, detiene la animación de caminata
            personaje.style.animation = 'none'; // Quita todas las animaciones

            // Opcional: Si tienes una pose "parada" en tu sprite sheet, la aplicas aquí
            // personaje.style.backgroundPosition = '-400px 0'; // Ejemplo: si la pose de parado está en -400px

            // Después de un breve retraso, inicia la animación de lectura
            setTimeout(() => {
                personaje.style.animation = `leer ${duracionLeer}s steps(${cuadrosLeer}) infinite alternate`;
            }, 1000); // Espera 1 segundo antes de empezar a "leer"
        }
    });

    // ... (el resto de tu código JS para showMessage, confeti, globos) ...
});
