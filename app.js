let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level =0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("key pressed");
        started = true;
        levelUp();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(randBtn);
    btnflash(randBtn);
}
function check(idx){
    // console.log("check level: ", level);
  
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
         h2.innerHTML = `game over! Your score was ${level} <br>press any key`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
         }, 150);
         reset();

    }
}

function btnpress(){
    // console.log(this);
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
userSeq.push(userColor);
check(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}