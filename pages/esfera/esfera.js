function calcularVolumeEsfera(raio) {
    let pi = 3.14159;
    let volume = (4.0 / 3) * pi * Math.pow(raio, 3);
    return volume.toFixed(3);
  }
  
  let entradas = [3, 15, 1523];
  
  for (let raio of entradas) {
    let resultado = calcularVolumeEsfera(raio);
    console.log("VOLUME = " + resultado);
  }