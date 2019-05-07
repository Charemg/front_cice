/**
 * Dada una cadena de caracteres hay que indicar si está formada 
 * -sólo por letras mayúsculas,
 * -sólo por letras minúsculas
 * -por la combinación de ambas
 */

/**
* function comoEsLaCadena
* @param : cadena : string
* @returns : void
* 
*/
//Esto es el patrón modulo, lo que queremos es que muestre la cadena y la fun ción de cálculo que no se muestra este dentro y no se vea
function comoEsLaCadena(cadena = '') {
let mensajes = [
    'La cadena está formada sólo por letras mayúsculas',
    'La cadena está formada sólo por letras minúsculas',
    'La cadena está formada por la combinación de ambas'
]
//let i = probarCadena(cadena)
//console.log(mensajes[i])
console.log(mensajes[probarCadena(cadena)])



 /**
  * function probarCadena
  * @param cadena : string
  * @returns : number
  * - 0 = sólo por letras mayusculas
  * - 1 = sólo por letras minúsculas
  * - 2 = por la combinación de ambas
  */

  function probarCadena(cadena = '') {
      let r = 2 // aqui ponemos el resultado de else ( y si no es ninguna de ellas)
      if (cadena === cadena.toUpperCase()) {
          r = 0
      } else if (cadena === cadena.toLowerCase()){
          r = 1
      } 
      return r  
  }

}

(function () {
let texto
texto = 'LO QUE OS DE LA GANA'
comoEsLaCadena(texto)
texto = 'otra cosa que se os ocurra'
comoEsLaCadena(texto)
texto = 'Una última prueba'
comoEsLaCadena(texto)
})()

// Ojo a los cierre de parenteris


// Revisar esto con el afichero del profe el resultado no es el correcto