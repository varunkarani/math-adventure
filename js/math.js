let currentAnswer=0;
let currentInput="";
let streak=0;
let solved=0;

function getDifficultySettings(){

  const difficulty=
    document.getElementById(
      "difficulty"
    ).value;

  switch(difficulty){

    case "easy":
      return {
        min:1,
        max:10,
        operations:["+"]
      };

    case "medium":
      return {
        min:1,
        max:20,
        operations:["+","-"]
      };

    case "hard":
      return {
        min:1,
        max:50,
        operations:["+","-","×"]
      };

    case "expert":
      return {
        min:1,
        max:100,
        operations:["+","-","×","÷"]
      };
  }
}

function random(min,max){

  return Math.floor(
    Math.random()*(max-min+1)
  )+min;
}

function generateQuestion(){

  const settings=
    getDifficultySettings();

  const op=
    settings.operations[
      random(
        0,
        settings.operations.length-1
      )
    ];

  let a,b;

  switch(op){

    case "+":

      a=random(
        settings.min,
        settings.max
      );

      b=random(
        settings.min,
        settings.max
      );

      currentAnswer=a+b;

      break;

    case "-":

      a=random(
        settings.min,
        settings.max
      );

      b=random(
        settings.min,
        a
      );

      currentAnswer=a-b;

      break;

    case "×":

      a=random(1,12);

      b=random(1,12);

      currentAnswer=a*b;

      break;

    case "÷":

      b=random(1,12);

      currentAnswer=random(1,12);

      a=b*currentAnswer;

      break;
  }

  currentInput="";

  document.getElementById(
    "questionContainer"
  ).innerHTML=`

    <div class="question-card fade-card">

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

  updateProgress();
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

function updateProgress(){

  const progress=
    document.getElementById(
      "storyBanner"
    );

  const difficulty=
    document.getElementById(
      "difficulty"
    ).value;

  progress.innerHTML=`
    🚀 Difficulty:
    ${difficulty.toUpperCase()}
    <br>
    🏆 Solved:
    ${solved}
  `;
}