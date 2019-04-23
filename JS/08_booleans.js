/* CONDICIONALES EN JS

if (condicion) {
    // codigo
}

if(condicion) {
    //codigo A
} else {
    //codigo B
}

if(condicion) {
    //codigo A
} else  if (condicion2){
    //codigo B
}else {
    //codigo C
}
 */

let x=3
x=5
x= '3'

/* Dentro de una condicion = asigna y el == es el que pregunta y === tendrian que ser identicos */
/* 
-Comparacion igual ==
-Comparación idéntico (en valor y tipo) 
-Comparacion distinto != (en valor sin tener en cuanta el tipo)
-Comparación no-idéntico !==
*/

// Casting a boolean
// Valores falsy --> falso
x=false
x=undefined
x=''
x=NaN
x=0
x=null
// Valores trully --> true
x=true
x=25
x='Pepe'
x={}
x=[]

x=function () {}



if(x) {
    console.log('Correcto')
} else {
    console.log('Falso')
}

/* Todos los if hacen casting a booleans */