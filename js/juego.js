/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Pinta toda la información del usuario en su caja correspondiente
 * Dicha caja será un <div> con el id="cajajugador"
 * Cada vez que se llame a la función se limpiará su contenido y recreará.
 */
function info_user() {
    var nuevoNodo = document.createElement('p');

    var texto = document.createTextNode(
                'Datos del Jugador' +
                '<br />Nombre del jugador → ' + jugador.nombre +
                '<br />Puntuación → ' + jugador.puntuacion +
                '<br />Nivel → ' + jugador.nivel
                );

    nuevoNodo.appendChild(texto);

    document.getElementById('jugador').appendChild(nuevoNodo);
    //document.replaceChild(nuevoNodo, document.getElementById('jugador'));
}
