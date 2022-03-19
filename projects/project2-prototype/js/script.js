"use strict";

const music = new Audio(`assets/sounds/13_RitualDjembe.wav`);

$("#sample1-button").button({ classes: { "ui-button": "highlight" } });
$(this).click(function () {
  music.play();
});
