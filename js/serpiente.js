/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Clase serpiente con los datos que esta ocupa.
 */
class Serpiente {
    /**
     * Constructor que define la serpiente y el lugar que ocupa.
     */
    constructor() {
        this.cabeza = 0;  // Posición de la cabeza.
        this.cola   = 1;  // Posición de la cola.
    }

    crecer() {
        this.cola += 1;
    }

    get longitud() {
        return this.cola + 1;
    }
}
