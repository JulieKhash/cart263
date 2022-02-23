let paragraph = document.getElementById(`paragraph`);
let opacity = 1;

setTimeout(function () {
  paragraph.style[`color`] = `green`;
}, 2000);

// blinking fx
// setInterval(blink, 500);
// function blink() {
//   let opacity = paragraph.style[`opacity`];
//   if (opacity === `1`) {
//     paragraph.style[`opacity`] = `0`;
//   } else {
//     paragraph.style[`opacity`] = `1`;
//   }
// }

setInterval(fadeOut, 1000);
// fadeOut();

function fadeOut() {
  opacity -= 0.01;
  paragraph.style[`opacity`] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(fadeOut);
  }
}

document.addEventListener();
