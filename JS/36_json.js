

//convertimos el objeto en string para serializar los datos con un servidor

let user = {
     nombre : 'Pepe',
    edad : 23,
    curso : 'Front'
}

console.log(user)

//let userString = " "
let cadena = JSON.stringify(user)
console.log(cadena)

console.log(JSON.parse(cadena))

//JSON es un prototipo que tiene una serie de funciones y al standarizarlo todo lo entrecomilla

let alumno1 = {
    nombre : 'Elena',
   edad : 28,
   curso : 'JavaScript'
}

alumno2 = alumno1
alumno2.curso = 'Diseño'
alumno2 = JSON.parse(JSON.stringify(alumno1))// esto crea un clon de objetos y es recursivo por lo tanto te clonaria un objeto que tuviera otro objeto dentro de otro objeto

alumno2.nombre = 'Carlos'
alumno2.curso = 'Diseño'


alumno3 = Object.assign({}, alumno1)//Solo vale para objetos de 1 nivel y no es recursivo
alumno3.nombre = 'Raul'

console.log(alumno1)
console.log(alumno2)
console.log(alumno3)

// Hay algunas restrincciones en cuanto a stringify 

// Los objetos son colecciones de propiedades y las funciones son propiedades normales de un objeto