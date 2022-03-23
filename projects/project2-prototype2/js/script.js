"use strict";

// const numCrystals = 5;

// for (let i = 0; i < numCrystals; i++) {
$(`body`).append(
  `<img class="crystal-img" id="crystal1" src="assets/images/crystal2.png">`
);
$(`body`).append(
  `<img class="crystal-img" id="crystal2" src="assets/images/crystal.png">`
);
// }

let $crystals = $(`.crystal-img`);
let $crystal1 = $(`#crystal1`);
let $crystal2 = $(`#crystal2`);

let crystalSound = new Audio(`assets/sounds/crystalcave.wav`);
let crystalSound2 = new Audio(`assets/sounds/glassy.wav`);

// make the
$crystals.draggable();

$crystal1.on(`click`, function () {
  crystalSound.play();
  crystalSound.volume(0.5);
});

$crystal2.on(`click`, function () {
  crystalSound2.play();
  crystalSound2.volume(0.5);
});

// $crystals.on(`click`, function () {
//   crystalSound.play();
//   crystalSound.volume(0.5);
// });

$(`#mixer-box`).droppable({
  drop: function (event, ui) {
    crystalSound.play();
    crystalSound.volume = 0.5;
    crystalSound.loop = true;
    ui.draggable.css({ opacity: 1 });

    // make it smaller
    ui.draggable.resizable({
      animate: true,
    });
  },
});

// add random positions
// play all sounds att the same time
// add a different type of sound (another crystal variation)
// draggable can be removed out of the box?
// draggable change size / or opacity when is inside the cicle

// multiply the same image = put it inside html or js
// sound library? for looping and sound effects
