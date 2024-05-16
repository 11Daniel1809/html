// Definir el arreglo vacio 
let arreglo = []

function construirArreglo(largo) {
    arreglo.length = largo
}

function llenarArreglo() {
    for (let i = 0; i < arreglo.length; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = numeroAleatorio
    }
    console.log(arreglo)
}

var largo = parseInt(prompt("Digite el largo del arreglo"))
construirArreglo(largo);
llenarArreglo();

do {
    var opcion = parseInt(prompt("1. llenar arreglo\n 2. Sacar el promedio del arreglo\n 3. Sacar el total de mayores al promedio\n 4. Aumentar Arreglo\n 5. Sumar Impares\n Mostrar el número mayor del arreglo\n 6. Mostrar el número mayor del arreglo\n 7. Muestre el valor de la mayor diferencia en valor absoluto entre dos celdas consecutivas del arreglo\n 8. Buscar número en el arreglo\n 9. Buscar posición de un número en el arreglo\n 10. Invertir arreglo\n 11. Sustituir el valor de una posicion específica\n 12. Mostrar hilera del arreglo\n 13. Finalizar  aplicación" ))

    switch (opcion) {
        case 1:
            llenar()
            break;
        case 2://4
             console.log(promedioArreglo(arreglo))
             break;
        case 3://5
             console.log("Hay un total de " + mayoresPromedio() + " mayores al promedio")
             break;
        case 4://6
             let sumarLargo = parseInt(prompt("¿Cuántos números quieres aumentar al arreglo?"))
             sumaValor(sumarLargo)
             break;
        case 5://7
             console.log("La suma total de impares es: " + sumaImpares())
             break;

    }

} while (opcion != 0)