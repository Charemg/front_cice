* Reacemos el ejercicio empleando una funcion constructora
*/

class Empresa {
   constructor (nombre, direccion, telefono, NIF) {
       this.nombre = nombre
       this.direccion = direccion
       this.telefono = telefono
       this.NIF = NIF
   }
}

class Item  { 
   constructor (descripcion, precio, cantidad) {
       this.descripcion = descripcion
@@ -21,6 +12,7 @@ class Item  {

class Factura {
   constructor  (cliente, tipoIVA, formaPago) {
       // this.empresa = new Empresa('Ediciones Boracay', 'c/ Pez','916583764', 'B-64539874')
       this.cliente = cliente
       this.items = []
       this.tipoIVA = tipoIVA
@@ -42,8 +34,14 @@ class Factura {
   }
}

// Factura.empresa = new Empresa('Ediciones Boracay', 'c/ Pez','916583764', 'B-64539874')

class Empresa {
   constructor (nombre, direccion, telefono, NIF) {
       this.nombre = nombre
       this.direccion = direccion
       this.telefono = telefono
       this.NIF = NIF
   }
}

(function () {

 20  JS/45_get_set.js 
@@ -3,6 +3,9 @@
let persona = {
   nombre: 'Pepe',
   nacim : new Date(1965, 8, 31),
   calcularEdad : function () {
     return parseInt(((new Date() - this.nacim )/(1000*60*60*24*365)))
   },
   get edad () {
       return parseInt(((new Date() - this.nacim )/(1000*60*60*24*365)))
   },
@@ -14,4 +17,19 @@ let persona = {

persona.nuevoAmigo = 'Antonio'
console.log(persona)
console.log(persona.edad) 
console.log(persona.edad)
console.log(persona.calcularEdad())

/**
* 
* En Java, C#...
* 
* class Persona {
*  private edad
* }
* 
* p1 = new Persona()
* p1.edad = 23 // Error
* console.log(p1.edad) // Error
* 
*/ 