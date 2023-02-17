const cipher = {

export function cifrar (texto, desplazamiento){
  if (!texto)
  return"";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

  let temp = (desplazamiento % 26 + 26) % 26;
  if (temp == 0)
    temp = 1;

  return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+temp)%26]);
}

 export function descifrar(texto, desplazamiento){
  if (!texto)
  return"";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

  desplazamiento = (desplazamiento % 26 - 26) % 26;

  return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%26]);
}
}

export default cipher;