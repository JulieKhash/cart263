"use strict";
let $tree = `<img class="images"id="tree"src="assets/images/tree-cut.png">`; //1
let $mothEye = `<img class="images" id="mothEye"src="assets/images/moth-face.png">`; //2
let $fire = `<img class="images"id="fire"src="assets/images/fire.png">`; //3
let $walker = `<img class="images"id="walker"src="assets/images/rope-walker-shadow2.png">`; //4
let $wingedMan = `<img class="images"id="wingedMan"src="assets/images/wingman4.png">`; //5
let $sun = `<img class="images"id="sun"src="assets/images/sun2.png">`; //6
let $swingFigure = `<img class="images"id="swingFigure"src="assets/images/swing1.png">`; //7
let $skyBg = `<img class="images"id="skyBg"src="assets/images/sea2.jpg">`; //8
let $darkPlanet = `<img class="images"id="darkPlanet"src="assets/images/darkplanet.png">`; //9
let $smoke = `<img class="images"id="smoke"src="assets/images/smoke.png">`; //10
let $whiteMoth = `<img class="images"id="whiteMoth"src="assets/images/mothwhite.png">`; //11
let $crystal = `<img class="images"id="crystal"src="assets/images/crystal1.png">`; //12

// sound
let crystalSound = new Audio(`assets/sounds/crystalcave.wav`);
let crystalSound2 = new Audio(`assets/sounds/glassy.wav`);
let crystalSound3 = new Audio(`assets/sounds/steeltrap.wav`);

//text (make a class that applies all effects into text stuff)
let $scene1 = `<p class="scenes-text" id="scene-1"> I had this dream...</p>`;

let $scene2 = `<p class="scenes-text" id="scene-2">back on the Earth where our ancestors walked,
 before a curtain fell between the worlds, before we began to forget...</p>`;

$(`#click-icons-container`).addClass(`.images`);

$(`#icon1`).one(`click`, function () {
  $(`#container`).append($tree);
});

$(`.icons`).one(`click`, function () {
  $(`.images`).animate({ opacity: 0.7 }, 1000);
  console.log(`cliicked`);
});

// $(`.images`).animate({ opacity: 0.7 }, 1000);
// $(`#tree`).animate({ opacity: 0.7 }, 6000);
// console.log(`cliicked`);

// $(`#text1`).one(`click`, function () {
//   $(`body`).append($tree);
//   $(`#tree`).animate({ opacity: 0.7 }, 6000);
// });
//
// $(`#text2`).one(`click`, function () {
//   $(`body`).append($figure);
//   $(`body`).append($scene1);
//   $(`#face`).animate({ opacity: 0.9 }, 3000);
//   $(`#scene-1`).animate({ opacity: 0.9 }, 6000);
//   crystalSound.play();
//   crystalSound.volume = 0.2;
//   crystalSound.loop = true;
// });
//
// $(`#text3`).one(`click`, function () {
//   $(`body`).append($ghost);
//   $(`#ghost`).animate({ opacity: 0.9 }, 6000);
// });
//
// $(`#text4`).one(`click`, function () {
//   $(`body`).append($walker);
//   $(`body`).append($scene2);
//   $(`#walker`).animate({ opacity: 0.9 }, 6000);
//   $(`#scene-2`).animate({ opacity: 0.9 }, 8000);
// });
//
// $(`#text5`).one(`click`, function () {
//   $(`body`).append($sun);
//   $(`#sun`).animate({ opacity: 0.9 }, 6000);
// });
//
// $(document).on(`click`, function () {
//   $(`#moth`).effect({ effect: `pulsate`, duration: 1000 }, 500);
// });
//
// $(`#text6`).one(`click`, function () {
//   $(`body`).append($moth);
//   $(`#moth`).animate({ opacity: 1 }, 6000);
// });
//
// $(`#text7`).one(`click`, function () {
//   $(`body`).append($swing);
//   $(`#swing`).animate({ opacity: 1 }, 6000);
// });
//
// $(`#text8`).one(`click`, function () {
//   $(`body`).append($smoke);
//   $(`#smoke`).animate({ opacity: 0.8 }, 6000);
// });
//
// $(`#text9`).one(`click`, function () {
//   $(`body`).append($city);
//   $(`#city`).animate({ opacity: 1 }, 6000);
// });
