/* 'use strict' Buena practica programar siempre en modo estricto */

// ambitos o scope de las variables
// Ambito global
let var1= 20; /*  Definicion de la funcion, es necesario poner una ejecucion o declaracion */
prueba()

// MUY MALA PRACTICA
// No se accede nunca a las variables globales desde las funciones
function prueba () {
    console.log (var1)
}



// Lo mismo con buenas practicas

let var2= 30
pruebaBien(var2)

function pruebaBien (x) {
    console.log(x)
}

// Nuevo en ES& usar let en lugar de var

function condicional () {
    let ext = 22 /* tinen como ambito el bloque donde hayan sido creadas */
    if(true) {
        let data=23
        console.log(ext)
        console.log(data)
    }
    console.log(ext)
    /* console.log(data) este daria un error */
    
}

condicional ()


let x = 12

function otraPrueba () {
   let x = 23 //aqui declaramos una nueva variable local
   //x = 23 //Este valor modificacria el valor global
   x = 30
console.log('Dentro de la funcion x vale', x)
}

x= 14
otraPrueba ()
console.log('Fuera de la funcion x vale', x)
