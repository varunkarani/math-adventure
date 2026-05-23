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
    }

  ]
},

{
  title:"🐠 Ocean Rescue",
  theme:"space",

  pages:[

    {
      art:"🌊 🐠 🚤 ☀️ 🐚",
      text:"Ryan sped across the sparkling ocean in a bright yellow rescue boat while salty wind rushed through his hair. Seagulls circled overhead and giant waves shimmered beneath the afternoon sun. Suddenly, Ryan spotted something moving helplessly near the rocks."
    }

  ]
},

{
  title:"🤖 Robot City",
  theme:"wizard",

  pages:[

    {
      art:"🤖 🌆 ⚡ 🚶 ✨",
      text:"Ryan arrived in Robot City just as the enormous silver gates opened automatically before him. Thousands of glowing robots zipped through giant futuristic streets carrying floating packages, blinking gadgets, and sparkling batteries."
    }

  ]
},

{
  title:"🐉 Dragon Mountain",
  theme:"wizard",

  pages:[

    {
      art:"⛰️ 🐉 🌫️ 🔥 ⭐",
      text:"Ryan climbed slowly toward Dragon Mountain while warm smoke drifted through the clouds high above the valley. The mountain rumbled softly beneath his boots like a sleeping giant."
    }

  ]
},

{
  title:"🚂 Magic Train",
  theme:"pirate",

  pages:[

    {
      art:"🚂 🌙 ✨ 🌌 🎫",
      text:"Ryan boarded the Magic Train just before midnight while glowing stars drifted gently through the station above him. The conductor smiled warmly and stamped Ryan's golden ticket."
    }

  ]
},

{
  title:"🦁 Jungle Quest",
  theme:"dino",

  pages:[

    {
      art:"🌴 🦁 🍃 🌺 ☀️",
      text:"Ryan stepped into the deep jungle where giant flowers bloomed beside roaring waterfalls and mysterious animal footprints covered the muddy ground."
    },

    {
      art:"🐒 🍌 🌴 🦜 ✨",
      text:"Playful monkeys swung through the trees tossing bananas while colorful parrots screeched overhead. The jungle buzzed loudly with life all around him."
    },

    {
      art:"🦁 🌿 👀 🌴 ⭐",
      text:"Suddenly, a majestic lion emerged slowly from the tall grass. Ryan froze nervously while the lion stared at him with enormous golden eyes."
    },

    {
      art:"🌊 🌴 🦁 🌺 🍃",
      text:"Instead of roaring, the lion calmly walked beside Ryan guiding him deeper into the jungle toward hidden rivers and ancient ruins."
    },

    {
      art:"🌧️ 🌪️ 🌴 ⚡ 🦁",
      text:"Heavy rain suddenly poured across the jungle while thunder shook the trees. Ryan and the lion hurried together searching for shelter."
    },

    {
      art:"🔥 🌴 🦁 ⭐ 🌧️",
      text:"Inside a hidden cave, Ryan built a warm campfire while rain crashed outside. The lion rested quietly nearby guarding the entrance."
    },

    {
      art:"🌈 🌴 ☀️ 🦁 ✨",
      text:"By morning, the storm had passed and beautiful sunlight streamed through the jungle leaves while birds sang loudly overhead."
    },

    {
      art:"🏆 🦁 🌈 🌴 ⭐",
      text:"Before leaving the jungle, the animals gathered around Ryan while the lion bowed its enormous head proudly. Ryan had become the Guardian of the Jungle."
    }

  ]
},

{
  title:"🏎️ Speed Racer",
  theme:"pirate",

  pages:[

    {
      art:"🏎️ 🌆 💨 🚦 ⭐",
      text:"Ryan tightened his racing gloves and stepped toward the starting line of the biggest championship race in the world. Giant crowds roared from glowing stadium towers above him."
    },

    {
      art:"🚗 💨 🏁 🌃 ⚡",
      text:"Bright race cars blasted through neon city streets while sparks flew from the tires around dangerous corners."
    },

    {
      art:"🌧️ 🏎️ ⚡ 🌪️ 💨",
      text:"Suddenly, rain poured onto the slippery track forcing Ryan to steer carefully while lightning flashed overhead."
    },

    {
      art:"🚀 🏎️ 🌈 💨 ⭐",
      text:"Ryan activated turbo boost and his car surged forward like a rocket leaving glowing rainbow streaks behind him."
    },

    {
      art:"🛞 🌃 💨 ⚡ 🏁",
      text:"The final lap became dangerously close as rival racers swerved beside Ryan through tight city streets."
    },

    {
      art:"🌉 🏎️ 🌌 💨 🌟",
      text:"Ryan sped across giant bridges high above the city skyline while fireworks exploded across the night sky."
    },

    {
      art:"🏁 🚗 🌈 ⭐ 🎉",
      text:"The crowd erupted into cheers as Ryan crossed the finish line in first place beneath exploding confetti cannons."
    },

    {
      art:"🏆 🏎️ 🌟 🎉 ✨",
      text:"Ryan lifted the giant golden trophy high above his head while cameras flashed everywhere around him. Tonight, he had become the world's youngest Speed Racer champion."
    }

  ]
},

{
  title:"❄️ Ice Kingdom",
  theme:"space",

  pages:[

    {
      art:"❄️ 🏰 🌨️ ⭐ 👑",
      text:"Ryan stepped carefully into the Ice Kingdom where giant frozen castles shimmered beneath glowing northern lights dancing across the sky."
    },

    {
      art:"⛄ ❄️ 🦊 🌨️ ✨",
      text:"Snow foxes darted playfully across icy hills while sparkling snowflakes settled softly onto Ryan's coat."
    },

    {
      art:"🧊 🌌 ❄️ 🌈 ⭐",
      text:"Deep inside an enormous ice cave, glowing crystals reflected magical colors across the frozen walls like shimmering mirrors."
    },

    {
      art:"👑 ❄️ 🏰 🌨️ ✨",
      text:"The Queen of the Ice Kingdom explained sadly that the magical Crystal Crown had disappeared during the great snowstorm."
    },

    {
      art:"🌨️ 🌪️ ❄️ ⚡ 🏔️",
      text:"Ryan traveled through freezing winds and giant snowstorms searching across icy mountains for the missing crown."
    },

    {
      art:"🧊 ⭐ 👑 ❄️ ✨",
      text:"At last, Ryan discovered the Crystal Crown buried beneath glowing ice deep inside the mountain caves."
    },

    {
      art:"🌅 ❄️ 🏰 🌈 ☀️",
      text:"The moment the crown returned to the kingdom, warm sunlight broke through the clouds and the frozen castles glowed brilliantly."
    },

    {
      art:"🏆 👑 ❄️ 🌟 ✨",
      text:"The Queen thanked Ryan by naming him Royal Protector of the Ice Kingdom while snowflakes sparkled gently through the golden sunrise."
    }

  ]
},

{
  title:"🦸 Superhero Academy",
  theme:"wizard",

  pages:[

    {
      art:"🦸 🏫 ⚡ 🌟 🚀",
      text:"Ryan arrived at Superhero Academy where students practiced flying, strength training, and laser vision inside enormous futuristic training arenas."
    },

    {
      art:"💥 🦸 ⚡ 🏃 🌈",
      text:"Ryan raced through obstacle courses while training robots launched foam meteors and spinning laser targets through the air."
    },

    {
      art:"🛡️ ⚡ 🌆 🚨 ⭐",
      text:"Emergency alarms suddenly echoed across the academy after a giant training robot accidentally escaped into the nearby city."
    },

    {
      art:"🌃 🤖 ⚡ 🚓 🌪️",
      text:"Ryan sprinted through the glowing streets while the runaway robot accidentally knocked over signs, cars, and giant billboards."
    },

    {
      art:"🦸 🤖 ⚡ 🌃 💥",
      text:"Instead of fighting angrily, Ryan used quick thinking and teamwork to calm the frightened robot safely."
    },

    {
      art:"⚡ 🌈 🦸 🤝 🤖",
      text:"The robot explained that it became scared during training and simply wanted somewhere quiet to hide."
    },

    {
      art:"🌟 🏫 🎉 ⚡ 🦸",
      text:"Back at the academy, the teachers praised Ryan for showing kindness, patience, and courage instead of using force."
    },

    {
      art:"🏆 🦸 🌟 ⚡ 🎉",
      text:"The academy awarded Ryan the Hero Star Medal while giant fireworks exploded high above the superhero towers and students cheered his name."
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