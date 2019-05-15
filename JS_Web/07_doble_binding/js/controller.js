export function controller (){
    console.log('Controller cargado')
    let nombre = ''
    let msgInicial = ''
    /**
     * Nodos del DOM
     */
    const inNombre = document.querySelector('#in-nombre')
    let btnBorrar = document.querySelector('#btn-borrar')
    const output = document.querySelector('#output')

    msgInicial = output.innerHTML + ' '
    /**
    * Asignadores manejadores de Evento
     */
    inNombre.addEventListener('input', onInputNombre)
    btnBorrar.addEventListener('click', borrar)

    function onInputNombre () {
        nombre = inNombre.value
        output.innerHTML = msgInicial + nombre.toUpperCase()
    }
    function borrar () {

    }

}

///MVC es lo que se pauta de programacion Model View Controller, esto es al estilo Angular