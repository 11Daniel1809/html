document.querySelector('#header').innerHTML = "estoy leyendo en documento dowhile"



function suma_de_numeros() {
    var numero1 = prompt("Ingrese numero 1")
    var numero2 = prompt("Ingrese numero 2")
    alert(parseInt(numero1) + parseInt(numero2))
}

function resta_de_numeros() {
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese el numero 2")
    alert(parseInt(numero1) - parseInt(numero2))

}

function multiplicacion_de_numeros() {
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese el numero 2")
    alert(parseInt(numero1) * parseInt(numero2))

}

function division_de_numeros() {
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese el numero 2")
    alert(parseInt(numero1) % parseInt(numero2))

}


var i = 0
do {

    i++
    console.log(i)

    var respuesta = prompt("1. Suma\n2. Resta\n3. multiplicación\n4. división\n5. finalizar ")


    switch (parseInt(respuesta)) {
        case 1:
            suma_de_numeros()
            break
        case 2:
            resta_de_numeros()
            break

        case 3:
            multiplicacion_de_numeros()
            break

        case 4:
            division_de_numeros()
            break

        case 5:
            var inicio = false
            var i = 5
            break

    }

} while (i < 5)
