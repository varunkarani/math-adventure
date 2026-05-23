let currentAnswer=0;
let currentInput="";
let streak=0;
let solved=0;

function generateQuestion(){

  const a=
    Math.floor(Math.random()*10)+1;

  const b=
    Math.floor(Math.random()*10)+1;

  currentAnswer=a+b;

  currentInput="";

  document.getElementById(
    "questionContainer"
  ).innerHTML=`

    <div class="question-card fade-card">

      <div class="question-text">
        ${a} + ${b} = ?
      </div>

      <div
        class="answer-display"
        id="answerDisplay"
      >
        ?
      </div>

    </div>
  `;
}

function updateAnswerDisplay(){

  const display=
    document.getElementById(
      "answerDisplay"
    );

  if(display){

    display.innerText=
      currentInput || "?";
  }
}