document.querySelector('#header').innerHTML = "dias de la semana"
var mensaje
var dia
var userInput = prompt("Ingrese el numero del dia")



function dia_lunes() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"

 }

function dia_martes() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"
    
 }

 function dia_miercoles() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"

 } 

 function dia_jueves() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"
    
 }

 function dia_viernes() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"
    
 }

 function dia_sábado() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"
    
 }

 function dia_domingo() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"
    
}
function dia_invalido() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color = "red"
    
}
 dia = parseInt(userInput)// con parseInt se convierte a entero

 switch(dia){
     case 1:
        mensaje = "dia_lunes"
        dia_lunes()
     break
     case 2:
        mensaje = "dia_martes"
        dia_martes()
     break
     case 3:
        mensaje = "dia_miercoles"
        dia_miercoles()
     break
     case 4:
        mensaje = "dia_jueves"
        dia_jueves()
     break
     case 5:
        mensaje = "dia_viernes"
        dia_viernes()
     break
     case 6:
        mensaje = "dia:sábado"
        dia_sábado()
     break
     case 7:
        mensaje = "dia_domingo" 
        dia_domingo()
     break 
     default:
        mensaje = "Día invalido"
        dia_invalido()
       

        
 }