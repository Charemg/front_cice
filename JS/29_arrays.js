/**
 * 
 *
 */
 let datos = []
 //let datos = new Array ()
 datos = [1,2,3,5,7,9]
 datos.push(45)//esto nos permite que crezca y es imposible hacer un array fijo siempre puede crecer

 function numeroAlAzar100() {
    return parseInt(Math.random()*100)
}

/**
 * Crea un array de n aleatorios, como mínimo 1
 * function aleatorios
 * @param: limite : number
 * @returns: array [number]
 * 
 */

 function aleatorios(limite = 1) {
    let r = []//Aqui le pondriamos los valores y nos daria la cantidad de valores que metamos seria la longitug
    //r.length //length es una propiedad y esxisten tanto en strings como en arrays
    //let cadena = ''
    //cadena.length
    for (let i = 0; i < limite; i++) {
         r[i] = numeroAlAzar100 ()    
    }

    return r   
 }

 console.log(aleatorios(12))

 function prueba() {
     let datos = [1, 70, 7, 5,9]
     let masDatos = [1,4,6]
     let arrayFinal = datos.concat(masDatos)
     //datos.concat(masDatos)//concat devuelve un array no lo modifica el de partida
     //console.log(datos + masDatos)//El operador tiene tres valores, el valor de operador co el concatenador de strings, y el tercero es la suma de dos numeros
    console.log(arrayFinal)
    //datos.sort()//Modifica el array para siempre
    //solo nos sirve para ordenar alfabeticamente no numericamente pero si le añadimos un callback con una funcion booleana  temp.sort(function(a,b) {return a-b})
    //console.log(datos)
    

    //let temp = datos//copiar referencias
    //CLONAR UN ARRAY
    let temp = datos.slice(0)
    //temp.sort() esto ordena alfabeticamente
    temp.sort((a,b) => a-b)//temp.sort(function(a,b) {return a-b})// y esta ordena numericamente
    console.clear()
    console.log('Esto es temp')
    console.log(temp)
    console.log('Esto es datos')
    console.log(datos.join())
    }

 prueba()

 /**
  * Comprobar si una frase es un palindromo
  * Se lee igual en ambos sentidos, sin contar los espacios
  * La ruta nos aporto otro paso natural
  * Atar a la rata...
  */



//Realizar ejercicio 13 sacar la letra del DNI
//console.log(59835678 % 23)//Aqui el modulo divisor es el %
// Revisar este último ejercicio con el profe no me muestra el resultado


/**
 * function isPali
 * @param cadena : string
 * @return: boolean
 */
function isPali (cadena = '') {
    let r = true
    let cadenaSinEspacios = cadena.split(' ').join('').toLowerCase()
    let cadenaInversa = cadenaSinEspacios.split('').reverse().join('').toLowerCase()
    //console.log(cadenaInversa)
    if (cadenaSinEspacios !== cadenaInversa) {
        r = false
    }
    return r
}


(function () {
    let textos = [
        'Esto no es un palíndromo',
        'La ruta nos aporto otro paso natural',
        'lala nuevo'
    ]
    for (let i = 0; i < textos.length; i++) {
        const texto = textos[i];
        console.log(texto)
        console.log(isPali(texto))
    }
})()