document.addEventListener(
  "DOMContentLoaded",
  () => {

  /* ========================= */
  /* ELEMENTS */
  /* ========================= */

  const mathTab =
    document.getElementById("mathTab");

  const storyTab =
    document.getElementById("storyTab");

  const mathSection =
    document.getElementById("mathSection");

  const storySection =
    document.getElementById("storySection");

  const keypad =
    document.getElementById("keypad");

  const refreshBtn =
    document.getElementById("refreshBtn");

  const nextPageBtn =
    document.getElementById("nextPageBtn");

  const prevPageBtn =
    document.getElementById("prevPageBtn");

  const difficulty =
    document.getElementById("difficulty");

  const bedtimeBtn =
    document.getElementById("bedtimeBtn");

  const readStoryBtn =
    document.getElementById("readStoryBtn");

  const feedback =
    document.getElementById("feedback");

  const storyBanner =
    document.getElementById("storyBanner");

  /* ========================= */
  /* STORAGE HELPERS */
  /* ========================= */

  function save(key,value){

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  }

  function load(key,defaultValue){

    const data =
      localStorage.getItem(key);

    if(data === null){

      return defaultValue;
    }

    return JSON.parse(data);
  }

  /* ========================= */
  /* LOAD SAVED STATE */
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

  generateQuestion();

  renderStory();

  updateWelcome();

  updateProgress();

  /* ========================= */
  /* WELCOME */
  /* ========================= */

  function updateWelcome(){

    if(solved === 0){

      storyBanner.innerHTML =
        "🚀 Welcome Ryan! Let's begin today's adventure!";

      return;
    }

    storyBanner.innerHTML = `
      🚀 Welcome back Ryan!
      <br>
      🏆 Total solved:
      ${solved}
    `;
  }

  /* ========================= */
  /* PROGRESS */
  /* ========================= */

  function updateProgress(){

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
  /* TABS */
  /* ========================= */

  mathTab.onclick = () => {

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

  storyTab.onclick = () => {

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

  /* ========================= */
  /* DIFFICULTY */
  /* ========================= */

  difficulty.onchange = () => {

    save(
      "difficulty",
      difficulty.value
    );

    generateQuestion();

    updateProgress();
  };

  /* ========================= */
  /* REFRESH */
  /* ========================= */

  refreshBtn.onclick = () => {

    generateQuestion();
  };

  /* ========================= */
  /* KEYPAD */
  /* ========================= */

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

        feedback.className =
          "feedback success";

        feedback.innerHTML =
          "✅ Amazing!";

        solved++;

        save(
          "solved",
          solved
        );

        updateProgress();

        generateQuestion();

      }else{

        feedback.className =
          "feedback error";

        feedback.innerHTML =
          `❌ Answer was ${currentAnswer}`;

        currentInput = "";
      }

    }else{

      currentInput += value;
    }

    updateAnswerDisplay();
  };

  /* ========================= */
  /* STORY NAVIGATION */
  /* ========================= */

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

  /* ========================= */
  /* READ STORY */
  /* ========================= */

  readStoryBtn.onclick = () => {

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
  /* BEDTIME MODE */
  /* ========================= */

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

});