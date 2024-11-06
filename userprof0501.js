/*
User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
*/
function perfilUsuario(){
    let peliculasFav = [];

    const nombreUsuario = prompt("Cuál te gustaría que fuera tu nombre de usuario?");
    const edad = prompt("Cuántos años tienes?");

    let peliFav = prompt("Agrega una película a tu lista de películas favoritas");
    peliculasFav.push(peliFav);

    peliFav = prompt("Agrega otra película a tu lista de películas favoritas");
    peliculasFav.push(peliFav);

    let azar = Math.floor(Math.random () * 2);
    let pelicula = peliculasFav [azar];

    return `Tu nombre de usuario es ${nombreUsuario} y tu edad es ${edad}. La película ${pelicula} es una de tus favoritas`; 
}
console.log(perfilUsuario());