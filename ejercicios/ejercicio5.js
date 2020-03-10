var resultadoSuma = 0
var numeros = [1,2,3,4,5]
var sumarNumeros = function(datos){
    for (let index = 0; index < datos.length; index++) {
        resultadoSuma += datos[index]
    }
    console.log("Suma de los elementos en la lista: "+resultadoSuma)
}

sumarNumeros(numeros)