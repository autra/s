function debug(msg) {
  if (console) {
    console.log('console ' + msg);
  }
}

this.onfetch = function(event) {
  debug('onfetch');
  if (event.respondWith) {
    if (event.request.url.startsWith('https://foaas.herokuapp.com')) {
      console.log('intercepting foaas');
      var response = new Response('Service Workers rule!! - autra', {type : 'text/plain'}), {
        headers: {"Content-Type": "text/plain"};
      }
      console.log(response);
      event.respondWith(response);
    }
  }
}

debug('sw started');


self.addEventListener('install', function(event) {
    debug('installed');
});

