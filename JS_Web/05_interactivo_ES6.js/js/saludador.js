export class Saludador {
    constructor  () {
        this.aQuien = '' 
        this.msg = [`Hola `, `Adios  `]
        
        /**
         * Seleccionar nodos del DOM */
        this.inNombre = document.querySelector('#in-nombre')
        this.btnSaludar = document.querySelector('#btn-saludar')
        this.btnDespedirse = document.querySelector('#btn-despedirse')
        this.output = document.querySelector('#output')
        this.btnBorrar = document.querySelector('#btn-borrar')

        /** Asignar manejadores a los nodos */
        this.btnSaludar.addEventListener('click', this.saludar.bind(this))
        this.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
        this.btnBorrar.addEventListener('click', this.borrar.bind(this))

    }
    
        saludar() {
            if (this.inNombre.value) {
                 this.aQuien =  '<b>' + this.inNombre.value + '</b>'
                 this.output.innerHTML= this.msg[0] + this.aQuien
        }
    }
        despedirse () {
            if (this.inNombre.value) {
               this.aQuien = '<b>' + this.inNombre.value + '</b>'
            //console.log(this.msg[1] + this.aQuien)
            this.output.innerHTML= this.msg[1] + this.aQuien 
            }
            
        }
        borrar () {
            this.output.innerHTML= ''
            this.inNombre.value=''

        }
}
//Normalmente las clases tienen el nombre en Mayusculas sustantivos y a los metodos en verbos