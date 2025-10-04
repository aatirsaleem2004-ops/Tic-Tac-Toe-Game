let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let NewGamebtn = document.querySelector("#New-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector(".Winner")


let turn0 = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,5,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        // console.log('Button was clicked!')
        if(turn0){
            box.innerText = "O"
            turn0 = false
        }else{
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = true

        checkWinner();
    })
})

const resetGame = () => {
    turn0 = true
    enableBtn()
    msgContainer.classList.add("hide")
}

const disableBtn = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}

const enableBtn = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = "";
    }
}


const showWinner = (Winner) => {
    msg.innerText = `Congratulation! Winner is ${Winner} 😍`
    msgContainer.classList.remove("hide")
    disableBtn()
}

const checkWinner = () => {
    for(Pattern of winPatterns){
        let posval1 = boxes[Pattern[0]].innerText
        let posval2 = boxes[Pattern[1]].innerText
        let posval3 = boxes[Pattern[2]].innerText

        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 == posval2 && posval2 == posval3){
                // console.log("Winner!",posval1)
                showWinner(posval1);
            }
        }
    }
}

NewGamebtn.addEventListener("click", resetGame)
resetbtn.addEventListener("click", resetGame)