"use strict";

let music = new Pizzicato.Sound(
  "./assets/sounds/13_RitualDjembe.wav",
  function () {
    music.play();
  }
);
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
