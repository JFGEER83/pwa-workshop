var cacheName = 'MazyCultureCache';

var filesToCache = [
    '/',                // index.html
    '/main.js',
    '/assets/css/bootstrap.min.css',
    '/assets/css/style.css',
    '/assets/css/bootstrap-grid.min.css',
    '/assets/css/bootstrap-reboot.min.css',
    '/assets/css/form-contact.css',
    '/assets/css/form-reservation.css'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            console.info('[sw.js] cached all files');
            return cache.addAll(filesToCache);
        })
    );
});