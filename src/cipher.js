const cipher = {
  encode,
  decode
}



function encode (desplazamiento, mensaje){
  if(typeof(mensaje)!== 'string')  throw new TypeError('Parameter is neeed string')
  //if(typeof(desplazamiento)!== 'number') throw new TypeError('Parameter is neeed number')
  
  //para tomar desplazamiento como numero
  desplazamiento = parseInt(desplazamiento)

  let mensajeCifrado = "";
  
  //como van correr las letras del mensaje
  let aAscii;
  for(let i = 0; i < mensaje.length; i++){
    //sacar codigo Ascii  
    aAscii = mensaje.charCodeAt(i);
    let newAscii = ((aAscii - 65 + desplazamiento) % 26) + 65;
    //para que Ascii no cambie espacio, ! y @
    if (aAscii === 32) {newAscii = 32; }
    if (aAscii === 33) {newAscii = 33; }
    if (aAscii === 64) {newAscii = 64; }

    const desdeAscii = String.fromCharCode(newAscii)
    mensajeCifrado += desdeAscii
  }

  return mensajeCifrado
}


function decode (desplazamiento2, mensajes){
  if(typeof(mensajes)!== 'string')  throw new TypeError('Parameter is neeed string')
  
  desplazamiento2 = parseInt(desplazamiento2)

  let mensajeDescifrado = "";
  
  
  let aAscii;
  for(let i = 0; i < mensajes.length; i++){
    
    aAscii = mensajes.charCodeAt(i);
    let newAscii = ((aAscii + 65 - desplazamiento2) % 26) + 65;
    
    if (aAscii === 32) {newAscii = 32; }
    if (aAscii === 33) {newAscii = 33; }
    if (aAscii === 64) {newAscii = 64; }
    
    
    const desdeAscii = String.fromCharCode(newAscii)
    mensajeDescifrado += desdeAscii
  }

  return mensajeDescifrado
}

export default cipher;