
const container = document.querySelector("#container");

for (let i = 1; i <= 16; ++i) {
    for (let j = 1; j <= 16; ++j) {
        const square = document.createElement("div");
        container.appendChild(square);
    }
}