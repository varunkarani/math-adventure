/* =========================================
   RYAN'S SPELLING WORDS
   FULL GAME WORD DATABASE
========================================= */

const SPELLING_WORD_BANK = {

  easy: {

    basics: [
      "cat","dog","sun","hat","bat","pen","cup","bed","jam","fox",
      "fish","tree","milk","book","ball","duck","frog","lamp","sock","ring",
      "apple","banana","cookie","pizza","water","happy","yellow","purple","green","orange",
      "house","window","garden","flower","rocket","planet","school","teacher","friend","family"
    ],

    animals: [
      "cat","dog","lion","tiger","zebra","monkey","horse","snake","rabbit","panda",
      "koala","shark","whale","dolphin","camel","sheep","goat","mouse","otter","penguin"
    ],

    food: [
      "apple","cake","pizza","pasta","burger","cheese","bread","carrot","cookie","juice",
      "banana","orange","grapes","melon","mango","rice","noodle","waffle","donut","popcorn"
    ]

  },

  medium: {

    nature: [
      "mountain","rainbow","waterfall","sunshine","forest","ocean","volcano","thunder","lightning","desert",
      "river","island","snowflake","blizzard","tornado","hurricane","canyon","jungle","valley","glacier"
    ],

    space: [
      "planet","rocket","astronaut","galaxy","meteor","satellite","spaceship","comet","nebula","starlight",
      "moonlight","gravity","telescope","universe","asteroid","orbit","capsule","launch","cosmos","alien"
    ],

    vehicles: [
      "airplane","helicopter","submarine","motorcycle","tractor","bulldozer","ambulance","firetruck","spaceship","scooter",
      "train","wagon","skateboard","yacht","ferry","racecar","pickup","van","jeep","taxi"
    ]

  },

  hard: {

    adventure: [
      "treasure","adventure","discovery","explorer","mysterious","dangerous","enchanted","crystalline","waterfall","forgotten",
      "legendary","invisible","magnificent","spectacular","protective","powerful","lightning","thunderstorm","volcanic","adventurer"
    ],

    magic: [
      "wizard","dragon","phoenix","spellbook","potion","enchanted","crystal","invisible","magician","cauldron",
      "lightning","fireball","wand","sorcery","mystical","illusion","guardian","castle","unicorn","griffin"
    ],

    science: [
      "electricity","experiment","laboratory","chemical","gravity","energy","microscope","technology","invention","engineering",
      "generator","computer","mechanical","magnetic","reaction","circuit","battery","satellite","formula","oxygen"
    ]

  },

  animals: {

    jungle: [
      "lion","tiger","elephant","giraffe","monkey","gorilla","cheetah","hippopotamus","crocodile","chimpanzee",
      "parrot","toucan","panther","leopard","buffalo","hyena","rhino","baboon","gazelle","jaguar"
    ],

    ocean: [
      "whale","dolphin","octopus","starfish","jellyfish","stingray","lobster","seahorse","hammerhead","penguin",
      "seal","walrus","shrimp","turtle","coral","shark","squid","crab","clam","urchin"
    ],

    farm: [
      "chicken","cow","pig","horse","goose","turkey","sheep","donkey","rabbit","rooster",
      "duckling","kitten","puppy","goat","llama","alpaca","barn","tractor","haystack","pasture"
    ]

  },

  dinosaurs: {

    dinos: [
      "tyrannosaurus","triceratops","velociraptor","stegosaurus","brachiosaurus","ankylosaurus","pterodactyl","diplodocus","spinosaurus","allosaurus",
      "fossil","prehistoric","volcano","meteorite","extinction","claws","tail","scales","eggshell","roaring"
    ]

  },

  pirates: {

    piratewords: [
      "pirate","treasure","captain","parrot","compass","shipwreck","cannon","island","ocean","anchor",
      "sailor","harbor","goldcoin","cutlass","map","voyage","captaincy","adventure","stormy","crew"
    ]

  },

  magic: {

    wizardry: [
      "wizard","spell","dragon","castle","phoenix","magic","enchanted","wand","potion","cauldron",
      "griffin","sorcery","crystal","spellbook","cloak","mystical","guardian","fireball","alchemy","floating"
    ]

  },

  vehicles: {

    transport: [
      "airplane","submarine","helicopter","motorcycle","spaceship","racecar","ambulance","firetruck","scooter","bulldozer",
      "tractor","wagon","taxi","pickup","ferry","train","bicycle","yacht","van","jeep"
    ]

  }

};

/* =========================================
   CONVERT WORD BANK
   INTO SPELLING_WORDS ARRAY
========================================= */

const SPELLING_WORDS = [];

Object.keys(SPELLING_WORD_BANK).forEach(level => {

  const categories =
    SPELLING_WORD_BANK[level];

  Object.keys(categories).forEach(category => {

    categories[category].forEach(word => {

      SPELLING_WORDS.push({

        word: word,

        level: level,

        category: category,

        theme: category,

        emoji: getEmoji(category)

      });

    });

  });

});

function getEmoji(category){

  const emojis = {

    basics:"✨",
    animals:"🦁",
    jungle:"🌴",
    ocean:"🌊",
    farm:"🚜",
    food:"🍕",
    space:"🚀",
    vehicles:"🚗",
    transport:"🚂",
    dinos:"🦖",
    dinosaurs:"🦕",
    pirates:"🏴‍☠️",
    piratewords:"⚓",
    magic:"🧙",
    wizardry:"🔮",
    science:"⚡",
    nature:"🌈",
    adventure:"🗺️"

  };

  return emojis[category] || "✨";

}

window.SPELLING_WORDS =
  SPELLING_WORDS;

console.log(
  "SPELLING WORDS LOADED:",
  SPELLING_WORDS.length
);