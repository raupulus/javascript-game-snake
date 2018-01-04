/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
*/

/**
 * Cada nivel aumenta en 1 manzana comenzando desde solo 1.
 * Cada manzana tendrá una puntuación/valor aleatorio entre 5 y 15 puntos.
 * Cuando no haya manzanas se sube un nivel al jugador.
 */

// Variables globales
posX    = 0;  // Almacena la posición actual desde el eje X
posY    = 0;  // Almacena la posición actual desde el eje Y
oldPosX = 0;  // Almacena la posición anterior desde el eje X
oldPosY = 0;  // Almacena la posición anterior desde el eje Y

/**
 * Inicializa variables que solo pueden ser iniciadas después de haber
 * cargado la página completamente.
 */
function variables() {
    canvas = document.getElementById('cajacanvas');
    ctx = canvas.getContext("2d");  // Contexto 2d para Canvas
    ctx.fillStyle = serpiente.color;          // Color en el que se pintará
    ctx.rect(0, 0, serpiente.ancho, serpiente.alto);  // Tipo de pincel y tamaño
    ctx.fill();                     //
}

// Eventos
//window.addEventListener('keydown', funciontecla???, true);  // Escucha teclas pulsadas

/**
 * Genera tantas manzanas como el número de nivel actual y las distribuye
 * dentro del mapa de forma aleatoria.
 */
function rellenarManzanas() {
    // Bucle que genera instancias de clase "Manzana" como niveles y las añade
    // en array "manzanas[]"

    // Comprueba si en las coordenadas aleatoria no existe manzana ni la serpiente y si se cumple posiciona la manzana, en caso contrario se repite el proceso.
}

/**
 * Inicializa el juego y coloca cada componente en su lugar
 */
function iniciar() {
    // Colocar Manzanas

    // Inicializa bucle
    gameLoop = setInterval(bucleJuego, 1000);  // Intervalo actualizar juego
}

/**
 * Bucle que imita el movimiento
 */
function bucleJuego() {
    // Mueve la Serpiente

    // Comprueba si come una manzana y la borra del array manzanas, si es la última sube nivel. Además suma puntuación al jugador

    // Comprueba que no se choca

    // Pinta datos del jugador
    info_user();
}

/**
 * Mueve la serpiente en el sentido que esta tenga
 */
function mover() {
    // ctx.moveTo(40, 40);  // Mover a la última posición
    // ctx.putImageData(oldBack, 0, 0);  // Borrar el último punto para simular el desplazamiento
}
