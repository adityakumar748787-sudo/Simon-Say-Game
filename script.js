let gameseq=[];
let userseq=[];
let btns=['red','yellow','blue','purple']
let started=false;
let level=0;
let h2=document.querySelector('h3');
document.addEventListener("keypress",function() {
    if(started==false){
        console.log("Game Started");
        started = true;
         levelup();
    }
    
   
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },500)
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randindx=Math.floor(Math.random()*4);
    let randbtn=btns[randindx];
    let btn=document.querySelector(`.${randbtn}`);
    gameseq.push(randbtn);
    console.log(gameseq);
    

    btnflash(btn);
}
function checkans(idx){
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);

        }

    }
    else{
        h2.innerText=`Game Over! You Scored ${level} Points.Press any key to Restart`;
        started=false;
        level=0;
    }
}

function btnpress(){
    let btn=this;
    btncolor=btn.getAttribute("id")
    userseq.push(btncolor);
    // console.log(userseq);


    btnflash(btn);
    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".inner");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

// for(let i=0;i<gameseq.length;i++){
//     if(gameseq[i]!=userseq[i]){
//         h2.innerText=`Your Game is over and Your total score is${level}`
//     }

// }