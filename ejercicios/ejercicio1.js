var numero = 2
var potencia = 4

const elevarPotencia = function(x,n){
    var resultado = 1
    for(let count = 0;count<n;count++){
        resultado *= x
    }
    return resultado
}

console.log(elevarPotencia(numero,potencia))