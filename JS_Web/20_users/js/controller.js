import {ajax} from './ajax.js'

export function controller () {
    console.log('Controller cargado')
   
    // Inicializacion de variables

    const url = "https://randomuser.me/api/?results=10"

//Nodos del DOM
const output = document.querySelector('#output')
const btnUser = document.querySelector('#btnUser')
const btnBorrar = document.querySelector('#btnBorrar')

//Manejadores de evento
btnUser.addEventListener('click', onClickUser)
btnBorrar.addEventListener('click', onClickUser)

//Funciones

function onClickUser (ev) {
   
   let boton = ev.target.id //btnUser o btnBorrar
    if (boton == 'btnUser') {
        
        ajax (url, 'GET', getUser)
/* 
        output.innerHTML = `Has pulsado el boton ${boton}`  muestra un mensaje */

    } else { //btnBorrar
        output.innerHTML = ''//Borra el mensaje anterior

    }
      

}
 
function getUser (datos) {
    console.log(datos.results[0])
    let imagenes = datos.results[0].picture
    let userName = datos.results[0].name
    let genero = datos.results[0].gender
    

    if (genero == 'female') {


    }else {

    }
    
    output.innerHTML = `
    <a href="${imagenes.large}">
        <figure>
        <figcaption class="${genero}">${userName.title} ${userName.first} ${userName.last}</figcaption>
        <i class="fas fa-envelope">`Enviar email a ${genero}">${userName.title} ${userName.first} ${userName.last}`</i>
        <img src="${imagenes.thumbnail}" alt ="Imagen del usuario">
        </a>
        </figure>
    
    `
    /* console.log(datos.results[0])
    datos.results[0]
 */
}

}
