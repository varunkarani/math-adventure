document.addEventListener("DOMContentLoaded", () => {

const mathTab=document.getElementById("mathTab");
const storyTab=document.getElementById("storyTab");

const mathSection=document.getElementById("mathSection");
const storySection=document.getElementById("storySection");

const settingsBtn=document.getElementById("settingsBtn");
const settingsPanel=document.getElementById("settingsPanel");

const refreshBtn=document.getElementById("refreshBtn");

const keypad=document.getElementById("keypad");

const questionContainer=
  document.getElementById("questionContainer");

const feedback=
  document.getElementById("feedback");

let currentAnswer=0;
let currentInput="";

/* ========================= */
/* TAB SWITCHING */
/* ========================= */

mathTab.addEventListener("click",()=>{

  mathTab.classList.add("active");
  storyTab.classList.remove("active");

  mathSection.classList.remove("hidden");
  storySection.classList.add("hidden");
});

storyTab.addEventListener("click",()=>{

  storyTab.classList.add("active");
  mathTab.classList.remove("active");

  storySection.classList.remove("hidden");
  mathSection.classList.add("hidden");
});

/* ========================= */
/* SETTINGS */
/* ========================= */

settingsBtn.addEventListener("click",()=>{

  settingsPanel.classList.toggle("hidden");
});

/* ========================= */
/* QUESTION GENERATION */
/* ========================= */

function generateQuestion(){

  const a=Math.floor(Math.random()*10)+1;
  const b=Math.floor(Math.random()*10)+1;

  currentAnswer=a+b;

  currentInput="";

  questionContainer.innerHTML=`

    <div class="question-card">

      <div class="question-text">
        ${a} + ${b} = ?
      </div>

      <div class="answer-display" id="answerDisplay">
        ?
      </div>

    </div>

  `;
}

refreshBtn.addEventListener("click",()=>{

  generateQuestion();
});

/* ========================= */
/* KEYPAD */
/* ========================= */

keypad.addEventListener("click",(e)=>{

  if(!e.target.classList.contains("key")) return;

  const value=e.target.innerText;

  if(value==="⌫"){

    currentInput=currentInput.slice(0,-1);

  }else if(value==="✓"){

    if(parseInt(currentInput)===currentAnswer){

      feedback.innerHTML="✅ Correct!";

    }else{

      feedback.innerHTML=
        `❌ Answer was ${currentAnswer}`;
    }

    currentInput="";

  }else{

    currentInput+=value;
  }

  const display=
    document.getElementById("answerDisplay");

  if(display){

    display.innerText=currentInput || "?";
  }
});

/* ========================= */
/* STORY MODE */
/* ========================= */

const storyPages=[

  {
    illustration:"🚀🌕⭐",
    text:"Ryan heard a strange sound outside."
  },

  {
    illustration:"🛸✨",
    text:"A tiny spaceship had landed nearby."
  },

  {
    illustration:"🦖👨‍🚀",
    text:"A dinosaur astronaut stepped out."
  }

];

let storyPage=0;

const storyIllustration=
  document.getElementById("storyIllustration");

const storyText=
  document.getElementById("storyText");

const nextPageBtn=
  document.getElementById("nextPageBtn");

const prevPageBtn=
  document.getElementById("prevPageBtn");

function renderStory(){

  storyIllustration.innerHTML=
    storyPages[storyPage].illustration;

  storyText.innerHTML=
    storyPages[storyPage].text;
}

nextPageBtn.addEventListener("click",()=>{

  if(storyPage<storyPages.length-1){

    storyPage++;

    renderStory();
  }
});

prevPageBtn.addEventListener("click",()=>{

  if(storyPage>0){

    storyPage--;

    renderStory();
  }
});

/* ========================= */
/* INIT */
/* ========================= */

generateQuestion();

renderStory();

});