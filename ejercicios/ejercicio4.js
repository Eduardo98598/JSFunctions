var numeros = [50,20,3,4], aux = numeros[0]
for (let index = 0; index < numeros.length; index++) {
    if(aux < numeros[index]) aux = numeros[index]
}
console.log("¡El número "+aux+" es el MAYOR del conjunto!")