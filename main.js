const boxes = document.getElementsByClassName("box");
const resetButton = document.getElementById("reset-button");
console.log(boxes)
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 9],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

let playerturn = true;

let count = 0;

[...boxes].forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.textContent == "") {
            if (playerturn) {
                box.textContent = "O"
                playerturn = false;
            }
            else {
                box.textContent = "X"
                playerturn = true;
            }
            count++
        }
    })
});

resetButton.addEventListener("click", () => {
    [...boxes].forEach((box) => {
        box.textContent = "";
    })
})

// boxes[0].addEventListener("click", () => {
//     if (playerturn) {
//         boxes[0].textContent = "O"
//         playerturn = false;
//     }
//     else {
//         boxes[0].textContent = "X"
//         playerturn = true;
//     }
//     boxes[0].disabled = true;
//     count++
// })
