
console.log(suma(4,6))
//console.log(resta(6,3)) nunca va a funcionar porque no hay alzamiento de las variables

/**
 * Function declarada
 * Existe "hoisting" (alzamiento) da igual donde coloquemos un function siempre vana air al principio
 * @param x : num
 * @param y : num
 * @returns : num
 */

 function suma(x = 0, y = 0) {
    return +x + +y/* le añadimos siempre los + en las variables apra que si alguien me pasa un string */
}

/**
 * Function asignada
 * 
 * Una function es para javascript es siempre un dato de tipo objeto
 */

let objeto = {} // funcion anonima

// si aqui le asignasemos como var en vez de let, la variable var resta se alza la variable no su valor
let resta = function ( x = 0, y = 0) {
    return x - y
} //esto es lo que se conoce como una funcion anonima

/**
 * En ES6 aparecen las arrow (=>) function, estan pensadas para que nos hagan funciones puras de calculo
 */

/*  function producto = function (x = 1, y = 1) {
     return x * y
 } */

 /* let producto = (x = 1, y = 1) => {return x + y} */
 let producto = (x = 1, y = 1) => x * y // esto sería igual a lo anterior los corchetes desaparecerían


 let cuadrado = x => x * x // version mas compacta de una function arrow


console.log(suma(4,6))
console.log(resta(6,3))
console.log(producto(4,7))
console.log(cuadrado(6))