import {cifrar,descifrar} from './cipher.js';
//para interacion del usuario con el navegador
window.addEventListener("load", inicio, true);

//funcionalidad de cambiar a mayusculas mientras digita
function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);

    //funcinalidad de boton cifrar
    document.getElementById("cifrar").addEventListener("click", function(){
        //recibir mensaje
        let texto = document.getElementById("mensaje").value;
        //valor del desplazamiento
        let desplazamiento = document.getElementById("desplazamiento").value;
        
        document.getElementById("mensaje2").value = cifrar(texto, desplazamiento);
    }, true);


    // codigo decifrar
    document.getElementById("mensajes").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);

    document.getElementById("descifrar").addEventListener("click", function(){

        let texto = document.getElementById("mensajes").value.toUpperCase();

        let desplazamiento = document.getElementById("desplazamiento2").value;

        document.getElementById("mensaje3").value = descifrar(texto, desplazamiento);
    }, true);
    
}


inicio();