/*
Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. 
Ignoring punctuation, spaces and capitalized letters.
*/
function palindromo(){
    let palabra = prompt ("Escribe una palabra").toLocaleLowerCase();

    let palabraProcesada = "";

    for (let i = 0; i < palabra.length; i++){
        if(palabra[i] != " " && palabra[i] != " " && palabra[i] != "."){
            palabraProcesada += palabra[i];
        }
    }
    let palabraAlReves = palabraProcesada.split("").reverse().join("");
    if (palabraAlReves == palabraProcesada) {
        return "Es un palíndromo";
    } else {
        return "No es un palíndromo";
    }

}

console.log(palindromo());