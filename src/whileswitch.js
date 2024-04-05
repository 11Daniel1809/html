var mensaje 
mensaje = "estoy leyendo el documento whileswitch.js"
var elemento = document.querySelector('#header');
elemento.innerHTML = mensaje 

var inicio = true

function suma_de_numeros(){
    var numero1 = prompt("Ingrese numero 1")
    var numero2 = prompt("Ingrese numero 2")
    alert(parseInt(numero1)+parseInt(numero2))
}

function resta_de_numeros(){
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese el numero 2")
    alert(parseInt(numero1)-parseInt(numero2))

}

function multiplicacion_de_numeros(){
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese el numero 2")
    alert(parseInt(numero1)*parseInt(numero2))

}

function division_de_numeros(){
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese el numero 2")
    alert(parseInt(numero1)%parseInt(numero2))

}




while(inicio == true){
 var respuesta = prompt("1. Suma\n2. Resta\n3. multiplicación\n4. división\n5. finalizar ")   


switch(parseInt(respuesta)){
    case 1:
        var numero1 = prompt("Ingrese numero 1")
        var numero2 = prompt("Ingrese numero 2")
        alert(parseInt(numero1)+parseInt(numero2))
    break
    case 2:
        var numero1 = prompt("ingrese numero 1")
        var numero2 = prompt("ingrese el numero 2")
        alert(parseInt(numero1)-parseInt(numero2))
    break

    case 3:
        var numero1 = prompt("ingrese numero 1")
        var numero2 = prompt("ingrese el numero 2")
        alert(parseInt(numero1)*parseInt(numero2))
    break

    case 4:
        var numero1 = prompt("ingrese numero 1")
        var numero2 = prompt("ingrese el numero 2")
        alert(parseInt(numero1)%parseInt(numero2))
    break

    case 5:
        var inicio = false
    break

}

}// fin while






