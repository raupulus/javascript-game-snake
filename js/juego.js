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
//gameLoop = setInterval(???, 16);  // Intervalo con el que actualizar el juego
//window.addEventListener('keydown', funciontecla???, true);  // Escucha teclas pulsadas

// Actualiza la información de usuario cada segundo
// Comprobar si es realmente necesario ya que cada acción que necesite
// refrescar debería llamar a la función "info_user()"
//setInterval(info_user, 1000);

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
    // Colocar Serpiente como nuevo nodo (esto es temporal)
    // var caja = document.getElementById('cajamapa');
    // var nuevoNodo = document.createElement('div');
    // nuevoNodo.setAttribute('id', 'snake');
    // nuevoNodo.style.width = "20px";
    // nuevoNodo.style.height = "10px";
    // nuevoNodo.style.backgroundColor = "#ff0000";
    // nuevoNodo.style.position = "absolute";
    // caja.appendChild(nuevoNodo);




    // Colocar Manzanas
}
