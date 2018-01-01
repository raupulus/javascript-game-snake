/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

class Score {
    /**
     * El constructor recibe los puntos almacenados en cookie o DB de
     * una sesión anterior para continuarla
     * @param  {Integer}  puntos  Los puntos con los que inicializar
     */
    constructor(puntuacion = 0) {
        this.puntuacion = puntuacion;
    }

    /**
     * Devuelve la puntuación
     * @return  {Integer}  Puntuación a devolver
     */
    get puntos() {
        return this.puntuacion;
    }

    /**
     * Establece la puntuación pasada como parámetro
     * @param   {Integer}  puntuacion  Entrada de la puntuación a establecer
     */
    set puntos(puntuacion) {
        this.puntuacion = puntuacion;
    }

    /**
     * Suma los puntos pasados como parámetros a los actuales en la clase
     * @param  {Integer}  sumando  Cantidad que se sumará a puntuación actual.
     */
    sumarPuntos(sumando) {
        this.puntuacion += sumando;
    }
}
