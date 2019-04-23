let data = 20
data = 30

console.log(data)

const DATA = 25 /* Una vez que se establece su valor nunca podría cambiarse una constante */
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
user.name='Carlos'
//user=26 daría un error
// user {} daría un erroe

console.log(user)
console.log (user.name)
console.log (user.edad)
// los objetyos siempre se alamacenan por referencia y serian inmodificables por const