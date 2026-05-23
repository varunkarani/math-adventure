let currentAnswer = 0;

let solved = 0;

let streak = 0;

/* ========================= */
/* QUESTION GENERATION */
/* ========================= */

function generateQuestion(){

  const difficulty =
    document.getElementById(
      "difficulty"
    )?.value || "medium";

  let num1;
  let num2;
  let operator;

  /* ========================= */
  /* EASY */
  /* ========================= */

  if(difficulty==="easy"){

    num1 =
      random(1,10);

    num2 =
      random(1,10);

    operator = "+";
  }

  /* ========================= */
  /* MEDIUM */
  /* ========================= */

  else if(
    difficulty==="medium"
  ){

    num1 =
      random(5,20);

    num2 =
      random(5,20);

    operator =
      randomChoice([
        "+",
        "-"
      ]);
  }

  /* ========================= */
  /* HARD */
  /* ========================= */

  else if(
    difficulty==="hard"
  ){

    num1 =
      random(2,12);

    num2 =
      random(2,12);

    operator =
      randomChoice([
        "+",
        "-",
        "×"
      ]);
  }

  /* ========================= */
  /* EXPERT */
  /* ========================= */

  else{

    operator =
      randomChoice([
        "+",
        "-",
        "×",
        "÷"
      ]);

    /* ========================= */
    /* LARGE ADDITION/SUBTRACTION */
    /* ========================= */

    if(
      operator==="+" ||
      operator==="-"
    ){

      num1 =
        random(100,999);

      num2 =
        random(100,999);
    }

    /* ========================= */
    /* MULTIPLICATION */
    /* ========================= */

    else if(
      operator==="×"
    ){

      num1 =
        random(10,30);

      num2 =
        random(2,12);
    }

    /* ========================= */
    /* DIVISION */
    /* ========================= */

    else{

      num2 =
        random(2,12);

      currentAnswer =
        random(2,12);

      num1 =
        num2 *
        currentAnswer;
    }
  }

  /* ========================= */
  /* PREVENT NEGATIVE ANSWERS */
  /* ========================= */

  if(
    operator === "-" &&
    num2 > num1
  ){

    let temp = num1;

    num1 = num2;

    num2 = temp;
  }

  /* ========================= */
  /* ANSWER */
  /* ========================= */

  if(operator === "+"){

    currentAnswer =
      num1 + num2;
  }

  else if(
    operator === "-"
  ){

    currentAnswer =
      num1 - num2;
  }

  else if(
    operator === "×"
  ){

    currentAnswer =
      num1 * num2;
  }

  else if(
    operator === "÷"
  ){

    currentAnswer =
      num1 / num2;
  }

  /* ========================= */
  /* DISPLAY QUESTION */
  /* ========================= */

  const question =
    document.getElementById(
      "question"
    );

  if(question){

    question.innerHTML =
      `${num1} ${operator} ${num2}`;
  }

  /* ========================= */
  /* RESET ANSWER DISPLAY */
  /* ========================= */

  const answerDisplay =
    document.getElementById(
      "answerDisplay"
    );

  if(answerDisplay){

    answerDisplay.innerHTML =
      "_";
  }
}

/* ========================= */
/* RANDOM HELPERS */
/* ========================= */

function random(min,max){

  return Math.floor(
    Math.random() *
    (max-min+1)
  ) + min;
}

function randomChoice(arr){

  return arr[
    Math.floor(
      Math.random() *
      arr.length
    )
  ];
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

  for(let i=0;i<120;i++){

    pieces.push({

      x:
        Math.random() *
        canvas.width,

      y:
        Math.random() *
        canvas.height -
        canvas.height,

      size:
        Math.random()*8 + 4,

      speed:
        Math.random()*3 + 2,

      color:
        randomChoice([
          "#7c5cff",
          "#32d583",
          "#ffd166",
          "#ff5c7c",
          "#00c2ff"
        ])
    });
  }

  let frame = 0;

  function animate(){

    frame++;

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    pieces.forEach(piece=>{

      piece.y += piece.speed;

      ctx.fillStyle =
        piece.color;

      ctx.fillRect(
        piece.x,
        piece.y,
        piece.size,
        piece.size
      );
    });

    if(frame < 120){

      requestAnimationFrame(
        animate
      );

    }else{

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );
    }
  }

  animate();
}

/* ========================= */
/* STATS */
/* ========================= */

function updateStats(){

  const solvedEl =
    document.getElementById(
      "solvedCount"
    );

  const streakEl =
    document.getElementById(
      "streakCount"
    );

  if(solvedEl){

    solvedEl.innerHTML =
      solved;
  }

  if(streakEl){

    streakEl.innerHTML =
      streak;
  }
}