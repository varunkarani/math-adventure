document.addEventListener(
  "DOMContentLoaded",
  ()=>{

  /* ========================= */
  /* HELPERS */
  /* ========================= */

  function get(id){

    return document.getElementById(id);
  }

  /* ========================= */
  /* ELEMENTS */
  /* ========================= */

  const mathTab = get("mathTab");
  const storyTab = get("storyTab");

  const mathSection = get("mathSection");
  const storySection = get("storySection");

  const keypad = get("keypad");

  const refreshBtn = get("refreshBtn");

  const nextPageBtn = get("nextPageBtn");
  const prevPageBtn = get("prevPageBtn");

  const difficulty = get("difficulty");

  const bedtimeBtn = get("bedtimeBtn");

  const readStoryBtn = get("readStoryBtn");

  const feedback = get("feedback");

  const storyBanner = get("storyBanner");

  const settingsBtn = get("settingsBtn");

  const settingsPanel = get("settingsPanel");

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

    if(!storyBanner) return;

    const difficultyLevel =
      difficulty
        ? difficulty.value.toUpperCase()
        : "MEDIUM";

    storyBanner.innerHTML = `

      🚀 Difficulty:
      ${difficultyLevel}

      <br>

      🏆 Solved:
      ${solved}

      &nbsp;&nbsp;&nbsp;

      🔥 Streak:
      ${streak}
    `;
  }

  /* ========================= */
  /* SETTINGS */
  /* ========================= */

  if(settingsBtn && settingsPanel){

    settingsBtn.onclick = ()=>{

      settingsPanel.classList.toggle(
        "open"
      );
    };
  }

  /* ========================= */
  /* TABS */
  /* ========================= */

  if(mathTab){

    mathTab.onclick = ()=>{

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
    };
  }

  if(storyTab){

    storyTab.onclick = ()=>{

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
    };
  }

  /* ========================= */
  /* DIFFICULTY */
  /* ========================= */

  if(difficulty){

    difficulty.onchange = ()=>{

      generateQuestion();

      renderStats();
    };
  }

  /* ========================= */
  /* REFRESH */
  /* ========================= */

  if(refreshBtn){

    refreshBtn.onclick = ()=>{

      generateQuestion();
    };
  }

  /* ========================= */
  /* KEYPAD */
  /* ========================= */

  if(keypad){

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

          renderStats();

        }else{

          handleWrong();

          renderStats();
        }

      }else{

        currentInput += value;
      }

      updateAnswerDisplay();
    };
  }

  /* ========================= */
  /* STORY NAVIGATION */
  /* ========================= */

  if(nextPageBtn){

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
  }

  if(prevPageBtn){

    prevPageBtn.onclick = ()=>{

      if(storyPage>0){

        storyPage--;

        renderStory();
      }
    };
  }

  /* ========================= */
  /* READ STORY */
  /* ========================= */

  if(readStoryBtn){

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
  }

  /* ========================= */
  /* BEDTIME */
  /* ========================= */

  if(bedtimeBtn){

    bedtimeBtn.onclick = ()=>{

      document.body.classList.toggle(
        "bedtime-mode"
      );
    };
  }

});