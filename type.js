const difficulity =document.querySelector("#difficulity");
const settingbtn=document.querySelector(".setting");
const word= document.querySelector("#word");
const input=document.querySelector("#tval");
const time= document.querySelector(".time");
const score= document.querySelector(".score");
const endgame=document.querySelector("#end-game")
const start=document.querySelector(".start");
const startgame=document.querySelector("#start-game");


const words=[
"mature",
"gray",
"reason",
"tightfisted",
"animated",
"awake",
"gabby",
"ethereal",
"society",
"scattered",
"succinct",
"bells",
"ship",
"breathe",
"cycle",
"x-ray",
"thoughtful",
"appear",
"live",
"abundant",
"wound",
"steer",
"government",
"cherry",
"shake"
]
let randomword;
let ascore=0;
let atime=30;
let level;





start.addEventListener("click", function(){
startgame.style.display="none";

const timeinterval=setInterval(updatetime,1000);


function updatetime(){
  atime--;
  time.textContent=atime+" sec";
  if(atime===0){
    clearInterval(timeinterval);
    gameover();
  }
}

function gameover(){
  endgame.innerHTML=`
  <h2>Time is over.</h2>
  <h2>Your score is ${ascore}</h2>
  <button class="reload" onclick="location.reload()">Reload</button>
  `
  endgame.style.display="flex";
}


function getrandomword(){
   return Math.floor(Math.random()*words.length);

}

function updatescore(){
  score.textContent=ascore;
}


difficulity.addEventListener("change",function(e){
level=e.target.value;
console.log(level);
})


function addwords(){
randomword=words[getrandomword()];
word.textContent=randomword;
word.style.cssText="background-color:white;width:50%; margin:2% auto; padding:1% 0; border-radius:5px;font-size:200%; "
}

addwords();


input.addEventListener("input",function(e){
const inputtext=e.target.value;
if(inputtext===randomword) {
  addwords();
  ascore++;
  updatescore();
  input.value="";
  if(level==="easy"){
        atime+=5;
  } else if (level==="medium"){
    atime+=4;
  }else {
    atime+=3;
  }

  updatetime();
}
})


})
