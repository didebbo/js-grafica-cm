// DOM
const grid = document.getElementById("grid");

// Functions

const genGrid = (num) => {

    for (let i = 1; i <= num; i++) {
        let cell = document.createElement("li");
        let content = document.createElement("div");
        cell.appendChild(content);
        content.innerHTML = i;
        // console.log(cell);
        grid.appendChild(cell);
    }
}

const main = () => {
    // Vars
    let num;

    do num = parseInt(prompt("Inserisci numero celle (minino 1, massimo 50)"))
    while (isNaN(num) || num < 1);

    genGrid(num);
}


// Main
main();
