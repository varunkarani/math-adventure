document.addEventListener(
  "DOMContentLoaded",
  () => {

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

  generateQuestion();

  renderStory();

  /* TABS */

  mathTab.onclick = () => {

    mathSection.classList.remove("hidden");
    storySection.classList.add("hidden");

    mathTab.classList.add("active");
    storyTab.classList.remove("active");
  };

  storyTab.onclick = () => {

    storySection.classList.remove("hidden");
    mathSection.classList.add("hidden");

    storyTab.classList.add("active");
    mathTab.classList.remove("active");
  };

  /* DIFFICULTY */

  difficulty.onchange = () => {
    generateQuestion();
  };

  /* REFRESH */

  refreshBtn.onclick = () => {
    generateQuestion();
  };

  /* KEYPAD */

  keypad.onclick = (e) => {

    if (!e.target.classList.contains("key"))
      return;

    const value = e.target.innerText;

    if (value === "⌫") {

      currentInput =
        currentInput.slice(0, -1);

    } else if (value === "✓") {

      if (
        parseInt(currentInput) === currentAnswer
      ) {

        document.getElementById(
          "feedback"
        ).innerHTML = "✅ Correct!";

        solved++;

        generateQuestion();

      } else {

        document.getElementById(
          "feedback"
        ).innerHTML =
          `❌ Answer was ${currentAnswer}`;

        currentInput = "";
      }

    } else {

      currentInput += value;
    }

    updateAnswerDisplay();
  };

  /* STORY */

  nextPageBtn.onclick = () => {

    if (
      storyPage <
      STORY_PAGES.length - 1
    ) {
      storyPage++;
    }

    renderStory();
  };

  prevPageBtn.onclick = () => {

    if (storyPage > 0) {
      storyPage--;
    }

    renderStory();
  };

  /* BEDTIME */

  bedtimeBtn.onclick = () => {

    document.body.classList.toggle(
      "bedtime-mode"
    );
  };

  /* READ */

  readStoryBtn.onclick = () => {

    speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(
        STORY_PAGES[storyPage].text
      );

    speechSynthesis.speak(utterance);
  };

});