function  calcularLitrosNecessarios(tempo, velocidade){
    let distancia = tempo * velocidade; 
    let Litros = distancia / 12; 
    return Litros.toFixed(3) 
 }
 
   let tempo = 10;
   let velocidade = 85;
   let resultado = calcularLitrosNecessarios(tempo, velocidade);
   console.log(resultado);
 
    tempo = 2;
    velocidade = 92;
    console.log(calcularLitrosNecessarios(tempo, velocidade));
 
    tempo = 22;
    velocidade = 67;
    console.log(calcularLitrosNecessarios(tempo, velocidade));