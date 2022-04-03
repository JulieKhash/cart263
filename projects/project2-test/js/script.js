"use strict";

let $tree = `<img class="images"id="tree"src="assets/images/tree-cut.png">`; //1
let $mothEye = `<img class="images" id="mothEye"src="assets/images/moth-face.png">`; //2
let $fire = `<img class="images"id="fire"src="assets/images/fire5.png">`; //3
let $walker = `<img class="images"id="walker"src="assets/images/rope-walker-shadow2.png">`; //4
let $wingedMan = `<img class="images"id="wingedMan"src="assets/images/wingmanC.png">`; //5
let $sun = `<img class="images"id="sun"src="assets/images/sun2.png">`; //6
let $swingFigure = `<img class="images"id="swingFigure"src="assets/images/swing1.png">`; //7
let $skyBg = `<img class="images"id="skyBg"src="assets/images/skybg3.png">`; //8
let $darkPlanet = `<img class="images"id="darkPlanet"src="assets/images/darkplanet.png">`; //9
let $smoke = `<img class="images"id="smoke"src="assets/images/smoke.png">`; //10
let $whiteMoth = `<img class="images"id="whiteMoth"src="assets/images/mothwhite.png">`; //11
let $crystal = `<img class="images"id="crystal"src="assets/images/ghost.png">`; //12
// let $flame = `<img class="images"id="flame"src="assets/images/fire4.png">`; //13

// sound
let crystalSound = new Audio(`assets/sounds/crystalcave.wav`);
let crystalSound2 = new Audio(`assets/sounds/glassy.wav`);
let crystalSound3 = new Audio(`assets/sounds/steeltrap.wav`);

//text (make a class that applies all effects into text stuff)
// let $scene1 = `<p class="scenes-text" id="scene-1"> I had this dream...</p>`;
// let $scene2 = `<p class="scenes-text" id="scene-2">back on the Earth where our ancestors walked,
//  before a curtain fell between the worlds, before we began to forget...</p>`;

$(`#image-container`).addClass(`.images`);
let $images = $(`.images`);

// $images.each(fadeout);
//
// function hideImg() {
//   setTimeout(() => $(`#image-container`).removeClass(`.images`), 2000);
// }

function fadeout() {
  setTimeout(() => $(`#tree`).animate({ opacity: 0 }, 2000));
}

$(`#icon1`).one(`click`, function () {
  $(`#image-container`).append($tree);
});

$(`#icon2`).one(`click`, function () {
  $(`#image-container`).append($mothEye);
});

$(`#icon3`).one(`click`, function () {
  $(`#image-container`).append($fire);
});

$(`#icon4`).one(`click`, function () {
  $(`#image-container`).append($walker);
});

$(`#icon5`).one(`click`, function () {
  $(`#image-container`).append($wingedMan);
});

$(`#icon6`).one(`click`, function () {
  $(`#image-container`).append($sun);
  $(`$sun`).effect(`pulsate`);
});

$(`#icon7`).one(`click`, function () {
  $(`#image-container`).append($swingFigure);
});

$(`#icon8`).one(`click`, function () {
  $(`#image-container`).append($skyBg);
});

$(`#icon9`).one(`click`, function () {
  $(`#image-container`).append($darkPlanet);
});

$(`#icon10`).one(`click`, function () {
  $(`#image-container`).append($smoke);
});

$(`#icon11`).one(`click`, function () {
  $(`#image-container`).append($whiteMoth);
});

$(`#icon12`).one(`click`, function () {
  $(`#image-container`).append($crystal);
});

// $(`#icon13`).one(`click`, function () {
//   $(`#image-container`).append($flame);
// });

// click handler
$(`.icons`).on(`click`, function () {
  $(`.images`).animate({ opacity: 0.8 }, 3000);
  setTimeout(() => $(`.images`).animate({ opacity: 0 }, 3000));
  // $(`.images`).each(fadeout);
  console.log(`cliicked`);
});
