"use strict";

let $images = $(`.images`);
let $icons = $(`.icons`);

// let minOpacity = { opacity: 0 };
const MAX_OPACITY = 0.75;
const MIN_OPACITY = 0;

// load sounds
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
      $(this).removeClass(`over`, 2000);
    }, 2000);
  }
}

function handleMouseOverAnimation() {
  $icons.on(`mouseover`, function () {
    if ($(this).hasClass(`active`)) {
      return; // if so ignore the following code
    }
    let clickedIcon = $(this).attr(`image`);
    $(clickedIcon).animate({ opacity: MAX_OPACITY }, 2000, function (event) {
      $(clickedIcon).animate({ opacity: MIN_OPACITY }, 2000);
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

        $(clickedIcon).animate({ opacity: 0.7 }, 2000, function (event) {
          $(clickedIcon).animate({ opacity: 0 }, 2000);
        });
        sounds[clickedIcon].play();
      }, 5000);
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
  let h = window.innerHeight - 300;
  let w = window.innerWidth - 300;

  let verticalPos = Math.floor(Math.random() * h * 1);
  let horizontalPos = Math.floor(Math.random() * w * 1);
  $(element).css({ left: horizontalPos, top: verticalPos });
}
