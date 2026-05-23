document.addEventListener(
  "DOMContentLoaded",
  () => {

  /* ========================= */
  /* SAFE ELEMENT HELPER */
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

  /* ========================= */
  /* STORAGE */
  /* ========================= */

  function save(key,value){

    try{

      localStorage.setItem(
        key,
        JSON.stringify(value)
      );

    }catch(err){

      console.log(err);
    }
  }

  function load(key,defaultValue){

    try{

      const data =
        localStorage.getItem(key);

      if(data === null){

        return defaultValue;
      }

      return JSON.parse(data);

    }catch(err){

      console.log(err);

      return defaultValue;
    }
  }

  /* ========================= */
  /* GLOBAL STATE */
  /* ========================= */

  solved =
    load("solved",0);

  storyPage =
    load("storyPage",0);

  const savedDifficulty =
    load("difficulty","medium");

  const bedtimeEnabled =
    load("bedtimeMode",false);

  /* ========================= */
  /* APPLY SAVED SETTINGS */
  /* ========================= */

  if(difficulty){

    difficulty.value =
      savedDifficulty;
  }

  if(bedtimeEnabled){

    document.body.classList.add(
      "bedtime-mode"
    );
  }

  /* ========================= */
  /* INIT */
  /* ========================= */

  try{

    generateQuestion();

  }catch(err){

    console.log(
      "generateQuestion failed",
      err
    );
  }

  try{

    renderStory();

  }catch(err){

    console.log(
      "renderStory failed",
      err
    );
  }

  updateProgress();

  /* ========================= */
  /* PROGRESS */
  /* ========================= */

  function updateProgress(){

    if(!storyBanner) return;

    const difficultyLevel =
      difficulty
        ? difficulty.value.toUpperCase()
        : "MEDIUM";

    storyBanner.innerHTML = `
      🚀 Difficulty:
      ${difficultyLevel}
      <br>
      🏆 Total solved:
      ${solved}
    `;
  }

  /* ========================= */
  /* TAB SYSTEM */
  /* ========================= */

  if(mathTab){

    mathTab.onclick = () => {

      if(mathSection){

        mathSection.classList.remove(
          "hidden"
        );
      }

      if(storySection){

        storySection.classList.add(
          "hidden"
        );
      }

      mathTab.classList.add(
        "active"
      );

      if(storyTab){

        storyTab.classList.remove(
          "active"
        );
      }
    };
  }

  if(storyTab){

    storyTab.onclick = () => {

      if(storySection){

        storySection.classList.remove(
          "hidden"
        );
      }

      if(mathSection){

        mathSection.classList.add(
          "hidden"
        );
      }

      storyTab.classList.add(
        "active"
      );

      if(mathTab){

        mathTab.classList.remove(
          "active"
        );
      }
    };
  }

  /* ========================= */
  /* DIFFICULTY */
  /* ========================= */

  if(difficulty){

    difficulty.onchange = () => {

      save(
        "difficulty",
        difficulty.value
      );

      generateQuestion();

      updateProgress();
    };
  }

  /* ========================= */
  /* REFRESH */
  /* ========================= */

  if(refreshBtn){

    refreshBtn.onclick = () => {

      generateQuestion();
    };
  }

  /* ========================= */
  /* KEYPAD */
  /* ========================= */

  if(keypad){

    keypad.onclick = (e) => {

      if(
        !e.target.classList.contains("key")
      ) return;

      const value =
        e.target.innerText;

      if(value === "⌫"){

        currentInput =
          currentInput.slice(0,-1);

      }else if(value === "✓"){

        if(
          parseInt(currentInput) ===
          currentAnswer
        ){

          if(feedback){

            feedback.className =
              "feedback success";

            feedback.innerHTML =
              "✅ Amazing!";
          }

          solved++;

          save(
            "solved",
            solved
          );

          updateProgress();

          generateQuestion();

        }else{

          if(feedback){

            feedback.className =
              "feedback error";

            feedback.innerHTML =
              `❌ Answer was ${currentAnswer}`;
          }

          currentInput = "";
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

    nextPageBtn.onclick = () => {

      if(
        storyPage <
        STORY_PAGES.length - 1
      ){

        storyPage++;

      }else{

        storyPage = 0;
      }

      save(
        "storyPage",
        storyPage
      );

      renderStory();
    };
  }

  if(prevPageBtn){

    prevPageBtn.onclick = () => {

      if(storyPage > 0){

        storyPage--;

        save(
          "storyPage",
          storyPage
        );

        renderStory();
      }
    };
  }

  /* ========================= */
  /* READ STORY */
  /* ========================= */

  if(readStoryBtn){

    readStoryBtn.onclick = () => {

      try{

        speechSynthesis.cancel();

        const utterance =
          new SpeechSynthesisUtterance(
            STORY_PAGES[storyPage].text
          );

        utterance.rate = 0.85;

        speechSynthesis.speak(
          utterance
        );

      }catch(err){

        console.log(err);
      }
    };
  }

  /* ========================= */
  /* BEDTIME MODE */
  /* ========================= */

  if(bedtimeBtn){

    bedtimeBtn.onclick = () => {

      document.body.classList.toggle(
        "bedtime-mode"
      );

      save(
        "bedtimeMode",
        document.body.classList.contains(
          "bedtime-mode"
        )
      );
    };
  }

});