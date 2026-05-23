let currentBook = 0;

let storyPage = 0;

const BOOKS = [

{
  title:"🚀 Space Mission",
  theme:"space",

  pages:[

    {
      art:"🌌 🚀 ✨ 🛰️ 🌕",
      text:"Ryan pressed his face gently against the spaceship window and watched Earth drift farther and farther away into the darkness of space. Tiny stars sparkled endlessly around the ship like glowing diamonds scattered across black velvet. Captain Nova walked quietly beside him and clipped a silver explorer badge onto his jacket. 'Tonight,' she whispered with a smile, 'you are part of the most important space mission in the galaxy.' Ryan felt his stomach flutter with excitement."
    },

    {
      art:"🧑‍🚀 🌍 🚀 ⭐ 🪐",
      text:"Inside the spaceship, glowing buttons blinked softly across the giant control panels while helper robots rolled busily across the shiny silver floors carrying tools, helmets, and steaming cups of hot chocolate. Ryan carefully buckled himself into the captain's chair and looked up through the giant glass ceiling where colorful planets floated silently through space like enormous glowing marbles."
    },

    {
      art:"🌕 💎 ✨ 🛰️ 🌌",
      text:"Captain Nova pointed toward the moon through the front window of the ship. 'Deep inside the crystal caves,' she explained carefully, 'there are glowing moon crystals powerful enough to light entire cities back on Earth.' Ryan's eyes widened. He had searched for shells on beaches before, but never for magical crystals hidden on the moon."
    },

    {
      art:"👾 🚀 🌠 🛸 ✨",
      text:"Suddenly, alarms beeped gently as a tiny alien spaceship zoomed beside them doing playful loops through the stars. A friendly green alien wearing oversized goggles waved excitedly through the window while floating upside down inside its ship. Ryan burst into laughter and waved both hands back enthusiastically."
    },

    {
      art:"🌌 🌠 🪐 🚀 ⭐",
      text:"The spaceship traveled deeper into space where giant rings circled distant planets and shooting stars streaked across the darkness. Ryan could hardly believe how enormous the universe felt. Every direction seemed endless. Captain Nova smiled softly. 'Space reminds us how much there still is to discover,' she said."
    },

    {
      art:"🌕 🚀 👨‍🚀 💫 🌌",
      text:"As the ship finally landed on the moon, soft silver dust floated gently through the air around them. Ryan carefully stepped outside wearing his shiny moon boots. Each step felt light and bouncy, almost like hopping slowly across invisible trampolines."
    },

    {
      art:"💎 🌕 ✨ 🪨 ⭐",
      text:"Inside the crystal caves, thousands of glowing blue crystals shimmered across the walls, ceiling, and floor. The cave sparkled so brightly that Ryan felt as though he had stepped inside a frozen palace made entirely of stars. Tiny reflections danced across his helmet while the crystals hummed softly around him."
    },

    {
      art:"🤖 💎 🚀 🛰️ 🌌",
      text:"The helper robots rolled forward carrying crystal baskets while Ryan carefully collected the glowing stones one by one. Captain Nova explained how the crystals would help power schools, hospitals, homes, and rocket stations back on Earth. Ryan felt proud knowing he was helping millions of people he had never even met."
    },

    {
      art:"🌠 👾 🚀 🌌 ⭐",
      text:"Before leaving the moon, the tiny alien returned carrying a mysterious glowing box. Inside was a sparkling sticker shaped like a rocket ship surrounded by tiny silver stars. Even though they spoke different languages, Ryan somehow understood exactly what the alien meant. Thank you for being kind."
    },

    {
      art:"🌍 🚀 🏆 ✨ 🌈",
      text:"When the spaceship finally returned home, giant crowds gathered beneath the landing station cheering loudly as Ryan stepped outside. Cameras flashed everywhere while fireworks exploded brightly across the night sky. Captain Nova placed a golden medal around Ryan's neck and proudly announced, 'Today, Ryan became the youngest Space Explorer in history.' Ryan looked up at the stars one more time and smiled, already wondering where his next adventure might take him."
    }

  ]
},

{
  title:"🦖 Dino Island",
  theme:"dino",

  pages:[

    {
      art:"🌴 🦖 🌋 ☀️ 🍃",
      text:"Ryan climbed carefully out of the tiny jungle airplane and stared across Dino Island in amazement. Giant palm trees swayed slowly in the warm breeze while enormous dinosaur footsteps shook the ground beneath him. Somewhere deep inside the jungle, a creature roared so loudly that birds exploded upward from the trees."
    },

    {
      art:"🥚 🦕 ✨ 🌿 🌈",
      text:"Near a sparkling waterfall, Ryan discovered a giant dinosaur egg resting beside the rocks. Tiny cracks slowly spread across the shell until suddenly a baby dinosaur poked out its tiny nose and squeaked happily. Ryan gently patted its soft head while the little dinosaur blinked curiously at him."
    },

    {
      art:"🍉 🦖 🌴 🍃 ☀️",
      text:"The baby dinosaur followed Ryan everywhere through the jungle. Together they explored winding paths covered in colorful flowers, giant vines, and glowing insects fluttering through the humid air. Ryan fed the hungry dinosaur sweet jungle melons which disappeared in seconds."
    },

    {
      art:"🌋 🔥 🦖 🌪️ 🌴",
      text:"Suddenly, the volcano at the center of the island rumbled loudly. Dust drifted from the trees while the dinosaurs began running nervously through the jungle. Ryan could feel the ground trembling beneath his boots as distant lava glowed red against the darkening sky."
    },

    {
      art:"🦕 🌊 🏝️ 🌈 ☀️",
      text:"Ryan quickly guided the baby dinosaur and several smaller dinosaurs safely toward the beach while warm smoke drifted into the air behind them. Giant dinosaurs surrounded Ryan protectively, trusting him completely."
    },

    {
      art:"🌴 🦖 🍃 🐾 🌺",
      text:"Later that evening, Ryan explored the island riding carefully on the back of a gentle giant dinosaur. From high above the jungle, he could see waterfalls crashing into rivers, glowing flowers swaying in the breeze, and tiny dinosaurs racing through the trees below."
    },

    {
      art:"🌌 🔥 🦖 ⭐ 🌙",
      text:"That night, Ryan and the dinosaurs gathered beside a warm campfire beneath the stars. Fireflies drifted through the air like floating lanterns while the baby dinosaur curled beside Ryan and fell asleep making tiny squeaking snores."
    },

    {
      art:"🌋 🌈 🦖 ☀️ 🌴",
      text:"By morning, the volcano had finally grown quiet again. Warm sunlight poured across the island while the dinosaurs slowly returned to the jungle. Ryan realized Dino Island was not dangerous at all. It was simply wild, ancient, and full of life."
    },

    {
      art:"🏆 🦕 🌈 🌴 ☀️",
      text:"Before Ryan flew home, the dinosaurs gathered together and presented him with a beautiful necklace made from colorful jungle stones and polished seashells. The baby dinosaur gave one final happy squeak before Ryan boarded the airplane smiling proudly. He knew he would never forget Dino Island."
    }

  ]
},

{
  title:"🏴‍☠️ Pirate Treasure",
  theme:"pirate",

  pages:[

    {
      art:"🌊 ⛵ 🏴‍☠️ ☀️ 🦜",
      text:"Captain Ryan stood proudly at the front of his pirate ship while giant ocean waves splashed around them. His colorful parrot balanced perfectly on his shoulder while the crew searched for the legendary rainbow treasure hidden somewhere beyond the misty horizon."
    },

    {
      art:"🗺️ ✨ 🪙 🌴 🌊",
      text:"One stormy evening, the parrot discovered a secret treasure map hidden beneath Captain Ryan's old pirate hat. The mysterious map glowed softly in the moonlight and pointed toward an island marked with a giant golden X."
    },

    {
      art:"⚓ 🌧️ 🌊 ⛵ 🌩️",
      text:"As the ship sailed deeper into unknown waters, thunder rumbled overhead while giant waves rocked the ship from side to side. Ryan held tightly onto the steering wheel while rain splashed across the deck."
    },

    {
      art:"🌊 🐋 ⛵ 🌈 ☀️",
      text:"The next morning, enormous whales surfaced beside the pirate ship spraying water high into the air. Dolphins leaped through the waves while sunlight sparkled brightly across the sea."
    },

    {
      art:"🏝️ 🌴 💰 ✨ 🦀",
      text:"At sunrise, the treasure island finally appeared through the fog. Golden sand glittered along the beach while tiny crabs hurried across the shore carrying colorful shells in their claws."
    },

    {
      art:"🪙 💎 🏴‍☠️ 🌈 ⭐",
      text:"Deep inside a hidden cave, Ryan discovered giant treasure chests overflowing with gold coins, sparkling jewels, glowing rainbow crystals, and ancient crowns covered in emeralds."
    },

    {
      art:"🦀 ⚔️ 🏝️ 🌊 ✨",
      text:"Suddenly, enormous crabs guarded the treasure path snapping their giant claws loudly. Ryan calmly offered them fruit from the ship's kitchen. The crabs happily shuffled aside and allowed the crew to continue."
    },

    {
      art:"🌅 ⛵ 💰 🌊 ☀️",
      text:"As the pirate ship sailed home beneath the orange sunset sky, the crew celebrated with music, dancing, and pirate songs. Ryan made sure every sailor received an equal share of treasure."
    },

    {
      art:"🏆 🌈 🏴‍☠️ ⭐ ☀️",
      text:"Back at the harbor, Captain Ryan became famous across the seven seas as the pirate who found the legendary rainbow treasure and shared it kindly with everyone. Even the parrot puffed out its chest proudly while crowds cheered from the docks."
    }

  ]
},

{
  title:"🧙 Wizard School",
  theme:"wizard",

  pages:[

    {
      art:"🏰 🧙 ✨ 🌙 📚",
      text:"Ryan arrived at Wizard School carrying a glowing spell book almost as large as himself. Floating lanterns drifted through the castle hallways while magical paintings waved hello from the stone walls."
    },

    {
      art:"🪄 🐉 🔥 ✨ 🌟",
      text:"During flying lessons, a tiny dragon accidentally sneezed fire across the classroom ceiling. Young wizards burst into laughter while Ryan carefully helped calm the nervous dragon."
    },

    {
      art:"📚 🦉 ✨ 🌌 🪄",
      text:"Every morning, magical owls delivered floating homework scrolls directly to students' desks. Ryan practiced simple spells that made feathers dance through the air like snowflakes."
    },

    {
      art:"🧪 💥 🌈 ✨ 🔮",
      text:"Inside the potion classroom, bubbling cauldrons filled the air with colorful smoke and sweet magical smells. Ryan mixed glowing ingredients together until his potion sparkled bright blue."
    },

    {
      art:"🌙 🏰 ⭐ 🧙 ✨",
      text:"At night, the castle towers glowed softly beneath the stars while students whispered magical stories beside giant fireplaces. Ryan wrapped himself in a warm wizard blanket and listened carefully."
    },

    {
      art:"🪄 🌟 📖 ✨ 🦉",
      text:"One afternoon, Ryan discovered a hidden library filled with ancient spell books stacked all the way to the ceiling. Dusty magical books floated gently through the air searching for readers."
    },

    {
      art:"🐉 🧙 🌈 🔥 ⭐",
      text:"The tiny dragon returned and proudly showed Ryan how to create harmless rainbow fire that sparkled beautifully without burning anything at all."
    },

    {
      art:"🌌 🔮 🏰 ✨ 🌙",
      text:"Late one evening, Ryan climbed to the tallest castle tower and gazed out across the glowing magical forests surrounding the school. Tiny lights flickered in the distance while owls soared silently through the night."
    },

    {
      art:"🏆 🧙‍♂️ 🌈 ✨ 🌟",
      text:"On the final day of wizard school, the head wizard awarded Ryan the Golden Wand of Courage for helping dragons, solving magical problems, and always showing kindness to others. The entire castle erupted into cheers while magical fireworks exploded overhead."
    },

{
  title:"🐠 Ocean Rescue",
  theme:"space",

  pages:[

    {
      art:"🌊 🐠 🚤 ☀️ 🐚",
      text:"Ryan sped across the sparkling ocean in a bright rescue boat when suddenly he spotted a baby dolphin tangled gently in seaweed near the rocks."
    },

    {
      art:"🐬 🌊 ✨ 🪸 🐠",
      text:"Carefully, Ryan climbed into the shallow water and untangled the frightened dolphin while colorful fish darted around his feet."
    },

    {
      art:"🪸 🐢 🌊 ⭐ 🐠",
      text:"The dolphin led Ryan toward a glowing coral reef filled with sea turtles, shimmering jellyfish, and giant rainbow shells."
    },

    {
      art:"🌪️ 🌊 🚤 ⚡ 🐬",
      text:"Dark storm clouds suddenly rolled overhead while giant waves crashed around the tiny rescue boat."
    },

    {
      art:"🌈 🐬 ☀️ 🌊 🏆",
      text:"After the storm passed, the dolphins leaped happily through the water beside Ryan's boat as the sunset painted the ocean gold."
    }

  ]
},

{
  title:"🤖 Robot City",
  theme:"wizard",

  pages:[

    {
      art:"🤖 🌆 ⚡ 🚶 ✨",
      text:"Ryan arrived in Robot City where glowing robots zipped through giant futuristic streets carrying floating packages and blinking gadgets."
    },

    {
      art:"🛠️ 🤖 ⚡ 💡 🌃",
      text:"Inside a huge workshop, Ryan helped a tiny robot repair its flickering light bulb eyes using sparkling energy crystals."
    },

    {
      art:"🚄 🌆 🤖 ✨ 🌈",
      text:"Magnetic trains zoomed silently above the city while giant holograms glowed brightly across the skyscrapers."
    },

    {
      art:"⚠️ 🤖 🌩️ 🔋 ⚡",
      text:"Suddenly, the city lost power and everything became dark except Ryan's glowing explorer badge."
    },

    {
      art:"🏆 ⚡ 🤖 🌆 🌟",
      text:"Ryan restored power to Robot City and the robots celebrated by lighting the sky with glowing fireworks."
    }

  ]
},

{
  title:"🐉 Dragon Mountain",
  theme:"wizard",

  pages:[

    {
      art:"⛰️ 🐉 🌫️ 🔥 ⭐",
      text:"Ryan climbed slowly toward Dragon Mountain where warm smoke drifted gently through the clouds high above the valley."
    },

    {
      art:"🥚 🐉 ✨ 🔥 🌙",
      text:"Inside a glowing cave, Ryan discovered dragon eggs resting beside rivers of sparkling lava."
    },

    {
      art:"🐉 🌈 🔥 🪄 ⭐",
      text:"A young dragon flapped excitedly around Ryan while blowing tiny rainbow flames into the air."
    },

    {
      art:"🌩️ ⛰️ 🐉 🌪️ ⚡",
      text:"A giant storm surrounded the mountain while the dragons circled protectively above Ryan."
    },

    {
      art:"🏆 🐉 🌅 ⛰️ ✨",
      text:"At sunrise, the dragons crowned Ryan an honorary Dragon Rider before soaring into the glowing sky."
    }

  ]
},

{
  title:"🚂 Magic Train",
  theme:"pirate",

  pages:[

    {
      art:"🚂 🌙 ✨ 🌌 🎫",
      text:"Ryan boarded the Magic Train just before midnight and watched glowing stars race beside the windows."
    },

    {
      art:"🍫 🚂 ☕ ✨ 🍪",
      text:"Friendly conductors served hot chocolate and giant cookies while magical music echoed softly through the train."
    },

    {
      art:"❄️ ⛄ 🚂 🌨️ ⭐",
      text:"The train passed snowy mountains where glowing snowflakes drifted slowly through the night sky."
    },

    {
      art:"🌉 🚂 🌈 🌌 ✨",
      text:"Ryan crossed a floating rainbow bridge high above the clouds while the passengers gasped in amazement."
    },

    {
      art:"🏆 🚂 🌅 🎫 ✨",
      text:"As sunrise appeared, Ryan stepped off the Magic Train holding a golden ticket for future adventures."
    }

  ]
},

{
  title:"🦁 Jungle Quest",
  theme:"dino",

  pages:[

    {
      art:"🌴 🦁 🍃 🌺 ☀️",
      text:"Ryan entered a deep jungle filled with giant flowers, roaring waterfalls, and mysterious animal footprints."
    },

    {
      art:"🐒 🍌 🌴 🦜 ✨",
      text:"Playful monkeys swung through the trees tossing bananas while colorful parrots screeched overhead."
    },

    {
      art:"🦁 🌿 👀 🌴 ⭐",
      text:"A majestic lion emerged slowly from the tall grass and stared curiously at Ryan."
    },

    {
      art:"🌧️ 🌪️ 🌴 ⚡ 🦁",
      text:"Heavy rain poured across the jungle while Ryan and the lion searched for shelter beneath giant trees."
    },

    {
      art:"🏆 🌈 🦁 ☀️ 🌴",
      text:"After the storm ended, the jungle animals gathered together and crowned Ryan the Guardian of the Jungle."
    }

  ]
},

{
  title:"🏎️ Speed Racer",
  theme:"pirate",

  pages:[

    {
      art:"🏎️ 🌆 💨 🚦 ⭐",
      text:"Ryan tightened his racing gloves and prepared for the biggest championship race in the world."
    },

    {
      art:"🚗 💨 🏁 🌃 ⚡",
      text:"Bright race cars zoomed around glowing city streets while giant crowds cheered from towering stadiums."
    },

    {
      art:"🌧️ 🏎️ ⚡ 🌪️ 💨",
      text:"Rain suddenly poured onto the slippery track forcing Ryan to steer carefully around dangerous corners."
    },

    {
      art:"🚀 🏎️ 🌈 💨 ⭐",
      text:"Ryan activated turbo boost and his car blasted forward like a rocket beneath sparkling lights."
    },

    {
      art:"🏆 🏁 🌟 🚗 🎉",
      text:"The crowd erupted into cheers as Ryan crossed the finish line and lifted the giant golden trophy high above his head."
    }

  ]
},

{
  title:"❄️ Ice Kingdom",
  theme:"space",

  pages:[

    {
      art:"❄️ 🏰 🌨️ ⭐ 👑",
      text:"Ryan stepped carefully into the Ice Kingdom where giant frozen castles shimmered beneath the northern lights."
    },

    {
      art:"⛄ ❄️ 🦊 🌨️ ✨",
      text:"Snow foxes darted playfully across the icy hills while tiny snowflakes sparkled in Ryan's hair."
    },

    {
      art:"🧊 🌌 ❄️ 🌈 ⭐",
      text:"Deep inside an ice cave, glowing crystals reflected magical colors across the frozen walls."
    },

    {
      art:"🌨️ 🌪️ ❄️ ⚡ 🏔️",
      text:"A giant snowstorm surrounded the kingdom while Ryan searched for the missing Crystal Crown."
    },

    {
      art:"🏆 👑 ❄️ 🌅 ✨",
      text:"Ryan restored peace to the Ice Kingdom and the frozen castles glowed beautifully beneath the sunrise."
    }

  ]
},

{
  title:"🦸 Superhero Academy",
  theme:"wizard",

  pages:[

    {
      art:"🦸 🏫 ⚡ 🌟 🚀",
      text:"Ryan arrived at Superhero Academy where students practiced flying, strength training, and laser vision inside enormous training arenas."
    },

    {
      art:"💥 🦸 ⚡ 🏃 🌈",
      text:"Ryan raced through obstacle courses while robots launched foam meteors through the air."
    },

    {
      art:"🛡️ ⚡ 🌆 🚨 ⭐",
      text:"Emergency alarms suddenly echoed across the academy after a giant training robot escaped into the city."
    },

    {
      art:"🦸 🤖 ⚡ 🌃 💥",
      text:"Ryan used quick thinking and teamwork to safely stop the runaway robot without hurting anyone."
    },

    {
      art:"🏆 🦸 🌟 ⚡ 🎉",
      text:"The academy awarded Ryan the Hero Star Medal while fireworks exploded high above the superhero towers."
    }

  ]
}

};

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
      document.createElement(
        "button"
      );

    card.className =
      "book-card";

    card.innerHTML = `

      <div class="book-title">
        ${book.title}
      </div>

      <div class="book-subtitle">
        ${book.pages.length} pages
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

  const progress =
    document.getElementById(
      "storyProgress"
    );

  if(progress){

    progress.innerHTML = `
      Page ${storyPage+1}
      of
      ${BOOKS[currentBook].pages.length}
    `;
  }

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