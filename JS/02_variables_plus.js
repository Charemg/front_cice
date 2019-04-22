/* ES6 , js nace en la epoca de Netscape deciden darle una funcionalidad  ECMA script nombre oficial del Js */
//ES6 se utilizan let y const para declarar lar variables

let nombre // esto es declarar
nombre = 'Pepe' // Esto es inicializar

let edad = 34 // Declarar e inicializar

// Tipos de datos

//undefined
let data 
mostrar(data)


//strings es una cadena de caracteres
data='Hola amigos'
mostrar(data)

//numbers
data= 35
mostrar(data)

//booleans
data=true
data=false
mostrar(data)

//object son un conjunto de variables juntas
data = {name:'Pepe', age: '34'}

//object tipo array, son listas de valores
data = [23,45,78]
mostrar(data)

//
function mostrar (input) {
    console.log('El dato recibido es' ,input)
    console.log('El tipo del dato es',typeof input)

}
mostrar(mostrar)

