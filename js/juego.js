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
    // Colocar Serpiente
    var caja = document.getElementById('cajamapa');
    var nuevoNodo = document.createElement('div');
    nuevoNodo.setAttribute('id', 'snake');
    nuevoNodo.style.width = "40px";
    nuevoNodo.style.height = "10px";
    nuevoNodo.style.backgroundColor = "#ff0000";
    nuevoNodo.style.position = "absolute";
    caja.appendChild(nuevoNodo);


    // Colocar Manzanas
}
