'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "890738a299af8cd7ac949e55c5941972",
"index.html": "160743a2c1ba893af7eba55e4f86e55f",
"/": "160743a2c1ba893af7eba55e4f86e55f",
"main.dart.js": "9c46eae0dc09073f205d386267dd74dd",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ba114508109c9413c4b803bc6b243c4c",
".git/config": "c1fcf9840261a44f854d8a6890ace142",
".git/objects/66/1a9e0d4fec64f48b0a1d10c879055aebb99421": "61650df26a3359c03617e8ffd623f42d",
".git/objects/57/24f527db3bc976203ff4317c166fa7200ed469": "35e37f19b7c409984ab96082407cb19c",
".git/objects/32/9bd6fd44069adf99ab509b1fdc9948597ec9c1": "a9528c11286b4b8519a0b6c570605750",
".git/objects/3c/4b1700ec1234a2d568b3d102b7e68add3d743f": "f69af86d69785fae00dc4303d53919e8",
".git/objects/56/5ddd873a9b8785cc25e598fa902cb6d5c26b74": "5fba9f7847e1757fb5d72a5b445fac7e",
".git/objects/94/37962b18d587c168c87eeddcf3c994f80e2ff1": "e46acbc2d663d0c8d67e39a005388c0f",
".git/objects/33/41067b1ca8f09b435f27bc4f4b57c76c5d7115": "b657db6293e7ee7a7571351a0f9d9bce",
".git/objects/02/5b25c27aae647e146418e2f8bc12260015382f": "8cd3550d8a2fb38cfcd67d7ea265f0c3",
".git/objects/b2/f7daca100957c47773fb6655226f57162811c7": "39b0fddd2bf0090977581234fe83fa95",
".git/objects/ac/e96594a11054055444d2d63be3d5b89ddd12d6": "ebba65cd6021cab638b30a3db605892e",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/bd/472f834c51fb670fbc38c1941990ba7e61379b": "98ad095398540c67d23bfce3224ae778",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/167c0e9aa39d45eeda4627baa9a09ae50c8836": "29e6199ada29a1e165599ab167106412",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/4c65f64eddb78f3e3a5ab8d818aaf17146f2c2": "ddb72cba18f882ad4a5feff904bd484e",
".git/objects/18/a2c743b43ebe876c43949d3d8a261d41bb80d0": "622ad5e58e1bdf5287f8965474be519b",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/45/8c7457d96ab072ac70854abd2d4318b8525eb8": "2b18cdbbc003accc8345a913525ad150",
".git/objects/87/6e4435463b9d9597f10bc98eda7413dcaf0dc7": "ba8cb39297d0b00720acfa57d0a41fec",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/892c0753c1767b46292c792c086b6bc34999a1": "17406aa10d690663170a344223eabf36",
".git/objects/43/84cb15fb41335b099eccb1f943b21dc84613b5": "8af11388a30a0cdc56718de4924f4c1f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/0a2c5f00603313618ab3977d21e40a2e12e81c": "18f2ddd9a115929027d2891092f5e3d5",
".git/objects/07/af044935e934772e26c25beeafaa8c2abcfc46": "afff111a659cfbe125b85551041b41ea",
".git/objects/09/1f965fcd30adb8d310cc96e2d7223dc9d8d746": "3909c26df6875dfdaff15134abc1c1c4",
".git/objects/09/aaca9fcc08ccfd0666b128a23a3ba6066757a5": "a6dc58a9dcb4a85de6f457a17012f39f",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/01/26dee7ba74495aab119221017f229f6e009ae3": "8596a8d5882a294abdf22e2ca0f4a149",
".git/objects/97/6a91866e848fa7ba8057eed33e3b22a51387a0": "072fed2b6950bcefdbf36585c978c442",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0a/7ba298d4b49d81fe38ef8e58dc1c25fabe8869": "e0201e3e7fca30bce4457f30c589740d",
".git/objects/64/08365aab1a00a99d1aee7c79b8ce10dfd756de": "cd3b0a346fdbaece2888a10c88ab4c78",
".git/objects/b1/e38ade257ad2e6824d7e5abcdf0f34c1bf7d2f": "53b6fa40cb95ee82c789300a8e3732ed",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e9/3b75e5b6b465b95325ca901faa5276297bd358": "d1cbdbd2864063abd521a74aa3e08aea",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/dfeb8484c126845c2273c64102b23fdc269425": "34b37452a45753634e5f8b0689409b88",
".git/objects/2c/b119dedaebf85f608bc9e4086f1a36cfc268d6": "ff88ba46dfa497c97eeaeded5b197118",
".git/objects/79/b902759791019ad506fd0c13ae742e3f98c347": "b4cfc886693d1184901a29512dc54f5e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fbd33082604d19e74bf1cd54dfb82d44",
".git/logs/refs/heads/master": "fbd33082604d19e74bf1cd54dfb82d44",
".git/logs/refs/remotes/origin/master": "c6d5add0196904910be893de1d2d37c9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "cade533fa566447c5128cd490daf74bf",
".git/refs/remotes/origin/master": "cade533fa566447c5128cd490daf74bf",
".git/index": "269b594c4047c557cb963201a694e96e",
".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/FETCH_HEAD": "5b742a21b308736eccf4d5205ad41110",
"assets/imgs/00.png": "041974c5d42c4b1a5ceeae02c486a90a",
"assets/imgs/01_left.png": "1c522b22d856405c56ca0b716ccdc04c",
"assets/imgs/01_right.png": "df38c895fa093bda96fd1fa7287e9813",
"assets/AssetManifest.json": "3f6bbbea8e6ab6df57cc63fc21817443",
"assets/rive/five_04.riv": "d0480c62db0ffe5a8ca2753f84de0d12",
"assets/rive/five_05.riv": "aa407b4ea3cf9e28dbd0cca709be4c13",
"assets/rive/five_02.riv": "2eab131f5ce9e63d835721fbec4ba695",
"assets/rive/five_03.riv": "d997816347d2b20a117ff0394fd6f16a",
"assets/rive/forth.riv": "dd620e96aca91634eb49b4f09fd572cd",
"assets/rive/five_01.riv": "5116f82c576ba6377611b2e1e0a2c4fe",
"assets/rive/third.riv": "d8a86f5121a24db9867f6f572be7f417",
"assets/rive/second.riv": "8f31f8e0ad7b6f31a46e2905ca2db5f0",
"assets/NOTICES": "7283b120cac27ec133fa9d389e86ef62",
"assets/FontManifest.json": "f9bb36f0dce766370cce00993f758382",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9516e61c47118df622c801ac885ab066",
"assets/fonts/SF-Pro-Display-Regular.otf": "aaeac71d99a345145a126a8c9dd2615f",
"assets/fonts/SF-Pro-Display-Bold.otf": "644563f48ab5fe8e9082b64b2729b068",
"assets/fonts/SF-Pro-Display-Medium.otf": "51fd7406327f2b1dbc8e708e6a9da9a5",
"assets/fonts/SF-Pro-Display-Semibold.otf": "e6ef4ea3cf5b1b533a85a5591534e3e4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
