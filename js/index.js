// DOM
const grid = document.getElementById("grid");

// Vars
let num;



do num = parseInt(prompt("Inserisci numero celle (minino 1, massimo 50)"))
while (isNaN(num) || num < 1 || num > 50);

