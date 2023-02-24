import cipher from './cipher.js';
//para interacion del usuario con el navegador
window.addEventListener("load", inicio, true);

//funcion de cambiar a mayusculas mientras se digita
function inicio(){
  document.getElementById("mensaje").addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
  }, true);
  //funcinalidad de boton cifrar
  document.getElementById("cifrar").addEventListener("click", function(){
    //recibir mensaje
    const texto = document.getElementById("mensaje").value;
    //valor del desplazamiento
    const desplazamiento = document.getElementById("desplazamiento").value;
    //mensaje cifrada
    document.getElementById("mensaje2").value = cipher.encode(desplazamiento, texto);
  }, true);


  // codigo decifrar
  document.getElementById("mensajes").addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
  }, true);

  document.getElementById("descifrar").addEventListener("click", function(){

    const texto = document.getElementById("mensajes").value.toUpperCase();

    const desplazamiento2 = document.getElementById("desplazamiento2").value;

    document.getElementById("mensaje3").value = cipher.decode(desplazamiento2, texto);
  }, true);
    
}


inicio();