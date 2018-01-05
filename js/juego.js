/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
*/

/**
 * Cada nivel aumenta en 1 manzana comenzando desde solo 1.
 * Cada manzana tendrá una puntuación/valor aleatorio entre 5 y 15 puntos.
 * Cuando no haya manzanas se sube un nivel al jugador.
 */

 /**************************************************
                VARIABLES GLOBALES
 **************************************************/
posX    = 0;  // Almacena la posición actual desde el eje X
posY    = 0;  // Almacena la posición actual desde el eje Y
oldPosX = 0;  // Almacena la posición anterior desde el eje X
oldPosY = 0;  // Almacena la posición anterior desde el eje Y

/**
 * Inicializa variables que solo pueden ser iniciadas después de haber
 * cargado la página completamente.
 */
function variables() {
    jugador1  = new Player('Manolo');  // Crear usuario
    mapa      = new Mapa(300, 300);    // Crear mapa
    serpiente = new Serpiente();       // Crear serpiente
    troncoSer = [];                    // Tronco de la serpiente
    manzanas  = [];                    // Crear array de manzanas

    velocidad = 200;  // Velocidad en milisegundos a la que refresca el juego

    canvas = document.getElementById('cajacanvas');
    canvas.width = mapa.ancho;        // Ancho del canvas
    canvas.height = mapa.alto;        // Altura del canvas
    ctx = canvas.getContext("2d");    // Contexto 2d para Canvas
    ctx.fillStyle = serpiente.color;  // Color en el que se pintará
    ctx.fillRect(0, 0, serpiente.ancho, serpiente.alto);  // Pincel y tamaño
    ctx.fill();
}

/**************************************************
                     EVENTOS
**************************************************/
// Desactivar eventos que interfieren
window.addEventListener('keydown', function(e) {e.preventDefault();}, true);
window.addEventListener('keypress', function(e) {e.preventDefault();}, true);
window.addEventListener('keyup', function(e) {e.preventDefault();}, true);

// Deshabilito botón derecho del ratón
document.oncontextmenu = function() {return false;};

// Escucha teclas pulsadas
window.addEventListener('keydown', teclaPulsada, true);


/**
 * Genera tantas manzanas como el número de nivel actual y las distribuye
 * dentro del mapa de forma aleatoria.
 */
function rellenarManzanas() {
    var mctx = ctx;

    // Genera instancias de "Manzana" como niveles y las añade en "manzanas[]"
    for (let i = 0; i <= jugador1.nivel; i++) {
        manzanas[i] = new Manzana(generarAleatorio(0, mapa.alto),
                                  generarAleatorio(0, mapa.ancho),
                                  generarAleatorio(5, 15)
                                 );
        // TODO → Comprueba si en las coordenadas aleatoria no existe manzana ni la serpiente y si se cumple posiciona la manzana, en caso contrario se repite el proceso.

        mctx.beginPath();
        mctx.fillStyle = manzanas[i].color;  // Color con el que dibujar
        mctx.fillRect(manzanas[i].posX, manzanas[i].posY, manzanas[i].ancho, manzanas[i].alto);  // Pincel y tamaño
        mctx.fillStyle = serpiente.color;  // Devuelve el color de la serpiente
        mctx.closePath();
        mctx.fill();
    }
}

/**
 * Inicializa el juego y coloca cada componente en su lugar
 */
function iniciar() {
    variables();
    info_user();    // Pinta información del usuario
    generarMapa();  // Dibuja el mapa

    // Colocar Manzanas
    rellenarManzanas();

    // Inicializa bucle
    gameLoop = setInterval(bucleJuego, velocidad);  // Intervalo actualizar juego
}

/**
 * Bucle que imita el movimiento
 */
function bucleJuego() {
    // Mueve la Serpiente
    if (! mover()) {
        gameOver('Te has chocado, juego terminado');
    }

    // Comprueba si come una manzana y la borra del array manzanas, si es la última sube nivel. Además suma puntuación al jugador
    for (let x in manzanas) {
        if ((manzanas[x].posX >= posX) &&
            (manzanas[x].posX <= posX + serpiente.alto) &&
            (manzanas[x].posY >= posY) &&
            (manzanas[x].posY <= posY + serpiente.ancho))
        {

            jugador1.aumentarPuntuacion(manzanas[x].puntos);

            // Aumenta el array del cuerpo
            troncoSer.unshift([0,0])

            // Eliminar manzana comida
            manzanas.splice(x, 1);
        }
    }

    // Si no quedan manzanas, da 100 puntos, sube nivel y vuelve a llenar mapa.
    if (manzanas.length == 0) {
        alert('¡Puntazo! → Subes un nivel\n Obtienes 100 puntos extras');
        jugador1.aumentarPuntuacion(100);  // 100 puntos extras por subir nivel.
        jugador1.subirNivel();             // Aumenta 1 nivel.
        rellenarManzanas();                // Coloca manzanas de nuevo en mapa.
        velocidad -= 10;                   // Aumenta la velocidad en 10 puntos
    }

    // Comprueba que no se choca
    for (let x of troncoSer) {
        console.log(x[0]);
        if ((x[0] == posX) && (x[1] == posY)) {
            gameOver('¡Chocazo!\nTe has tropezado contigo');
        }
    }

    // Pinta datos del jugador
    info_user();
}

/**
 * Filtra la tecla que se ha pulsado y asigna el sentido a la serpiente
 * en el caso que proceda
 * @param  {Event} e Recibe el evento que llama a la función
 */
function teclaPulsada(e) {
    switch (e.code) {
        case 'ArrowUp':
            serpiente.direccion = 'U';
            break;
        case 'ArrowRight':
            serpiente.direccion = 'R';
            break;
        case 'ArrowDown':
            serpiente.direccion = 'D';
            break;
        case 'ArrowLeft':
            serpiente.direccion = 'L'
            break;
    }
}

/**
 * Mueve la serpiente en el sentido que esta tenga (Up, Right, Down, Left)
 */
function mover() {
    oldPosX = posX;
    oldPosY = posY;

    // TODO → Implementar que no pueda invertir sentido, es decir, podrá cambiar solo a cualquiera de los otros 3 sentidos pero no hacia atrás sobre si mismo.

    ctx.beginPath();
    switch (serpiente.direccion) {
        case 'U':
            if ((posY - serpiente.alto) < 0) {
                return false;
            }
            oldPosY = posY;
            posY -= serpiente.alto;
            break;
        case 'R':
            if ((posX + serpiente.ancho) > mapa.ancho) {
                return false;
            }
            oldPosX = posX;
            posX += serpiente.ancho;
            break;
        case 'D':
            if ((posY + serpiente.ancho) > mapa.alto) {
                return false;
            }
            oldPosY = posY;
            posY += serpiente.alto;
            break;
        case 'L':
            if ((posX - serpiente.ancho) < 0) {
                return false;
            }
            oldPosX = posX;
            posX -= serpiente.ancho;
            break;
        default:
            return false;
    }
    ctx.fillRect(posX, posY, serpiente.ancho, serpiente.alto);
    ctx.closePath();
    ctx.fill();

    // Añade la nueva posición al final del array
    troncoSer.push([oldPosX, oldPosY]);

    // Borrar el último punto para simular el desplazamiento
    ctx.clearRect(troncoSer[0][0], troncoSer[0][1], serpiente.ancho, serpiente.alto);

    // Elimina la primera posición del array
    troncoSer.shift();

    return true;
}

function reiniciarJuego() {
    // TOFIX → Limpiar mapa, reiniciar serpiente y manzana
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    jugador1.resetearPuntuacion();
    gameOver('Reiniciando Juego');
    variables();
    iniciar();
}

/**
 * Función que termina el juego cuando se ha perdido.
 * @param  {String} mensaje Recibe el mensaje con el motivo del fin del juego.
 */
function gameOver(mensaje) {
    clearInterval(gameLoop);
    alert(mensaje);
}
