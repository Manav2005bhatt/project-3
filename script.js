let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;
let turnO=true;

const winpatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame=()=>{
    trueO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
};  

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            box.classList.add("o-color");
            turnO=false;
        }else{
            box.innerText="X";
            box.classList.add("x-color");
            turnO=true;
        }
        box.disabled=true;
        count++;


    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
        box.classList.remove("x-color","o-color");
    }
} 

const showWinner=(winner)=>{
    msg.innerText=`Congrulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winpatterns){
        
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !=""  && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val ===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
    
    }
    
}
newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);