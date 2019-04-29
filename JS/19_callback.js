/**
 * Las funciones son objetos
 * Se pueden pasar anidar*/


function operaciones (x = 1, y = 1) {
    console.log(suma(x,y))
    function suma (x, y) {
    return x + y
    }
}
operaciones(10, 12)

 /**
 * Las funciones son objetos
 * Se pueden pasar anidar como parametros y se usan muchisimo = CALLBACK
*/

 function mostrarResultado(x = 0, y = 0, nombre, operacion) {
     //let x
     // let y
     // operacion

     console.log(`El resultado de la ${nombre} con ${x} e y ${y} es`)
     console.log(operacion(x,y))// aqui recibo el callback y lo ejecuto
 }

 //let suma = function (x,y){return x + y}
 //mostrarResultado(11, 12, function (x,y) {return x + y})
  mostrarResultado(11, 12,'suma', (x,y) => x + y)
  mostrarResultado(11, 12,'resta', (x,y) => x - y)