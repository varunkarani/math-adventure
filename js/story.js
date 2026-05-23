let storyPage = 0;

const STORY_PAGES = [

  {
    illustration:"🚀🌕⭐",
    text:"Ryan heard a strange sound outside."
  },

  {
    illustration:"🛸✨",
    text:"A tiny spaceship had landed nearby."
  },

  {
    illustration:"🦖👨‍🚀",
    text:"A dinosaur astronaut stepped out."
  }

];

function renderStory() {

  document.getElementById(
    "storyIllustration"
  ).innerHTML =
    STORY_PAGES[storyPage].illustration;

  document.getElementById(
    "storyText"
  ).innerHTML =
    STORY_PAGES[storyPage].text;
}