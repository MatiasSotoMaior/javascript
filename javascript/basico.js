//pedir nombre en prompt
let nombreIngresado = prompt("Hola, cual es tu nombre?");
//crear mensaje a mostrar
let mensaje_a_mostrar = alert("Hola " + nombreIngresado);
//mostrar el mensaje
let pregunta1 = prompt("Contame " + nombreIngresado + ", tenes novio?")
if (pregunta1 == "si") {
    let pregunta2 = prompt("debe ser muy lindo, como es su nombre?");
    if (pregunta2 == "mati") {
        alert("asi me gusta ehh")
    } else if (pregunta2 == "matias") {
        alert("asi me gusta ehh")
    } else {
        alert("asi que tenes otro novio hdp?")
    }
} else if (pregunta1 == "no") {
    alert("tan linda y sin novio?")
} else {
    alert("me parece que no contestate mi pregunta " + nombreIngresado)
}