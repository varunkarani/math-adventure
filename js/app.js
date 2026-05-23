document.addEventListener(
  "DOMContentLoaded",
  ()=>{

  /* ========================= */
  /* ELEMENTS */
  /* ========================= */

  const mathTab=
    document.getElementById("mathTab");

  const storyTab=
    document.getElementById("storyTab");

  const mathSection=
    document.getElementById("mathSection");

  const storySection=
    document.getElementById("storySection");

  const keypad=
    document.getElementById("keypad");

  const refreshBtn=
    document.getElementById("refreshBtn");

  const readStoryBtn=
    document.getElementById("readStoryBtn");

  const bedtimeBtn=
    document.getElementById("bedtimeBtn");

  const nextPageBtn=
    document.getElementById("nextPageBtn");

  const prevPageBtn=
    document.getElementById("prevPageBtn");

  /* ========================= */
  /* INIT */
  /* ========================= */

  generateQuestion();

  renderStory();

  /* ========================= */
  /* KEYPAD */
  /* ========================= */

  keypad.addEventListener("click",(e)=>{

    if(!e.target.classList.contains("key"))
      return;

    const value=e.target.innerText;

    if(value==="⌫"){

      currentInput=
        currentInput.slice(0,-1);

    }else if(value==="✓"){

      if(
        parseInt(currentInput)===
        currentAnswer
      ){

        launchConfetti();

        document.getElementById(
          "feedback"
        ).innerHTML=
          "✅ Amazing!";

        solved++;

        setTimeout(()=>{
          generateQuestion();
        },1200);

      }else{

        document.getElementById(
          "feedback"
        ).innerHTML=
          `❌ Answer was ${currentAnswer}`;

        currentInput="";
      }

    }else{

      currentInput+=value;
    }

    updateAnswerDisplay();
  });

  /* ========================= */
  /* REFRESH */
  /* ========================= */

  refreshBtn.addEventListener(
    "click",
    ()=>{
      generateQuestion();
    }
    const difficultySelect=
  document.getElementById(
    "difficulty"
  );

if(difficultySelect){

  difficultySelect.addEventListener(
    "change",
    ()=>{
      generateQuestion();
    }
  );
}

  /* ========================= */
  /* TABS */
  /* ========================= */

  mathTab.addEventListener(
    "click",
    ()=>{

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

  storyTab.addEventListener(
    "click",
    ()=>{

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

  /* ========================= */
  /* STORY NAVIGATION */
  /* ========================= */

  nextPageBtn.addEventListener(
    "click",
    ()=>{

    if(
      storyPage<
      STORY_PAGES.length-1
    ){

      storyPage++;

    }else{

      storyPage=0;

      storiesCompleted++;
    }

    saveData(
      "storyPage",
      storyPage
    );

    saveData(
      "storiesCompleted",
      storiesCompleted
    );

    renderStory();

  });

  prevPageBtn.addEventListener(
    "click",
    ()=>{

    if(storyPage>0){

      storyPage--;

      saveData(
        "storyPage",
        storyPage
      );

      renderStory();
    }

  });

  /* ========================= */
  /* READ TO ME */
  /* ========================= */

  readStoryBtn.addEventListener(
    "click",
    ()=>{

    speak(
      STORY_PAGES[storyPage].text
    );

  });

  /* ========================= */
  /* BEDTIME MODE */
  /* ========================= */

  bedtimeBtn.addEventListener(
    "click",
    ()=>{

    document.body.classList.toggle(
      "bedtime-mode"
    );

  });

});