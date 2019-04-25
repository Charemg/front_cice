/* en un bucle for siempre tenemos tres condiciones y es repetir un numero de veces */

/* for (
    let i = 0;
    i <= 5; // n es el numero de vueltas
    i++) { //i++ es subir de uno en uno 
    console.log(i+1) 
} */

// esto es un bucle y la ventaja es que tengo las vueltas que yo quiero con n y en cada vuelta me lo marca cual quiero porque tengo i
//Y cada instruccion se separan con ; en el for 

/**
 * Programa de calculo del factorial de un  número
 */
/**
 * Function factorial
 * @param num: Number
 * @returns:  num
 * 
 * Se calcula el producto de num por todos los inferiores a el hasta el 1
 * es decir el producto de m1 por todos los superiores a el hasta llegar a num
 */

/*  function factorial(num) {
      let r = 1
      for (let i = 1; i <= num; i++) {
          r = r * i
      }
      return r
 }

 console.log(factorial(5))
 factorial(5) */
 
// Siempre que hayan un proceso multiplicativo r se valora con uno y siempre que hubiera una suma r empieza valiendo 0


// O le podemos decir

/* let number = 0
console.log(factorial(number)) */


//Ahora le añadiriamos el if

/* function factorial(num) {
    if (num <= 0) { // Y aqui entraria el 0 y los negativos
        //Todos los numeros menos el cero son truly
        //Si lo hacemos negativo con el ! entraria el 0
        // Puedo hacerlo asi (!num || num < 0) o mejor como lo dejamos
        return 0
    }
      let r = 1
      for (let i = 1; i <= num; i++) {
          r = r * i
      }
      return r
 } */

/*  let num = 0
 num = 5
 num = -4
 num = 'Pepe'
console.log(factorial(num)) */

/* en este ejercicio debemos añadirle el control de errores */


/** Usar if / else y un solo return */


function factorial2(num) {
    let r = 1
    if (num <= 0) {
        r = 0
    }else {
        for (let i = 1; i <= num; i++) {
            r = r * i
        }
        return r
    }


num = 0
console.log(factorial2(number))

