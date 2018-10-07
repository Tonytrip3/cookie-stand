'use strict';

//placeholder code till I figure out how to make it run on my own.
window.onload = choosePic;

var theAd = 0;
var mainImages = new Array('images/reading1.gif','images/reading2.gif','images/reading3.gif');

function choosePic() {
  theAd = Math.floor(Math.random() * mainImages.length);
  document.getElementById('adBanner').src = mainImages[theAd];

  rotate();
}

function rotate() {
  theAd++;
  if (theAd == mainImages.length) {
    theAd = 0;
  }
  document.getElementById('adBanner').src = mainImages[theAd];

  setTimeout(rotate, 3 * 1000);
}