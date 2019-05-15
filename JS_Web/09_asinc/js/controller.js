export function controller (){
    
    console.log('Cargado el controller')
    /**Nodos del DOM */
    let btnMostrar = document.querySelector('#btn-mostrar')
    let btnSaludar = document.querySelector('#btn-saludar')
    let btnLeer = document.querySelector('#btn-leer')


    /**Manejadores de eventos */
    btnMostrar.addEventListener('click', mostrar)
    btnSaludar.addEventListener('click', saludar)
    btnLeer.addEventListener('click', leerDatos)
    
/* setTimeout(saludar,1000) //esto dice 1 segundos en ese momento se ejecutara la funcion saludar

function saludar(){
    console.log('Hola amigo')
} */

function mostrar () {
setTimeout(()=>console.log('Item 1'), 0)

console.log('Item 2')

setTimeout(()=>console.log('Item 3'), 2000)

console.log('Item 4')

setTimeout(()=>console.log('Item 5'), 1000)

}

function saludar (){
    console.log('Hola Amigo')
}

function leerDatos (){
    let i
    //i=33
    //Lectura síncrona
    //mostrarDatos()
     setTimeout (()=> {
            i=33
            mostrarDatos()// Aqui nos mostraria el dato
        },1000)

        //mostrarDatos() si lo dejamos aqui nos daría un valor undefined

    function mostrarDatos (){
        console.log(i)
       
}


}

}

