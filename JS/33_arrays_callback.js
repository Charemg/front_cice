let numbers = [5, 8, 23, 45, 67, 56, 89]

let cuadrados = numbers.map(item => item * item)//Devuelve un array de la misma longitud del primer array map es la proyeccion

let sumaTotal = 0
for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    //sumaTotal = sumaTotal + item
    sumaTotal += item
    
}

let sumaCuadrados = 0
cuadrados.forEach(item => sumaCuadrados += item)//esto lo que hace es array.foreach recorre el array y en cada vuelta hace lo que tu quieras


let numbersPares = numbers.filter(item => ! (item%2))
let numbersImpares = numbers.filter(item => item%2)

let limit = 25
let numbersGrandes = numbers.filter (item => item >=limit)

let productoAcumulado = numbers.reduce((a,b) => a*b)// Va reduciendo  el array a un unico numero dependiendo de la funcion
let sumaAcumulada = numbers.reduce((a,b) => a+b)

console.log(cuadrados) 
console.log(sumaTotal)
console.log(numbersPares)
console.log(numbersImpares)
console.log(numbersGrandes)

