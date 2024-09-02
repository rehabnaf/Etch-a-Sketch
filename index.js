
const container = document.querySelector("#container");

for (let i = 1; i <= 16; ++i) {
    for (let j = 1; j <= 16; ++j) {
        const square = document.createElement("div");
        container.appendChild(square);
    }
}
let squares = document.querySelectorAll("#container div")

function addHoverEffect() {
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "yellow";
        });
    })
}

addHoverEffect();

const inputBtn = document.querySelector("#user-input");

inputBtn.addEventListener("click", function () {
    const numOfSquares = prompt("Enter the number of squares per side? ")
    removeSquares();
    addSquares(numOfSquares);
})

function removeSquares() {
    squares.forEach((square) => {
        container.removeChild(square);
    })
}

function addSquares(numOfSquares) {
    for (let i = 1; i <= numOfSquares; ++i) {
        for (let j = 1; j <= numOfSquares; ++j) {
            const square = document.createElement("div");
            square.style.width = `calc(700px/${numOfSquares})`;
            square.style.height = `calc(700px/${numOfSquares})`;
            container.appendChild(square);
        }
    }
    squares = document.querySelectorAll("#container div");
    addHoverEffect();
}

