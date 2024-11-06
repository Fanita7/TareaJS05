/*
Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
*/
function alarm(){
    let segundos = parseInt(prompt("Activa una alarma en segundos"), 10);
    let milisegundos = segundos * 1000;
    setTimeout(function(){
        alert(`Hora de apagar los frijoles ${segundos}`);
    }, milisegundos);
}
alarm();