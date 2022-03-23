"use strict";

// const numCrystals = 5;
// for (let i = 0; i < numCrystals; i++) {
$(`body`).append(
  `<img class="crystal-img" id="crystal1" src="assets/images/crystal2.png">`
);
$(`body`).append(
  `<img class="crystal-img" id="crystal2" src="assets/images/crystal.png">`
);

$(`body`).append(
  `<img class="crystal-img" id="crystal3" src="assets/images/crystal3.png">`
);

$(`body`).append(`<img id="background" src="assets/images/branch.png">`);

let $text = $(`p`).append(`drop them onto the circle`);

let $crystals = $(`.crystal-img`);
let $crystal1 = $(`#crystal1`);
let $crystal2 = $(`#crystal2`);
let $crystal3 = $(`#crystal3`);

let $branch = $(`#background`);

let crystalSound = new Audio(`assets/sounds/crystalcave.wav`);
let crystalSound2 = new Audio(`assets/sounds/glassy.wav`);
let crystalSound3 = new Audio(`assets/sounds/steeltrap.wav`);

$text.effect({
  effect: `pulsate`,
  duration: 10000,
});

// make the
$crystals.draggable();

$crystal1.on(`click`, function () {
  crystalSound.play();
  crystalSound.volume = 0.2;
});

$crystal2.on(`click`, function () {
  crystalSound2.play();
  crystalSound.volume = 0.2;
});

$crystal3.on(`click`, function () {
  crystalSound3.play();
  crystalSound.volume = 0.2;
});

$(`#mixer-box`).droppable({
  drop: function (event, ui) {
    // just testting
    // the idea is to play the sound specific to the crystal dropped into the circle and keep it looping

    crystalSound.play();
    crystalSound.volume = 0.2;
    crystalSound.loop = true;

    crystalSound2.play();
    crystalSound.volume = 0.2;
    crystalSound.loop = true;

    crystalSound3.play();
    crystalSound.volume = 0.2;
    crystalSound.loop = true;

    $text.hide();

    ui.draggable.animate({ opacity: 1 });
    $(this).animate({ opacity: 1 }, 1000);
    $branch.animate({ opacity: 1 }, 3000);
  },
});

// add random positions
// play all sounds att the same time
// add a different type of sound (another crystal variation)
// draggable can be removed out of the box?
// draggable change size / or opacity when is inside the cicle

// multiply the same image = put it inside html or js
// sound library? for looping and sound effects
