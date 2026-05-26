const CACHE_NAME =
  "ryan-adventure-v36";

const FILES_TO_CACHE = [

  "./",
  "./index.html",
  "./style.css",

  /* JS */
  "./js/app.js",
  "./js/math.js",
  "./js/story.js",
  "./js/spelling.js",
  "./js/spellingwords.js",

  /* AUDIO */
  "./audio/Space.mp3",
  "./audio/Dino.mp3",
  "./audio/Pirate.mp3",
  "./audio/Wizard.mp3",
  "./audio/Ice.mp3",
  "./audio/Train.mp3"

];

/* ========================= */
/* INSTALL */
/* ========================= */

self.addEventListener(
  "install",
  (event) => {

    event.waitUntil(

      caches.open(CACHE_NAME)
      .then((cache) => {

        return cache.addAll(
          FILES_TO_CACHE
        );

      })

    );

    self.skipWaiting();

  }
);

/* ========================= */
/* ACTIVATE */
/* ========================= */

self.addEventListener(
  "activate",
  (event) => {

    event.waitUntil(

      caches.keys()
      .then((cacheNames) => {

        return Promise.all(

          cacheNames.map(
            (cache) => {

              if(
                cache !== CACHE_NAME
              ){

                return caches.delete(
                  cache
                );

              }

            }
          )

        );

      })

    );

    self.clients.claim();

  }
);

/* ========================= */
/* FETCH */
/* ========================= */

self.addEventListener(
  "fetch",
  (event) => {

    event.respondWith(

      caches.match(
        event.request
      ).then((response) => {

        return (
          response ||
          fetch(event.request)
        );

      })

    );

  }
);