let arreglo = []

var largo = parseInt(prompt("Digite la cantidad de elementos del arreglo"))

function construir(largo) {
    arreglo.length = largo
}
// llamar funcion construir
construir(largo)

console.log(arreglo)