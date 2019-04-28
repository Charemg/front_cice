
/**
 * Presentar la serie de fibonacci del 1 al N
 */

 /**
  * function fibonacci
  * @param num: number
  * @return : number
  */

let num= 1
function fibonacci (num) {
let penultimo = 0 /* Sabemos primer valor */
let ultimo = 1 /* Sabemos segundo valor */
let penultimoTemp = ultimo /* Asignamos el valor de ultimo a una variable temporal para conservarlo cuando operemos */
console.log(penultimo) /* Mostramos el valor de penultimo porque no queremos perder el cero y que se muestre al inicio */

 while (ultimo<num) { /* mientras penultimo sea menor al limite de numeros que le asignemos a num */
   console.log(ultimo);/* nos mostrara el ultimo */
   penultimoTemp = ultimo; /* esto es para poder guardar el ultimo valor y poder operar con el en el siguiente ciclo sin perder este valor*/
   ultimo = penultimo + ultimo; /* aqui el ultimo seria siempre la suma de ambos valores segun vayan quedando en esa posición */
   penultimo = penultimoTemp; /* Y aqui le estamos pidiendo que ahora que el valor que hemos guardado como penultimoTemp sea el penultimo para hacer la operacion de suma del penultimo con el ultimo */
  
 } 

}
 
fibonacci(200) /* Aqui le pido que me muestre el limite del numero que quiero asignarle */