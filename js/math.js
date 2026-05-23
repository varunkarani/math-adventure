let currentAnswer = 0;

let currentInput = "";

let solved = 0;

let streak = 0;

let wrongAttempts = 0;

/* ========================= */
/* RANDOM */
/* ========================= */

function random(min,max){

  return Math.floor(
    Math.random()*(max-min+1)
  )+min;
}

/* ========================= */
/* CONFETTI */
/* ========================= */

function launchConfetti(){

  const canvas =
    document.getElementById(
      "confettiCanvas"
    );

  if(!canvas) return;

  const ctx =
    canvas.getContext("2d");

  canvas.width =
    window.innerWidth;

  canvas.height =
    window.innerHeight;

  const pieces = [];

  for(let i=0;i<80;i++){

    pieces.push({

      x:
        Math.random()*canvas.width,

      y:
        Math.random()*canvas.height
        -canvas.height,

      r:
        Math.random()*6+2,

      speed:
        Math.random()*4+2
    });
  }

  let frame = 0;

  const interval = setInterval(()=>{

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

      ctx.fillStyle =
        `hsl(${Math.random()*360},100%,60%)`;

      ctx.fill();

      p.y += p.speed;
    });

    frame++;

    if(frame > 60){

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
/* DIFFICULTY */
/* ========================= */

function getDifficulty(){

  const difficulty =
    document.getElementById(
      "difficulty"
    )?.value || "medium";

  switch(difficulty){

    case "easy":

      return {
        max:10,
        operations:["+"]
      };

    case "medium":

      return {
        max:20,
        operations:["+","-"]
      };

    case "hard":

      return {
        max:50,
        operations:["+","-","×"]
      };

    case "expert":

      return {
        max:100,
        operations:["+","-","×","÷"]
      };

    default:

      return {
        max:20,
        operations:["+","-"]
      };
  }
}

/* ========================= */
/* QUESTION */
/* ========================= */

function generateQuestion(){

  wrongAttempts = 0;

  const settings =
    getDifficulty();

  const op =
    settings.operations[
      random(
        0,
        settings.operations.length-1
      )
    ];

  let a,b;

  if(op === "+"){

    a = random(1,settings.max);

    b = random(1,settings.max);

    currentAnswer = a+b;
  }

  if(op === "-"){

    a = random(1,settings.max);

    b = random(1,a);

    currentAnswer = a-b;
  }

  if(op === "×"){

    a = random(1,12);

    b = random(1,12);

    currentAnswer = a*b;
  }

  if(op === "÷"){

    b = random(1,12);

    currentAnswer =
      random(1,12);

    a = b*currentAnswer;
  }

  currentInput = "";

  document.getElementById(
    "questionContainer"
  ).innerHTML = `

    <div class="question-card">

      <div class="question-text">

        ${a} ${op} ${b} = ?

      </div>

      <div
        class="answer-display"
        id="answerDisplay"
      >

        ?

      </div>

    </div>
  `;

  updateStats();
}

/* ========================= */
/* ANSWER DISPLAY */
/* ========================= */

function updateAnswerDisplay(){

  const display =
    document.getElementById(
      "answerDisplay"
    );

  if(display){

    display.innerText =
      currentInput || "?";
  }
}

/* ========================= */
/* STATS */
/* ========================= */

function updateStats(){

  const banner =
    document.getElementById(
      "storyBanner"
    );

  if(!banner) return;

  banner.innerHTML = `

    🚀 Solved:
    ${solved}

    &nbsp;&nbsp;&nbsp;

    🔥 Streak:
    ${streak}
  `;
}

/* ========================= */
/* CORRECT */
/* ========================= */

function handleCorrect(){

  solved++;

  streak++;

  launchConfetti();

  const feedback =
    document.getElementById(
      "feedback"
    );

  if(feedback){

    feedback.className =
      "feedback success";

    feedback.innerHTML =
      "✅ Amazing!";
  }

  updateStats();

  setTimeout(()=>{

    generateQuestion();

  },900);
}

/* ========================= */
/* WRONG */
/* ========================= */

function handleWrong(){

  wrongAttempts++;

  streak = 0;

  currentInput = "";

  updateAnswerDisplay();

  const feedback =
    document.getElementById(
      "feedback"
    );

  if(!feedback) return;

  feedback.className =
    "feedback error";

  if(wrongAttempts >= 3){

    feedback.innerHTML = `
      💡 Answer:
      ${currentAnswer}
    `;

    setTimeout(()=>{

      generateQuestion();

    },1800);

    return;
  }

  feedback.innerHTML = `
    ❌ Try Again
    (${wrongAttempts}/3)
  `;

  updateStats();
}