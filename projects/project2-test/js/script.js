"use strict";
let $tree = `<img id="tree"src="assets/images/tree-cut.png">`;
let $figure = `<img id="face"src="assets/images/moth-face.png">`;
let $ghost = `<img id="ghost"src="assets/images/fire2.png">`;
let $walker = `<img id="walker"src="assets/images/rope-walker.png">`;
let $sun = `<img id="sun"src="assets/images/wingman4.png">`;
let $moth = `<img id="moth"src="assets/images/sun2.png">`;
let $swing = `<img id="swing"src="assets/images/swing1.png">`;
let $smoke = `<img id="smoke"src="assets/images/smoke.png">`;
let $city = `<img id="city"src="assets/images/darkplanet.png">`;

// sound
let crystalSound = new Audio(`assets/sounds/crystalcave.wav`);
let crystalSound2 = new Audio(`assets/sounds/glassy.wav`);
let crystalSound3 = new Audio(`assets/sounds/steeltrap.wav`);

//text (make a class that applies all effects into text stuff)
let $scene1 = `<p class="scenes-text" id="scene-1"> I had this dream...</p>`;

let $scene2 = `<p class="scenes-text" id="scene-2">back on the Earth where our ancestors walked,
 before a curtain fell between the worlds, before we began to forget...</p>`;

$(`#text1`).one(`click`, function () {
  $(`body`).append($tree);
  $(`#tree`).animate({ opacity: 0.7 }, 6000);
});

$(`#text2`).one(`click`, function () {
  $(`body`).append($figure);
  $(`body`).append($scene1);
  $(`#face`).animate({ opacity: 0.9 }, 3000);
  $(`#scene-1`).animate({ opacity: 0.9 }, 6000);
  crystalSound.play();
  crystalSound.volume = 0.2;
  crystalSound.loop = true;
});

$(`#text3`).one(`click`, function () {
  $(`body`).append($ghost);
  $(`#ghost`).animate({ opacity: 0.9 }, 6000);
});

$(`#text4`).one(`click`, function () {
  $(`body`).append($walker);
  $(`body`).append($scene2);
  $(`#walker`).animate({ opacity: 0.9 }, 6000);
  $(`#scene-2`).animate({ opacity: 0.9 }, 8000);
});

$(`#text5`).one(`click`, function () {
  $(`body`).append($sun);
  $(`#sun`).animate({ opacity: 0.9 }, 6000);
});

$(document).on(`click`, function () {
  $(`#moth`).effect({ effect: `pulsate`, duration: 1000 }, 500);
});

$(`#text6`).one(`click`, function () {
  $(`body`).append($moth);
  $(`#moth`).animate({ opacity: 1 }, 6000);
});

$(`#text7`).one(`click`, function () {
  $(`body`).append($swing);
  $(`#swing`).animate({ opacity: 1 }, 6000);
});

$(`#text8`).one(`click`, function () {
  $(`body`).append($smoke);
  $(`#smoke`).animate({ opacity: 1 }, 6000);
});

$(`#text9`).one(`click`, function () {
  $(`body`).append($city);
  $(`#city`).animate({ opacity: 1 }, 6000);
});
