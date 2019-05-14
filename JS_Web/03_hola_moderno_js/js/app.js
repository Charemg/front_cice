/* Funciones manejadoras de eventos (Event Handler) */

function saludar () {
    console.log ('Hola desde una función en un fichero JavaScript')
}


function despedirse () {
    console.log ('Adios, desde una función en un fichero JavaScript')
}

function onMouseOver () {
    console.log('El ratón entró')
}

function onMouseOut () {
    console.log('El ratón salio')
}

/* function cuadrados (item) {return item*item}

let datos = [1,2,3,4,5]
//datos.map(item => item * item)
console.log(datos.map(cuadrados) */

// Esta es la manera de llamar al objeto del html
document.querySelector('#btn-saludar').onclick = saludar// va sin parentesis para que haga un callback de la funcion saludar
//document.querySelector('button:nth-of-type(2)').onclick = despedirse
document.querySelector('#btn-despedirse').onclick = despedirse

document.querySelector('#div-raton').onMouseOver = onMouseOver
document.querySelector('#div-raton').onMouseOut = onMouseOut
