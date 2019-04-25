/**
 * Presentar los números primos del 1 al N
 */

 /**
  * function isPrimo
  * @param num: number
  * @return : boolean
  */

  function isPrimo(num) {
    let r = true
    if(!num) {
        return false
    }
    /*  else if (num == 1) {
        return true
  }*/
    for (let i = 2; i < num ; i++) {
        /* console.log('i resto', i) */
       // if(num % i) == 0) {// (num % i) == 0) esto so se escribe asi
            // no es primo
            if(!(num % i)) { // siempre que quiero entrar a 0 es not num con el !
                return false
            }
        }
        return r
    }


  let number = 0
  number = 1
  number = 2
  number = 3
  //number = 4
  //number = 21
 /*  isPrimo(number) */
console.log(isPrimo(number))

  /**
   * Function listaPrimos
   * @param limite: number
   * @returns: array[number]
   */
 function listaPrimos(limite) {
     let primos = []
     for (let i = 0; i <= limite; i++) {
         if(isPrimo(i)) {
            /*  primos[primos.length] =  i */
            primos.push(i)
         }
     }
     return primos
 }


 console.log('Los primos son', listaPrimos(100).join(','))

