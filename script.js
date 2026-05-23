const questionContainer=document.getElementById("questionContainer");
const feedback=document.getElementById("feedback");
const streakEl=document.getElementById("streak");
const solvedCountEl=document.getElementById("solvedCount");
const worldName=document.getElementById("worldName");
const progressFill=document.getElementById("progressFill");
const mascot=document.getElementById("mascot");
const mascotSpeech=document.getElementById("mascotSpeech");
const achievementBanner=document.getElementById("achievementBanner");

let streak=0;
let solved=0;
let correct=0;
let incorrect=0;
let currentInput="";
let currentQuestion=null;

const worlds=[
  {name:"Space Academy",theme:"space",unlock:0,mascot:"🚀"},
  {name:"Dino Land",theme:"dino",unlock:10,mascot:"🦖"},
  {name:"Ocean World",theme:"ocean",unlock:25,mascot:"🐳"},
  {name:"Castle Kingdom",theme:"castle",unlock:40,mascot:"🏰"},
  {name:"Wizard Realm",theme:"wizard",unlock:60,mascot:"🧙"}
];

function random(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function getCurrentWorld(){

  let current=worlds[0];

  worlds.forEach(world=>{
    if(solved>=world.unlock){
      current=world;
    }
  });

  return current;
}

function updateWorld(){

  const world=getCurrentWorld();

  worldName.innerText=world.name;

  mascot.innerHTML=world.mascot;

  themeSelector.value=world.theme;

  applyTheme();

  if(
    solved===10 ||
    solved===25 ||
    solved===40 ||
    solved===60
  ){

    achievementBanner.classList.remove("hidden");

    achievementBanner.innerHTML=
      `🌍 New World Unlocked: ${world.name}!`;

    setTimeout(()=>{
      achievementBanner.classList.add("hidden");
    },4000);
  }
}

function generateQuestion(){

  const max=parseInt(maxRange.value);

  const operations=[];

  if(additionToggle.checked) operations.push("+");
  if(subtractionToggle.checked) operations.push("-");
  if(multiplicationToggle.checked) operations.push("×");
  if(divisionToggle.checked) operations.push("÷");

  const op=
    operations[random(0,operations.length-1)];

  let a,b,answer;

  switch(op){

    case "+":
      a=random(1,max);
      b=random(1,max);
      answer=a+b;
      break;

    case "-":
      a=random(1,max);
      b=random(1,a);
      answer=a-b;
      break;

    case "×":
      a=random(1,12);
      b=random(1,12);
      answer=a*b;
      break;

    case "÷":
      b=random(1,12);
      answer=random(1,12);
      a=b*answer;
      break;
  }

  currentQuestion={
    a,b,op,answer
  };

  currentInput="";

  renderQuestion();

  speakQuestion();
}

function renderQuestion(){

  let visualHTML="";

  if(
    visualMathToggle.checked &&
    difficulty.value==="easy"
  ){

    const emojiMap={
      space:"🚀",
      dino:"🦖",
      ocean:"🐠",
      jungle:"🐯",
      castle:"🏰",
      wizard:"🧙"
    };

    const emoji=
      emojiMap[themeSelector.value];

    visualHTML=`
      <div class="visual-math">
        ${emoji.repeat(currentQuestion.a)}
        ${currentQuestion.op}
        ${emoji.repeat(currentQuestion.b)}
      </div>
    `;
  }

  questionContainer.innerHTML=`
    <div class="question-card" id="card">

      ${visualHTML}

      <div class="question-text">
        ${currentQuestion.a}
        ${currentQuestion.op}
        ${currentQuestion.b}
        = ?
      </div>

      <div class="answer-display" id="answerDisplay">
        ?
      </div>

    </div>
  `;
}

function speakQuestion(){

  const text=
    `${currentQuestion.a}
    ${currentQuestion.op === "×" ? "times" :
      currentQuestion.op === "÷" ? "divided by" :
      currentQuestion.op}
    ${currentQuestion.b}`;

  const utterance=
    new SpeechSynthesisUtterance(text);

  utterance.rate=0.9;

  speechSynthesis.speak(utterance);
}

function updateAnswerDisplay(){
  document.getElementById("answerDisplay")
    .innerText=currentInput || "?";
}

function celebrateCorrect(){

  streak++;
  solved++;
  correct++;

  streakEl.innerText=streak;
  solvedCountEl.innerText=solved;

  updateStats();

  launchConfetti();

  feedback.className="feedback success";

  feedback.innerHTML=
    ["Awesome!","Brilliant!","Math Wizard!"]
    [random(0,2)];

  mascotSpeech.innerHTML=
    ["You're amazing!",
    "Super smart!",
    "Math power activated!"]
    [random(0,2)];

  adaptiveDifficulty();

  updateWorld();

  updateProgress();

  saveState();

  setTimeout(()=>{
    generateQuestion();
  },1400);
}

function handleWrong(){

  incorrect++;

  streak=0;

  streakEl.innerText=0;

  feedback.className="feedback error";

  feedback.innerHTML="Try Again!";

  mascotSpeech.innerHTML=
    "You can do it!";

  updateStats();

  adaptiveDifficulty();

  saveState();
}

function adaptiveDifficulty(){

  if(correct>0){

    const accuracy=
      Math.round(
        (correct/(correct+incorrect))*100
      );

    if(
      accuracy>90 &&
      parseInt(maxRange.value)<100
    ){
      maxRange.value=
        parseInt(maxRange.value)+2;
    }

    if(
      accuracy<60 &&
      parseInt(maxRange.value)>10
    ){
      maxRange.value=
        parseInt(maxRange.value)-2;
    }

    rangeValue.innerText=maxRange.value;
  }
}

function updateStats(){

  const total=correct+incorrect;

  const accuracy=
    total===0 ? 0 :
    Math.round((correct/total)*100);

  accuracyStat.innerText=
    accuracy + "%";

  correctStat.innerText=correct;

  incorrectStat.innerText=incorrect;
}

function updateProgress(){

  const progress=
    (solved % 15)/15*100;

  progressFill.style.width=
    progress + "%";
}

function saveState(){

  localStorage.setItem(
    "mathAdventureV3",
    JSON.stringify({
      streak,
      solved,
      correct,
      incorrect,
      difficulty:difficulty.value,
      max:maxRange.value
    })
  );
}

function loadState(){

  const saved=
    JSON.parse(
      localStorage.getItem("mathAdventureV3")
    );

  if(!saved) return;

  streak=saved.streak || 0;
  solved=saved.solved || 0;
  correct=saved.correct || 0;
  incorrect=saved.incorrect || 0;

  difficulty.value=
    saved.difficulty || "medium";

  maxRange.value=
    saved.max || 20;

  streakEl.innerText=streak;
  solvedCountEl.innerText=solved;

  updateStats();
  updateProgress();
  updateWorld();
}

function submitAnswer(){

  if(
    parseInt(currentInput)===
    currentQuestion.answer
  ){
    celebrateCorrect();
  }else{
    handleWrong();
  }
}

keypad.addEventListener("click",(e)=>{

  if(!e.target.classList.contains("key")) return;

  const value=e.target.innerText;

  if(value==="⌫"){
    currentInput=currentInput.slice(0,-1);
  }
  else if(value==="✓"){

    if(currentInput.length>0){
      submitAnswer();
    }

    return;
  }
  else{

    if(currentInput.length<4){
      currentInput+=value;
    }
  }

  updateAnswerDisplay();
});

settingsBtn.addEventListener("click",()=>{
  settingsPanel.classList.toggle("hidden");
});

refreshBtn.addEventListener("click",()=>{
  generateQuestion();
});

function applyTheme(){

  const value=themeSelector.value;

  switch(value){

    case "space":
      document.body.style.background=
        "radial-gradient(circle at top,#1a2242,#080b16)";
      break;

    case "dino":
      document.body.style.background=
        "radial-gradient(circle at top,#214221,#08110b)";
      break;

    case "ocean":
      document.body.style.background=
        "radial-gradient(circle at top,#11455b,#071018)";
      break;

    case "castle":
      document.body.style.background=
        "radial-gradient(circle at top,#433060,#12081b)";
      break;

    case "wizard":
      document.body.style.background=
        "radial-gradient(circle at top,#35224d,#100816)";
      break;

    case "jungle":
      document.body.style.background=
        "radial-gradient(circle at top,#355d2f,#08110b)";
      break;
  }
}

themeSelector.addEventListener("change",applyTheme);

function launchConfetti(){

  const canvas=
    document.getElementById("confettiCanvas");

  const ctx=canvas.getContext("2d");

  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  const pieces=[];

  for(let i=0;i<120;i++){

    pieces.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height-canvas.height,
      r:Math.random()*6+2,
      d:Math.random()*50
    });
  }

  let angle=0;

  function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    pieces.forEach((p)=>{

      ctx.beginPath();

      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

      ctx.fillStyle=
        `hsl(${Math.random()*360},100%,60%)`;

      ctx.fill();

      p.y+=Math.cos(angle+p.d)+3;
      p.x+=Math.sin(angle);

      if(p.y>canvas.height){
        p.y=-10;
      }
    });

    angle+=0.01;
  }

  let frames=0;

  const interval=setInterval(()=>{

    draw();

    frames++;

    if(frames>80){
      clearInterval(interval);
      ctx.clearRect(0,0,canvas.width,canvas.height);
    }

  },16);
}

loadState();

updateWorld();

generateQuestion();