export class Eventos {
    constructor () {
        this.msg = [
            'Hola desde una clase en un fichero ES6',
            'Adios desde una función en un fichero JS',
            'El ratón entró',
            'El ratón salio'
        ]
        this.manejarDOM()
        this.asignarListener()
    }
    manejarDOM () {
        this.nodos = {
            btnSaludar:document.querySelector('#btn-saludar'),
            btnDespedirse: document.querySelector('#btn-despedirse'),
            divRaton:document.querySelector('#div-raton')
        }
    }
    asignarListener () {
    this.nodos.btnSaludar.addEventListener ('click', this.saludar.bind(this))//Un manejador (callback) de eventos siempre a de terminar en .bind(this), siempre que empiece como this
    this.nodos.btnDespedirse.addEventListener ('click', this.despedirse.bind(this))
    this.nodos.divRaton.addEventListener ('click', this.onMouseOver.bind(this))
    this.nodos.divRaton.addEventListener('click', this.onMouseOut.bind(this))
}
/**
     * metodos manejadores de eventos (Event Handler), le dice al sistema que ejecute un evento
     */
    saludar () {
        console.log(this.msg[0])
    }
    despedirse () {
        console.log(this.msg[1])
    }
    onMouseOver () {
        console.log(this.msg[2])
    }
    onMouseOut () {
        console.log (this.msg[3])
    }

}


