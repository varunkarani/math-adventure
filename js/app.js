document.addEventListener(
  "DOMContentLoaded",
  function(){

  const keypad =
    document.getElementById(
      "keypad"
    );

  const answerDisplay =
    document.getElementById(
      "answerDisplay"
    );

  const feedback =
    document.getElementById(
      "feedback"
    );

  let currentInput = "";

  if(
    typeof generateQuestion ===
    "function"
  ){
    generateQuestion();
  }

  function updateAnswerDisplay(){

    if(answerDisplay){

      answerDisplay.innerHTML =
        currentInput || "_";
    }
  }

  if(keypad){

    keypad.addEventListener(
      "click",
      function(e){

      if(
        !e.target.classList.contains(
          "key"
        )
      ){
        return;
      }

      const value =
        e.target.innerText;

      if(value === "⌫"){

        currentInput =
          currentInput.slice(0,-1);

        updateAnswerDisplay();

        return;
      }

      if(value === "✓"){

        const answer =
          parseInt(currentInput);

        if(answer === currentAnswer){

          feedback.innerHTML =
            "✅ Correct!";

          currentInput = "";

          updateAnswerDisplay();

        }else{

          feedback.innerHTML =
            "❌ Try again";

          currentInput = "";

          updateAnswerDisplay();
        }

        return;
      }

      currentInput += value;

      updateAnswerDisplay();

    });

  }

});