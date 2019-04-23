/* Opera desde los valores que le vienen asignados desde fuera, esto es una función PURA y pueden ser reutilizadas */
function suma (x, y) {
    let r = x + y /* esto es una variable local */
    return r
} /*  Dos tipos de funciones las que devuelven la funcion y las que no */
/* console.log (suma (23, 20)) */

function mostrar (texto) {
    console.log(texto)
}/* Esto es una función se conoce de interfaz */
/* las variables viven en el ambito del ordenador, js tienen el ambito de las variables  */

let number1 = 23 /* esta es una variable global */
let number2 = 20
/*console.log(r) esta variable nos daria error por que la r no esta asignada */
/* mostrar (suma (number1, number2)) */
let result = suma (number1, number2)
mostrar (result)
/* console.log (suma (number1, number2)) */

// No se cumple la (separation of concerns) separacion de intereses o conceptos

function sumarMal (x,y) {
    let r = x + y
    console.log(r)
} /* Se comporta diferente dependiendo de donde se muestre */

sumarMal (2,5)

/* No se deben mezclar dos funciones en una misma funcion, separar las distintas tipos de intereses */

