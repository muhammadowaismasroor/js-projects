let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let turn = true;

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

const checkWinner = () =>{
    
}