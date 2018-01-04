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
        this.image = 'image/manzana.png';
    }

    get posionX() {
        return this.posX;
    }

    get posicionY() {
        return this.posY;
    }

    get puntos() {
        return this.punto;
    }
}
