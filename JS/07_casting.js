//Existen los operadores aritméticos + -  * / % (modul)

let x = 22 /* number */
let nombre = 'Pepe'/* strings */
let z = '2' /* strings */

/* let division = 10/2 */
let division = x /z
 /* Temporalmente hace una conversión de tipo durante una operación */
 //JS siempre puede convertir un string a number

 console.log(division)
 console.log (typeof z)

/*  Esto es a lo que llamanos casting, es una conversión temporal */

//Nan (Not a number) pero al final es un número
division = x / nombre
console.log(division)
console.log (0/0)
console.log (1/0)

//Nan equivale al concepto matemático de indeterminación
 // 0/n = 0
 // n/0 = Infinito
 // 0/0 = Nan

 

//Si quiero evitar indeterminaciones debo validar los datos

function dividir (x, y) {
    if (isNaN(x) || isNaN(y)) {
        console.log('Operadores inválidos')
        return
    }
    console.log('La division da', x/y, '€')
}

dividir(x,z)
dividir(x,nombre)

console.log('La suma da', x + z)
/* el contanador del + no hace casting de un string, Tendría que forzar el casting del string a number */

//Si hay string tiene prevalencia la concatenación para evitarlo tenemos que forzar el casting

/* parseInt es a un número entero y parsefloat a un numero decimal */

console.log(parseFloat(x) + parseFloat(z) )
console.log(Number(x) + Number(z))
console.log (+x + +z)

console.log(typeof z)
/* por casting lo he forzado a number pero su tipo real es string */

