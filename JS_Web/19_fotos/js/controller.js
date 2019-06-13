/* import { ajax } from "./ajax.js"; */

export function controller() {
    const URL = 'https://jsonplaceholder.typicode.com/photos?albumId=1'
    const URl = 
   /*  const URL_USERS = "https://randomuser.me/api/?results=10" */
    const aFotos = []
    let sectionFigures = document.querySelector('#figures')
    //ajax(URL, 'GET', getFotos )//Maneja callbacks (lo dejamos comentado para ver el fetch)

    /* fetch(URL).then(x)

    function x(response){
        return response.json()
    }*/
    fetch(URL)//maneja promesas y se gestionan con . then si el metodo va bien o .catch devuelveme
    .then((response=> response.json())
    .then((getFotos))
    

        
    // Elementos del DOM
    const btnAdd = document.querySelector('#put')
    let aBtnModificar 
    let aBtnBorrar 
    const addFotoDlg = document.querySelector('#addFotoDlg')
    const btnAddFoto = document.querySelector ('#btnAddFoto')
    const btnCancelAddFoto = document.querySelector ('#btnCancelAddFoto')

    // Manejadores de eventos
    btnAdd.addEventListener('click', onAdd)
    btnAddFoto.addEventListener('click', onClickDlgAdd)
    btnCancelAddFoto.addEventListener('click', onClickDlgAdd)


    /*  "albumId": 1,
    */   
    function getFotos(response) {
        console.log(response)
        let html = ''
       // JSON.parse(response)     
            response.forEach( item => {
                html += `
                    <figure>
                        <a href="${item.url}">
                        <figcaption>${item.title}</figcaption>
                        <img src="${item.thumbnailUrl}" alt="">
                        </a>
                        <button class="post" id="post_${item.id}">Modificar</button>
                        <button class="delete" id="delete_${item.id}">Borrar</button>
                    </figure>
                `
            });

        sectionFigures.innerHTML = html
        aBtnModificar = document.querySelectorAll('.post')
        aBtnBorrar= document.querySelectorAll('.delete')
        aBtnModificar.forEach( item => item.addEventListener('click', onModify))
        aBtnBorrar.forEach( item => item.addEventListener('click', onDelete))
    }


    function onAdd () {
        /* console.log('Añadiendo') */
        addFotoDlg.showModal()
    }

    function onClickDlgAdd (ev) {
        
        let id =  ev.target.id// btnAddFoto 0 btnCancelAddFoto
        
        if (id == 'btnAddFoto'){
            // añadir
            let datos = {}
            datos.albumId = document.querySelector('#albumId').value
            datos.title = document.querySelector('#title').value
            datos.thumbnailUrl = document.querySelector('#thumbnailUrl').value
            datos.url = document.querySelector('#url').value

            fetch(URL, {method: 'POST', body: JSON.stringify(datos)})
            .then(response => console.log(response))

        }else {//btnCancelAddFoto

            addFotoDlg.close()
        }


    }

    function onModify(ev) {
        console.log('Modificando', ev.target.id)
    }

    function onDelete(ev) {
        console.log('Borrando', ev.target.id)
    }
} 

// Lo que hemos comentado es que lo teniamos en ajax y lo hemos pasado a fetch