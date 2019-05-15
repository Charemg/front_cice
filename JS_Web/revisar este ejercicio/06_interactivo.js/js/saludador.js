
export function main () {
        let aQuien = '' 
         let msg = [`Hola `, `Adios  `]
        
        /**
         * Seleccionar nodos del DOM */
        let inNombre = document.querySelector('#in-nombre')
        let btnSaludar = document.querySelector('#btn-saludar')
        let btnDespedirse = document.querySelector('#btn-despedirse')
        let output = document.querySelector('#output')
        let btnBorrar = document.querySelector('#btn-borrar')

        /** Asignar manejadores a los nodos */
        btnSaludar.addEventListener('click', saludar)
        btnDespedirse.addEventListener('click', despedirse)
        btnBorrar.addEventListener('click', borrar)

        let saludar = () => {//Dos maneras de presentar las funciones
            if (inNombre.value) {
                aQuien =  '<b>' + inNombre.value + '</b>'
                output.innerHTML= msg[0] + aQuien
        }

        function despedirse () {
            if (inNombre.value) {
            aQuien = '<b>' + inNombre.value + '</b>'
             output.innerHTML= msg[1] + aQuien 
             }
        }
        function borrar () {
            output.innerHTML= ''
            inNombre.value=''

}
        }
    }
    
       
