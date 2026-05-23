const questionContainer = document.getElementById("questionContainer");
const feedback = document.getElementById("feedback");
const streakEl = document.getElementById("streak");
const solvedCountEl = document.getElementById("solvedCount");
const refreshBtn = document.getElementById("refreshBtn");
const keypad = document.getElementById("keypad");
const difficulty = document.getElementById("difficulty");
const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const breakMessage = document.getElementById("breakMessage");
const maxRange = document.getElementById("maxRange");
const rangeValue = document.getElementById("rangeValue");
const themeSelector = document.getElementById("themeSelector");

let streak = 0;
let solved = 0;
let currentInput = "";
let currentQuestion = null;

const positiveMessages = [
  "Awesome!",
  "Great Job!",
  "Math Wizard!",
  "Brilliant!",
  "Boom!",
  "Super Smart!",
  "Nailed It!",
  "Amazing!"
];

const breakMessages = [
  "🌟 You're doing amazing!",
  "🚀 Math champion!",
  "🦖 Dino-level smart!",
  "🌊 Keep going superstar!"
];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getOperations() {
  const ops = [];

  if (additionToggle.checked) ops.push("+");
  if (subtractionToggle.checked) ops.push("-");
  if (multiplicationToggle.checked) ops.push("×");
  if (divisionToggle.checked) ops.push("÷");

  return ops;
}

function generateQuestion() {

  const max = parseInt(maxRange.value);

  const ops = getOperations();

  if (ops.length === 0) {
    feedback.innerHTML = "Please enable at least one math type.";
    return;
  }

  const op = ops[random(0, ops.length - 1)];

  let a, b, answer;

  switch(op) {

    case "+":
      a = random(1, max);
      b = random(1, max);
      answer = a + b;
      break;

    case "-":
      a = random(1, max);
      b = random(1, a);
      answer = a - b;
      break;

    case "×":
      a = random(1, 12);
      b = random(1, 12);
      answer = a * b;
      break;

    case "÷":
      b = random(1, 12);
      answer = random(1, 12);
      a = b * answer;
      break;
  }

  currentQuestion = {
    text: `${a} ${op} ${b}`,
    answer
  };

  currentInput = "";

  renderQuestion();
}

function renderQuestion() {

  questionContainer.innerHTML = `
    <div class="question-card" id="card">
      <div class="question-text">
        ${currentQuestion.text} = ?
      </div>

      <div class="answer-display" id="answerDisplay">
        ${currentInput || "?"}
      </div>
    </div>
  `;
}

function updateAnswerDisplay() {
  document.getElementById("answerDisplay").innerText =
    currentInput || "?";
}

function celebrateCorrect() {

  streak++;
  solved++;

  streakEl.innerText = streak;
  solvedCountEl.innerText = solved;

  const card = document.getElementById("card");

  card.classList.add("correct");

  feedback.className = "feedback success";
  feedback.innerHTML =
    positiveMessages[random(0, positiveMessages.length - 1)];

  if (solved % 10 === 0) {
    breakMessage.innerHTML =
      breakMessages[random(0, breakMessages.length - 1)];
  } else {
    breakMessage.innerHTML = "";
  }

  setTimeout(() => {
    generateQuestion();
  }, 1200);
}

function handleWrong() {

  streak = 0;
  streakEl.innerText = streak;

  const card = document.getElementById("card");

  card.classList.add("wrong");

  feedback.className = "feedback error";
  feedback.innerHTML = "Try Again!";

  setTimeout(() => {
    card.classList.remove("wrong");
  }, 400);
}

function submitAnswer() {

  if (parseInt(currentInput) === currentQuestion.answer) {
    celebrateCorrect();
  } else {
    handleWrong();
  }
}

keypad.addEventListener("click", (e) => {

  if (!e.target.classList.contains("key")) return;

  const value = e.target.innerText;

  if (value === "⌫") {
    currentInput = currentInput.slice(0, -1);
  }
  else if (value === "✓") {

    if (currentInput.length > 0) {
      submitAnswer();
    }

    return;
  }
  else {

    if (currentInput.length < 4) {
      currentInput += value;
    }
  }

  updateAnswerDisplay();
});

refreshBtn.addEventListener("click", () => {
  feedback.innerHTML = "";
  generateQuestion();
});

settingsBtn.addEventListener("click", () => {
  settingsPanel.classList.toggle("hidden");
});

maxRange.addEventListener("input", () => {
  rangeValue.innerText = maxRange.value;
});

themeSelector.addEventListener("change", () => {

  const value = themeSelector.value;

  switch(value) {

    case "space":
      document.body.style.background =
        "radial-gradient(circle at top, #1a2242, #080b16)";
      break;

    case "dino":
      document.body.style.background =
        "radial-gradient(circle at top, #1b3523, #08110b)";
      break;

    case "jungle":
      document.body.style.background =
        "radial-gradient(circle at top, #264d32, #08110b)";
      break;

    case "ocean":
      document.body.style.background =
        "radial-gradient(circle at top, #123d52, #071018)";
      break;
  }
});

difficulty.addEventListener("change", () => {

  switch(difficulty.value) {

    case "easy":
      maxRange.value = 10;
      break;

    case "medium":
      maxRange.value = 20;
      break;

    case "hard":
      maxRange.value = 50;
      break;

    case "expert":
      maxRange.value = 100;
      break;
  }

  rangeValue.innerText = maxRange.value;

  generateQuestion();
});

generateQuestion();