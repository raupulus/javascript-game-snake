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
        this.altura    = 15;       // La altura en píxeles de la serpiente
        this.anchura   = 15;       // El ancho en píxeles de la serpiente
        this.colour    = 'green';  // Color de la serpiente
        this.direction = 'R';       // Dirección en la que mira la serpiente
    }

    /**
     * Grosor de ancho para la serpiente.
     * @return {Integer} Devuelve el número de píxeles que ocupa el ancho.
     */
    get ancho() {
        return this.anchura;
    }

    /**
     * Altura que tiene la serpiente.
     * @return {Integer} Devuelve el número de píxeles que ocupa el alto.
     */
    get alto() {
        return this.altura;
    }

    /**
     * Color que tiene la serpiente.
     * @return {String} Devuelve el color con el que será dibujada la serpiente.
     */
    get color() {
        return this.colour;
    }

    /**
     * Establece una nueva dirección hacia la cual está mirando la serpiente.
     * @param  {Char} dir Recibe el carácter inicial de Up, Right, Left, Down.
     */
    set direccion(dir) {
        this.direction = dir;
    }

    /**
     * Devuelve la dirección sobre la que está mirando la serpiente.
     * @return {Char} Devuelve el caracter sobre la dirección la cual
     *                está mirando la serpiente.
     */
    get direccion() {
        return this.direction;
    }
}
