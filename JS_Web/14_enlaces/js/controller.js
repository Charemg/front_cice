export function controller () {




    const aNodosEnlaces = document.querySelectorAll('.social-menu a')
    console.log(aNodosEnlaces)
    const lista = document.querySelector('.social-menu a')
    const pulsador = document.querySelector('#pulsador')
    const div = document.querySelector('div')
    const section = document.querySelector('section')

    aNodosEnlaces.forEach(nodo => nodo.addEventListener('click', onClick, true))
    pulsador.addEventListener('click', pulsarA)
    div.addEventListener('click', pulsarDiv )
    section.addEventListener('click',pulsarSection)

    function onClick (ev) {
 /*        console.dir('Target')
        console.dir(ev.target)
        console.dir('Currentarget')
        console.dir(ev.currentTarget)
        console.log(this)*/

        let nodoA = ev.currentTarget
        nodoA.outerHTML = nodoA.innerHTML += `Ops! No tengo ${nodoA.title}<br>`
        //ev.target.outerHTML = `Ops! No tengo ${ev.target.title}<br>`
       
            lista.outerHTML += `<p>JA, JA, JA ... estoy ilocalizable</p>`
            <img src="./assets/"
    }

    function pulsarA(){
        console.log('Pulsado A')
    }
}
    function pulsarDiv(ev) {
    console.log('Pulsado Div')
}
    function pulsarSection() {
    console.log('Pulsado Section')
}
    

