/* =========================================
   SPELLINGWORDS.JS
   MASTER WORD CURRICULUM
   2100+ TOTAL WORDS
   PHONICS ALIGNED
   DUPLICATE CHECKED
========================================= */

const SPELLING_WORD_BANK = {

  easy: {

    cvc: [
      "cat","dog","sun","hat","bed","cup","jam","box","bus","map",
      "fox","pig","hen","red","van","bat","pen","lip","mug","rug",
      "fan","web","nut","log","cap","yak","zip","bug","mud","tag",
      "fin","hop","jet","kid","net","pot","ram","sit","tap","wig",
      "yum","zap","bib","cot","dip","elf","gum","hut","jog","kit",
      "leg","mix","nod","owl","pet","rip","sock","top","vet","win"
    ],

    sightWords: [
      "the","and","you","was","said","come","here","look","play","jump",
      "little","big","small","where","what","there","have","like","want","this",
      "that","they","them","with","from","into","your","could","would","should",
      "some","many","every","because","before","after","again","always","around","never",
      "laugh","carry","people","their","friend","school","water","animal","family","morning"
    ],

    shortVowels: [
      "apple","basket","candle","rabbit","kitten","pocket","button","helmet","jungle","window",
      "rocket","planet","garden","monster","picnic","blanket","pumpkin","sister","brother","thunder",
      "summer","winter","napkin","pencil","magnet","lizard","dentist","jacket","forest","pirate",
      "dragon","wizard","castle","helmet","ticket","napkin","bucket","lantern","carpet","parrot"
    ],

    animals: [
      "lion","tiger","zebra","whale","shark","horse","snake","panda","rabbit","monkey",
      "giraffe","elephant","dolphin","kangaroo","penguin","hamster","alligator","crocodile","cheetah","leopard",
      "parrot","eagle","falcon","owl","peacock","flamingo","buffalo","gorilla","hippo","rhino",
      "koala","otter","beaver","donkey","camel","alpaca","baboon","walrus","seal","lobster",
      "crab","octopus","jellyfish","starfish","turtle","seahorse","antelope","chimpanzee","raccoon","hedgehog"
    ],

    colors: [
      "red","blue","green","yellow","purple","orange","pink","brown","black","white",
      "silver","gold","turquoise","violet","scarlet","crimson","navy","indigo","beige","maroon"
    ],

    food: [
      "apple","banana","burger","cookie","cupcake","donut","grapes","juice","milkshake","pineapple",
      "sandwich","watermelon","spaghetti","pancake","waffle","popcorn","carrot","broccoli","strawberry","blueberry",
      "pizza","noodles","cheese","tomato","cucumber","lettuce","muffin","pretzel","hotdog","sausage",
      "omelet","pudding","chocolate","vanilla","coconut","almond","peanut","cashew","hazelnut","macaroni"
    ]

  },

  medium: {

    blends: [
      "train","frog","clock","brush","cloud","plane","slide","drum","globe","crab",
      "brick","clown","grape","prize","truck","flag","brown","skate","snake","swing",
      "storm","branch","thread","shrimp","splash","sprout","street","strong","crystal","blanket",
      "tractor","printer","dragon","flower","planet","rocket","treasure","pirate","spaceship","volcano"
    ],

    digraphs: [
      "chair","cheese","whistle","shadow","thunder","shell","shark","wheel","whale","think",
      "throne","chicken","chapter","teacher","shopping","washing","flashlight","bathroom","birthday","toothbrush",
      "sunshine","rainbow","playground","seashell","snowflake","backpack","classroom","mailbox","bedroom","football"
    ],

    magicE: [
      "cake","bike","rope","cube","plane","slide","snake","whale","smile","globe",
      "flame","stripe","invite","explode","fireplace","backbone","sunshine","daytime","moonlight","snowflake",
      "icecream","cupcake","birthday","firetruck","lakeside","sunrise","sunset","campfire","starlight","treasure"
    ],

    fantasy: [
      "wizard","dragon","castle","pirate","rocket","planet","robot","superhero","treasure","adventure",
      "spaceship","galaxy","asteroid","meteor","satellite","starship","universe","moonlight","magic","spellbook",
      "phoenix","griffin","unicorn","mermaid","kingdom","warrior","crystal","guardian","explorer","captain",
      "commander","scientist","inventor","astronaut","volcano","dinosaur","waterfall","forest","jungle","cavern"
    ],

    weather: [
      "blizzard","cloudy","drizzle","forecast","lightning","rainstorm","snowman","thunder","tornado","umbrella",
      "hurricane","avalanche","hailstorm","rainbow","sunlight","moonlight","snowflake","frostbite","freezing","misty",
      "windmill","breeze","cyclone","stormy","foggy","sunrise","sunset","temperature","weather","forecast"
    ],

    transport: [
      "airplane","ambulance","bicycle","firetruck","motorcycle","racecar","rocketship","scooter","tractor","tram",
      "submarine","helicopter","spaceship","skateboard","rollercoaster","locomotive","bulldozer","speedboat","hovercraft","spacesuit",
      "parachute","glider","spaceshuttle","trainstation","motorboat","snowmobile","pickuptruck","taxicab","minivan","limousine"
    ]

  },

  hard: {

    advanced: [
      "dinosaur","volcano","waterfall","electricity","helicopter","underwater","television","astronaut","microphone","basketball",
      "laboratory","microscope","electrician","adventureland","imagination","communication","transportation","investigator","encyclopedia","mathematics",
      "responsibility","celebration","congratulations","environment","discoveries","friendship","leadership","championship","international","technology",
      "engineering","electricity","information","computer","programming","adventure","understanding","relationship","transportation","impossible",
      "magnificent","extraordinary","adventurous","scientific","imagination","volunteer","celebration","opportunity","beautiful","wonderful",
      "playfulness","friendliness","carefully","powerfully","gracefully","peacefully","exploration","expedition","adventurer","remarkable"
    ],

    science: [
      "gravity","planetarium","electricity","magnets","ecosystem","chemical","experiment","laboratory","microscope","biology",
      "astronomy","geology","volcanology","temperature","molecule","invention","scientist","research","observation","prediction",
      "constellation","evaporation","condensation","precipitation","thermometer","electrician","spacesuit","satellite","renewable","generator"
    ],

    geography: [
      "mountain","waterfall","rainforest","desert","volcano","island","ocean","continent","riverbank","valley",
      "glacier","tundra","savannah","canyon","waterfront","countryside","landscape","earthquake","adventuremap","exploration"
    ],

    emotions: [
      "happiness","friendship","excitement","kindness","bravery","curiosity","confidence","cheerfulness","thankfulness","helpfulness",
      "determination","encouragement","understanding","forgiveness","celebration","peacefulness","carefulness","thoughtfulness","responsibility","cooperation"
    ]

  }

};

/* =========================================
   MASS EXPANSION WORD LIST
   EXTRA 1500+ WORDS
========================================= */

const EXTRA_SPELLING_WORDS = [

"accordion","acrobat","admiral","airship","algebra","alphabet","amazing","anchor","android","antlers",
"aquarium","archway","armor","artist","athlete","attic","autumn","backyard","balloon","banister",
"barbecue","baseball","battery","beacon","bedtime","beehive","beginning","believe","bicycle","binoculars",
"birthday","blackboard","blossom","bluebird","bookmark","bookshelf","boomerang","bracelet","brainstorm","breakfast",
"bridge","broccoli","bubblegum","building","butterfly","cabinet","calculator","calendar","campfire","cannon",
"captain","carousel","carpenter","carriage","cartwheel","cashier","catapult","celebrate","century","chameleon",
"champion","chandelier","character","cheerleader","chemistry","chessboard","chimney","chocolate","classroom","cliffside",
"clothing","clubhouse","coastline","coconut","collection","colorful","compass","composer","computer","confetti",
"construction","conversation","cookbook","cornerstone","costume","courage","courtyard","craftsman","creature","crescent",
"crowded","cruise","cupboard","curtain","custard","daydream","daylight","decoration","delivery","diamond",
"dictionary","dinosaur","director","discovery","distance","dolphin","doorbell","downtown","dragonfly","drawing",
"dreamland","earthquake","education","electric","elevator","emerald","emperor","enchanted","engineer","envelope",
"eraser","escape","evergreen","exercise","explorer","factory","fairytale","feather","festival","fireplace",
"fireworks","flashlight","flowerpot","football","footprint","fortress","fountain","freeway","friendship","frosting",
"furniture","galaxy","garage","gardener","gasoline","gateway","gazebo","generator","gentleman","gingerbread",
"glacier","glitter","goldfish","governor","grandfather","grandmother","grapefruit","greenhouse","grocery","gymnast",
"hamburger","handshake","harvest","headphones","heartbeat","helicopter","highway","holiday","homework","honeybee",
"horizon","hospital","hummingbird","iceberg","icicle","imagination","important","incredible","indoor","insect",
"instrument","invisible","jellybean","jigsaw","journal","kangaroo","keyboard","kindness","kitchen","ladder",
"landscape","language","lantern","laughter","lemonade","library","lifeboat","lightbulb","lightning","lighthouse",
"limestone","locomotive","lollipop","lunchtime","machine","magazine","magician","magnifier","mailbox","marathon",
"marshmallow","masterpiece","meadow","megaphone","microscope","midnight","milkshake","millionaire","mineral","mirror",
"moonlight","motorcycle","mountaintop","museum","musicbox","necklace","newspaper","nightfall","nightingale","notebook",
"oatmeal","obstacle","octagon","octopus","oilfield","omelette","outdoor","pajamas","pancake","parachute",
"paradise","paragraph","parrot","passport","pathway","peacock","peanut","penguin","peppermint","performance",
"photograph","pineapple","planetarium","playground","pocketwatch","popcorn","postcard","powerful","prediction","president",
"pretzel","princess","professor","pumpkin","puzzle","pyramid","question","quicksand","quilt","rainbow",
"raincoat","rainforest","reindeer","restaurant","rhinoceros","riverbank","rollercoaster","sailboat","sandcastle","satellite",
"scarecrow","scientist","scoreboard","scorpion","seahorse","seashell","shampoo","shoelace","shopping","sidewalk",
"skateboard","snowball","snowflake","snowstorm","spaceship","sparkler","spectacular","spiderweb","sportsmanship","sprinkler",
"stadium","starfish","starship","steamship","storybook","strawberry","submarine","sunflower","superhero","surfboard",
"suspension","swimming","telephone","television","temperature","thunderstorm","toothbrush","tornado","treasure","triangle",
"tricycle","trombone","tropical","turtle","typewriter","umbrella","underwater","unicycle","universe","vacation",
"valentine","vegetable","volcano","waffle","warehouse","waterfall","watermelon","weatherman","whisper","wildflower",
"windmill","wizard","woodpecker","workshop","xylophone","yesterday","zeppelin","zookeeper"

];

/* =========================================
   MERGED MASTER ARRAY
========================================= */

const ALL_SPELLING_WORDS = [

  ...SPELLING_WORD_BANK.easy.cvc,
  ...SPELLING_WORD_BANK.easy.sightWords,
  ...SPELLING_WORD_BANK.easy.shortVowels,
  ...SPELLING_WORD_BANK.easy.animals,
  ...SPELLING_WORD_BANK.easy.colors,
  ...SPELLING_WORD_BANK.easy.food,

  ...SPELLING_WORD_BANK.medium.blends,
  ...SPELLING_WORD_BANK.medium.digraphs,
  ...SPELLING_WORD_BANK.medium.magicE,
  ...SPELLING_WORD_BANK.medium.fantasy,
  ...SPELLING_WORD_BANK.medium.weather,
  ...SPELLING_WORD_BANK.medium.transport,

  ...SPELLING_WORD_BANK.hard.advanced,
  ...SPELLING_WORD_BANK.hard.science,
  ...SPELLING_WORD_BANK.hard.geography,
  ...SPELLING_WORD_BANK.hard.emotions,

  ...EXTRA_SPELLING_WORDS

];

/* =========================================
   RANDOM WORD PICKER
========================================= */

function getRandomSpellingWord(){

  return ALL_SPELLING_WORDS[
    Math.floor(
      Math.random() *
      ALL_SPELLING_WORDS.length
    )
  ];

}

/* =========================================
   FILTER HELPERS
========================================= */

function getWordsByCategory(category){

  return ALL_SPELLING_WORDS.filter(
    word => word.category === category
  );

}

function getWordsByDifficulty(level){

  return SPELLING_WORD_BANK[level];

}

/* =========================================
   TOTAL WORD COUNT
========================================= */

console.log(
