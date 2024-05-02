document.querySelector('#header').innerHTML = "estoy leyendo el documento array"

var cesta = ["Fresa", "Pera", "Cereza"]

console.log(cesta)

cesta[0] = "Uva" // para modificar el valor de una posicion
console.log(cesta)

console.log(cesta.length) // ver el tamaño del array 

cesta.push("Naranja") // agrega un elemento al array
console.log(cesta)

cesta.pop() // elimina el último elemento del array
console.log(cesta)

cesta.push("Naranja")
cesta.push("Piña")
console.log(cesta)
/*
El segundo parámentro (1) indica cuántos elementos eliminar
desde el indice proporcionado (2)
*/
cesta.splice(2, 2)
console.log(cesta)


console.log(cesta[2])



var cestaVacia = [] // crear un array vacio 


cesta.splice(2, 1)


var opcion = prompt("1. Ver elementos de la cesta\n2. Agregar una fruta a la cesta\n3. Eliminar la fruta de la cesta") 