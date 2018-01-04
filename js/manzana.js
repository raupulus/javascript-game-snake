/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Clase para cada manzana del mapa.
 */
class Manzana {
    /**
     * Constructor que genera una nueva instancia de manzana con sus atributos
     * en el juego
     * @param  {Integer} posicionX Posición X donde se sitúa la manzana
     * @param  {Integer} posicionY Posición Y donde se sitúa la manzana
     * @param  {Integer} puntos    Puntos que valdrá
     */
    constructor(posicionX, posicionY, puntos) {
        this.posX  = posicionX;
        this.posY  = posicionY;
        this.punto = puntos;
        this.coulor = 'red';
        this.image = 'image/manzana.png';
        this.altura = 10;  // Altura en píxeles
        this.anchura = 10;  // Anchura en píxeles
    }

    /**
     * Devuelve la posición X respecto al mapa.
     * @return {Integer} Posición en el mapa.
     */
    get posicionX() {
        return this.posX;
    }

    /**
     * Devuelve la posición y respecto al mapa.
     * @return {Integer} Posición en el mapa.
     */
    get posicionY() {
        return this.posY;
    }

    /**
     * Devuelve los puntos que vale la manzana.
     * @return {Integer} Puntos que vale la manzana.
     */
    get puntos() {
        return this.punto;
    }

    /**
     * Devuelve el color de la manzana
     * @return {String} Color de la manzana
     */
    get color() {
        return this.coulor;
    }

    /**
     * Devuelve la altura de la manzana.
     */
    get alto() {
        return this.altura;
    }

    /**
     * Devuelve la anchura de la manzana.
     */
    get ancho() {
        return this.anchura;
    }
}
