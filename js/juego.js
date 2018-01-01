/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Pinta toda la información del usuario en su caja correspondiente
 * Dicha caja será un <div> con el id="cajajugador"
 */
function info_user() {
    jugador = new Player('Manolo');
    cajajuego.innerHTML += 'Datos del Jugador';
    cajajuego.innerHTML += '<br />Nombre del jugador → ' + jugador.nombre;
    cajajuego.innerHTML += '<br />Puntuación → ' + jugador.puntuacion;
    cajajuego.innerHTML += '<br />Nivel → ' + jugador.nivel;
}
