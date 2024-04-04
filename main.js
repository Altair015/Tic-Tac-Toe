const boxes = document.getElementsByClassName("box");
const resetButton = document.getElementById("reset-button");
const statusDisplay = document.getElementById("display-item");
// console.log(statusDisplay.textContent)
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

let playerturn = true;
let count = 0;
let winner = "";

onLod = true;
if (onLod) {
    statusDisplay.style.fontSize = "xx-large";
    statusDisplay.textContent = `Welcome to Tic Tac Toe`
    statusDisplay.style.fontWeight = "bold";
    setTimeout(() => {
        statusDisplay.style.fontWeight = "";
        statusDisplay.style.fontSize = "xxx-large";
        statusDisplay.textContent = "O's Turn."
        onLod = false;
    }, 2000);
}


[...boxes].forEach((box) => {
    box.addEventListener("click", () => {
        setTimeout(() => {
            checkWinner()
        }, 300);
        if (winner == "") {
            if (box.textContent == "") {
                if (playerturn) {
                    box.textContent = "O"
                    playerturn = false;
                    box.style.color = "ivory";
                    statusDisplay.textContent = "X's Turn.";
                    count++;
                }
                else {
                    box.textContent = "X"
                    playerturn = true;
                    statusDisplay.textContent = "O's Turn.";
                    count++;
                }

            }
        }

    })
});

resetButton.addEventListener("click", () => {
    [...boxes].forEach((box) => {
        box.textContent = "";
        winner = ""
        count = 0;
        statusDisplay.style.fontSize = "xxx-large";
        statusDisplay.style.fontWeight = "";
        statusDisplay.textContent = "";
        winPattern.forEach(
            (pattern) => {
                boxes[pattern[0]].style.color = "royalblue";
                boxes[pattern[1]].style.color = "royalblue";
                boxes[pattern[2]].style.color = "royalblue";
            }
        )
    })
})

function checkWinner() {
    winPattern.forEach(
        (pattern) => {
            const firstBoxValue = boxes[pattern[0]].textContent;
            const secondBoxValue = boxes[pattern[1]].textContent;
            const thirdBoxValue = boxes[pattern[2]].textContent;
            if (firstBoxValue != "" && secondBoxValue != "" && thirdBoxValue != "") {
                if (firstBoxValue == secondBoxValue && secondBoxValue == thirdBoxValue) {
                    winner = firstBoxValue;
                    boxes[pattern[0]].style.color = "red";
                    boxes[pattern[1]].style.color = "red";
                    boxes[pattern[2]].style.color = "red";
                    statusDisplay.style.fontSize = "xx-large";
                    statusDisplay.style.fontWeight = "bold";
                    statusDisplay.textContent = `${winner} has won the game.`
                }
            }
            if (count == 9 && winner == "") {
                statusDisplay.style.fontSize = "xx-large";
                statusDisplay.style.fontWeight = "bold";
                statusDisplay.textContent = `Match is drawn.`
            }
        }
    )
}
