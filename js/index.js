// DOM
const grid = document.getElementById("grid");

// Functions

const genGrid = (num) => {

    let totalNum = num * num;

    for (let i = 1; i <= totalNum; i++) {
        let cell = document.createElement("li");
        cell.style.width = "calc(100% /" + num + ")";
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
    while (isNaN(num) || num < 1 || num > 10);


    genGrid(num);
}


// Main
main();
