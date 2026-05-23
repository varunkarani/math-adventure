const questionContainer=document.getElementById("questionContainer");
const feedback=document.getElementById("feedback");
const streakEl=document.getElementById("streak");
const solvedCountEl=document.getElementById("solvedCount");
const worldName=document.getElementById("worldName");
const progressFill=document.getElementById("progressFill");
const mascot=document.getElementById("mascot");
const mascotSpeech=document.getElementById("mascotSpeech");
const achievementBanner=document.getElementById("achievementBanner");
const storyBanner=document.getElementById("storyBanner");

let streak=0;
let solved=0;
let correct=0;
let incorrect=0;
let currentInput="";
let currentQuestion=null;
let wrongAttempts=0;

const operationStats={
  "+":{correct:0,wrong:0},
  "-":{correct:0,wrong:0},
  "×":{correct:0,wrong:0},
  "÷":{correct:0,wrong:0}
};

const worlds=[
  {name:"Space Academy",theme:"space",unlock:0,mascot:"🚀"},
  {name:"Dino Land",theme:"dino",unlock:10,mascot:"🦖"},
  {name:"Ocean World",theme:"ocean",unlock:25,mascot:"🐳"},
  {name:"Castle Kingdom",theme:"castle",unlock:40,mascot:"🏰"},
  {name:"Wizard Realm",theme:"wizard",unlock:60,mascot:"🧙"}
];

const storyStages=[
  {progress:0,text:"🛸 Spaceship damaged!"},
  {progress:5,text:"🔧 Engine repaired!"},
  {progress:10,text:"⛽ Fuel restored!"},
  {progress:15,text:"🪽 Wings repaired!"},
  {progress:20,text:"🚀 Launch systems online!"},
  {progress:25,text:"🌌 BLAST OFF!"}
];

function random(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function vibrate(duration){

  if(navigator.vibrate){
    navigator.vibrate(duration);
  }
}

function playSuccessSound(){

  if(!soundToggle.checked) return;

  const ctx=new(window.AudioContext||window.webkitAudioContext)();

  [523,659,784].forEach((freq,index)=>{

    const osc=ctx.createOscillator();
    const gain=ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.value=freq;
    osc.type="triangle";

    osc.start(ctx.currentTime+(index*0.08));

    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      ctx.currentTime+0.4
    );

    osc.stop(ctx.currentTime+0.4);
  });
}

function playFailSound(){

  if(!soundToggle.checked) return;

  const ctx=new(window.AudioContext||window.webkitAudioContext)();

  const osc=ctx.createOscillator();
  const gain=ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.frequency.value=180;

  osc.start();

  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    ctx.currentTime+0.3
  );

  osc.stop(ctx.currentTime+0.3);
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

function showWorldUnlock(world){

  achievementBanner.classList.remove("hidden");

  achievementBanner.innerHTML=`
    🌍 NEW WORLD UNLOCKED
    <br><br>
    ${world.name}
  `;

  vibrate([120,60,120]);

  setTimeout(()=>{
    achievementBanner.classList.add("hidden");
  },4000);
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
    showWorldUnlock(world);

    mascotSpeech.innerHTML=
      `Welcome to ${world.name}!`;
  }
}

function updateStory(){

  let currentStage=storyStages[0];

  storyStages.forEach(stage=>{
    if(solved>=stage.progress){
      currentStage=stage;
    }
  });

  const percent=
    Math.min((solved/25)*100,100);

  storyBanner.innerHTML=`
    🚀 Spaceship Status
    <br><br>
    <div style="
      width:100%;
      height:16px;
      border-radius:999px;
      background:rgba(255,255,255,0.1);
      overflow:hidden;
      margin-top:10px;
    ">
      <div style="
        width:${percent}%;
        height:100%;
        background:linear-gradient(90deg,#7c5cff,#32d583);
      "></div>
    </div>
    <br>
    ${currentStage.text}
  `;
}

function getWeakestOperation(){

  let weakest="+";
  let lowestAccuracy=999;

  Object.keys(operationStats).forEach(op=>{

    const stats=operationStats[op];

    const total=stats.correct+stats.wrong;

    if(total===0) return;

    const accuracy=
      (stats.correct/total)*100;

    if(accuracy<lowestAccuracy){
      lowestAccuracy=accuracy;
      weakest=op;
    }
  });

  return weakest;
}

function generateQuestion(){

  const max=parseInt(maxRange.value);

  const operations=[];

  if(additionToggle.checked) operations.push("+");
  if(subtractionToggle.checked) operations.push("-");
  if(multiplicationToggle.checked) operations.push("×");
  if(divisionToggle.checked) operations.push("÷");

  let op;

  if(random(1,100)<=35){
    op=getWeakestOperation();
  }else{
    op=operations[random(0,operations.length-1)];
  }

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
  wrongAttempts=0;

  renderQuestion();

  speakQuestion();
}

function getHint(){

  const q=currentQuestion;

  switch(q.op){

    case "+":
      return `Hint: Start with ${q.a} and count up ${q.b}!`;

    case "-":
      return `Hint: Take ${q.b} away from ${q.a}`;

    case "×":
      return `Hint: ${q.a} + ${q.a} + ${q.a}`;

    case "÷":
      return `Hint: What times ${q.b} equals ${q.a}?`;
  }
}

function renderQuestion(){

  questionContainer.innerHTML=`
    <div class="question-card" id="card">

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
    ${currentQuestion.op==="×" ? "times" :
      currentQuestion.op==="÷" ? "divided by" :
      currentQuestion.op}
    ${currentQuestion.b}`;

  speechSynthesis.cancel();

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

  wrongAttempts=0;

  streak++;
  solved++;
  correct++;

  operationStats[currentQuestion.op]
    .correct++;

  streakEl.innerText=streak;
  solvedCountEl.innerText=solved;

  updateStats();

  launchConfetti();

  playSuccessSound();

  vibrate(60);

  feedback.className="feedback success";

  feedback.innerHTML=
    ["Awesome!",
    "Brilliant!",
    "Math Wizard!",
    "Super Smart!",
    "Amazing!"]
    [random(0,4)];

  if(streak>=10){

    mascotSpeech.innerHTML=
      "🔥 WOW! You're unstoppable!";

  }else{

    mascotSpeech.innerHTML=
      ["You're amazing!",
      "Great job captain!",
      "Math power activated!"]
      [random(0,2)];
  }

  if(solved===15){

    achievementBanner.classList.remove("hidden");

    achievementBanner.innerHTML=
      "🎯 DAILY MISSION COMPLETE!";

    setTimeout(()=>{
      achievementBanner.classList.add("hidden");
    },4000);
  }

  adaptiveDifficulty();

  updateWorld();

  updateProgress();

  updateStory();

  saveState();

  setTimeout(()=>{
    generateQuestion();
  },1500);
}

function handleWrong(){

  incorrect++;

  operationStats[currentQuestion.op]
    .wrong++;

  wrongAttempts++;

  streak=0;

  streakEl.innerText=0;

  playFailSound();

  vibrate(30);

  feedback.className="feedback error";

  currentInput="";

  updateAnswerDisplay();

  if(wrongAttempts===2){

    feedback.innerHTML=`
      ${getHint()}
    `;

    mascotSpeech.innerHTML=
      "Let's solve it together!";

  }else if(wrongAttempts>=3){

    feedback.innerHTML=
      `The correct answer was
      ${currentQuestion.answer} 💡`;

    mascotSpeech.innerHTML=
      "You'll get the next one!";

    wrongAttempts=0;

    setTimeout(()=>{
      generateQuestion();
    },2400);

  }else{

    feedback.innerHTML=
      `Try Again! (${wrongAttempts}/3)`;

    mascotSpeech.innerHTML=
      "You can do it!";
  }

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
        parseInt(maxRange.value)+1;
    }

    if(
      accuracy<60 &&
      parseInt(maxRange.value)>10
    ){
      maxRange.value=
        parseInt(maxRange.value)-1;
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
    "mathAdventureV4",
    JSON.stringify({
      streak,
      solved,
      correct,
      incorrect,
      operationStats,
      difficulty:difficulty.value,
      max:maxRange.value
    })
  );
}

function loadState(){

  const saved=
    JSON.parse(
      localStorage.getItem("mathAdventureV4")
    );

  if(!saved) return;

  streak=saved.streak || 0;
  solved=saved.solved || 0;
  correct=saved.correct || 0;
  incorrect=saved.incorrect || 0;

  Object.assign(
    operationStats,
    saved.operationStats || {}
  );

  difficulty.value=
    saved.difficulty || "medium";

  maxRange.value=
    saved.max || 20;

  streakEl.innerText=streak;
  solvedCountEl.innerText=solved;

  updateStats();
  updateProgress();
  updateWorld();
  updateStory();
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

updateStory();

generateQuestion();