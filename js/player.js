/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

class Player {
    constructor(name) {
        this.name = name;
        this.score = new Score(0);
        this.level = 0
    }

    get nombre() {
        return this.name
    }

    set nombre(name) {
        this.name = name;
    }

    get puntuacion() {
        return this.score.puntos();
    }

    set puntuacion(puntos) {
        this.score.puntos(puntos);
    }

    get nivel() {
        return this.level;
    }

    aumentarPuntuacion(puntos) {
        this.score.sumarPuntos(puntos);
    }

    subirNivel() {
        this.level += 1;
    }
}
