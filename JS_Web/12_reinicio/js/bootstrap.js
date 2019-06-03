import {controller} from './controller.js'

document.addEventListener('DOMContentLoaded', controller)

// Proceso ASINCRONO (add EventListener como un manejador de eventos)
/* document.addEventListener('DOMContentLoaded', app)// esto se convierte en un manejador de eventos

 La función principal podría estar en este fichero
function app () {
    console.log ('App ejecutándose')
} 

Es buena práctica crear un modulo apartem e importar la función principal

*/

document.addEventListener('DOMContentLoaded', controller)