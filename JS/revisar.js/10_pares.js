
 // Tipos de Strings
    let cadena = 'Hola Mundo'
    cadena = "Hola Mundo"

    //ES6 aparecen los templates string (reconoce formatos) si pones un salto de linea te lo pinta si le aplicas un tabulador te lo aplica y admite la interpolación de variables con el simbolo ${}
/*     cadena = `Hola Mundo`

    console.log(cadena)

let user = 'Pepe'
cadena = 'Hola' + user + ' , que tal estas' // en estos dos casos nos muestra lo mismo son dos maneras distintas de ponerlo
cadena = `Hola ${user}, que tal estas?`

console.log(cadena) */


/**
 * Programa que calcula si un número es par o impar
 * y muestra el resultado en consola
 */

 /**
  * Function calculaQueEs
  * parametrs: un valor tipo número
  * @param num: Number
  * @returns: Number
  * posibles valores
  *     0 pares
  *     0 impares
  *     2 numeros decimales
  *     3 no numeros
  */

  /**
   * Funtion isPar
   * @param num: Number
   * @returns: boolean
   * Posibles valores
   * true par
   * false impar
   */

  function calculaQueEs (num) {
      let r
      if (isNaN (num)) {
          // no es un numero
          r= 3
      } else if(parseInt(num) !=num)
      // es un numero decimal
      r = 3
      }else {
          r = num % 2
      }
      return r
    }


  function calculaQueEs (num) {
      let r
    if (num % 2) {
    
    } else{

    }
  }
   //return num % 2


let x = 12
console.log(x % 2)

function isPar (num) {
    return !(num % 2)
}

function isImpar (num) {
    return !!(num % 2)
}
/**
 * Function mostrar
 * @param isPar: boolean // será true cuando el número es par
 * @param num: number
 * @returns: void
 */

/*  function mostrar (isPar, num){
    let mensajes = [
     `El número ${num} es par`,
     `El número ${num} es impar`
    ]
    if (isPar) {
    console.log(mensajes[0])
    } else {
    console.log(mensajes[1])
    }
    } */

    function mostrar(isPar, num){
    let mensajes = [
     `El número ${num} es par`,
     `El número ${num} es impar`
    ]
   /*  let i = 1
    if (isPar) {
        i = 0
    } /* else {
        i = 1
    } */ 
    let i = (isPar) ? 0 : 1
    console.log(mensajes[i])
    } 

    /* Function mostrar2
    * @param code: number // si es 0 par y si es 1 es impar
    * @param num: number
    * @returns: void
    */


    function mostrar2 (code,num) {
        let mensajes = [
            `El número ${num} es par`,
            `El número ${num} es impar`
            `El número ${num} es decimal, que no es par ni impar`,
            `El valor ${num} no es un número`,
        ]
        console.log(mensajes[code])
    }

    let number = 25
/*     number = 28
    numero ='Pepe'
    numero = 3.3
    mostrar(isPar(number),number) */
    mostrar2(calculaQueEs(numero), numero)




/////////////////////////////////////////////////////////////////////////////
// Version final sin funciones
   
function mostrar2(code,num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es impar`
    ]
    console.log(mensajes[code])
}



/* let mensajes = [
    `El número ${num} es par`,
    `El número ${num} es impar`
]
let num = 25
console.log(mensajes[num % 2]) */

let numero = 25
numero = 30
numero = 'Pepe'
mostrar2(numero % 2, numero)
