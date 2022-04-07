"use strict";

let $images = $(`.images`);
let $icons = $(`.icons`);

let myInterval;
let mySetTimeout;

// let numMoth = 10;
// for (let i = 0; i < numMoth; i++) {
//  `<img class="images"id="whiteMoth"src="assets/images/mothwhite.png">`;
// }

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

let sounds = {
  // "#tree": new Audio(`assets/sounds/digital-eagle.wav`),
  // "#mothEye": new Audio(`assets/sounds/malfunction.wav`),
  // "#fire": new Audio(`assets/sounds/solar-sad.wav`),
  "#tree": new Audio(`assets/sounds/insect3.mp3`),
  "#mothEye": new Audio(`assets/sounds/high-pitch1.mp3`),
  "#fire": new Audio(`assets/sounds/high-pitch2.mp3`),
  "#walker": new Audio(`assets/sounds/high-pitch3.mp3`),
  "#wingedMan": new Audio(`assets/sounds/gregorian1.mp3`),
  "#sun": new Audio(`assets/sounds/high-pitch8.mp3`),
  "#swingFigure": new Audio(`assets/sounds/high-pitch11.mp3`),
  "#skyBg": new Audio(`assets/sounds/gregorian3.mp3`),
  "#darkPlanet": new Audio(`assets/sounds/insect2.mp3`),
  "#smoke": new Audio(`assets/sounds/high-pitch5.mp3`),
  "#whiteMoth": new Audio(`assets/sounds/insect1.mp3`),
  "#crystal": new Audio(`assets/sounds/gregorian2.mp3`),
};

// you could also do lil sounds[`#tree`]

$icons.on(`mouseover`, iconHandler1);

function iconHandler1(event) {
  $(this).addClass(`over`);
  setTimeout(() => $(this).removeClass(`over`, 2000), 2000);
}

$icons.on(`click`, iconHandler);
function iconHandler(event) {
  // $(this).addClass(`active`);
  // toggles between on/off button
  $(this).toggleClass(`active`);
  // setTimeout(() => $(this).removeClass(`active`, 2000), 2000);
}

// handleAnimation();
function handleAnimation() {
  $(`.icons`).on(`mouseover`, function () {
    let clickedIcon = $(this).attr(`image`);
    // sounds[`#tree`].play();
    $(clickedIcon).animate({ opacity: 0.7 }, 2000, function (event) {
      $(clickedIcon).animate({ opacity: 0 }, 2000);
    });
    sounds[clickedIcon].play();
    // random(clickedIcon);
    // sounds[clickedIcon].volume = 0.1;
    // sounds[`#tree`].volume = 0;
  });
}

function handleAnimationClick() {
  $(`.icons`).on(`click`, function () {
    let clickedIcon = $(this).attr(`image`);
    $(clickedIcon).animate({ opacity: 0.7 }, 2000);
    $(clickedIcon).animate({ opacity: 0 }, 2000);
    // sounds[clickedIcon].play();
  });
}

// disableAutomation();
// function disableAutomation() {
//   $(`.icons`).on(`click`, function () {
//     let clickedIcon = $(this).attr(`image`);
//     // clearInterval(myInterval);
//     $(this).removeClass(`active`, 2000);
//   });
// }

$(`.icons`).on(`click`, function () {
  let clickedIcon = $(this).attr(`image`);
  mySetTimeout = setTimeout(() => sounds[clickedIcon].play(), 0);
  // myInterval = setInterval(() => handleAnimationClick(), 1000);
  myInterval = setInterval(mySetTimeout, 1000);
  // $(this).removeClass(`active`, 2000);
});

// a helper function to put images on a random postion on canvas
// function random(element) {
//   let w = window.innerWidth;
//   let h = window.innerHeight;
//   let leftPos = Math.floor(Math.random() * w * 1);
//   $(element).css({ left: leftPos });
// }

// click handler
// $(`.icons`).on(`click`, function () {
//   $(`.images`).animate({ opacity: 0.8 }, 3000);
//   setTimeout(() => $(`.images`).animate({ opacity: 0 }, 3000));
//   // $(`.images`).each(fadeout);
//   console.log(`cliicked`);
// });
