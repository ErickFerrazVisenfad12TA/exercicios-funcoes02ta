function calcularConsumoMedio(distancia, combustivel) {
    let consumoMedio = distancia / combustivel;
    return consumoMedio.toFixed(3) + " km/l";
  }
  
  
  let distancia = 500;
  let combustivel = 35.0;
  let resultado = calcularConsumoMedio(distancia, combustivel);
  console.log(resultado);
  
  
  distancia = 2254;
  combustivel = 124.4;
  console.log(calcularConsumoMedio(distancia, combustivel));
  
  distancia = 4554;
  combustivel = 464.6;
  console.log(calcularConsumoMedio(distancia, combustivel));