let vuelo1 = {
    airline: 'Oceanic',
    number: '815',
    departure: {
        claveIATA: 'SYD',
        time:'2004-09-22 14:55',
        ciudad:'Sydney',
    },
    arrival: {
        claveIATA: 'LAX',
        time:'2004-09-23 10:42',
        ciudad:'Los Ángeles',
    }

}

console.log(vuelo1.number)// aqui busca la propiedad number
// let vuelo = new  Object ()
// Esto es lo que se llama notación por puntos console.log(vuelo1.number)
// notacion por corchetes que lo que espera es un string console.log(vuelo1['number'])
console.log(vuelo1['number'])

let datos = 'departure'
//let datos = 'arrival'


//Notación por puntos
//console.log(vuelo1.number)
//console.log(vuelo1.datos)

//Notación por corchetes ya que permite usar variables para los nombres de propiedades
console.log(vuelo1['number'])
console.log(vuelo1[datos])// con la anotación de corchetes soy capaz de cambiar una variable


let users = ['Pepe', 'Rosa', 'Juan', 'Maria']
console.log(users)

/*for (let i = 0; i < users.length; i++) {
    const user = users[i];//este const lo que hace es proteger al user or eso delante de los iteradores viene un const
    console.log(`Hola ${user}`)
}*/

/*let user
for (let i = 0; i < users.length; i++) {
    user = users[i];
    console.log(`Hola ${user}`)
    
} // si necesitamos una variable externa el const lo podriamos eliminar*/

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log (`Hola ${user}`)
    
}

/*for (const key in vuelo1) {
        const element = vuelo1[key];
        console.log(`La propiedad ${key} vale ${element}`)//key clave y element el valor
}// este bucle por cada vuelta que da guarda en key una propiedad*/

/*for (const key in vuelo1) {
    const element = vuelo1[key];

    if (typeof element != 'object') {
        console.log (`La propiedad ${key} vale ${element}`)
    } else {
        for (const key in element) {
                const item = element[key];
                console.log (`La propiedad ${key} vale ${element}`)
        }
        
    }
}// Revisar esto porque no sale bien en consola
// Para no repetirnos se crea la siguiente variable*/

function mostrarObjeto(obj) {
    for (const key in obj) {// en cada vuelta recoga el valor key y devuleva el elemnt
         const element = obj[key];
    if (typeof element != 'object') {
        console.log (`La propiedad ${key} vale ${element}`)
    }
    else { // aqui si es un objeto nos lo muestra
        console.log (`La propiedad ${key} vale ...`)
        mostrarObjeto(element)
    }
}

}

mostrarObjeto(vuelo1)
// Forin crea una función recursiva 