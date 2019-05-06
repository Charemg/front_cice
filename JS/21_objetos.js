/**
 * Notacion literal o JSON
 */

//user1 = new user
//user2 = new user

 let user1 = {
     nombre: 'Pepe',
     edad: 24,
     isAlumno: true,
     direccion : {
         calle: 'Pez',
         num: '3',
         poblacion: 'Madrid',
     },
     saludar: function () {
         console.log(`Hola, soy ${this.nombre}`)// estas funciones se denominan metodos, estrictamente ahblando en javascript un metodo e s una propiedad
        // con el this hacemos referencia dentro del mismo objeto
        },
     altura: 179

 }


 //let user1 = new Object {} esta funcion es la que se encarga de decirle a user que lo que se va a guardar es una referencia
 //es un constructor de objetos, le asocia la referencia para quem le puedas guardar cosas y se está invocando new object, nace con una propiedad especial que se llama prototype de object, me ofrec una serie de probabilidades pero es abierto y no necesita tener un conjunto de propiedades tipo
 //una clase es un molde fijo y un prototipo es moldeable me permite añadirle información
 // para que se cumple el prototipo de objecto es de tipo null
 // en la practica no le vamos a usar 
 // Nuestros objetos van a tener propiedades
 let user2 = {
    nombre: 'Rosa',
    edad: 27,
    curso: 'Front'
}

user1.nombre = 'Jose'// esto modifica la propiedad nombre
user1.curso = 'Back'// Y esto añade la propiedad curso

user1.saludar()



// los metodos se invocan 