/**
 * Creamos un objeto con los nombres de los meses en español como propiedades
 * y sus equivalentes en otro idioma (e.g ingles)
 * y añadimos una función por consola que nos muestre la siguiente frase
 */

let meses = {
    enero: 'January',
    febrero: 'February',
    marzo: 'March',
    abril: 'April',
    mayo: 'May',
    junio: 'June',
    julio: 'Jyly',
    agosto: 'Agost',
    septiembre: 'September',
    octubre: 'October',
    noviembre: 'November',
    diciembre: 'December',
    toString: function () {
        let output = ''
        for (const key in this) {
        const element = this[key];
        if (typeof element === 'function') {
            continue
        }
        output = output + `El mes ${key} en inglés se dice ${element}`+ '\n'
        }
        return output
        },
        mostrar: function() {
        console.log(this.toString())
        },
    }


meses.mostrar()