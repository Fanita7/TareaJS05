/*
Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
*/
function flatArray(matrix){
    let flatArray = matrix.flat(Infinity);
    return flatArray;
}
console.log(flatArray([1, [2, 3, 4, 5, [6]]]));