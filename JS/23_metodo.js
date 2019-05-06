let vuelo = {
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

/*function mostrarObjeto(obj) {
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

}*/

//mostrarObjeto(vuelo)// en vez e tner una funcion que me muestre un objeto

//Voy a tener una propiedad del objeto que va a ser = function (obj {})
//vuelo.mostrar()Una función que esta dentro de un objeto va a tener un valor por defecto y para mostrarse a si mismo le añadimos el This

/*vuelo.mostrar = function (obj = this) {
    for (const key in obj) {// en cada vuelta recoga el valor key y devuleva el elemnt
        const element = obj[key];
        if (typeof element == 'function') {
            continue
        }
        if (typeof element !== 'object') {
        console.log (`La propiedad ${key} vale ${element}`)
        }
        else { // aqui si es un objeto nos lo muestra
        console.log (`La propiedad ${key} vale ...`)
        obj.mostrar(element)
        }
    }
}

console.log(vuelo.mostrar)
//vuelo.mostrar()*/

//primero procesa y luego muestra las propiedades

vuelo.toString = function (obj = this) {
    let output = ''
    for (const key in obj) {
        const element = obj[key];
        if (typeof element === 'function') {
            continue
        }
        if (typeof element === 'object') {
            output = output + `La propiedad ${key} vale ...` + '\n'
        // `de esta manera le hacemos un salto de linea o le podemos añadir un  salto de linea le ponemos + '\n'
            output = output + obj.toString(element)
        }
        else { 
        output = output + `La propiedad ${key} vale ${element}`+ '\n'
        // `
        }
    }
    //console.log(output)
    return output
}


console.log (vuelo.toString())

vuelo.mostrarFinal = function () {
    console.log(this.toString())
}

vuelo.mostrarFinal()