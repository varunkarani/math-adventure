document.addEventListener(
  "DOMContentLoaded",
  ()=>{

  function get(id){

    return document.getElementById(id);
  }

  /* ========================= */
  /* ELEMENTS */
  /* ========================= */

  const mathTab = get("mathTab");
  const storyTab = get("storyTab");
  const parentTab = get("parentTab");

  const mathSection = get("mathSection");
  const storySection = get("storySection");
  const parentSection = get("parentSection");

  const keypad = get("keypad");

  const refreshBtn = get("refreshBtn");

  const nextPageBtn = get("nextPageBtn");
  const prevPageBtn = get("prevPageBtn");

  const difficulty = get("difficulty");

  const bedtimeBtn = get("bedtimeBtn");

  const readStoryBtn = get("readStoryBtn");

  const feedback = get("feedback");

  const storyBanner = get("storyBanner");

  const resetProgressBtn =
    get("resetProgressBtn");

  const totalSolvedStat =
    get("totalSolvedStat");

  /* ========================= */
  /* INIT */
  /* ========================= */

  generateQuestion();

  renderStory();

  renderStats();

  /* ========================= */
  /* STATS */
  /* ========================= */

  function renderStats(){

    if(storyBanner){

      storyBanner.innerHTML = `

        🚀 Difficulty:
        ${difficulty.value.toUpperCase()}

        <br>

        🏆 Solved:
        ${solved}

        &nbsp;&nbsp;&nbsp;

        🔥 Streak:
        ${streak}
      `;
    }

    if(totalSolvedStat){

      totalSolvedStat.innerText =
        solved;
    }
  }

  /* ========================= */
  /* TAB SWITCHING */
  /* ========================= */

  function clearTabs(){

    mathTab.classList.remove("active");
    storyTab.classList.remove("active");
    parentTab.classList.remove("active");

    mathSection.classList.add("hidden");
    storySection.classList.add("hidden");
    parentSection.classList.add("hidden");
  }

  mathTab.onclick = ()=>{

    clearTabs();

    mathTab.classList.add("active");

    mathSection.classList.remove(
      "hidden"
    );
  };

  storyTab.onclick = ()=>{

    clearTabs();

    storyTab.classList.add("active");

    storySection.classList.remove(
      "hidden"
    );
  };

  parentTab.onclick = ()=>{

    clearTabs();

    parentTab.classList.add("active");

    parentSection.classList.remove(
      "hidden"
    );
  };

  /* ========================= */
  /* DIFFICULTY */
  /* ========================= */

  difficulty.onchange = ()=>{

    generateQuestion();

    renderStats();
  };

  /* ========================= */
  /* REFRESH */
  /* ========================= */

  refreshBtn.onclick = ()=>{

    generateQuestion();
  };

  /* ========================= */
  /* KEYPAD */
  /* ========================= */

  keypad.onclick = (e)=>{

    if(
      !e.target.classList.contains("key")
    ) return;

    const value =
      e.target.innerText;

    if(value==="⌫"){

      currentInput =
        currentInput.slice(0,-1);

    }else if(value==="✓"){

      if(
        parseInt(currentInput)===
        currentAnswer
      ){

        handleCorrect();

      }else{

        handleWrong();
      }

      renderStats();

    }else{

      currentInput += value;
    }

    updateAnswerDisplay();
  };

  /* ========================= */
  /* STORY */
  /* ========================= */

  nextPageBtn.onclick = ()=>{

    if(
      storyPage <
      STORY_PAGES.length-1
    ){

      storyPage++;

    }else{

      storyPage = 0;
    }

    renderStory();
  };

  prevPageBtn.onclick = ()=>{

    if(storyPage>0){

      storyPage--;

      renderStory();
    }
  };

  /* ========================= */
  /* READ STORY */
  /* ========================= */

  readStoryBtn.onclick = ()=>{

    speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(
        STORY_PAGES[storyPage].text
      );

    utterance.rate = 0.85;

    speechSynthesis.speak(
      utterance
    );
  };

  /* ========================= */
  /* BEDTIME */
  /* ========================= */

  bedtimeBtn.onclick = ()=>{

    document.body.classList.toggle(
      "bedtime-mode"
    );
  };

  /* ========================= */
  /* RESET */
  /* ========================= */

  resetProgressBtn.onclick = ()=>{

    solved = 0;

    streak = 0;

    renderStats();

    feedback.innerHTML =
      "🧹 Progress Reset!";
  };

});