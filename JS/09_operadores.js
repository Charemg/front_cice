//Asignacion

let x = 23
// x = x + 1
x++
// x = x - 1
x--

// Aritméticos

let y = 2

let r
r = x + y // 25
r = x - y // 21
r = x * y // 46
r = x / y // 11.5
r = parseInt(x / y)// 11
r = x % y/*  Resto sería el modulo de resto de x / y, pondriamos esto para que nos mostrara el resto*/
console.log('Resultado', r)

/* r = Math.ceil() Al alza
r = Math.round() redondeo contable
r = Math.floor() al suelo*/

y = 2
y += 3 /* Asignacion y operador al mismo tiempo */
/*  y = y + 3 */

y -= 3
// y = y - 3

y *= 2
y /= 3
// y = y % 2
y %= 2

// Operador ternario
let edad = 15
let i
if ( x >= 18){
    i = 0
}else {
    i = 1
}

/* ____?____:____ */
i = (edad>=18) ? 0 : 1
console.log('Indice', i)
/* Esto haría lo mismo , si se cumple muestra un 0 si no muestra un 1 */



//Objetos o como notación JSON (es un formato de transferencia de datos)

let user = {
    nombre: 'Pepe', /* nombre se le llama clave y a Pepe se le llama valor o propiedades del objeto */
    edad: 23
}

console.log(user.nombre)

//Arrays
//siempre empieza por 0

let numeros = ['12', '45', '67']
 let usuarios = ['Pepe', 'Juan', 'Rosa', 'Maria']
console.log(usuarios[0])
//Es imprescindible manejarse bien con los arrays siqueremos mostrar listas de cosas y tener en cuenta que empieza a contar desde 0
// Nunca tienen un tamaño definido, siempre pueden crecer y tiene una propiedad que es length
/* console.log(usuarios.length) */
/* API REST es la forma en que me va a enseñar los datos desde un servidor, el formato mas estandar es un JSON */

usuarios[usuarios.length] = 'Ramon'
usuarios[usuarios.length] = 'Carolina'
usuarios[100] = 'Ernesto'
/* console.log(usuarios) */
console.log(usuarios.length)


// Mensajes al usuario

let mensajes = [
    'Bienvenido al Casino',
    'No se admiten menores de edad'
]
console.log(mensajes[i])

//&& esto es el AND
// || esto es el o y se le llama pipe
// ! y esto es el not

let x = 23
!x /* Un not por delante convierte siempre en boolean false */

(var1 & var 2) || var 3 /* Siempre se evaluan antes los & pero le ponemos los parentesis por si no me acuerdo cual tiene preferencia y de esa manera le dare yo la preferrencia */