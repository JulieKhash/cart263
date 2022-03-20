"use strict";

const music = new Audio("assets/sounds/13_RitualDjembe.wav");

$(`.drum-pad`).on(`click`, () => {
  music.play();
  music.volume = 0.4;
});
