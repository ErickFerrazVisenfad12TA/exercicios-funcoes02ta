function bonus(totalVendas) {
      
    let porcentagemComissao = 0.15
    return totalVendas * porcentagemComissao

}

function salario(salarioFixo, totalVendas) {

     return salarioFixo + bonus(totalVendas)
}

let salario1 = salario(500, 1230.3)
let salario2 = salario(700, 0)
let salario3 = salario(1700, 1230.5)

console.log(`TOTAL 1 = ${salario1.toFixed(2)}`)
console.log(`TOTAL 2 = ${salario2.toFixed(2)}`)
console.log(`TOTAL 3 = ${salario3.toFixed(2)}`)