/**
 *  Programa de calculo de etadisticos como la media aritmética
 * que es la suma de los elementos / por el numero de elementos
 */


/*   * Function mediaAr 
  * @param datos: array
  * @returns: number
 function mediaAr (){}  */

/*  
 function suma(x = 0,y = 0) {
     return Number(x) + Number(y)
 }
 console.log(suma('2','5'))
 console.log(suma(2))

 console.log(suma(2,5,6,8)) */

 // Siempre que nuestros paramentrros tengan tipo fijo les podemos asignar un valor y les asignamos parametros por defecto para que nos de un tipo
 //se consigue poniendole al parametro el valor que tu quieras

  //ES6 stread operator (operador de separacion)
/*  function sumaPlus(x = 0,y = 0, ...otros) {
     if (otros) {
         console.log('Sin usar', otros)
     }
    return Number(x) + Number(y)
}
console.log(suma('2','5'))
console.log(suma(2))

console.log(sumaPlus(2,5,6,8)) */

 /**
  * Function mediaAr //media aritmética
  * @param datos: array // 
  * @returns: number
  */


 function mediaAr(datos = [], ...otros) {
     if(!Array.isArray(datos)) {
         // NO es un array
         datos = [datos]
         datos = datos.concat(otros)// Aqui le estamos diciendo que si los datos no son un array los convirtamos a un array de datos
     }
     let r = 0
     /* let sumatorio = 0 */
     for (let i = 0; i < datos.length; i++) {
        const element = datos [i];
       /*  sumatorio = sumatorio + element */
        //sumatorio += element
        r= r + element
    }
    /*  r = sumatorio / datos.length */
/*      console.log(sumatorio)
     console.log(datos.length) Esto es para probar que algo no va bien*/
    r = r / datos.length
     return r
 }

let numeros = [3,5,6,4,6,2,5]
console.log(mediaAr(numeros))
console.log(mediaAr(3,5,6,4,6,2,5))