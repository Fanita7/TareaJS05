/*
Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, 
determine and output the highest of those numbers.
*/
function highestNumber(){
    let lista = [];
    let numero;

    for(var i = 1; i < 11; i++){
        numero = parseInt(prompt("Escribe un número"), 10);
        lista.push(numero);
    }
    lista.sort((a, b) => a - b);
    let highest = lista[lista.length - 1];
    return highest;
}
console.log(highestNumber());