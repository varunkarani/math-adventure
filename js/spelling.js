/* ========================= */
/* SPELLING ADVENTURE */
/* ========================= */

let spellingCurrentWord = null;

let spellingCurrentInput = "";

let spellingSolved = 0;

let spellingStreak = 0;

/* ========================= */
/* ELEMENTS */
/* ========================= */

const spellingWordDisplay =
  document.getElementById(
    "spellingWordDisplay"
  );

const spellingInputDisplay =
  document.getElementById(
    "spellingInputDisplay"
  );

const spellingFeedback =
  document.getElementById(
    "spellingFeedback"
  );

const spellingEmoji =
  document.getElementById(
    "spellingEmoji"
  );

const spellingModeSelect =
  document.getElementById(
    "spellingMode"
  );

const spellingStreakCount =
  document.getElementById(
    "spellingStreakCount"
  );

const spellingSolvedCount =
  document.getElementById(
    "spellingSolvedCount"
  );

const spellingKeyboard =
  document.getElementById(
    "spellingKeyboard"
  );

const speakWordBtn =
  document.getElementById(
    "speakWordBtn"
  );

const nextWordBtn =
  document.getElementById(
    "nextWordBtn"
  );

/* ========================= */
/* INIT */
/* ========================= */

function initSpelling(){

  if(
    typeof SPELLING_WORDS ===
    "undefined"
  ){

    console.error(
      "SPELLING_WORDS missing"
    );

    return;

  }

  generateSpellingQuestion();

  updateSpellingStats();

}

/* ========================= */
/* GET MODE */
/* ========================= */

function getCurrentMode(){

  return spellingModeSelect.value;

}

/* ========================= */
/* FILTER WORDS */
/* ========================= */

function getFilteredWords(){

  const selected =
    spellingModeSelect.value;

  const gameplayModes = [
    "listen",
    "scramble",
    "missing",
    "typing"
  ];

  /* DEFAULT */

  if(
    gameplayModes.includes(selected)
  ){

    return SPELLING_WORDS;

  }

  /* THEME FILTER */

  return SPELLING_WORDS.filter(
    word =>

      word.level === selected ||

      word.theme === selected
  );

}

/* ========================= */
/* GENERATE */
/* ========================= */

function generateSpellingQuestion(){

  const words =
    getFilteredWords();

  if(words.length === 0){

    console.error(
      "No spelling words found"
    );

    return;

  }

  const randomIndex =
    Math.floor(
      Math.random() *
      words.length
    );

  spellingCurrentWord =
    words[randomIndex];

  spellingCurrentInput = "";

  renderSpelling();

  const currentMode =
    getCurrentMode();

  if(
    currentMode === "listen" ||
    currentMode === "typing"
  ){

    speakCurrentWord();

  }

}

/* ========================= */
/* SCRAMBLE */
/* ========================= */

function scrambleWord(word){

  return word
    .split("")
    .sort(()=>Math.random()-0.5)
    .join(" ");

}

/* ========================= */
/* MISSING LETTER */
/* ========================= */

function createMissingWord(word){

  if(word.length <= 2){
    return word;
  }

  const randomIndex =
    Math.floor(
      Math.random() *
      (word.length - 1)
    );

  return (
    word.substring(0,randomIndex) +
    "_" +
    word.substring(randomIndex + 1)
  );

}

/* ========================= */
/* RENDER */
/* ========================= */

function renderSpelling(){

  if(!spellingCurrentWord){
    return;
  }

  const currentMode =
    getCurrentMode();

  let prompt = "";

  /* LISTEN */

  if(currentMode === "listen"){

    prompt =
      "🔊 Listen carefully";

  }

  /* UNSCRAMBLE */

  else if(
    currentMode === "scramble"
  ){

    prompt =
      scrambleWord(
        spellingCurrentWord.word
      );

  }

  /* MISSING LETTER */

  else if(
    currentMode === "missing"
  ){

    prompt =
      createMissingWord(
        spellingCurrentWord.word
      );

  }

  /* TYPING */

  else if(
    currentMode === "typing"
  ){

    prompt =
      "⌨️ Type what you hear";

  }

  /* THEME / LEVEL MODES */

  else{

    prompt =
      "🔊 Listen carefully";

  }

  /* DISPLAY */

  spellingWordDisplay.innerHTML =
    prompt;

  spellingInputDisplay.innerHTML =
    spellingCurrentInput || "_";

  spellingEmoji.innerHTML =
    spellingCurrentWord.emoji;

}

/* ========================= */
/* SPEAK */
/* ========================= */

function speakCurrentWord(){

  if(!spellingCurrentWord){
    return;
  }

  speechSynthesis.cancel();

  const utterance =
    new SpeechSynthesisUtterance(
      spellingCurrentWord.word
    );

  utterance.rate = 0.8;

  utterance.pitch = 1;

  speechSynthesis.speak(
    utterance
  );

}

/* ========================= */
/* CHECK */
/* ========================= */

function checkSpellingAnswer(){

  if(!spellingCurrentWord){
    return;
  }

  const correct =
    spellingCurrentWord.word
    .toLowerCase();

  const user =
    spellingCurrentInput
    .toLowerCase();

  /* CORRECT */

  if(user === correct){

    spellingSolved++;

    spellingStreak++;

    updateSpellingStats();

    spellingFeedback.innerHTML =
      "✅ Correct!";

    spellingFeedback.className =
      "feedback success";

    if(
      typeof launchConfetti ===
      "function"
    ){

      launchConfetti();

    }

    setTimeout(()=>{

      spellingFeedback.innerHTML =
        "";

      generateSpellingQuestion();

    },1200);

  }

  /* WRONG */

  else{

    spellingStreak = 0;

    updateSpellingStats();

    spellingFeedback.innerHTML =
      `❌ ${correct}`;

    spellingFeedback.className =
      "feedback error";

    setTimeout(()=>{

      spellingFeedback.innerHTML =
        "";

      generateSpellingQuestion();

    },1800);

  }

}

/* ========================= */
/* STATS */
/* ========================= */

function updateSpellingStats(){

  spellingStreakCount.innerHTML =
    spellingStreak;

  spellingSolvedCount.innerHTML =
    spellingSolved;

}

/* ========================= */
/* KEYBOARD */
/* ========================= */

if(spellingKeyboard){

  spellingKeyboard.addEventListener(
    "click",
    function(e){

      const target = e.target;

      if(
        !target.classList.contains(
          "spell-key"
        )
      ){
        return;
      }

      const value =
        target.innerText;

      /* DELETE */

      if(value === "⌫"){

        spellingCurrentInput =
          spellingCurrentInput.slice(
            0,
            -1
          );

        renderSpelling();

        return;

      }

      /* SUBMIT */

      if(value === "✓"){

        checkSpellingAnswer();

        return;

      }

      /* LETTER */

      spellingCurrentInput +=
        value.toLowerCase();

      renderSpelling();

    }
  );

}

/* ========================= */
/* BUTTONS */
/* ========================= */

if(speakWordBtn){

  speakWordBtn.addEventListener(
    "click",
    function(){

      speakCurrentWord();

    }
  );

}

if(nextWordBtn){

  nextWordBtn.addEventListener(
    "click",
    function(){

      generateSpellingQuestion();

    }
  );

}

/* ========================= */
/* MODE CHANGE */
/* ========================= */

if(spellingModeSelect){

  spellingModeSelect.addEventListener(
    "change",
    function(){

      generateSpellingQuestion();

    }
  );

}

/* ========================= */
/* START */
/* ========================= */

window.addEventListener(
  "DOMContentLoaded",
  function(){

    initSpelling();

  }
);