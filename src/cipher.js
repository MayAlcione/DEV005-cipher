export function cifrar (mensaje, desplazamiento){
  let mensajeCifrado = "";

  //convertir a entero desplazamiento
  desplazamiento = parseInt(desplazamiento);
  
  //como van correr las letras del mensaje
  let aAscii;
  for(let i = 0; i < mensaje.length; i++){
    //sacar codigo Ascii  
    aAscii = mensaje.charCodeAt(i);
    let newAscii = ((aAscii - 65 + desplazamiento) % 26) + 65;
    //para que Ascii solo llegue hasta 32, devolve lo mismo caracter
    if (aAscii === 32,33,34,35,36,37,38,39,40,41,42,43,45,46,47) {newAscii = 32,33,34,35,36,37,38,39,40,41,42,43,45,46,47; }

    if (aAscii === 33) {newAscii = 33; }
    
    
    let desdeAscii = String.fromCharCode(newAscii)
    mensajeCifrado += desdeAscii
  }

  return mensajeCifrado
}


export function descifrar (mensaje, desplazamiento){
  let mensajeDescifrado = "";

  //convertir a entero desplazamiento
  desplazamiento = parseInt(desplazamiento);
  
  //como van correr las letras del mensaje
  let aAscii;
  for(let i = 0; i < mensaje.length; i++){
    //sacar codigo Ascii  
    aAscii = mensaje.charCodeAt(i);
    let newAscii = ((aAscii + 65 - desplazamiento) % 26) + 65;
    //para que Ascii solo llegue hasta 32, que es un espacio para evitar otros caracteres
    if (aAscii === 32) {newAscii = 32; }

    if (aAscii === 33) {newAscii = 33; }
    
    
    let desdeAscii = String.fromCharCode(newAscii)
    mensajeDescifrado += desdeAscii
  }

  return mensajeDescifrado
}
