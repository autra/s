function debug(msg) {
  if (console) {
    console.log('[SW] - ' + msg);
  }
}

this.onfetch = function(event) {
  debug('onfetch');
  debug(event.request.url);
  if (event.respondWith) {
    if (event.request.url === 'http://gaiamobile.org/sw/foo.bar') {
    //if (event.request.url.startsWith('https://foaas.herokuapp.com')) {
      debug('intercepting foaas');
      var response = new Response('Service Workers rule!! - autra', {
          type : 'text/plain'}, {
        headers: {"Content-Type": "text/plain"}
      });
      event.respondWith(Promise.resolve(response));
      event.client.postMessage('I spoofed your fetch !!');
    }
  }
}

debug('sw started');


self.addEventListener('install', function(event) {
    debug('installed');
});

