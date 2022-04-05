"use strict";

let $images = $(`.images`);
let $icons = $(`.icons`);

// let $tree = $(
//   `<img class="images 1 "id="tree"src="assets/images/tree-cut.png">`
// ); //1
// let $mothEye = $(
//   `<img class="images 2"id="mothEye"src="assets/images/moth-face.png">`
// ); //2
// let $fire = `<img class="images 3"id="fire"src="assets/images/fire5.png">`; //3
// let $walker = `<img class="images"id="walker"src="assets/images/rope-walker-shadow2.png">`; //4
// let $wingedMan = `<img class="images"id="wingedMan"src="assets/images/wingmanC.png">`; //5
// let $sun = `<img class="images"id="sun"src="assets/images/sun2.png">`; //6
// let $swingFigure = `<img class="images"id="swingFigure"src="assets/images/swing1.png">`; //7
// let $skyBg = `<img class="images"id="skyBg"src="assets/images/skybg3.png">`; //8
// let $darkPlanet = `<img class="images"id="darkPlanet"src="assets/images/darkplanet.png">`; //9
// let $smoke = `<img class="images"id="smoke"src="assets/images/smoke.png">`; //10
// let $whiteMoth = `<img class="images"id="whiteMoth"src="assets/images/mothwhite.png">`; //11
// let $crystal = `<img class="images"id="crystal"src="assets/images/ghost.png">`; //12
// let $flame = `<img class="images"id="flame"src="assets/images/fire4.png">`; //13

// load sounds
// let sound1 = new Audio(`assets/sounds/digital-eagle.wav`);
// let sound2 = new Audio(`assets/sounds/malfunction.wav`);
// let sound3 = new Audio(`assets/sounds/solar-sad.wav`);

// $(`#icon1`).on(`click`, function () {
//   $tree.animate({ opacity: 1 }, 2000, function (event) {
//     $tree.animate({ opacity: 0 }, 2000);
//   });
// });
//
// $(`#icon2`).on(`click`, function () {
//   $mothEye.animate({ opacity: 1 }, 2000, function (event) {
//     $mothEye.animate({ opacity: 0 }, 2000);
//   });
// });

let sounds = {
  "#tree": new Audio(`assets/sounds/digital-eagle.wav`),
  "#mothEye": new Audio(`assets/sounds/malfunction.wav`),
  "#fire": new Audio(`assets/sounds/solar-sad.wav`),
};

// you could also do lil sounds[`#tree`]

handleAnimation();
function handleAnimation() {
  $(`.icons`).on(`click`, function () {
    let clickedIcon = $(this).attr(`image`);
    sounds[clickedIcon].play();
    // sounds[`#tree`].play();
    $(clickedIcon).animate({ opacity: 1 }, 2000, function (event) {
      $(clickedIcon).animate({ opacity: 0 }, 2000);
    });
  });
}

$icons.on(`click`, function () {
  random($images);
});
// $(`#icon1`).on(`click`, function () {
//   sound1.play();
//   sound1.volume = 0.3;
// });
//
// $(`#icon2`).on(`click`, function () {
//   sound2.play();
//   sound2.volume = 0.3;
// });
//
// $(`#icon3`).on(`click`, function () {
//   sound3.play();
//   sound2.volume = 0.3;
// });

$icons.on(`click`, iconHandler);
function iconHandler(event) {
  $(this).addClass(`active`);
  setTimeout(() => $(this).removeClass(`active`, 2000), 2000);
}

// a helper function to put images on a random postion on canvas
function random(element) {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let leftPos = Math.floor(Math.random() * w * 1);
  $(element).css({ left: leftPos });
}
