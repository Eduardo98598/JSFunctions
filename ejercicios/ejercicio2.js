

var n = 4
var rangoI = 1
var rangoF = 5
for (let index = rangoI; index <= rangoF; index++) {
    if(n==index){
        console.log("¡El número "+n+" ESTÁ dentro del rango!")
        break;
    }
    if(n!=index && index==rangoF) console.log("¡El número "+n+" NO ESTÁ dentro del rango!")
}