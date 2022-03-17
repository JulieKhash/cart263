"use strict";

// the user can uncover secret letters in the poem by moving over their mouse.
// Once found, they can drag them in the correct order to the answer area to find
// the secret word and receive a dialog box
//
// Uses:

// jQuery
// https://jquery.com
// jQuery UI:
// https://jqueryui.com

const secretWord = `Douleur`;

const colorDuration = 500;

// turn the div dialog into an actual dialog
$(`#solved-dialog`).dialog({
  buttons: {
    "bien sûr!": function () {
      // add a button to close it
      $(this).dialog(`close`);
    },
  },
  autoOpen: false, //don't open it right away
});

// when the user mouses over secret letters heghlight them
$(`.secret`).on("mouseover", function (event) {
  $(this).addClass(`found`, colorDuration);
});

// drag the cloned letters
$(`.secret`).draggable({
  helper: "clone",
});

// when the user drops a letter on the answer...
$(`#answer`).droppable({
  drop: function (event, ui) {
    // get the letter in the dragger element(answer box)
    let letter = ui.draggable.text();
    // add this to the answer box
    $(this).append(letter);
    // disable dragging for this letter
    ui.draggable.draggable(`disable`);
    // remove highligting of the letter
    ui.draggable.removeClass(`found`, colorDuration);
    // disable mouseovers on this letter
    ui.draggable.off(`mouseover`);
    //check if they got the answer right
    if ($(`#answer`).text() === secretWord) {
      // if they did, display a dialog box
      $(`#solved-dialog`).dialog(`open`);
    }
  },
});
