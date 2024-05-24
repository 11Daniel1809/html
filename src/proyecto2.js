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

function promedioArreglo() {
     let sumaTotal = 0;
     for (let i = 0; 1 < arreglo.length; i++) {
          sumaTotal = sumaTotal + arreglo[i];
     }
     return sumaTotal / arreglo.length
}

function mayoresPromedio() {
     let promedio = promedioArreglo();
     let cantidadDeElementos = 0;

     for (let i = 0; 1 < arreglo.length; i++) {
          if (arreglo[i] > promedio) {
               cantidadDeElementos++;
          }
     }
     return cantidadDeElementos;
}


function sumaValor(aumentaArreglo) {
     arreglo.length = arreglo.length + aumentaArreglo
}


function sumaImpares() {
     let totalImpares = 0

     for (let i = 0; i < arreglo.length; i++) {

          if ((arreglo[i] % 2) != 0) {
               totalImpares = totalImpares + arreglo[i]
          }

     }
     return totalImpares
}


function mayorArreglo() {
     let valorMayor = 0

     for (let i = 0; i < arreglo.length; i++) {

          if (arreglo[i] > valorMayor) {
               valorMayor = arreglo[i]
          }



     }

     return valorMayor
}

function mayorDiferencia() {

     let valorDiferenciaMayor = 0
     let diferencia = 0
     for (let i = 0; i <= arreglo.length; i++) {

          //sacar la diferencia
          diferencia = arreglo[i] - arreglo[i + 1]

          //convertir en absoluto 
          if (diferencia < 0) {
               diferencia = diferencia * -1
          }

          //aca preguntamos si la diferencia entre las dos celdas es mayor al valor de diferencia que guardamos
          //Si es verdadero, guardamos esa diferencia
          //si es falso, no hace nada y sigue teniendo el mismo valorDiferenciaMayor que se habia guardado
          if (diferencia > valorDiferenciaMayor) {
               valorDiferenciaMayor = diferencia
          }
     }
     return valorDiferenciaMayor

}


function encontrarElemento(valorNumero) {

     for (let i = 0; i < arreglo.length; i++) {

          if (valorNumero == arreglo[i]) {
               encontrarNumero = true
          }
     }

     return encontroNumero
}


function posicionElemento(valorNumero) {
     let encontroNumero = false;
     let posicion = -1;
     for (let i = 0; i < arreglo.length; i++) {

          if (valorNumero == arreglo[i]) {
               encontroNumero = true
               posicion = i;
               i = arreglo.length;
          }
     }

     //return
     if (encontroNumero) {
          return posicion
     } else {
          return -1
     }
}


function invertirArreglo(){

     let auxArregloInvertido = []
     auxArregloInvertido.length = arreglo.length
     let auxPosicion = 0

     for(let i = arreglo.length; i >= 0; i--){
          auxArregloInvertido[auxPosicion] = arreglo[i];
          auxPosicion++;
     }
     arreglo = auxArregloInvertido
}






var largo = parseInt(prompt("Digite el largo del arreglo"))
construirArreglo(largo);
llenarArreglo();

do {
     var opcion = parseInt(prompt("1. llenar arreglo\n 2. Sacar el promedio del arreglo\n 3. Sacar el total de mayores al promedio\n 4. Aumentar Arreglo\n 5. Sumar Impares\n Mostrar el número mayor del arreglo\n 6. Mostrar el número mayor del arreglo\n 7. Muestre el valor de la mayor diferencia en valor absoluto entre dos celdas consecutivas del arreglo\n 8. Buscar número en el arreglo\n 9. Buscar posición de un número en el arreglo\n 10. Invertir arreglo\n 11. Sustituir el valor de una posicion específica\n 12. Mostrar hilera del arreglo\n 13. Finalizar  aplicación"))

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
          case 6://8
               console.log("El valor mayor del arreglo es: " + mayorArreglo())
               break;
          case 7://9
               console.log("El valor absoluto mayor entre dos celdas consecutivas es: " + mayorDiferencia())
               break;
          case 8://10
               let numeroConsulta = parseInt(prompt("¿Que numero deseas buscar en el arreglo?"))
               console.log("El reesultado de la busqueda fue: " + encontrarElemento(numeroConsulta))
               break;
          case 9://10
               let numeroConsultaPosicion = parseInt(prompt("¿Que numero deseas buscar en el arreglo para que retorne la posicion?"))
               console.log("El resultado de la busqueda fue: " + posicionElemento(numeroConsultaPosicion))
               break;
          case 10://11
               InvertirArreglo()
               console.log("El arreglo fue invertido con exito")
               break;
          case 11://12
               let posicion = parseInt(prompt("¿Que posicion desea sustituir?"))
               let valor = parseInt(prompt("¿Que valor desea asignar?"))
               insertarElemento(posicion, valor)
               break;
          case 12://13
               mostrarHileraArreglo()
               break;
          case 13://14
               finalizarAplicacion()
               break;

     }

} while (opcion != 0)