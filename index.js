
const container = document.querySelector("#container");

for (let i = 1; i <= 16; ++i) {
    for (let j = 1; j <= 16; ++j) {
        const square = document.createElement("div");
        container.appendChild(square);
    }

}
let squares = document.querySelectorAll("#container div")


let opacity = 0;
function addHoverEffect() {
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            const red = 255 * Math.random();
            const blue = 255 * Math.random();
            const green = 255 * Math.random();
            square.style.backgroundColor = `rgb(${red},${blue},${green})`;
            square.style.opacity = opacity;
            opacity = opacity + 0.1;
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
    opacity = 0;
    squares = document.querySelectorAll("#container div");
    addHoverEffect();
}

