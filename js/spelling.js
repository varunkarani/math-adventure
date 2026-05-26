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

const gameModeSelect =
  document.getElementById(
    "gameMode"
  );

const spellingDifficulty =
  document.getElementById(
    "spellingDifficulty"
  );

const spellingTheme =
  document.getElementById(
    "spellingTheme"
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
/* CURRENT MODE */
/* ========================= */

function getCurrentMode(){

  if(!gameModeSelect){
    return "listen";
  }

  return gameModeSelect.value;

}

/* ========================= */
/* FILTER WORDS */
/* ========================= */

function getFilteredWords(){

  if(
    typeof SPELLING_WORDS ===
    "undefined"
  ){
    return [];
  }

  const difficulty =
    spellingDifficulty
      ? spellingDifficulty.value
      : "easy";

  const theme =
    spellingTheme
      ? spellingTheme.value
      : "all";

  return SPELLING_WORDS.filter(
    word => {

      const matchesDifficulty =
        word.level === difficulty;

      const matchesTheme =
        theme === "all" ||
        word.theme === theme;

      return (
        matchesDifficulty &&
        matchesTheme
      );

    }
  );

}

/* ========================= */
/* GENERATE WORD */
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

  const mode =
    getCurrentMode();

  if(
    mode === "listen" ||
    mode === "typing"
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
      word.length
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

  const mode =
    getCurrentMode();

  let displayText = "";

  /* LISTEN */

  if(mode === "listen"){

    displayText =
      "🔊 Listen carefully";

  }

  /* UNSCRAMBLE */

  else if(
    mode === "scramble"
  ){

    displayText =
      scrambleWord(
        spellingCurrentWord.word
      );

  }

  /* MISSING LETTER */

  else if(
    mode === "missing"
  ){

    displayText =
      createMissingWord(
        spellingCurrentWord.word
      );

  }

  /* TYPING */

  else if(
    mode === "typing"
  ){

    displayText =
      "⌨️ Type what you hear";

  }

  else{

    displayText =
      "🔊 Spell the word";

  }

  /* DISPLAY */

  if(spellingWordDisplay){

    spellingWordDisplay.innerHTML =
      displayText;

  }

  if(spellingInputDisplay){

    spellingInputDisplay.innerHTML =
      spellingCurrentInput || "_";

  }

  if(spellingEmoji){

    spellingEmoji.innerHTML =
      spellingCurrentWord.emoji;

  }

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

  utterance.volume = 1;

  speechSynthesis.speak(
    utterance
  );

}

/* ========================= */
/* CHECK ANSWER */
/* ========================= */

function checkSpellingAnswer(){

  if(!spellingCurrentWord){
    return;
  }

  const correctWord =
    spellingCurrentWord.word
    .toLowerCase();

  const userWord =
    spellingCurrentInput
    .toLowerCase();

  /* CORRECT */

  if(userWord === correctWord){

    spellingSolved++;

    spellingStreak++;

    updateSpellingStats();

    if(spellingFeedback){

      spellingFeedback.innerHTML =
        "✅ Correct!";

      spellingFeedback.className =
        "feedback success";

    }

    if(
      typeof launchConfetti ===
      "function"
    ){

      launchConfetti();

    }

    setTimeout(()=>{

      if(spellingFeedback){

        spellingFeedback.innerHTML =
          "";

      }

      generateSpellingQuestion();

    },1200);

  }

  /* WRONG */

  else{

    spellingStreak = 0;

    updateSpellingStats();

    if(spellingFeedback){

      spellingFeedback.innerHTML =
        `❌ Correct answer: ${correctWord}`;

      spellingFeedback.className =
        "feedback error";

    }

    setTimeout(()=>{

      if(spellingFeedback){

        spellingFeedback.innerHTML =
          "";

      }

      generateSpellingQuestion();

    },1800);

  }

}

/* ========================= */
/* STATS */
/* ========================= */

function updateSpellingStats(){

  if(spellingStreakCount){

    spellingStreakCount.innerHTML =
      spellingStreak;

  }

  if(spellingSolvedCount){

    spellingSolvedCount.innerHTML =
      spellingSolved;

  }

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
/* BUTTON EVENTS */
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
/* DROPDOWNS */
/* ========================= */

if(gameModeSelect){

  gameModeSelect.addEventListener(
    "change",
    function(){

      generateSpellingQuestion();

    }
  );

}

if(spellingDifficulty){

  spellingDifficulty.addEventListener(
    "change",
    function(){

      generateSpellingQuestion();

    }
  );

}

if(spellingTheme){

  spellingTheme.addEventListener(
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