"use strict";
/*
A program that generates a random haiku based on pre-existing arrays
of lines of the correct syllable length. Also swaps out lines if the user
clicks on them with a fade in and out effect.
*/

let fiveSyllableLines = [
  `O, to be a tree`,
  `The cat does not know`,
  `We are all forests`,
  `You have done your best`,
  `They are all gone now`,
];

let sevenSyllableLines = [
  `Say the things left unsaid`,
  `Never believe the wind's lies`,
  `The autumn stretches its legs`,
  `Nothing can satisfy you`,
  `They will not come back again`,
];

// three elements on the page that contain each line of the poem
let lineP1 = document.getElementById(`line-1`);
let lineP2 = document.getElementById(`line-2`);
let lineP3 = document.getElementById(`line-3`);

// puts a randomly chosen haiku line in each line of the poem in HTML
let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);

// insert our random lines inside htlm placeholder
lineP1.innerText = line1;
lineP2.innerText = line2;
lineP3.innerText = line3;

// adds event listener for changing each line of the poem

lineP1.addEventListener(`click`, lineClicked);
lineP2.addEventListener(`click`, lineClicked);
lineP3.addEventListener(`click`, lineClicked);

// triggers a fade out when a line is clicked
function lineClicked(event) {
  fadeOut(event.target, 1);
}

/**
reduces the opacity of the provided element until it reaches zero then changes its line
and triggers fade in
*/
function fadeOut(element, opacity) {
  // chang the opacity of the line
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
  // check if the opacity is greater than 0
  if (opacity > 0) {
    // if so, keep fading on the next requestAnimationFrame
    // note we use an anonymous function here so we can pass arguments to fadeOut
    requestAnimationFrame(function () {
      fadeOut(element, opacity);
    });
  } else {
    // if not, we can switch the lines and fade in
    // set a new line of poem for the element
    setNewLine(element);
    fadeIn(element, 0);
  }
}

// increases the opacity of the provided element until it reaches 1 and then stops
function fadeIn(element, opacity) {
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  if (opacity < 1) {
    // Keep fading. Note the use of an anonymous function here so we
    // can pass arguments to fadeIn()
    requestAnimationFrame(function () {
      fadeIn(element, opacity);
    });
  }
}

// sets the text of the element to a randomly chosen haiku line
function setNewLine(element) {
  if (element === lineP1 || element === lineP3) {
    element.innerText = random(fiveSyllableLines);
  } else if (element === lineP2) {
    element.innerText = random(sevenSyllableLines);
  }
}

// a helper function that returns a random element from the provided array
// floor - rounds nomber, math.random returns a range of numbers between 0 and 1
function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}
