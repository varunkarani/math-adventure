let currentBook = 0;

let storyPage = 0;

const BOOKS = [

{
  title:"🚀 Space Mission",
  theme:"space",

  pages:[

    {
      art:"🚀🌎✨",
      text:"Ryan looked out the spaceship window. Earth was getting smaller and smaller."
    },

    {
      art:"🛰️🌕⭐",
      text:"Captain Nova pointed toward the moon. 'We need to collect glowing moon crystals!'"
    },

    {
      art:"👾🪐🚀",
      text:"A friendly alien floated beside the ship and waved hello."
    },

    {
      art:"🌌💎✨",
      text:"Ryan carefully picked up the sparkling crystals and placed them inside the ship."
    },

    {
      art:"🏆🚀🌟",
      text:"Mission complete! Ryan became the youngest Space Explorer in the galaxy."
    }

  ]
},

{
  title:"🦖 Dino Island",
  theme:"dino",

  pages:[

    {
      art:"🌴🦖🌋",
      text:"Ryan stepped onto Dino Island and heard giant footsteps nearby."
    },

    {
      art:"🥚🦕✨",
      text:"A baby dinosaur hatched from a glowing egg."
    },

    {
      art:"🍃🦖🍉",
      text:"Ryan fed the hungry dinosaur sweet jungle melons."
    },

    {
      art:"🌋🔥🦖",
      text:"The volcano rumbled loudly. The dinosaurs ran toward the beach."
    },

    {
      art:"🏝️🦕🌈",
      text:"The island became peaceful again. Ryan and the dinosaurs celebrated together."
    }

  ]
},

{
  title:"🏴‍☠️ Pirate Treasure",
  theme:"pirate",

  pages:[

    {
      art:"🌊🏴‍☠️⛵",
      text:"Captain Ryan sailed across stormy seas searching for hidden treasure."
    },

    {
      art:"🗺️✨🦜",
      text:"A talking parrot revealed a secret map hidden under the captain's hat."
    },

    {
      art:"🏝️🪙🌴",
      text:"The treasure island was filled with golden coins and sparkling gems."
    },

    {
      art:"🦀⚓🌊",
      text:"Tiny crabs guarded the treasure chest with snapping claws."
    },

    {
      art:"🏆💰☀️",
      text:"Ryan discovered the legendary rainbow treasure and shared it with the crew."
    }

  ]
},

{
  title:"🧙 Wizard School",
  theme:"wizard",

  pages:[

    {
      art:"🏰🧙✨",
      text:"Ryan arrived at Wizard School carrying a glowing spell book."
    },

    {
      art:"🪄🐉🔥",
      text:"A tiny dragon sneezed fire during flying lessons."
    },

    {
      art:"📚✨🦉",
      text:"An owl delivered magical homework floating through the air."
    },

    {
      art:"🧪💥🌟",
      text:"Ryan mixed bubbling potions that sparkled bright blue."
    },

    {
      art:"🏆🧙‍♂️🌈",
      text:"The head wizard awarded Ryan the Golden Wand of Courage."
    }

  ]
}

];

/* ========================= */
/* BOOKSHELF */
/* ========================= */

function renderBookshelf(){

  const container =
    document.getElementById(
      "bookshelf"
    );

  if(!container) return;

  container.innerHTML = "";

  BOOKS.forEach((book,index)=>{

    const card =
      document.createElement("button");

    card.className =
      "book-card";

    card.innerHTML = `

      <div class="book-title">
        ${book.title}
      </div>

      <div class="book-subtitle">
        Tap to read
      </div>
    `;

    card.onclick = ()=>{

      currentBook = index;

      storyPage = 0;

      renderStory();

      document
        .getElementById(
          "bookshelfView"
        )
        .classList.add("hidden");

      document
        .getElementById(
          "readerView"
        )
        .classList.remove("hidden");
    };

    container.appendChild(card);
  });
}

/* ========================= */
/* STORY */
/* ========================= */

function renderStory(){

  const page =
    BOOKS[currentBook]
    .pages[storyPage];

  document.getElementById(
    "storyIllustration"
  ).innerHTML =
    page.art;

  document.getElementById(
    "storyText"
  ).innerHTML =
    page.text;

  document.getElementById(
    "storyTitle"
  ).innerHTML =
    BOOKS[currentBook].title;

  renderTheme();
}

/* ========================= */
/* THEMES */
/* ========================= */

function renderTheme(){

  const body =
    document.body;

  body.classList.remove(
    "theme-space",
    "theme-dino",
    "theme-pirate",
    "theme-wizard"
  );

  body.classList.add(
    `theme-${BOOKS[currentBook].theme}`
  );
}