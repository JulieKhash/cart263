"use strict";

// fadeOutText()
function fadeOutText() {
  $(`p`).each(function () {
    let array = $(this).text().split(``);
    array.forEach(function (word, index) {
      array[index] = `<span>${word}</span>`;
    });
    let html = array.join(``);
    $(this).html(html);
  });

  let delay = 0;
  $(document).on(`click`, function () {
    $(`span`).each(function () {
      setTimeout(() => {
        $(this).animate({
          opacity: 0,
        });
      }, delay * 50);
      delay++;
    });
  });
}

generateImg();

function generateImg() {
  for (var i = 0; i < 100; i++) {
    $("body").append(
      $("<img>", { id: "id" + i, src: "assets/images/smoke.jpg" })
    );
  }
}

fadeOutImage();

function fadeOutImage() {
  $(document).on(`mouseover`, function () {
    $(`img`).each(function () {
      $(this).animate({
        opacity: 5,
      });
    });
  });
}
