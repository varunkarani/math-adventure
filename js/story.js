let storyPage=
  loadData("storyPage",0);

let storiesCompleted=
  loadData("storiesCompleted",0);

function renderStory(){

  const page=
    STORY_PAGES[storyPage];

  document.getElementById(
    "storyIllustration"
  ).innerHTML=page.illustration;

  document.getElementById(
    "storyText"
  ).innerHTML=page.text;

  document.getElementById(
    "storiesCompleted"
  ).innerText=storiesCompleted;

  renderMiniChallenge();
}

function renderMiniChallenge(){

  const challenge=
    document.getElementById(
      "miniChallenge"
    );

  if(storyPage!==3){

    challenge.classList.add("hidden");
    return;
  }

  challenge.classList.remove("hidden");

  const a=
    Math.floor(Math.random()*5)+1;

  const b=
    Math.floor(Math.random()*5)+1;

  const answer=a+b;

  document.getElementById(
    "miniQuestion"
  ).innerText=
    `${a} + ${b} = ?`;

  const buttons=[
    answer,
    answer+1,
    answer-1
  ].sort(()=>Math.random()-0.5);

  const container=
    document.getElementById(
      "miniButtons"
    );

  container.innerHTML="";

  buttons.forEach(num=>{

    const button=
      document.createElement("button");

    button.className="mini-answer";

    button.innerText=num;

    button.onclick=()=>{

      if(num===answer){

        launchConfetti();

        challenge.innerHTML=
          "🚀 Fuel crystals collected!";

      }else{

        button.innerText="❌";
      }
    };

    container.appendChild(button);
  });
}