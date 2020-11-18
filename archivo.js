


function mostrar() {
var nombre=document.getElementById('txtnombre').value;
var celular=document.getElementById('txtcelular').value;
var correo=document.getElementById('txtcorreo').value;
alert("Se recibio el mensaje del señor " +nombre+ "numero de celular" +celular+ "y correo " +correo+ " Deja el siguiente comentario :" +comentario)
console.log("Se recibio el mensaje del señor "+nombre+" con numero de celular "+celular+ " y correo "+correo+" Deja el siguiente comentario : "+comentario)
document.getElementById('respuesta').innerHTML="Se recibio el mensaje del señor "+nombre+" con numero de celular "+celular+ " y correo "+correo+" . Deja el siguiente comentario : "+comentario
}
