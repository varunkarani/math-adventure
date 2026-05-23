document.addEventListener(
  "DOMContentLoaded",
  ()=>{

  /* ========================= */
  /* ELEMENTS */
  /* ========================= */

  const mathTab =
    document.getElementById(
      "mathTab"
    );

  const storyTab =
    document.getElementById(
      "storyTab"
    );

  const mathSection =
    document.getElementById(
      "mathSection"
    );

  const storySection =
    document.getElementById(
      "storySection"
    );

  const keypad =
    document.getElementById(
      "keypad"
    );

  const difficultySelect =
    document.getElementById(
      "difficulty"
    );

  const feedback =
    document.getElementById(
      "feedback"
    );

  const answerDisplay =
    document.getElementById(
      "answerDisplay"
    );

  const readStoryBtn =
    document.getElementById(
      "readStoryBtn"
    );

  const bedtimeBtn =
    document.getElementById(
      "bedtimeBtn"
    );

  const nextPageBtn =
    document.getElementById(
      "nextPageBtn"
    );

  const prevPageBtn =
    document.getElementById(
      "prevPageBtn"
    );

  const backToLibraryBtn =
    document.getElementById(
      "backToLibraryBtn"
    );

  /* ========================= */
  /* GLOBAL STATE */
  /* ========================= */

  let currentInput = "";

  let incorrectTries = 0;

  /* ========================= */
  /* INIT */
  /* ========================= */

  if(typeof generateQuestion==="function"){
    generateQuestion();
  }

  if(typeof renderBookshelf==="function"){
    renderBookshelf();
  }

  /* ========================= */
  /* ANSWER DISPLAY */
  /* ========================= */

  function updateAnswerDisplay(){

    if(answerDisplay){

      answerDisplay.innerHTML =
        currentInput || "_";
    }
  }

  /* ========================= */
  /* FEEDBACK */
  /* ========================= */

  function showFeedback(
    message,
    type="success"
  ){

    if(!feedback) return;

    feedback.innerHTML =
      message;

    feedback.className =
      `feedback ${type}`;
  }

  /* ========================= */
  /* RESET INPUT */
  /* ========================= */

  function clearInput(){

    currentInput = "";

    updateAnswerDisplay();
  }

  /* ========================= */
  /* KEYPAD */
  /* ========================= */

  if(keypad){

    keypad.addEventListener(
      "click",
      (e)=>{

      if(
        !e.target.classList.contains(
          "key"
        )
      ){
        return;
      }

      const value =
        e.target.innerText;

      /* ========================= */
      /* DELETE */
      /* ========================= */

      if(value==="⌫"){

        currentInput =
          currentInput.slice(0,-1);

        updateAnswerDisplay();

        return;
      }

      /* ========================= */
      /* SUBMIT */
      /* ========================= */

      if(value==="✓"){

        if(currentInput===""){
          return;
        }

        const answer =
          parseInt(currentInput);

        /* ========================= */
        /* CORRECT */
        /* ========================= */

        if(answer===currentAnswer){

          incorrectTries = 0;

          showFeedback(
            "✅ Amazing!",
            "success"
          );

          if(
            typeof solved!=="undefined"
          ){
            solved++;
          }

          if(
            typeof streak!=="undefined"
          ){
            streak++;
          }

          if(
            typeof updateStats==="function"
          ){
            updateStats();
          }

          if(
            typeof launchConfetti==="function"
          ){
            launchConfetti();
          }

          clearInput();

          setTimeout(()=>{

            if(
              typeof generateQuestion==="function"
            ){
              generateQuestion();
            }

            showFeedback("");

          },1000);

        }

        /* ========================= */
        /* WRONG */
        /* ========================= */

        else{

          incorrectTries++;

          if(
            typeof streak!=="undefined"
          ){
            streak = 0;
          }

          if(
            typeof updateStats==="function"
          ){
            updateStats();
          }

          /* ========================= */
          /* SHOW ANSWER AFTER 3 TRIES */
          /* ========================= */

          if(incorrectTries>=3){

            showFeedback(
              `💡 Correct answer: ${currentAnswer}`,
              "error"
            );

            incorrectTries = 0;

            clearInput();

            setTimeout(()=>{

              if(
                typeof generateQuestion==="function"
              ){
                generateQuestion();
              }

              showFeedback("");

            },1800);

          }

          else{

            showFeedback(
              "❌ Try again!",
              "error"
            );

            clearInput();
          }
        }

        return;
      }

      /* ========================= */
      /* NUMBER INPUT */
      /* ========================= */

      currentInput += value;

      updateAnswerDisplay();

    });

  }

  /* ========================= */
  /* DIFFICULTY */
  /* ========================= */

  if(difficultySelect){

    difficultySelect.addEventListener(
      "change",
      ()=>{

      incorrectTries = 0;

      clearInput();

      if(
        typeof generateQuestion==="function"
      ){
        generateQuestion();
      }

    });

  }

  /* ========================= */
  /* TABS */
  /* ========================= */

  if(mathTab){

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

  }

  if(storyTab){

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

  }

  /* ========================= */
  /* STORY NAVIGATION */
  /* ========================= */

  if(nextPageBtn){

    nextPageBtn.addEventListener(
      "click",
      ()=>{

      if(
        storyPage <
        BOOKS[currentBook]
        .pages.length - 1
      ){

        storyPage++;

      }else{

        storyPage = 0;
      }

      if(
        typeof renderStory==="function"
      ){
        renderStory();
      }

    });

  }

  if(prevPageBtn){

    prevPageBtn.addEventListener(
      "click",
      ()=>{

      if(storyPage>0){

        storyPage--;

        if(
          typeof renderStory==="function"
        ){
          renderStory();
        }
      }

    });

  }

  /* ========================= */
  /* BACK TO LIBRARY */
  /* ========================= */

  if(backToLibraryBtn){

    backToLibraryBtn.addEventListener(
      "click",
      ()=>{

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

  /* ========================= */
  /* READ TO ME */
  /* ========================= */

  if(readStoryBtn){

    readStoryBtn.addEventListener(
      "click",
      ()=>{

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

  /* ========================= */
  /* BEDTIME MODE */
  /* ========================= */

  if(bedtimeBtn){

    bedtimeBtn.addEventListener(
      "click",
      ()=>{

      document.body.classList.toggle(
        "bedtime-mode"
      );

    });

  }

});