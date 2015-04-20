function debug(msg) {
  postMessage(JSON.stringify({type:'debug',msg:msg}), '*');
}

this.onfetch = function(event) {
  if (event.respondWith) {
    if (event.request.url.startsWith('https://foaas.herokuapp.com/'))
    event.respondWith(new Response('Service Workers rule!! - autra', {type : 'text/plain'}), {
      headers: {"Content-Type": "text/plain"}
    });
  }
}

debug('sw started');

if (console) {
  console.log('console');
}
if (self && self.console) {
  self.console.log('self.console');
}
if (this && this.console) {
  this.console.log('this.console');
}

self.addEventListener('install', function(event) {
    self.console.log('installed');
});

self.addEventListener('fetch', function(event) {
    self.console.log('fetched');
});
