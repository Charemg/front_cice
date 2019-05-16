export function controller() {

    console.log('Cargado el controller')

    /** Nodos del DOM */
    const btnPedir = document.querySelector('#btn-pedir') 
    const btnSaludar = document.querySelector('#btn-saludar')
    const btnSaludar17 = document.querySelector('#btn-saludar-17')
    const btnUsers = document.querySelector('#btn-users')
    const output = document.querySelector('#output')
   
    /** Manejadores de eventos */

    btnPedir.addEventListener('click', onPedir)
    btnSaludar.addEventListener('click', onSaludar)
    btnUsers.addEventListener('click', onUsers)

    //btnSaludar.addEventListener('click', onSaludar)
    //let aDatos = [1,2,3,4,5]
    //aDatos.map((item, i, array) => item*i)// i es igual al indice del array y como los array empiezan por 0, 1, 2 ..., entonces i es igual a 0
    

    /** una "promesa es un objeto nativo desde ES6
     * que representa la terminación o el fracaso eventual de una operacion asíncrosa" 
     * 
     * Una promesa es un objeto devuelto
     * al cual vinculas las funciones callback, en vez de pasar funciones       callback a una funcion
     * 
     * */


 function completarPedido () {
         return new Promise((resolve, reject)=>{
         setTimeout (() => {
            if (Math.random() > 0.3) {// 70% simulamos aciertos
                resolve('Toma tu hamburguesa')
            }else {// el otro 30% simulamos errores
                reject ('Lo siento, no quedan hamburguesas')
            }
         }, 2000 )
     })
     } 
     
    
function onPedir () {
        
     completarPedido()
     .then((datos) => {
         output.innerHTML += '<li>' + datos + '</li>'
    })
     .catch((error) => {
         output.innerHTML += '<li>' + datos + '</li>'
     })
 
    } 


function msgAfterTimeout (msg, nombre, tiempo) {
        return new Promise ((resolve) => {
         setTimeout (() => {
            resolve([msg, nombre])
            }, tiempo )
     })
     }

    
    


function onSaludar () {
    msgAfterTimeout ('Juanito', 'Pepito', 3500)
    .then ((datos = []) => {
        let saludo = (`Hola ${datos[1]}`)
        let aQuien = datos[0].toUpperCase()
        console.log(saludo)
        return msgAfterTimeout (msg, saludo, 500)
    }).then ((datos = [])=>{
        console.log(`${datos[1]}, soy ${datos[0]}`)
    })
}
}

/** Ejemplo de la misma función usando destructuring de los arrays de datos */
/* function onSaludar () {
        msgAfterTimeout ('Juanito', 'Pepito', 3500)
        .then (([msg, nombre]) => {
            let saludo = (`Hola ${nombre}`)
            let aQuien = msg
            console.log(saludo)
            return msgAfterTimeout (msg, saludo, 500)
        }).then (([quienSoy, saludo])=>{
            console.log(`${saludo}, soy ${quienSoy}`)
        })
    }
} */


/**
 * En ES 2017 aparece async / await ( es un envoltorio de las promesas)
 */

async function onSaludarAwait () {
    let datos = []
    datos = await msgAfterTimeout('Juanito', 'Pepito', 3500)
    let saludo = (`Hola ${datos[1]}`)
    let quienSoy = datos [0].toUpperCase()
    console.log(saludo)
    datos = await msgAfterTimeout (quienSoy, saludo, 500)
    console.log(`${datos[1]}, soy ${datos[0]}`)
}


function onUsers (){
    const url = 'http.....'
    fetch(url)
    .then( (response) => {return response.json()})
    .then((data)=> {console.dir(data)})

}
// Revisar el modo error me da fallo