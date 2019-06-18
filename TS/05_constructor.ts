interface Animal {
    nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
    comer: () => void
}

class Perro implements Animal {
    nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
    colorPiel: string
    comer () {}
}