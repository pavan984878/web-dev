let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX,playerO

const Winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });  
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (Winner)=>{
msg.innerHTML = `Congratulations, Winner is ${Winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}
const checkWinner = () => {
    for(let pattern of Winpatterns){
        let pos1Val1 = boxes[pattern[0]].innerText;
        let pos1Val2 = boxes[pattern[1]].innerText;
        let pos1Val3 = boxes[pattern[2]].innerText;
        
        if (pos1Val1 != "" && pos1Val2 != "" && pos1Val3 != ""){
            if (pos1Val1 === pos1Val2 && pos1Val2 === pos1Val3){
                console.log("Winner",pos1Val1);
                showWinner(pos1Val1);
            }
        }

        
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);