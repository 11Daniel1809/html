document.querySelector('#header').innerHTML = "números for"

var número = parseInt(prompt("ingrese un número"))

for (let index = 0; index <10; index++) {
    respuesta = número * index
    console.log(número , " X ", index, "=", respuesta)

}