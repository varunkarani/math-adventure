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
const mascot = document.getElementById("mascot");
const mascotSpeech = document.getElementById("mascotSpeech");
const achievementBanner = document.getElementById("achievementBanner");

let streak = 0;
let solved = 0;
let currentInput = "";
let currentQuestion = null;

const mascotMessages = [
  "Let's do some math!",
  "You're super smart!",
  "I believe in you!",
  "Math power activated!",
  "You're crushing it!"
];

const positiveMessages = [
  "Awesome!",
  "Great Job!",
  "Math Wizard!",
  "Boom!",
  "Brilliant!"
];

const emojis = {
  space: ["🚀","🪐","🌕","⭐"],
  dino: ["🦖","🌴","🥚","🦕"],
  jungle: ["🐯","🌿","🦜","🍌"],
  ocean: ["🐠","🌊","🐳","🪸"]
};

function playTone(freq, duration) {

  if (!soundToggle.checked) return;

  const ctx = new(window.AudioContext || window.webkitAudioContext)();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.frequency.value = freq;
  osc.type = "sine";

  osc.start();

  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    ctx.currentTime + duration
  );

  osc.stop(ctx.currentTime + duration);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function saveState() {

  localStorage.setItem("mathAdventureState", JSON.stringify({
    streak,
    solved,
    difficulty: difficulty.value,
    theme: themeSelector.value,
    max: maxRange.value
  }));
}

function loadState() {

  const saved = JSON.parse(
    localStorage.getItem("mathAdventureState")
  );

  if (!saved) return;

  streak = saved.streak || 0;
  solved = saved.solved || 0;

  difficulty.value = saved.difficulty || "medium";
  themeSelector.value = saved.theme || "space";
  maxRange.value = saved.max || 20;

  streakEl.innerText = streak;
  solvedCountEl.innerText = solved;

  rangeValue.innerText = maxRange.value;

  applyTheme();
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

  speakQuestion();
}

function speakQuestion() {

  const utterance = new SpeechSynthesisUtterance(
    `${currentQuestion.text.replace("×","times").replace("÷","divided by")}`
  );

  utterance.rate = 0.9;

  speechSynthesis.speak(utterance);
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

function launchConfetti() {

  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];

  for (let i = 0; i < 150; i++) {

    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 50
    });
  }

  let angle = 0;

  function draw() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    pieces.forEach((p) => {

      ctx.beginPath();

      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

      ctx.fillStyle =
        `hsl(${Math.random()*360},100%,60%)`;

      ctx.fill();

      p.y += Math.cos(angle + p.d) + 3;
      p.x += Math.sin(angle);

      if (p.y > canvas.height) {
        p.y = -10;
      }
    });

    angle += 0.01;
  }

  let frames = 0;

  const interval = setInterval(() => {

    draw();

    frames++;

    if (frames > 80) {
      clearInterval(interval);
      ctx.clearRect(0,0,canvas.width,canvas.height);
    }

  }, 16);
}

function celebrateCorrect() {

  playTone(700, 0.15);
  playTone(900, 0.15);

  streak++;
  solved++;

  streakEl.innerText = streak;
  solvedCountEl.innerText = solved;

  saveState();

  launchConfetti();

  const card = document.getElementById("card");

  card.classList.add("correct");

  feedback.className = "feedback success";

  feedback.innerHTML =
    positiveMessages[random(0, positiveMessages.length - 1)];

  mascotSpeech.innerHTML =
    mascotMessages[random(0, mascotMessages.length - 1)];

  if (solved === 10 || solved === 25 || solved === 50) {

    achievementBanner.classList.remove("hidden");

    achievementBanner.innerHTML =
      `🏆 ${solved} Questions Solved!`;

    setTimeout(() => {
      achievementBanner.classList.add("hidden");
    }, 3000);
  }

  setTimeout(() => {
    generateQuestion();
  }, 1400);
}

function handleWrong() {

  playTone(180, 0.3);

  streak = 0;

  streakEl.innerText = streak;

  saveState();

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

    currentInput = currentInput.slice(0,-1);
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

settingsBtn.addEventListener("click", () => {
  settingsPanel.classList.toggle("hidden");
});

refreshBtn.addEventListener("click", () => {
  generateQuestion();
});

maxRange.addEventListener("input", () => {
  rangeValue.innerText = maxRange.value;
  saveState();
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

  saveState();

  generateQuestion();
});

function applyTheme() {

  const value = themeSelector.value;

  const body = document.body;

  switch(value) {

    case "space":
      body.style.background =
        "radial-gradient(circle at top,#1a2242,#080b16)";
      mascot.innerHTML = "🚀";
      break;

    case "dino":
      body.style.background =
        "radial-gradient(circle at top,#204022,#08110b)";
      mascot.innerHTML = "🦖";
      break;

    case "jungle":
      body.style.background =
        "radial-gradient(circle at top,#305532,#08110b)";
      mascot.innerHTML = "🐯";
      break;

    case "ocean":
      body.style.background =
        "radial-gradient(circle at top,#12465c,#071018)";
      mascot.innerHTML = "🐳";
      break;
  }

  generateFloatingEmojis();

  saveState();
}

themeSelector.addEventListener("change", applyTheme);

function generateFloatingEmojis() {

  const container =
    document.getElementById("floatingEmojis");

  container.innerHTML = "";

  const selected =
    emojis[themeSelector.value];

  for (let i = 0; i < 18; i++) {

    const emoji = document.createElement("div");

    emoji.className = "floating-emoji";

    emoji.innerHTML =
      selected[random(0, selected.length - 1)];

    emoji.style.left =
      Math.random() * 100 + "%";

    emoji.style.animationDuration =
      random(12, 30) + "s";

    emoji.style.fontSize =
      random(24, 54) + "px";

    container.appendChild(emoji);
  }
}

if ("serviceWorker" in navigator) {

  navigator.serviceWorker.register("sw.js");
}

loadState();

generateQuestion();

generateFloatingEmojis();