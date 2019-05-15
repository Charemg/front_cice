/** export function controller (){
    console.log('Controller cargado')
  
  
    /**Declarar variables */
    let isVisibleDiv = false
    let msg = ['[...mostrar menos]', '[...mostrar mas]']

    /** Nodos del DOM */
    let nodos = {
        btnCambiar: document.querySelector('#btn-cambiar'),
        divHide: document.querySelector('#div-hide')
    }

    //msg.push(nodos.btnCambiar.innerHTML)
    nodos.btnCambiar.innerHTML = msg[1]
/* 
    /**Asignar manejadores de eventos */
    nodos.btnCambiar.addEventListener('click', cambiar)//toggle = cambiar palanca, interruptor

    function cambiar () {
        //let i = isVisibleDiv ? 1:0
        if (isVisibleDiv) {
            i = 1
            //hay que ocultar
            //nodos.divHide.classList.add('hide')
            //console.dir(nodos.divHide.classList.value)
            //ya hemos ocultado
            //nodos.btnCambiar.innerHTML = msg[1]
            //nodos.divHide.classList.
        } else {
            //hay que mostrar
            // ya hemos mostrado
            //nodos.divHide.classList.remove('hide')
            //nodos.btnCambiar.innerHTML = msg[0]
    
        }
        nodos.btnCambiar.innerHTML = msg[isVisibleDiv ? 1 : 0]
        nodos.divHide.classList.toggle('hide')
        isVisibleDiv = !isVisibleDiv
    }
}
*/ */




////////////////////////////////////////////////////////////////////////////////
/* Revisar esto
export function controller () {

    console.log('Controller cargado')

   // Declarar variables 
   let isVisibleDiv = false
   let msg = ['[...mostrar menos]', '[...mostrar más]']

    // Nodos del DOM 
    let nodos = {
        btnCambiar: document.querySelector('#btn-cambiar'), 
        divHide: document.querySelector('#div-hide') 
    }
    nodos.btnCambiar.innerHTML = msg[1]

    // Asignar manejadores de eventos 
    nodos.btnCambiar.addEventListener('click', cambiar)

    function cambiar() {
        nodos.btnCambiar.innerHTML = msg[isVisibleDiv ? 1 : 0]
        nodos.divHide.classList.toggle('hide')
        isVisibleDiv = !isVisibleDiv
    }

} */