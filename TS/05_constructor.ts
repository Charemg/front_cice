{
    
    interface Animal {
    nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
}

interface Herviboro extends Animal {
    peso: number

}



class Caballo implements Herbivoro {
/*     nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
    peso: number */

    constructor (
        public nombre: string,
        public edad: number,
        public isDomestic: boolean,
        public tipo: string,
        public peso: number) {}


   }
   
   let c1 = new Caballo ('Rufo', 2, true, 'Arabe', 300)
   console.log(c1)

}