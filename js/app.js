document.addEventListener(
  "DOMContentLoaded",
  ()=>{

  generateQuestion();
  renderStory();

  const keypad=
    document.getElementById("keypad");

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

  document.getElementById(
    "mathTab"
  ).onclick=()=>{

    mathSection.classList.remove("hidden");
    storySection.classList.add("hidden");

    mathTab.classList.add("active");
    storyTab.classList.remove("active");
  };

  document.getElementById(
    "storyTab"
  ).onclick=()=>{

    storySection.classList.remove("hidden");
    mathSection.classList.add("hidden");

    storyTab.classList.add("active");
    mathTab.classList.remove("active");
  };

  document.getElementById(
    "nextPageBtn"
  ).onclick=()=>{

    if(storyPage<STORY_PAGES.length-1){

      storyPage++;

    }else{

      storyPage=0;
      storiesCompleted++;
    }

    saveData("storyPage",storyPage);
    saveData(
      "storiesCompleted",
      storiesCompleted
    );

    renderStory();
  };

  document.getElementById(
    "prevPageBtn"
  ).onclick=()=>{

    if(storyPage>0){

      storyPage--;

      saveData("storyPage",storyPage);

      renderStory();
    }
  };

  document.getElementById(
    "readStoryBtn"
  ).onclick=()=>{

    speak(
      STORY_PAGES[storyPage].text
    );
  };

  document.getElementById(
    "bedtimeBtn"
  ).onclick=()=>{

    document.body.classList.toggle(
      "bedtime-mode"
    );
  };

});