        /**
 * La funcion setTimeout
 * permite u proceso asincrono, diferido en el tiempo
 */

 console.log("Primero")

 //dentro de un rato console.log("Segundo")

 //dentro de un rato se dice setTimeout
 setTimeout( () => {
     console.log('Segundo')
 }, 2000)
 //console.log("Segundo")
 console.log('Tercero')



