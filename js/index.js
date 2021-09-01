// DOM
const grid = document.getElementById("grid");

// Functions

const isDiv = (num) => {

    let i = 0;
    do {
        let a = num / i;
        if (a == i) return true;
        i++;
    }
    while (i <= num);
    return false;
}

const numDiv = (num) => {

    let i = 0;
    do {
        let a = num / i;
        if (a == i) return i;
        i++;
    }
    while (i <= num);
}

const genGrid = (num) => {

    // let totalCells = num * num;

    console.log(isDiv(num));

    for (let i = 1; i <= num; i++) {
        let cell = document.createElement("li");
        cell.innerHTML = i;
        if (isDiv(num)) grid.style.gridTemplateColumns = "repeat(" + numDiv(num) + ",1fr)";
        else if (num <= 10) grid.style.gridTemplateColumns = "repeat(" + num + ",1fr)";
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
    while (isNaN(num) || num < 1);


    genGrid(num);
}


// Main
main();
