(function () {
let hoy = new Date()// esto nos devuelve el dia e hoy 
//console.log(hoy)

let fecha = new Date(784357034858)// esto nos devuelve una fecha
//console.log(fecha)
//console.log(fecha.getFullYear())

let nacim = new Date(1965,7,31,)//el mes lo considera un array cuenta desde el domingo que es considerado como 0
/* console.log(nacim.toLocaleString())
console.log(nacim.toLocaleDateString())
console.log(nacim.toLocaleTimeString())
console.log(nacim.toLocaleString())
console.log(nacim.toDateString())
console.log(nacim.getDay()) */
console.log(fechaEnEspañolToString(nacim))
//console.log(nacim.toStringEnEspañol)

}
)()

/**
 * Mostrar fecha como "Dia de semana, dia de Mes de Año"
 */

 /** fechaEnEspañolToString
 *@param fecha: Date
 *@return: string
 */

//let nacim = new Date(1965,7,31)

function fechaEnEspañolToString(fecha = new Date()) {
const aDias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
const aMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

let fechaToString = ''
fechaToString += aDias[fecha.getDay()] + ', '
fechaToString += fecha.getDate() + ' de '
fechaToString += aMeses[fecha.getMonth()] + ' de '
fechaToString += fecha.getFullYear()
return fechaToString

//let fechaToString = '' = aDias[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + aMeses[fecha.getMonth()] + ' de ' + fecha.getFullYear()
//return fechaToString
}



