let reset = document.querySelector("#reset-btn");
let box = document.querySelectorAll(".box");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".hide");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX , playerY
 const winPtrn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetBtn = () =>{
    turn0 = true;
    boxEnable();
    msgContainer.classList.add("hide");
}

 const boxDisable = () =>{
    for (let boxs of box){
        boxs.disabled = true;
    }
 }

 const boxEnable = () =>{
    for (let boxs of box){
        boxs.disabled = false;
        boxs.innerText = "";
    }
 }

box.forEach((boxs) =>{
    boxs.addEventListener("click", () =>{
        if(turn0){
            boxs.innerText = "O";
            turn0 = false;
        }
        else{
            boxs.innerText = "X";
            turn0 = true;
        }
        boxs.disabled = true;
        
        checkWinner();
    })
})

 const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    boxDisable();
 }
const checkWinner = () =>{
    for ( let pattern of winPtrn){
        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }

        }
    }
}

reset.addEventListener("click",resetBtn);
newBtn.addEventListener("click",resetBtn);