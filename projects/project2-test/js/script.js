"use strict";

let $images = $(`.images`);
let $icons = $(`.icons`);

const MAX_OPACITY = 0.75;
const MIN_OPACITY = 0;

const delayFX = 2000; // time in mls, reaches the max opacity then decreases
const delayInterval = 5000;

// load sounds corresponding to a specific image(id)
let sounds = {
  "#tree": new Audio(`assets/sounds/insect3.mp3`),
  "#ghostInverted": new Audio(`assets/sounds/male-voice3.mp3`),
  "#whiteMoth": new Audio(`assets/sounds/insect1.mp3`),
  "#city": new Audio(`assets/sounds/female-voice2.mp3`),
  "#walker": new Audio(`assets/sounds/female-voice3.mp3`),
  "#wingedMan": new Audio(`assets/sounds/male-voice1.mp3`),
  "#sun": new Audio(`assets/sounds/female-voice6.mp3`),
  "#swingFigure": new Audio(`assets/sounds/female-voice9.mp3`),
  "#darkPlanet": new Audio(`assets/sounds/insect4.mp3`),
  "#smoke": new Audio(`assets/sounds/female-voice12.mp3`),
  "#ghost": new Audio(`assets/sounds/male-voice2.mp3`),
};

setup();

function setup() {
  handleIcons();
  handleMouseOverAnimation();
  handleClickAnimation();
}

function handleIcons() {
  $icons.on(`mouseover`, mouseOverIcon);
  function mouseOverIcon() {
    $(this).addClass(`over`);
    setTimeout(() => {
      $(this).removeClass(`over`, delayFX);
    }, delayFX);
  }
}

function handleMouseOverAnimation() {
  $icons.on(`mouseover`, function () {
    if ($(this).hasClass(`active`)) {
      return; // if so ignore the following code
    }
    let clickedIcon = $(this).attr(`image`);
    $(clickedIcon).animate({ opacity: MAX_OPACITY }, delayFX, function (event) {
      $(clickedIcon).animate({ opacity: MIN_OPACITY }, delayFX);
    });
    sounds[clickedIcon].play();
    sounds[clickedIcon].volume = 0.5;
  });
}

function handleClickAnimation() {
  $icons.on(`click`, function (event) {
    let icon = this;

    $(icon).toggleClass(`active`);
    if ($(icon).hasClass(`active`)) {
      let newInterval = setInterval(() => {
        let clickedIcon = $(icon).attr(`image`);

        // randomizes the location of images with `mover` class
        if ($(icon).hasClass(`mover`)) {
          random(clickedIcon);
        }

        $(clickedIcon).animate({ opacity: MAX_OPACITY }, delayFX, function (
          event
        ) {
          $(clickedIcon).animate({ opacity: MIN_OPACITY }, delayFX);
        });

        sounds[clickedIcon].play();
      }, delayInterval);
      $(icon).data(`interval`, newInterval); //sets up local storage
    } else {
      let interval = $(icon).data(`interval`); // gets info for this icon
      clearInterval(interval);
    }
  });
}

$(`#sun`).addClass(`spin`);
$(`#darkPlanet`).addClass(`spin`);

// a helper function to put images on a random postion on canvas
function random(element) {
  let windowEdge = 300;
  let h = window.innerHeight - windowEdge;
  let w = window.innerWidth - windowEdge;

  let verticalPos = Math.floor(Math.random() * h * 1);
  let horizontalPos = Math.floor(Math.random() * w * 1);
  $(element).css({ left: horizontalPos, top: verticalPos });
}
