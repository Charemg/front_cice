/**
 * 
 */

 function areaCirculo(radio = 1) {
     let area = Math.PI * radio * radio
     return area.toPrecision(4)//toFixed esto nos da el decimal de tan solo 2 digitos y va desde 0 a 20
     // todas estas funciones nos las convierte a string
 }

 console.log(areaCirculo(2))

 function numeroAlAzar() {
     return parseInt(Math.random()*20)//Aqui le digo entre 0 y 20 porque random solo va de 0 a 1 pero al multiplicarlo*20 conseguimos que llegue hasta 20 aqui le podriamos poner el numero hasta el que quisieramos llegar
 }

 for (let i = 0; i < 20; i++) {
      console.log(numeroAlAzar())
     
 }
