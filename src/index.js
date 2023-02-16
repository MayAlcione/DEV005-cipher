window.addEventListener("load", inicio, true);

function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    document.getElementById("cifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cifrar(texto, desplazamiento);
    }, true);

    document.getElementById("mensajes").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);

    document.getElementById("descifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensajes").value;
        let desplazamiento = document.getElementById("desplazamiento2").value;
        document.getElementById("mensaje3").value = descifrar(texto, desplazamiento);
    }, true);
}

function cifrar(texto, desplazamiento){
    if (!texto)
    return"";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

    desplazamiento = (desplazamiento % 26 + 26) % 26;

    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26]);
    }

    function descifrar(texto, desplazamiento){
        if (!texto)
        return"";
        const letras = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    
        desplazamiento = (desplazamiento % 26 - 26) % 26;
    
        return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%26]);
        }
     

