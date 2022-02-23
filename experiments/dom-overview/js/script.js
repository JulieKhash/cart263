"use strict";
// getting elememts by ID
let mainHeading = document.getElementById(`main-heading`);

mainHeading.style[`color`] = `#339966`;
mainHeading.style[`font-size`] = `5rem`;
mainHeading.style[`font-family`] = `Courier, monospace`;
mainHeading.style[`background-color`] = `yellow`;

mainHeading.innerText = `CHILLIN`;

let pronoun = document.getElementById(`pronoun`);
pronoun.innerHTML = `<strong>YOU</strong>`;

// gives a random pic from loremflickr
let image = document.getElementById(`clown-image`);
image.setAttribute(`src`, `http://loremflickr.com/320/240/clown`);

// getting elements by Class
// going through each header with id
let headers = document.getElementsByClassName(`header`);
for (let i = 0; i < headers.length; i++) {
  headers[i].style[`color`] = `#ff0000`;
}

// getting elememts by TAG
// let h2s = document.getElementsByTagName(`h2`);
//
// for (let i = 0; i < h2s.length; i++) {
//   h2s[i].style[`color`] = `green`;
// }

// quesrySelector is quite universal
let headerS = document.querySelectorAll(`.header`);
for (let i = 0; i < headerS.length; i++) {
  headerS[i].style[`color`] = `blue`;
}

// create a new elements
let newP = document.createElement(`p`);
newP.innerText = `Circus Dream`;

// appends a new word in "clown section as a paragraph"
let clownSection = document.getElementById(`clown-section`);
clownSection.appendChild(newP);
