"use strict";

addInteraction("rotator", startRotate);
addInteraction("skewer", startSkew);
addInteraction("mover", startFall);

function addInteraction(className, callback) {
  let elements = document.getElementsByClassName(className);
  // loop thorugh the elements (with the same class name)
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", callback, {
      once: true,
    });
  }
  console.log(elements);
}

function startRotate(event) {
  requestAnimationFrame(function () {
    rotate(event.target, 0);
  });
}

function rotate(element, angle) {
  // increase angle
  angle += 5;
  // set the element's rotation transform
  element.style.transform = `rotate(${angle}deg)`;
  // do it again next frame
  requestAnimationFrame(function () {
    rotate(element, angle);
  });
}

// begins skewing the triggering event
function startSkew(event) {
  requestAnimationFrame(function () {
    skew(event.target, 0);
  });
}

// increases the skew angle then sets the element's skew transform.
//Then does it again
function skew(element, angle) {
  angle += 10;
  element.style.transform = `skew(${angle}deg)`;

  requestAnimationFrame(function () {
    skew(element, angle);
  });
}

// begines the process of rotating the triggering element
function startFall(event) {
  requestAnimationFrame(function () {
    let vy = 5 + Math.random() * 10;
    fall(event.target, 0, vy);
  });
}

// moves the position using th y velocity, then sets the element's position
// then requests another frame of animaton to so it again
function fall(element, y, vy) {
  // move y position
  y += vy;
  element.style.top = `${y}px`;
  // do it again next frame
  requestAnimationFrame(function () {
    fall(element, y, vy);
  });
}
