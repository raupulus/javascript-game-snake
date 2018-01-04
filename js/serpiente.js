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
        this.cabeza    = 0;        // Posición de la cabeza.
        this.cola      = 1;        // Posición de la cola.
        this.altura    = 10;       // La altura en píxeles de la serpiente
        this.anchura   = 10;       // El ancho en píxeles de la serpiente
        this.colour    = 'green';  // Color de la serpiente
        this.direction = 'R'       // Dirección en la que mira la serpiente
    }

    crecer() {
        this.cola += 1;
    }

    get longitud() {
        return this.cola + 1;
    }

    get ancho() {
        return this.anchura;
    }

    get alto() {
        return this.altura;
    }

    get color() {
        return this.colour;
    }

    set direccion(dir) {
        this.direction = dir;
    }

    get direccion() {
        return this.direction;
    }
}
