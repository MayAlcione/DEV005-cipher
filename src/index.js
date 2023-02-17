import {cifrar, descifrar} from './cipher.js';

window.addEventListener("load", inicio, true);

function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);
    
    document.getElementById("cifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value.toUpperCase();
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
