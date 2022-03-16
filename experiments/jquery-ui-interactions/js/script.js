"use strict";

// $(`#prisoner`).on(`mouseover`, function () {
//   $(this).effect(`puff`, `slow`);
// });

$(`#escape-tunnel`).hide();

$(`#introduction-dialog`).dialog({
  modal: true,
  resizable: false,
  buttons: {
    Imagination: function () {
      //disable walls
      $(`#prisoner`).draggable(`option`, `containment`, `none`);
      $(this).dialog(`close`);
    },
    Tunnel: function () {
      $(this).dialog(`close`);
      $(`#escape-tunnel`).show({
        effect: `blind`,
      });
    },
  },
});

$(`#prisoner`).effect({
  effect: `shake`,
  duration: 1500,
  times: 14,
  distance: 6,
  complete: makePrisonDraggable,
});

$(`#escape-tunnel`).droppable({
  drop: function (event, ui) {
    // whatever gets dropped, will be removed
    ui.draggable.remove();
    $(this).hide({
      effect: `explode`,
      duration: 1000,
    });
  },
});

function makePrisonDraggable() {
  $(`#prisoner`).draggable({
    containment: `#prison`,
    start: function (event, ui) {
      // $(this).css(`font-weight`, `bold`);
      // $(this).animate({ color: `#aa77cc` }, 700);
      $(this).addClass(`prisoner-dragging`, 600);
    },
    stop: function () {
      // $(this).css(`font-weight`, `none`);
      // $(this).animate({ color: `#000000` }, 700);
      $(this).removeClass(`prisoner-dragging`, 600);
    },
  });
}
