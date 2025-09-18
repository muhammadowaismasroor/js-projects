let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let turn = true;
let hide = document.querySelector(".hide");
let winnerMsg = document.querySelector(".msg-container p")
let newBtn = document.querySelector("#new-btn");

let winPatt = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn === true) {
            box.innerText = "X";
            turn = false;
        }
        else if (turn === false) {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for (patt of winPatt) {
        let pos1Val = boxes[patt[0]].innerHTML;
        let pos2Val = boxes[patt[1]].innerHTML;
        let pos3Val = boxes[patt[2]].innerHTML;
        // console.log(patt[0])
        // console.log(boxes[patt[0]])
        
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

const showWinner = (winner) => {
    winnerMsg.innerText = `Congradulation ${winner} win the game`;
    winnerMsg.classList.remove("hide");
}
