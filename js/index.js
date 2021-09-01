// DOM
const grid = document.getElementById("grid");

// Functions

const genGrid = (num) => {

    for (let i = 1; i <= num; i++) {
        let cell = document.createElement("li");
        let content = document.createElement("div");
        cell.appendChild(content);
        content.innerHTML = i;
        grid.appendChild(cell);

        // Aggiunto evento click
        content.addEventListener("click", (e) => {
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
