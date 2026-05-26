/* ========================= */
/* SPELLING ADVENTURE */
/* ========================= */

let spellingMode = "easy";

let spellingCurrentWord = null;
let spellingCurrentInput = "";

let spellingSolved = 0;
let spellingStreak = 0;

let spellingSpeechEnabled = true;

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
    !window.SPELLING_WORDS ||
    !Array.isArray(
      SPELLING_WORDS
    )
  ){

    console.error(
      "SPELLING_WORDS missing"
    );

    return;

  }

  console.log(
    "SPELLING_WORDS loaded:",
    SPELLING_WORDS.length
  );

  generateSpellingWord();

  updateSpellingStats();

}

/* ========================= */
/* GENERATE WORD */
/* ========================= */

function generateSpellingWord(){

  if(
    !window.SPELLING_WORDS
  ){
    return;
  }

  const filteredWords =
    SPELLING_WORDS.filter(
      word =>

        word.level === spellingMode ||

        word.category === spellingMode ||

        word.theme === spellingMode
    );

  console.log(
    "Mode:",
    spellingMode
  );

  console.log(
    "Filtered:",
    filteredWords.length
  );

  if(filteredWords.length === 0){

    console.warn(
      "No words found for:",
      spellingMode
    );

    if(spellingWordDisplay){

      spellingWordDisplay.innerHTML =
        "No Words Found";

    }

    return;

  }

  const randomIndex =
    Math.floor(
      Math.random() *
      filteredWords.length
    );

  spellingCurrentWord =
    filteredWords[randomIndex];

  spellingCurrentInput = "";

  renderSpelling();

  if(
    spellingSpeechEnabled
  ){
    speakCurrentWord();
  }

}

/* ========================= */
/* RENDER */
/* ========================= */

function renderSpelling(){

  if(
    !spellingCurrentWord
  ){
    return;
  }

  if(spellingWordDisplay){

    spellingWordDisplay.innerHTML =
      spellingCurrentWord.word;

  }

  if(spellingInputDisplay){

    spellingInputDisplay.innerHTML =
      spellingCurrentInput ||
      "_";

  }

  if(spellingEmoji){

    spellingEmoji.innerHTML =
      spellingCurrentWord.emoji ||
      "✨";

  }

}

/* ========================= */
/* SPEAK */
/* ========================= */

function speakCurrentWord(){

  if(
    !spellingCurrentWord
  ){
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
/* SUBMIT */
/* ========================= */

function submitSpellingAnswer(){

  if(
    !spellingCurrentWord
  ){
    return;
  }

  const correctWord =
    spellingCurrentWord.word
    .toLowerCase()
    .trim();

  const userWord =
    spellingCurrentInput
    .toLowerCase()
    .trim();

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

      generateSpellingWord();

    },1200);

  }else{

    spellingStreak = 0;

    updateSpellingStats();

    if(spellingFeedback){

      spellingFeedback.innerHTML =
        `❌ Correct spelling: ${spellingCurrentWord.word}`;

      spellingFeedback.className =
        "feedback error";

    }

    setTimeout(()=>{

      if(spellingFeedback){

        spellingFeedback.innerHTML =
          "";

      }

      generateSpellingWord();

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

      if(
        !e.target.classList.contains(
          "spell-key"
        )
      ){
        return;
      }

      const value =
        e.target.innerText;

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

        submitSpellingAnswer();

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
/* MODE */
/* ========================= */

if(spellingModeSelect){

  spellingModeSelect.addEventListener(
    "change",
    function(){

      spellingMode =
        spellingModeSelect.value;

      generateSpellingWord();

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

      generateSpellingWord();

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

console.log("SPELLING JS LOADED");