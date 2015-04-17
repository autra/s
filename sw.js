self.addEventListener('install', function(event) {
    self.console.log('installed');
});

self.addEventListener('fetch', function(event) {
    self.console.log('fetched');
});
