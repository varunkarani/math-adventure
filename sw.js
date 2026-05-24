self.addEventListener("install", (e) => {

  e.waitUntil(

    caches.open("math-adventure-v17").then((cache) => {

      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./js/app.js",
        "./js/math.js",
        "./js/story.js"
      ]);

    })

  );
});

self.addEventListener("fetch", (e) => {

  e.respondWith(

    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })

  );
});