const saludar =() =>
{

    return "Holaa xd";
}


let persona= {
nombre:"Carlos",
apellido:"Cupul",
edad:22,
peso:80,
altura:1.59,
hobbies:["study","workout", "work"],
saludar
};
persona.apellido = " Cupul HAU";

console.log(persona.nombre+ persona.apellido);
console.log(persona.peso);
console.log(persona.hobbies);
console.log(persona.saludar());

let frutas = [
{
    nombre: "manzana",
    familia:"xd",
    calorias: 40.1
},
{
    nombre: "fresa",
    familia:"xd",
    calorias: 60
},
{
    nombre: "platano",
    familia:"xd",
    calorias: 40
},
];

for(let i=0; i< frutas.length;i+=1)
{
console.log(frutas[i]);

}
