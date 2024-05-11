//personaje de TV
let nombre = "tanjiro";
let anime = "Demon slayer";
let edad = "16";

let personaje = {
    nombre: "tanjiro",
    anime: "Demon slayer",
    edad: "16",
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = "13";

let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime;

console.log(personaje);