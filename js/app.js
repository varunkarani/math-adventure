let ambienceEnabled = false;

let ambienceAudio =
new Audio();

ambienceAudio.loop = true;

ambienceAudio.volume = 0.35;

/* ========================= /
/ AMBIENT AUDIO /
/ ========================= */

function playThemeAudio(){

if(!ambienceEnabled) return;

let audioSrc = “”;

const currentTheme =
BOOKS[currentBook]
.theme;

if(currentTheme===“space”){

audioSrc =
  "audio/space.mp3";

}

else if(
currentTheme===“dino”
){

audioSrc =
  "audio/dino.mp3";

}

else if(
currentTheme===“pirate”
){

audioSrc =
  "audio/pirate.mp3";

}

else if(
currentTheme===“wizard”
){

audioSrc =
  "audio/wizard.mp3";

}

else if(
currentTheme===“ice”
){

audioSrc =
  "audio/ice.mp3";

}

else if(
currentTheme===“train”
){

audioSrc =
  "audio/train.mp3";

}

else{

audioSrc =
  "audio/space.mp3";

}

ambienceAudio.pause();

ambienceAudio =
new Audio(audioSrc);

ambienceAudio.loop = true;

ambienceAudio.volume = 0.35;

ambienceAudio.play();
}

window.onerror = function(
message,
source,
lineno,
colno
){

console.log(
“JS ERROR:”,
message,
source,
lineno,
colno
);
};

document.addEventListener(
“DOMContentLoaded”,
function(){

/* ========================= /
/ ELEMENTS /
/ ========================= */

const mathTab =
document.getElementById(
“mathTab”
);

const storyTab =
document.getElementById(
“storyTab”
);

const mathSection =
document.getElementById(
“mathSection”
);

const storySection =
document.getElementById(
“storySection”
);

const keypad =
document.getElementById(
“keypad”
);

const difficultySelect =
document.getElementById(
“difficulty”
);

const feedback =
document.getElementById(
“feedback”
);

const answerDisplay =
document.getElementById(
“answerDisplay”
);

const readStoryBtn =
document.getElementById(
“readStoryBtn”
);

const bedtimeBtn =
document.getElementById(
“bedtimeBtn”
);

const audioToggleBtn =
document.getElementById(
“audioToggleBtn”
);

const nextPageBtn =
document.getElementById(
“nextPageBtn”
);

const prevPageBtn =
document.getElementById(
“prevPageBtn”
);

const backToLibraryBtn =
document.getElementById(
“backToLibraryBtn”
);

/* ========================= /
/ STATE /
/ ========================= */

let currentInput = “”;

let incorrectTries = 0;

/* ========================= /
/ INIT /
/ ========================= */

if(
typeof generateQuestion ===
“function”
){
generateQuestion();
}

if(
typeof renderBookshelf ===
“function”
){
renderBookshelf();
}

if(
typeof updateStats ===
“function”
){
updateStats();
}

/* ========================= /
/ DISPLAY /
/ ========================= */

function updateAnswerDisplay(){

if(answerDisplay){
  answerDisplay.innerHTML =
    currentInput || "_";
}

}

function showFeedback(
message,
type
){

if(!feedback) return;
feedback.innerHTML =
  message;
feedback.className =
  "feedback";
if(type){
  feedback.classList.add(
    type
  );
}

}

/* ========================= /
/ KEYPAD /
/ ========================= */

if(keypad){

keypad.addEventListener(
  "click",
  function(e){
  if(
    !e.target.classList.contains(
      "key"
    )
  ){
    return;
  }
  const value =
    e.target.innerText;
  /* DELETE */
  if(value === "⌫"){
    currentInput =
      currentInput.slice(0,-1);
    updateAnswerDisplay();
    return;
  }
  /* SUBMIT */
  if(value === "✓"){
    const answer =
      parseInt(currentInput);
    if(answer === currentAnswer){
      incorrectTries = 0;
      solved++;
      streak++;
      updateStats();
      showFeedback(
        "✅ Correct!",
        "success"
      );
      currentInput = "";
      updateAnswerDisplay();
      if(
        typeof launchConfetti ===
        "function"
      ){
        launchConfetti();
      }
      setTimeout(
        function(){
        generateQuestion();
        feedback.innerHTML =
          "";
      },1000);
    }else{
      incorrectTries++;
      streak = 0;
      updateStats();
      if(
        incorrectTries >= 3
      ){
        showFeedback(
          "💡 Answer: " +
          currentAnswer,
          "error"
        );
        incorrectTries = 0;
        setTimeout(
          function(){
          generateQuestion();
          feedback.innerHTML =
            "";
        },1800);
      }else{
        showFeedback(
          "❌ Try again",
          "error"
        );
      }
      currentInput = "";
      updateAnswerDisplay();
    }
    return;
  }
  /* NUMBER */
  currentInput += value;
  updateAnswerDisplay();
});

}

/* ========================= /
/ DIFFICULTY /
/ ========================= */

if(difficultySelect){

difficultySelect.addEventListener(
  "change",
  function(){
  incorrectTries = 0;
  currentInput = "";
  updateAnswerDisplay();
  generateQuestion();
});

}

/* ========================= /
/ TABS /
/ ========================= */

if(mathTab){

mathTab.addEventListener(
  "click",
  function(){
  mathSection.classList.remove(
    "hidden"
  );
  storySection.classList.add(
    "hidden"
  );
  mathTab.classList.add(
    "active"
  );
  storyTab.classList.remove(
    "active"
  );
});

}

if(storyTab){

storyTab.addEventListener(
  "click",
  function(){
  storySection.classList.remove(
    "hidden"
  );
  mathSection.classList.add(
    "hidden"
  );
  storyTab.classList.add(
    "active"
  );
  mathTab.classList.remove(
    "active"
  );
});

}

/* ========================= /
/ STORY NAV /
/ ========================= */

if(nextPageBtn){

nextPageBtn.addEventListener(
  "click",
  function(){
  if(
    storyPage <
    BOOKS[currentBook]
    .pages.length - 1
  ){
    storyPage++;
  }else{
    storyPage = 0;
  }
  renderStory();
});

}

if(prevPageBtn){

prevPageBtn.addEventListener(
  "click",
  function(){
  if(storyPage > 0){
    storyPage--;
    renderStory();
  }
});

}

/* ========================= /
/ BACK TO LIBRARY /
/ ========================= */

if(backToLibraryBtn){

backToLibraryBtn.addEventListener(
  "click",
  function(){
  document
    .getElementById(
      "readerView"
    )
    .classList.add(
      "hidden"
    );
  document
    .getElementById(
      "bookshelfView"
    )
    .classList.remove(
      "hidden"
    );
});

}

/* ========================= /
/ READ TO ME /
/ ========================= */

if(readStoryBtn){

readStoryBtn.addEventListener(
  "click",
  function(){
  const storyText =
    document.getElementById(
      "storyText"
    ).innerText;
  const speech =
    new SpeechSynthesisUtterance(
      storyText
    );
  speech.rate = 0.92;
  speech.pitch = 1;
  speech.volume = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(
    speech
  );
});

}

/* ========================= /
/ AUDIO TOGGLE /
/ ========================= */

if(audioToggleBtn){

audioToggleBtn.addEventListener(
  "click",
  function(){
  ambienceEnabled =
    !ambienceEnabled;
  if(ambienceEnabled){
    playThemeAudio();
    audioToggleBtn.innerHTML =
      "🔈 Sound ON";
  }else{
    ambienceAudio.pause();
    audioToggleBtn.innerHTML =
      "🔊 Ambient Sound";
  }
});

}

/* ========================= /
/ BEDTIME MODE /
/ ========================= */

if(bedtimeBtn){

bedtimeBtn.addEventListener(
  "click",
  function(){
  document.body.classList.toggle(
    "bedtime-mode"
  );
});

}

/* ========================= /
/ SERVICE WORKER /
/ ========================= */

if(“serviceWorker” in navigator){

navigator.serviceWorker
  .register("./sw.js")
  .then(function(){
    console.log(
      "SW registered"
    );
  })
  .catch(function(error){
    console.log(
      "SW failed",
      error
    );
  });

}

});