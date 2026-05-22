const titulo = document.getElementById("titulo");

const btnCambiar = document.getElementById("btnCambiar");

btnCambiar.addEventListener("click", function(){

titulo.textContent = "Binevenvenidos al DOM!";

titulo.style.color = "navy";

});