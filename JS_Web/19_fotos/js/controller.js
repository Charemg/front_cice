import {ajax} from "./ajax.js";



export function controller () {
    const url = 'https://jsonplaceholder.typicode.com/photos'
    const aFotos = []
    
  let sectionFigures = document.querySelector('#figures')

  ajax(URL, 'GET', getFotos)


  //elementos del DOM

  const btnAdd = document.querySelector('#add')
  const aBtnModificar = document.querySelectorAll('.post')
  const aBtnBorrar = document.querySelectorAll('.delete')


  //manejadores de eventos

     btnAdd.addEventlistener('click', onAdd)
    aBtnModificar.forEach(item=>item.addEvenListener('click' onModify))
    aBtnBorrar.forEach(item=>item.addEvenListener('click' onDelete))
   



function getFotos(response) {
    console.log(response)
    let html = ''
     
    JSON.parse(response)
    .forEach(item => {
        html += `
        <figure>
        <a href="${}url">
        <figcaption>${item.title}</figcaption>
        <img src="${item.thumbnailUrl}"
        </a>
        <button class"post" id="post">Modificar</button>
        <button class"delete" id="delete">Borrar</button>
        </figure>`
    });
    sectionFigures.innerHTML = html

}


function onAdd () {
    console.log('Añadiendo')
}

function onModify (ev) {
    console.log('Modificando', ev.target.id)
}

funtion onDelete (ev) {
    console.log('Borrando', ev.target.id)

}

    }

