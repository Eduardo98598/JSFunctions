var entrada = 3600
function calcHoras(entrada) {
    return Math.floor(entrada/3600)
}
function calcMinutos(entrada) {
    return Math.floor((entrada%3600)/60)
}
function calcSegundos(entrada) {
    return (entrada%60)
}
console.log("El valor inicial fue: "+entrada)
console.log("Num. de Horas: "+calcHoras(entrada))
console.log("Num. de minutos: "+calcMinutos(entrada))
console.log("Num. de Segundos: "+calcSegundos(entrada))

