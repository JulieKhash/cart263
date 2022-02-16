// Title
// adds glittering texts for the main page, applies "gothic" like fonts

class Title {
  constructor(titleText) {
    this.x = width / 2; // in the center
    this.y = height / 2;
    this.sizeSmall = 17; // scroll down text
    this.sizeBig = 50; // main title
    this.titleText = titleText;
    this.scrollText = `scroll down`;
    this.colorG = 0;
    this.colorB = 10;
    this.fadeAmount = 255; // for lestat/scroll down
    this.fadeRate = 5;
  }

  // updates the texts
  update() {
    this.display();
  }

  // shows the `scroll down` text
  display() {
    push();
    textAlign(CENTER, CENTER);
    textSize(this.sizeSmall);
    textFont(`Georgia`);
    fill(random(170, 210), this.colorG, this.colorB, this.fadeAmount);
    text(this.scrollText, this.x, this.y + 100);
    pop();

    // shows the title text
    push();
    textAlign(CENTER, CENTER);
    textSize(this.sizeBig);
    textFont(titleFont);
    fill(random(170, 210), this.colorG, this.colorB, this.fadeAmount);
    text(this.titleText, this.x, this.y);
    pop();
  }

  // scroll event for the manual fade effect between title/prologue texts
  mouseWheel(event) {
    this.fadeAmount -= event.delta / this.fadeRate;
  }
}
