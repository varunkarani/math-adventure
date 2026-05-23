document.addEventListener("DOMContentLoaded", () => {

/* ========================= */
/* ELEMENTS */
/* ========================= */

const mathTab=document.getElementById("mathTab");
const storyTab=document.getElementById("storyTab");

const mathSection=document.getElementById("mathSection");
const storySection=document.getElementById("storySection");

const settingsBtn=document.getElementById("settingsBtn");
const settingsPanel=document.getElementById("settingsPanel");

const refreshBtn=document.getElementById("refreshBtn");

const keypad=document.getElementById("keypad");

const questionContainer=
  document.getElementById("questionContainer");

const feedback=
  document.getElementById("feedback");

const streakEl=
  document.getElementById("streak");

const solvedCountEl=
  document.getElementById("solvedCount");

const progressFill=
  document.getElementById("progressFill");

const mascotSpeech=
  document.getElementById("mascotSpeech");

const achievementBanner=
  document.getElementById("achievementBanner");

const storyBanner=
  document.getElementById("storyBanner");

/* ========================= */
/* STORY MODE ELEMENTS */
/* ========================= */

const storyIllustration=
  document.getElementById("storyIllustration");

const storyText=
  document.getElementById("storyText");

const nextPageBtn=
  document.getElementById("nextPageBtn");

const prevPageBtn=
  document.getElementById("prevPageBtn");

const readStoryBtn=
  document.getElementById("readStoryBtn");

const bedtimeBtn=
  document.getElementById("bedtimeBtn");

const storiesCompletedEl=
  document.getElementById("storiesCompleted");

const miniChallenge=
  document.getElementById("miniChallenge");

/* ========================= */
/* STATE */
/* ========================= */

let currentAnswer=0;
let currentInput="";
let streak=0;
let solved=0;
let wrongAttempts=0;
let storiesCompleted=0;
let storyPage=0;

/* ========================= */
/* STORY DATA */
/* ========================= */

const storyPages=[

  {
    illustration:"🚀🌕⭐",
    text:"Ryan heard a strange sound outside."
  },

  {
    illustration:"🛸✨",
    text:"A tiny spaceship had landed nearby."
  },

  {
    illustration:"🦖👨‍🚀",
    text:"A dinosaur astronaut stepped out."
  },

  {
    illustration:"🔋🚀",
    text:"The spaceship needed fuel crystals."
  },

  {
    illustration:"🌌🚀⭐",
    text:"Together, they blasted off into the stars!"
  }

];

/* ========================= */
/* TAB SWITCHING */
/* ========================= */

mathTab.addEventListener("click",()=>{

  mathTab.classList.add("active");
  storyTab.classList.remove("active");

  mathSection.classList.remove("hidden");
  storySection.classList.add("hidden");
});

storyTab.addEventListener("click",()=>{

  storyTab.classList.add("active");
  mathTab.classList.remove("active");

  storySection.classList.remove("hidden");
  mathSection.classList.add("hidden");
});

/* ========================= */
/* SETTINGS */
/* ========================= */

settingsBtn.addEventListener("click",()=>{

  settingsPanel.classList.toggle("hidden");
});

/* ========================= */
/* QUESTION SYSTEM */
/* ========================= */

function generateQuestion(){

  const a=Math.floor(Math.random()*10)+1;
  const b=Math.floor(Math.random()*10)+1;

  currentAnswer=a+b;

  currentInput="";
  wrongAttempts=0;

  questionContainer.innerHTML=`

    <div class="question-card">

      <div class="question-text">
        ${a} + ${b} = ?
      </div>

      <div class="answer-display" id="answerDisplay">
        ?
      </div>

    </div>

  `;

  storyBanner.innerHTML=`
    🚀 Spaceship Progress:
    ${solved}/25
  `;
}

refreshBtn.addEventListener("click",()=>{

  generateQuestion();
});

/* ========================= */
/* ANSWER DISPLAY */
/* ========================= */

function updateAnswerDisplay(){

  const display=
    document.getElementById("answerDisplay");

  if(display){

    display.innerText=currentInput || "?";
  }
}

/* ========================= */
/* CONFETTI */
/* ========================= */

function launchConfetti(){

  const canvas=
    document.getElementById("confettiCanvas");

  const ctx=
    canvas.getContext("2d");

  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  const pieces=[];

  for(let i=0;i<100;i++){

    pieces.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height-canvas.height,
      r:Math.random()*6+2
    });
  }

  let frame=0;

  const interval=setInterval(()=>{

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    pieces.forEach(p=>{

      ctx.beginPath();

      ctx.arc(
        p.x,
        p.y,
        p.r,
        0,
        Math.PI*2
      );

      ctx.fillStyle=
        `hsl(${Math.random()*360},100%,60%)`;

      ctx.fill();

      p.y+=4;
    });

    frame++;

    if(frame>60){

      clearInterval(interval);

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

  },16);
}

/* ========================= */
/* SUCCESS */
/* ========================= */

function celebrateCorrect(){

  streak++;
  solved++;

  streakEl.innerText=streak;
  solvedCountEl.innerText=solved;

  feedback.className=
    "feedback success";

  feedback.innerHTML=
    "✅ Amazing!";

  mascotSpeech.innerHTML=
    "🚀 Great job captain!";

  progressFill.style.width=
    `${(solved%15)/15*100}%`;

  launchConfetti();

  setTimeout(()=>{

    generateQuestion();

  },1400);
}

/* ========================= */
/* WRONG ANSWER */
/* ========================= */

function handleWrong(){

  wrongAttempts++;

  streak=0;

  streakEl.innerText=0;

  currentInput="";

  updateAnswerDisplay();

  feedback.className=
    "feedback error";

  if(wrongAttempts===2){

    feedback.innerHTML=
      `💡 Hint:
      ${currentAnswer-1}+1`;

    mascotSpeech.innerHTML=
      "Let's solve it together!";

  }else if(wrongAttempts>=3){

    feedback.innerHTML=
      `Answer:
      ${currentAnswer}`;

    mascotSpeech.innerHTML=
      "You'll get the next one!";

    setTimeout(()=>{

      generateQuestion();

    },1800);

  }else{

    feedback.innerHTML=
      `❌ Try Again (${wrongAttempts}/3)`;

    mascotSpeech.innerHTML=
      "You can do it!";
  }
}

/* ========================= */
/* SUBMIT ANSWER */
/* ========================= */

function submitAnswer(){

  if(parseInt(currentInput)===currentAnswer){

    celebrateCorrect();

  }else{

    handleWrong();
  }
}

/* ========================= */
/* KEYPAD */
/* ========================= */

keypad.addEventListener("click",(e)=>{

  if(!e.target.classList.contains("key")) return;

  const value=e.target.innerText;

  if(value==="⌫"){

    currentInput=
      currentInput.slice(0,-1);

  }else if(value==="✓"){

    if(currentInput.length>0){

      submitAnswer();
    }

    return;

  }else{

    currentInput+=value;
  }

  updateAnswerDisplay();
});

/* ========================= */
/* STORY RENDER */
/* ========================= */

function renderStory(){

  const page=
    storyPages[storyPage];

  storyIllustration.innerHTML=
    page.illustration;

  storyText.innerHTML=
    page.text;

  if(storyPage===3){

    miniChallenge.classList.remove(
      "hidden"
    );

  }else{

    miniChallenge.classList.add(
      "hidden"
    );
  }
}

/* ========================= */
/* STORY BUTTONS */
/* ========================= */

nextPageBtn.addEventListener("click",()=>{

  if(storyPage<storyPages.length-1){

    storyPage++;

    renderStory();

  }else{

    storiesCompleted++;

    storiesCompletedEl.innerText=
      storiesCompleted;

    achievementBanner.classList.remove(
      "hidden"
    );

    achievementBanner.innerHTML=
      "📚 STORY COMPLETE!";

    setTimeout(()=>{

      achievementBanner.classList.add(
        "hidden"
      );

    },3000);

    storyPage=0;

    renderStory();
  }
});

prevPageBtn.addEventListener("click",()=>{

  if(storyPage>0){

    storyPage--;

    renderStory();
  }
});

/* ========================= */
/* READ TO ME */
/* ========================= */

readStoryBtn.addEventListener("click",()=>{

  speechSynthesis.cancel();

  const utterance=
    new SpeechSynthesisUtterance(
      storyPages[storyPage].text
    );

  utterance.rate=0.82;

  speechSynthesis.speak(
    utterance
  );
});

/* ========================= */
/* BEDTIME MODE */
/* ========================= */

bedtimeBtn.addEventListener("click",()=>{

  document.body.classList.toggle(
    "bedtime-mode"
  );
});

/* ========================= */
/* STORY INTERACTION */
/* ========================= */

storyIllustration.addEventListener(
  "click",
  ()=>{

    storyIllustration.style.transform=
      "scale(1.12)";

    setTimeout(()=>{

      storyIllustration.style.transform=
        "scale(1)";

    },220);
  }
);

/* ========================= */
/* MINI CHALLENGE */
/* ========================= */

document.querySelectorAll(".mini-answer")
.forEach(button=>{

  button.addEventListener("click",()=>{

    if(button.innerText==="5"){

      miniChallenge.innerHTML=`
        🚀 Fuel crystals collected!
      `;

      launchConfetti();

    }else{

      button.innerText="❌";
    }
  });
});

/* ========================= */
/* INIT */
/* ========================= */

generateQuestion();

renderStory();

});