document.addEventListener(
  "DOMContentLoaded",
  ()=>{

  function get(id){

    return document.getElementById(id);
  }

  /* ========================= */
  /* ELEMENTS */
  /* ========================= */

  const mathTab =
    get("mathTab");

  const storyTab =
    get("storyTab");

  const parentTab =
    get("parentTab");

  const mathSection =
    get("mathSection");

  const storySection =
    get("storySection");

  const parentSection =
    get("parentSection");

  const keypad =
    get("keypad");

  const refreshBtn =
    get("refreshBtn");

  const difficulty =
    get("difficulty");

  const feedback =
    get("feedback");

  const storyBanner =
    get("storyBanner");

  const nextPageBtn =
    get("nextPageBtn");

  const prevPageBtn =
    get("prevPageBtn");

  const readStoryBtn =
    get("readStoryBtn");

  const bedtimeBtn =
    get("bedtimeBtn");

  const backToBooksBtn =
    get("backToBooksBtn");

  const bookshelfView =
    get("bookshelfView");

  const readerView =
    get("readerView");

  const totalSolvedStat =
    get("totalSolvedStat");

  const resetProgressBtn =
    get("resetProgressBtn");

  /* ========================= */
  /* INIT */
  /* ========================= */

  generateQuestion();

  renderBookshelf();

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
  /* TABS */
  /* ========================= */

  function clearTabs(){

    mathSection.classList.add(
      "hidden"
    );

    storySection.classList.add(
      "hidden"
    );

    parentSection.classList.add(
      "hidden"
    );

    mathTab.classList.remove(
      "active"
    );

    storyTab.classList.remove(
      "active"
    );

    parentTab.classList.remove(
      "active"
    );
  }

  mathTab.onclick = ()=>{

    clearTabs();

    mathSection.classList.remove(
      "hidden"
    );

    mathTab.classList.add(
      "active"
    );
  };

  storyTab.onclick = ()=>{

    clearTabs();

    storySection.classList.remove(
      "hidden"
    );

    storyTab.classList.add(
      "active"
    );
  };

  parentTab.onclick = ()=>{

    clearTabs();

    parentSection.classList.remove(
      "hidden"
    );

    parentTab.classList.add(
      "active"
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
      !e.target.classList.contains(
        "key"
      )
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
  /* STORY NAVIGATION */
  /* ========================= */

  nextPageBtn.onclick = ()=>{

    const totalPages =
      BOOKS[currentBook]
      .pages.length;

    if(
      storyPage <
      totalPages-1
    ){

      storyPage++;

      renderStory();

    }else{

      feedback.innerHTML =
        "📚 Story Complete!";
    }
  };

  prevPageBtn.onclick = ()=>{

    if(storyPage>0){

      storyPage--;

      renderStory();
    }
  };

  /* ========================= */
  /* BOOKSHELF */
  /* ========================= */

  backToBooksBtn.onclick = ()=>{

    readerView.classList.add(
      "hidden"
    );

    bookshelfView.classList.remove(
      "hidden"
    );
  };

  /* ========================= */
  /* READ STORY */
  /* ========================= */

  readStoryBtn.onclick = ()=>{

    speechSynthesis.cancel();

    const text =
      BOOKS[currentBook]
      .pages[storyPage]
      .text;

    const utterance =
      new SpeechSynthesisUtterance(
        text
      );

    utterance.rate = 0.82;

    utterance.pitch = 1.02;

    speechSynthesis.speak(
      utterance
    );
  };

  /* ========================= */
  /* BEDTIME MODE */
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