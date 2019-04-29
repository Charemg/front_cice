
/**
 * Presentar la serie de fibonacci del 1 al N
 */

 /**
  * function fibonacci
  * @param num: number
  * @param : number
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

/**
 * Programa para calcular los números de la serie de fibonacci por debajo de un valor dado
 * 
 * Partiendo de 0 y 1, cada elemento de la serie se calcula como la suma de los 2 anteriores
 * 
 */

 /**
  * function fibonacci
  * @param limite: number
  * @return: array [number]
  * 
  */

  function fibonacci (limite) {
    //let serie = [0,]/* aqui le vamos a pedir que nos saque la serie de fibonacci por un array */
    let i = 0 
    let j = 1
    let serie = [i]

  /*   for (let k = 0; k < infinity.length; k++) {
      const element = array[k];
      if () {
        break /* aqui le decimos una condicion de salida porque es un bucle infinito */

        while (j<=limite) {
          let next = i + j
          //serie[serie.length] = /* Añade al array */
          i = j
          j = next
          serie.push(i) 

      /*     while (j<=limite) {
            let next = i + j
            //serie[serie.length] = /* Añade al array
            i = j
            j = next
            serie.push(i)   Esto es el algoritmo para hacer */
      }
    
    return serie
  }


  /**
   * function fibonacciFor
   * @param limite: number
   * @return: array [number]
   */


  /* function fibonacciFor (limite) {
    /*  let i = 0
     let j = 1 */
     let serie = [i]

/* for (let index = 0; index < 10; index++) {
          let next = i + j
          i = j
          j = next
          serie.push(i)
          if(i > limite) {
            break
            //continue//Esto me mostraria el limite de los 50 numeros que le hemos puesto en el
          } 
      for (let i = 0, let j = 1; i < limite;) {
        serie.push(i)
      }
      
        }

      return serie
   }*/


   function fibonacciFor (limite) {
  
     let serie = [0]
     let next

      for (let i = 0, j = 1; i < limite; i = j; j = next) {
        serie.push(j)
        next = i + j
      }
      return serie
   }
  let limite = 8
  console.log(fibonacciFor(limite))