"use strict";

const music = new Audio("assets/sounds/13_RitualDjembe.wav");

$(`.drum-pad`).on(`click`, () => {
  music.play();
  music.volume = 0.4;
});

$(`.drum-pad`).hover(function () {
  $(this).css(`background-color`, 0xc6c241);
});

//
// $(`.drum-button`).hover(function () {
//   $(this).css({
//     "background-color": "yellow",
//   });
// });

// hovering issue (color remains even mouse leaves the shape), doesn't work in css
// toggle audio play/stop.
// array of sounds that contain a sound source, corresponding key, and name-string
// active button color
// adding 2 kinds of sound libraries
