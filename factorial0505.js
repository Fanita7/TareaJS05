/*
Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/
function factorial(n){
    if (n < 0){
        return "N no puede ser menor que 0";
    } else if (n === 0 || n === 1){
        return 1;
    } else{
        return n * factorial(n - 1);
    }
}

let n = parseInt(prompt("escribe un número n"), 10);

console.log(factorial(n));