if (console) {
  console.log('console');
}
if (self && self.console) {
  self.console.log('self.console');
}
if (this && this.console) {
  this.console.log('this.console');
}

selft.console.log('log1');

self.addEventListener('install', function(event) {
    self.console.log('installed');
});

self.addEventListener('fetch', function(event) {
    self.console.log('fetched');
});
