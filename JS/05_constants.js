let data = 20
data = 30

console.log(data)

const DATA = 25
/* DATA = 50  esto daria un error*/

console.log(DATA)

const user = {
    name: 'Pepe',
    edad: 25
}
/*  los objetos son dinamicos y pueden ser añadidos posteriormente */
// Java / c#... son lenguajes objects oriented languages basados en clases
// user1= new User ()

// JS es un lenguaje orientado a objetos orientado a prototipos y objetos literales

user.altura=179

console.log(user)
console.log (user.name)
console.log (user.edad)
// los objetyos siempre se alamacenan por referencia y serian inmodificables por const