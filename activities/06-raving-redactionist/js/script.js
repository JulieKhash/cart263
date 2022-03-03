"use strict";
// You are redacting a document, but it keeps becoming unredacted!
// Click the secret information to hide it, don`t let all the
// secrets become revealed!

// the chance a span will be reveiled per update
const REVEAL_PROBABILITY = 0.1;

// how often to update the spans
const UPDATE_FREQUENCY = 500;

// get a selection and set a click handler on the secrets
$(`.top-secret`).on(`click`, redact);
setInterval(revelation, UPDATE_FREQUENCY);

/**
When a secret is clicked we remove its revealed class and add the redacted class
thus blacking it out
*/
function redact(event) {
  $(this).removeClass(`revealed`);
  $(this).addClass(`reducted`);
}

/**
Update is called every 500 milliseconds and it updates all the secrets on the page
using jQuery`s each() function which calls the specified function on _each_ of the
elements in the selection
*/
function revelation() {
  $(`.redacted`).each(attemptReveal);
}

/**
With random chance it unblanks the current secret by removing the
redacted class and adding the revealed class. Because this function is called
by each(), "this" refers to the current element that each has selected.
*/
function attemptReveal() {
  let r_number = Math.random();
  if (r_number < REVEAL_PROBABILITY) {
    $(this).removeClass(`reducted`);
    $(this).addClass(`revealed`);
  }
}
