function main () {
    let cadena = 'Hola amigo'
    let alumno = {
        saludar:function () {

        }
    }
    //let alumno = new Object()
    let users = ['Pepe', 'Elena', 'Julia']
    // let users = new Array () 
    console.log(typeof users)
    // 

    //cadena.toLowerCase()
    //EN OTROS LENGUAJES toLowerCase(cadena)
    
    console.log(cadena.toLowerCase())
    //let cadenaTemp = new String()
    console.log(cadena.length)
    let aCadena = cadena.split(' ')
    let cadenaSinEspacios = aCadena.join('')

    cadena = cadena.toUpperCase().split(' ').join('')
    console.log(cadena)

let url = 'https://www.cife.es/alumnos'

let urlTemp = url.slice(url.indexOf('//')+2)
urlTemp = urlTemp.slice(0, urlTemp.indexOf('/'))
console.log(urlTemp)
console.log(url.split('/' [2]))

}




main()

