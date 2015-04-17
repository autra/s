console.log(this);
this.addEventListener('install', function(event) {
    this.postMessage({type: 'debug', message: 'installed'});
});

this.addEventListener('fetch', function(event) {
    this.postMessage({type: 'debug', message: 'got a fetch'});
});
