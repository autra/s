function debug(msg) {
  if (console) {
    console.log('console ' + msg);
  }
  if (self && self.console) {
    self.console.log('self.console ' + msg);
  }
  if (this && this.console) {
    this.console.log('this.console ' + msg);
  }
  postMessage(JSON.stringify({type:'debug',msg:msg}), '*');
}

this.onfetch = function(event) {
  debug('onfetch');
  if (event.respondWith) {
    if (event.request.url.startsWith('https://foaas.herokuapp.com/'))
    event.respondWith(new Response('Service Workers rule!! - autra', {type : 'text/plain'}), {
      headers: {"Content-Type": "text/plain"}
    });
  }
}

debug('sw started');


self.addEventListener('install', function(event) {
    debug('installed');
});

