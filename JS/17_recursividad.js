/**
 * Calculo del factorial mediante recursividad
 */

 /**  
 * function factorial
 * @param num: number
 * @returns: num
 * 
 * se calcula el producto de un num por todos los inferiores a él hasta el 1
 * es decir el producto de 1 por todos los superiores a él hasta llegar a num
 * */


 function factorial (num){
     if (num < 0 
        || parseInt(num !== num)) {
         throw "Los números negativos o decimales no tienen factorial" // entraria el 0 y los negativos
     }else if (num ===0) {
             return 1
     } else if (num === 1) {
        return num
     } else if  (num > 170) {
         //return "No puedo calcular factoriales de números grandes"
         throw "No puedo calcular factoriales de números tan grandes"
     }
     return num * factorial (num-1)
 }
 let n = 5
 n = 0
 n = -3
 n = 1
 n = 4
 n = 6
 n = 140
 n = 171
 n = -3

 try {
    console.log(factorial(n))
 } catch (error) {
  console.log (error) 
 }
 