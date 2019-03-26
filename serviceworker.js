const fileToCache = [
    '/',
    '/css/main.css',
    '/js/main.js',
    '/images/icons/icon-512x512.png',
    '/manifest.json' 
]

const cacheVersion = 'quiz-sesi-2';

if ('serviceWorker' in navigator) {
  // sw.js can literally be empty, but must exist
  navigator.serviceWorker.register('/sw.js');
}