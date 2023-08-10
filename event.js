//document.addEventListener("DOMContentLoaded", );

 function saludar(){
    alert('Hola! Soy el div');
 }

 let divSaludar= document.getElementById("idiv1");

 divSaludar.addEventListener('click', saludar);

 let btnSaludar= document.getElementById("idbtnSaludar")
 btnSaludar.addEventListener("click", function(event) {
   event.stopPropagation(); 
});