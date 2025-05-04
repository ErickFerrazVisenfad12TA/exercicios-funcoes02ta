function media(nota1, nota2) {
    return ((nota1 * 3.5) + (nota2 * 7.5)) / 11
}

let media1 = media(5, 7.1)
let media2 = media(0, 7.1)
let media3 = media(10, 10)

console.log(`MEDIA 1 = ${media1.toFixed(5)}`)
console.log(`MEDIA 2 = ${media2.toFixed(5)}`)
console.log(`MEDIA 3 = ${media3.toFixed(5)}`)