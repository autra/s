console.log(this);
this.addEventListener('install', function(event) {
    console.log('installed !');
});

this.addEventListener('fetch', function(event) {
    console.log('fetched !');
});
