"use strict";

const music = new Audio("assets/sounds/13_RitualDjembe.wav");

$(`.drum-pad`).on(`click`, () => {
  music.play();
  music.volume = 0.4;
});

$(`.drum-pad`).on(`click`, () => {
  $(this).animate(
    {
      // color: 0xd8f3ff,
      opacity: 0.5,
    },
    500
  );
});
