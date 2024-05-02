document.querySelector('#header').innerHTML = "estoy leyendo el documento cesta"

var cesta = []
var i = 0

do {
    i++
    var respuesta = prompt("1. Ver cesta\n2. Añadir a cesta\n3. Quitar fruta de cesa\n4. Salir")

    switch (parseInt(respuesta)) {
        case 1:
            alert("El contenido de la cesta es: " + cesta)
            break
        case 2:
            var fruta = prompt("Introduce el nombre de la fruta a añadir:")
            cesta.push(fruta)
            alert("Se ha añadido la fruta " + fruta + " a la cesta.")
            break
        case 3:
            if (cesta.length > 0) {
                var ultimaFruta = cesta.pop()
                alert("Se ha eliminado la última fruta de la cesta: " + ultimaFruta)
            } else {
                alert("La cesta esta vacía.")

            }
            break
        case 4:
            alert("Saliendo del programa...")
            i = 5
            break
        default:
            alert("Opción no válida. Introduce un número entre 1 y 4.")
    }
} while (i < 5)