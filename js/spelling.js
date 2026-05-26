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

let spellingWordDisplay;

let spellingInputDisplay;

let spellingFeedback;

let spellingEmoji;

let spellingModeSelect;

let spellingStreakCount;

let spellingSolvedCount;

let spellingKeyboard;

let speakWordBtn;

let nextWordBtn;

/* ========================= */
/* INIT */
/* ========================= */

function initSpelling(){

  if(!window.SPELLING_WORDS){

    console.error(
      "SPELLING_WORDS missing"
    );

    return;

  }

  /* ========================= */
  /* GET ELEMENTS */
  /* ========================= */

  spellingWordDisplay =
    document.getElementById(
      "spellingWordDisplay"
    );

  spellingInputDisplay =
    document.getElementById(
      "spellingInputDisplay"
    );

  spellingFeedback =
    document.getElementById(
      "spellingFeedback"
    );

  spellingEmoji =
    document.getElementById(
      "spellingEmoji"
    );

  spellingModeSelect =
    document.getElementById(
      "spellingMode"
    );

  spellingStreakCount =
    document.getElementById(
      "spellingStreakCount"
    );

  spellingSolvedCount =
    document.getElementById(
      "spellingSolvedCount"
    );

  spellingKeyboard =
    document.getElementById(
      "spellingKeyboard"
    );

  speakWordBtn =
    document.getElementById(
      "speakWordBtn"
    );

  nextWordBtn =
    document.getElementById(
      "nextWordBtn"
    );

  /* ========================= */
  /* EVENTS */
  /* ========================= */

  setupSpellingEvents();

  generateSpellingWord();

  updateSpellingStats();

}

/* ========================= */
/* EVENTS */
/* ========================= */

function setupSpellingEvents(){

  /* KEYBOARD */

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

  /* MODE */

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

  /* SPEAK */

  if(speakWordBtn){

    speakWordBtn.addEventListener(
      "click",
      function(){

        speakCurrentWord();

      }
    );

  }

  /* NEXT WORD */

  if(nextWordBtn){

    nextWordBtn.addEventListener(
      "click",
      function(){

        generateSpellingWord();

      }
    );

  }

}

/* ========================= */
/* GENERATE WORD */
/* ========================= */

function generateSpellingWord(){

  const filteredWords =
    SPELLING_WORDS.filter(
      word => {

        return (
          word.level === spellingMode ||
          word.category === spellingMode
        );

      }
    );

  if(filteredWords.length === 0){

    console.warn(
      "No words found for mode:",
      spellingMode
    );

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

  if(spellingSpeechEnabled){

    speakCurrentWord();

  }

}

/* ========================= */
/* RENDER */
/* ========================= */

function renderSpelling(){

  if(!spellingCurrentWord){
    return;
  }

  if(spellingWordDisplay){

    spellingWordDisplay.innerHTML =
      `
      <div class="spelling-theme">
        ${spellingCurrentWord.theme}
      </div>

      <div class="spelling-category">
        ${spellingCurrentWord.category}
      </div>
      `;

  }

  if(spellingInputDisplay){

    spellingInputDisplay.innerHTML =
      spellingCurrentInput ||
      "_";

  }

  if(spellingEmoji){

    spellingEmoji.innerHTML =
      spellingCurrentWord.emoji;

  }

}

/* ========================= */
/* SPEECH */
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

  utterance.rate = 0.82;

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

  if(!spellingCurrentWord){
    return;
  }

  const correctWord =
    spellingCurrentWord.word
    .toLowerCase();

  const userWord =
    spellingCurrentInput
    .toLowerCase();

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
/* START */
/* ========================= */

window.addEventListener(
  "DOMContentLoaded",
  function(){

    initSpelling();

  }
);