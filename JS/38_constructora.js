const user1 = {
    nombre: 'Pepe',
    edad: 25,
    saludar: function (aQuien = 'amigo'){
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)
    } 
}

function User (nombre, edad) {//Siempre se crean en minuscula el objeto para poder llamarle
 this.nombre = nombre
 this.edad = edad
 /* this.saludar = function (aQuien = 'amigo'){
    console.log(`Hola ${aQuien}, soy ${this.nombre}`)} */
}

User.prototype.saludar = function (aQuien = 'amigo'){
    console.log(`Hola ${aQuien}, soy ${this.nombre}`)}// De esta manera lo hacemos global al objeto User

function Mascota(nombre, especie, raza = '') {
    this.especie = especie
    this.raza = raza
    this.nombre = nombre
}

    
let user2 = new User('Elena', 23)
let user3 = new User('Ernesto', 30)
let mascota1 = new Mascota('Cesar', 'Perro')
let mascota2 = new Mascota




console.log(user1)
console.log(user2)
console.log(user3)
console.log(mascota1)





user1.saludar('Ernesto')
user2.saludar('Pepe')
user3.saludar(user2.nombre)

//Tiene como prototipo un object generico, herencia prototipada

/* function saludar () {
    console.log(`Hola, soy ${user}`)
}

saludar('Pepe') */


//Diferencia entre PROTOTI