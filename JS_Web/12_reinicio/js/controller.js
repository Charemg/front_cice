// recoge los nodos del DOM, objetyos complejos con un monton de varibles

export function controller() {
    
// Pruebas
console.log('Cargado el controller')
console.log(ev)

let oPerson = {nombre: 'Pepe', edad: 22}
console.dir(oPerson)

let nodoDocument = document// es un objeto que esta reflejando el documento entero JS en un conjunto de objetos
console.dir(nodoDocument)


//nodoDocument.children[0].children[1].children[1].children[1].children[1].value = 'Pepe'

//html>body>section:nth-child(2)>div:nth-child(2)>input

//document.querySelector('#inNombre').value = 'Juana'
//document.querySelector('#divNombre').children[1].value ='Ernesto'

// Procedimientos habituales

//1. Referencia a los nodos del DOM que me interesan
//const inNombre = document.querySelector('#inNombre')
//const outSaludo = document.querySelector('#outSaludo')

const nodos = {
    inNombre : document.querySelector('#inNombre'),
    outSaludo : document.querySelector('#outSaludo'),
    inCorreo : document.querySelector('#inCorreo'),
    btnSaludar : document.querySelector('#btnSaludar'),
    btnBorrar : document.querySelector('#btnBorrar'),
}

//console.dir(inNombre)
//console.dir(outSaludo)

// 2. Definir los manejadores de eventos
/* nodos.inNombre.addEventListener('input', onInputSaludar)
nodos.inNombre.addEventListener('change', onChangeSaludar)
nodos.btnSaludar.addEventListener('click', onClickSaludar) */


//3. Implementar los manejadores de eventos

/* function onInputSaludar () {
    console.log(' input', nodos.inNombre.value)
  if (nodos.inNombre.value) {
    nodos.outSaludo.innerHTML = `Hola ${nodos.inNombre.value}`
   } else {
    nodos.outSaludo.innerHTML =``
   } 
 
} */
/* function onChangeSaludar () {
    console.log('change', nodos.inNombre.value)
     if (nodos.inNombre.value) {
        nodos.outSaludo.innerHTML = `Hola ${nodos.inNombre.value}`
       } else {
        nodos.outSaludo.innerHTML =``
       } 

} */

/* function onClickSaludar () {
    if (nodos.inNombre.value) {
        nodos.outSaludo.innerHTML = `Hola ${nodos.inNombre.value}`
       } else {
        nodos.outSaludo.innerHTML =``
       }
} */ 
//Revisar hasta aqui el del profe no funciona correctamente


nodos.inNombre.addEventListener('input', onInputSaludar)
nodos.inNombre.addEventListener('change', onSaludar)
nodos.btnSaludar.addEventListener('click', onSaludar)

function onSaludar (ev) {
    console.dir(ev)

   /*  if (nodos.inNombre.value) {
        nodos.outSaludo.innerHTML = `Hola ${nodos.inNombre.value}`
       } else {
        nodos.outSaludo.innerHTML =``
       } */

}
}

//Revisar hasta aqui el del profe no funciona 