let nombres = ['Pepe', 'Juan', 'Bernardette', 'Penelope', 'Eustaquio']

//Slice  es una función inmutable
console.log(nombres.slice(3,4))//esta es la mejor manera de clonar un array con slice la version compleja de slice es splice pero si es mutable
// Splice es una funcion mutable permite un contador
let newNombres = nombres.splice(1,1)//saca fragmentos del array 3,3
console.clear()
console.log(nombres)
console.log(newNombres)

A -B  C - D

// Colas y pilas

nombres.push() //añade un alemento a la cola al final
nombres.pop() //quita un elemento del final FILO

nombres.shift()// quita el primer elemento
nombres.unshift()// añadir en primer lugar

nombres.push('Aurora')
//nombres[nombres.length] = 'Aurora'