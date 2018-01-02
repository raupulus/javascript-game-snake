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
    var caja    = document.getElementById('cajajugador');
    var jugador = document.getElementById('jugador');

    // Crear nuevo párrafo con id="jugador"
    var nuevoNodo = document.createElement('p');
    nuevoNodo.setAttribute('id', 'jugador');

    // Crear nuevo nodo de texto y agregarlo al párrafo anterior
    var texto = document.createTextNode(
                'Datos del Jugador' +
                '<br />Nombre del jugador → ' + jugador.nombre +
                '<br />Puntuación → ' + jugador.puntuacion +
                '<br />Nivel → ' + jugador.nivel
                );
    nuevoNodo.appendChild(texto);

    // Reemplaza el actual nodo "jugador" por el nuevo generado
    caja.replaceChild(nuevoNodo, jugador);
}

function generarMapa() {
    var caja = document.getElementById('cajamapa');

    // Establece dimensiones según el tamaño del mapa
    caja.style.width = mapa.ancho + 'px';
    caja.style.height = mapa.alto + 'px';
}

function generarAleatorio(minimo = 0, maximo = 10) {
    var x = 0;

    while (true) {
        x = parseInt((Math.random()+0.01) * maximo);

        if ((x >= minimo) && (x <= maximo)) {
            return x;
        }
    }
}
