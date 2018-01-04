/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Clase con los datos del jugador
 */
class Player {
    /**
     * Constructor de la clase que recibe el nombre para inicializar el jugador
     * @param  {String}  name  Nombre del jugador
     */
    constructor(name) {
        this.name = name;
        this.level = 0;

        if (getCookie('score') > 0) {
            this.score = new Score(getCookie('score'));
        } else {
            this.score = new Score(0);
            setCookie('score', this.score.puntos);
        }
    }

    /**
     * Obtiene el nombre del jugador
     * @return  {String}  Devuelve una cadena con el nombre
     */
    get nombre() {
        return this.name;
    }

    /**
     * Modifica el nombre del jugador
     * @param  {String}  name  Nuevo nombre
     */
    set nombre(name) {
        this.name = name;
    }

    /**
     * Obtiene la puntuación total
     * @return  {Integer}  Valor de la puntuación total.
     */
    get puntuacion() {
        return this.score.puntos;
    }

    /**
     * Establece la puntuación del jugador
     * @param  {Integer}  puntos  Valor al que establecer la puntuación
     */
    set puntuacion(puntos) {
        this.score.puntos = puntos;
        setCookie('score', this.score.puntos);
    }

    /**
     * Obtiene el nivel actual en el que está el jugador.
     * @return  {Integer}  Nivel actual del jugador.
     */
    get nivel() {
        return this.level;
    }

    /**
     * Aumenta la puntuación en tantos puntos como se pasen a la función.
     * @param  {Integer}  puntos  Cantidad de puntos a aumentar.
     */
    aumentarPuntuacion(puntos) {
        this.score.sumarPuntos(puntos);
        setCookie('score', this.score.puntos);
    }

    /**
     * Cada vez que es llamada esta función aumenta el nivel del jugador en 1.
     */
    subirNivel() {
        this.level += 1;
    }
}
