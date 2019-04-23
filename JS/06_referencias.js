let data = 11
duplicar(data)
console.log(data)
console.log(duplicar(data))

// Los datos primitivos pasan a la funcion como valores

function duplicar (x) {
    x = x * 2
    return x
}

let user1= {nombre: 'Pepe', edad: 23}
matricular(user1)
console.log(user1)

let user2= {nombre: 'Rosa'}
matricular(user2)
console.log(user2)

function matricular(obj, curso='JavaScript') {
    obj.curso = curso
}
/* El obj hace referencia al valor, y cambia las referencias */


