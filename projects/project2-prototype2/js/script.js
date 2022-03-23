"use strict";
/**
Project 2 - prototype (very rough one!)
Julie Khashimova

Drag and drop "crystals" onto the circle (sound mixer).
Makes the smoke appear and plays the sound. That's it haha
*/

// may want to multiply the number of crystals
// const numCrystals = 5;
// for (let i = 0; i < numCrystals; i++) {

// appends image elemetns into the html canvas
$(`body`).append(
  `<img class="crystal-img" id="crystal1" src="assets/images/crystal2.png">`
);
$(`body`).append(
  `<img class="crystal-img" id="crystal2" src="assets/images/crystal.png">`
);
$(`body`).append(
  `<img class="crystal-img" id="crystal3" src="assets/images/crystal3.png">`
);

$(`body`).append(`<img id="background" src="assets/images/smoke.png">`);

// appends text
let $text = $(`p`).append(`drag and drop onto the circle`);

// variables for specific crystals
let $crystals = $(`.crystal-img`);
let $crystal1 = $(`#crystal1`);
let $crystal2 = $(`#crystal2`);
let $crystal3 = $(`#crystal3`);

// smoke image
let $smoke = $(`#background`);

// loads sounds
let crystalSound = new Audio(`assets/sounds/crystalcave.wav`);
let crystalSound2 = new Audio(`assets/sounds/glassy.wav`);
let crystalSound3 = new Audio(`assets/sounds/steeltrap.wav`);

// gives a text a pulsating effect
$text.effect({
  effect: `pulsate`,
  duration: 10000,
});

// make the crystals draggable
$crystals.draggable();

// plays a specific sound to the crystal
$crystal1.on(`click`, function () {
  crystalSound.play();
  crystalSound.volume = 0.1;
});

$crystal2.on(`click`, function () {
  crystalSound2.play();
  crystalSound.volume = 0.1;
});

$crystal3.on(`click`, function () {
  crystalSound3.play();
  crystalSound.volume = 0.1;
});

// dropping circle (should serve as a dropping for the sound crystals)
$(`#mixer-box`).droppable({
  drop: function (event, ui) {
    // just testing here
    // the idea is to play the sound specific to the crystal dropped into the circle
    // and keep it looping as long as its there
    // will find a better way/solution to separate the sounds once the crystal is dropped on the circle

    crystalSound.play();
    crystalSound.volume = 0.2;
    crystalSound.loop = true;

    crystalSound2.play();
    crystalSound.volume = 0.2;
    crystalSound.loop = true;

    crystalSound3.play();
    crystalSound.volume = 0.2;
    crystalSound.loop = true;

    // should hide the test when user starts dropping the crystals onto circl but it still shows up in the end
    $text.hide();

    ui.draggable.animate({ opacity: 1 });
    $(this).animate({ opacity: 1 }, 1000);
    $smoke.animate({ opacity: 1 }, 3000);
  },
});

// TO DO NEXT:

// add random positions to crystals (or some other sound pieces);
// improve the functionality of draggable/droppable(draggable can be removed out of the box?)
// set up an appropriate positions for DOM elements
// play only the sounds that are dropped on the circle
//... many more
