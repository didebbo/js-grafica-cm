// DOM
const grid = document.getElementById("grid");

// Functions

const genGrid = (num) => {

    let totalCells = num * num;

    for (let i = 1; i <= totalCells; i++) {
        let cell = document.createElement("li");
        cell.innerHTML = i;
        grid.style.gridTemplateColumns = "repeat(" + num + ",1fr)";
        grid.appendChild(cell);

        // Aggiunto evento click
        cell.addEventListener("click", (e) => {
            alert(e.target.innerHTML);
            e.target.classList.toggle("focus");
        })
    }
}

const main = () => {
    // Vars
    let num;

    do num = parseInt(prompt("Inserisci numero celle (minino 1, massimo 10)"))
    while (isNaN(num) || num < 1 || num > 10);


    genGrid(num);
}


// Main
main();
