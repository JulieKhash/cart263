// Julie Khashimova
// Project 2 - Into the Blue

//

"use strict";

// variables for jquery selection
let $images = $(`.images`);
let $icons = $(`.icons`);

// variables for opacity effect
const MAX_OPACITY = 0.75;
const MIN_OPACITY = 0;

// milliseconds it takes to reach the max opacity then decrease to min opacity
const delayFX = 2000;
// time interval for re-executing a function
const delayInterval = 5000;

// a sound object that loads sounds corresponding to a specific image(id)
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

// calls everything
setup();

// sets up all interaction functions
function setup() {
  handleIcons();
  handleMouseOverAnimation();
  handleClickAnimation();
}

// handles icon style on hover
function handleIcons() {
  // adds a class 'over' when mouse is over the specific icon
  $icons.on(`mouseover`, mouseOverIcon);

  function mouseOverIcon() {
    $(this).addClass(`over`);
    // removes the class 'over' after the specified time(when image fades out)
    setTimeout(() => {
      $(this).removeClass(`over`, delayFX);
    }, delayFX);
  }
}

// handles the animation of the images with mouseover event
function handleMouseOverAnimation() {
  // adds a mouseover event listener
  $icons.on(`mouseover`, function () {
    // in order not to conflict with the 'click' interaction, checks whether the icon is active or not
    if ($(this).hasClass(`active`)) {
      return; // if so ignores the following code
    }
    // if the icon is not `active` does the following:

    // assigns an image attribute to the variable
    let overIcon = $(this).attr(`image`);
    // animates the image with fade in/out effect.
    // after it reaches the max opacity, executes the fade out
    $(overIcon).animate({ opacity: MAX_OPACITY }, delayFX, function (event) {
      $(overIcon).animate({ opacity: MIN_OPACITY }, delayFX);
    });

    // plays the sound in sync with the image
    sounds[overIcon].play();
    sounds[overIcon].volume = 0.6; // sets the overall sound volume
  });
}

// handles the animation and automation of the image/sound sequence with a click event
function handleClickAnimation() {
  // add a click event listener
  $icons.on(`click`, function (event) {
    //  assigns `this`, refers to the specific icon that was clicked on
    let icon = this;
    // adds/removes the class `active` for the selected icon
    $(icon).toggleClass(`active`);

    // checks whether the icon is active
    if ($(icon).hasClass(`active`)) {
      // if so does the following:

      // adds the automation with setInterval every specified time
      let newInterval = setInterval(() => {
        // assigns an image attribute to a new variable
        let clickedIcon = $(icon).attr(`image`);

        // randomizes the location of images with the `mover` class
        if ($(icon).hasClass(`mover`)) {
          random(clickedIcon);
        }
        // animates the image with fade in/out
        $(clickedIcon).animate({ opacity: MAX_OPACITY }, delayFX, function (
          event
        ) {
          $(clickedIcon).animate({ opacity: MIN_OPACITY }, delayFX);
        });

        // plays the sound in sync with the image
        sounds[clickedIcon].play();
        sounds[clickedIcon].volume = 0.6; // sets the overall sound volume
      }, delayInterval);

      $(icon).data(`interval`, newInterval); //sets up local storage

      // if the icon is not `active` (or was disabled by a user), stops the image/sound automation
    } else {
      let interval = $(icon).data(`interval`); // gets info for this icon
      clearInterval(interval); // clears the interval data
    }
  });
}

// adds the rotation effect to the selected images
$(`#sun`).addClass(`spin`);
$(`#darkPlanet`).addClass(`spin`);

// randomizes the image position across the screen
function random(element) {
  let windowEdge = 300; // a value that helps to restrict images within a screen
  let h = window.innerHeight - windowEdge;
  let w = window.innerWidth - windowEdge;

  // generates a random number for positioning
  let verticalPos = Math.floor(Math.random() * h * 1);
  let horizontalPos = Math.floor(Math.random() * w * 1);

  // assigns random numbers to image position
  $(element).css({ left: horizontalPos, top: verticalPos });
}
