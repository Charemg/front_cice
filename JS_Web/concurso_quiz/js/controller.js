import { mostrar } from "./tools.js.js";

export function controller () {
    console.log('Inicializado Controller')

    const btnAdd = document.querySelector('#btnAdd')
    const inRey = document.querySelector('#inRey')
    const output = document.querySelector('#output')

    btnAdd.addEventListener('click', onClick)

    function onClick () {
        let name = inRey.value
        output.innerHTML = mostrar(name)
        
    }

    function crearLista() {
        let lista = '<ul>'
        aReyes.forEach( (item,i) => lista += `
        <li>
            <span class="rey-item">${item}</span> 
        </li>`)
        lista += '</ul>'
        lista.innerHTML = lista
    }

    
}