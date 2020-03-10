function Mapear(){
    mapaDatos = new Map()
    mapaDatos.set(1,"USA")
    mapaDatos.set(2,"MEXICO")
    mapaDatos.set(3,"COLOMBIA")
    mapaDatos.set(4,"PERU")
    mapaDatos.set(5,"BRASIL")
    mapaDatos.set(6,"CUBA")
    mapaDatos.set(7,"ARGENTINA")
    mapaDatos.set(8,"CHINA")
    return mapaDatos
}
tabla = Mapear()
clave = 2
console.log("Valor "+clave+" = "+tabla.get(clave))

