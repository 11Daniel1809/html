document.querySelector('#header').innerHTML = "Estoy leyendo la tarea"

var lista = []



console.log(lista)


function agregar_tarea() {
    var nuevatarea = prompt("ingrese la tarea")
    alert(lista.push(nuevatarea))
    

}

function eliminar_tarea() {
    var eliminartarea = prompt("ingrese la tarea")
    alert(lista.push[eliminartarea])
    respuesta = prompt("desea eliminar?")
    if (respuesta == "si") {
        alert(lista.splice(eliminartarea, 1))
    }

}

function modificar_tarea() {
    var modificartarea = prompt("que tarea desea modificar?")
    alert(lista[modificartarea])
    var modifi = prompt("ingrese la modificacion que desea hacerle")
    alert(lista[modificartarea] = modifi)
}



function ver_tareas() {
    alert(lista)
}

var inicio = true

do {

    var opcion = prompt("1. agregar tarea\n2. eliminar una tarea\n3. ver lista de tareas\n4. modificar tarea\n5. salir del programa")
    switch (parseInt(opcion)) {
        case 1:
            agregar_tarea()
            break
        case 2:
            quitar_tarea()
            break
        case 3: 
            modificar_tarea()
            break
        case 4:
            var_lista()
            break
        case 5:
            inicio= promp("desea terminar el ciclo")
            if (inicio == "si")
            inicio = false

    }

} while (salir ==  false) 