// Para declarar una variable utilizamos let y sin declararlo es undefined

/* ES6 , js nace en la epoca de Netscape deciden darle una funcionalidad  ECMA script nombre oficial del Js */
//ES6 se utilizan let y const para declarar lar variables.
/* En otros lenguajes hay declaración EXPLICITA y OBLIGATORIA de tipos
int x => variable de tipo entero sin valor 
int =numeros enteros
float = numeros decimales y JS siempre guarda en float

Cuando creamos  un objeto let x {} estamos creando una referencia que va a llevar hacia la información que posteriormente se le guarde a ese objetro*/

let nombre // esto es declarar
nombre = 'Pepe' // Esto es inicializar

let edad = 34 // Declarar e inicializar

// Tipos de datos

/* // En JS los tipos son 
-débiles = que no se declaran explicitamente: son IMPLICITOS al valor
-dinámicos = pueden cambiar 
*/

//undefined
let data 
console.log(data)
console.log(typeof data) /* Esto es necesario para que te muestre de que tipo es */

// A - DATAS Primitivos

//strings es una cadena de caracteres
data='Hola amigos'
console.log(data) //Aqui iria sin comillas para que me de el valor 'Hola amigos'
console.log(typeof data)

//numbers
data= 35
console.log(data)
console.log(typeof data)

//booleans
data=true
data=false /* Aqui se ha cambiado a false por que lo hemos escrito posteriormente y de esta manera lo ha modificado por eso nos muestra el false */
console.log(data)
console.log(typeof data)


// B Datos referenciados

//object son un conjunto de variables juntas
data = {name:'Pepe', age: '34'}

//object tipo array, son listas de valores
data = [23,45,78]
console.log(data)
console.log(typeof data)

//las funciones son una serie de lineas de codigo que utilizamos para invocarlo
function mostrar () {}/* Las funciones de JS son de tipo object */
    console.log(mostrar)
    console.log(typeof mostrar)

