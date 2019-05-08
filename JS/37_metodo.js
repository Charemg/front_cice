let vuelo = {
    airline: 'Oceanic',
    number: '815',
    departure: {
        claveIATA: 'SYD',
        time:'2004-09-22 14:55',
        ciudad:'Sydney',
    },
    arrival: {
        claveIATA: 'LAX',
        time:'2004-09-23 10:42',
        ciudad:'Los Ángeles',
    },toString : function (obj = this) {
    let output = ''
    for (const key in obj) {
        const element = obj[key];
        if (typeof element === 'function') {
            continue
        }
        if (typeof element === 'object') {
            output = output + `La propiedad ${key} vale ...` + '\n'
            output = output + obj.toString(element)
        }
        else { 
        output = output + `La propiedad ${key} vale ${element}`+ '\n'
        }
    }
}, mostrarFinal : function () {
    console.log(this.toString())
}
}

vuelo.mostrar()