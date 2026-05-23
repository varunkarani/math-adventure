let currentAnswer = 0;
let currentInput = "";
let solved = 0;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {

  const difficulty =
    document.getElementById("difficulty")?.value || "medium";

  let max = 20;
  let operations = ["+"];

  if (difficulty === "medium") {
    max = 20;
    operations = ["+", "-"];
  }

  if (difficulty === "hard") {
    max = 50;
    operations = ["+", "-", "×"];
  }

  if (difficulty === "expert") {
    max = 100;
    operations = ["+", "-", "×", "÷"];
  }

  const op =
    operations[random(0, operations.length - 1)];

  let a, b;

  if (op === "+") {
    a = random(1, max);
    b = random(1, max);
    currentAnswer = a + b;
  }

  if (op === "-") {
    a = random(1, max);
    b = random(1, a);
    currentAnswer = a - b;
  }

  if (op === "×") {
    a = random(1, 12);
    b = random(1, 12);
    currentAnswer = a * b;
  }

  if (op === "÷") {
    b = random(1, 12);
    currentAnswer = random(1, 12);
    a = b * currentAnswer;
  }

  currentInput = "";

  document.getElementById("questionContainer").innerHTML = `
    <div class="question-card">
      <div class="question-text">
        ${a} ${op} ${b} = ?
      </div>

      <div class="answer-display" id="answerDisplay">
        ?
      </div>
    </div>
  `;
}

function updateAnswerDisplay() {

  const display =
    document.getElementById("answerDisplay");

  if (display) {
    display.innerText = currentInput || "?";
  }
}