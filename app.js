'use strict';
// register service worker

if ('serviceWorker' in navigator) {
  var swPromise = navigator.serviceWorker.register('sw1.js', {scope: './'});
  console.log(swPromise);
  swPromise.then((reg) => {
    console.log('service worker registered');
  }).catch(error => {
    console.error(error);
  });
};

// function for loading each image via XHR

function getFortune() {
  return fetch('https://foaas.herokuapp.com/off/service%C2%A0workers/autra', {
    headers: {
      "Accept": "text/plain"
    }
  });
}

var fortuneDiv = document.getElementById('fortune');
var button = document.getElementById('getFortune');

button.addEventListener('click', () => {
  fortuneDiv.textContent = '';
  getFortune().then((res) => {
    res.text()
    .then((text) => {
      fortuneDiv.textContent = text;
    })
    .catch((error) => {
      fortuneDiv.textContent = 'An error occured getting the text : ' + error;
      console.error(error);
    });
  }
  ).catch((error) => {
    fortuneDiv.textContent = 'An error occured fetching data from foaas : ' + error;
    console.error(error);
  });

});

window.addEventListener('message', (event) => {
  var result = JSON.parse(event.data);
  if(result.type == 'debug') {
    console.log(result.msg);
  }
});

