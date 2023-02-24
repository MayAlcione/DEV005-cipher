const cipher = {
  encode,
  decode
}


//declaro la funcion
function encode (desplazamiento, mensaje){
  //mensaje debe ser un string,se no es devolve error
  if(typeof(mensaje)!== 'string')  throw new TypeError('Parameter is neeed string')
  //if(typeof(desplazamiento)!== 'number') throw new TypeError('Parameter is neeed number')
  
  //para tomar desplazamiento como numero
  desplazamiento = parseInt(desplazamiento)
  //declaro las variables
  let mensajeCifrado = "";
  
  let aAscii;
  //como van correr las letras del mensaje
  for(let i = 0; i < mensaje.length; i++){
    //sacar codigo Ascii  
    aAscii = mensaje.charCodeAt(i);
    let newAscii = ((aAscii - 65 + desplazamiento) % 26) + 65;
    //para que Ascii no cambie los caracteres del 32 al 64, que son los numeros, el espacio y puntuaciones
    if (aAscii >= 32 && aAscii <= 64) {newAscii = aAscii; }
    //convertir Ascii a la nueva posicion
    const desdeAscii = String.fromCharCode(newAscii)
    //agregar los caracteres al mensaje final
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
    
    if (aAscii >= 32 && aAscii <= 64) {newAscii = aAscii; }
    
    
    const desdeAscii = String.fromCharCode(newAscii)
    mensajeDescifrado += desdeAscii
  }

  return mensajeDescifrado
}

export default cipher;