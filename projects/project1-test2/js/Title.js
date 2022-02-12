class Title {
  constructor(titleText) {
    this.x = width / 2;
    this.y = height / 2;
    this.sizeSmall = 17; // scroll down text
    this.sizeBig = 50; // main title
    this.titleText = titleText;
    this.scrollText = `scroll down`;
    this.colorG = 0;
    this.colorB = 10;
    this.opacity = 255; // for lestat/scroll down
    this.fadeRate = 5;
  }

  update() {
    this.display();
  }

  display() {
    push();
    textAlign(CENTER, CENTER);
    textSize(this.sizeSmall);
    textFont(`Georgia`);
    fill(random(170, 210), this.colorG, this.colorB, this.opacity);
    text(this.scrollText, this.x, this.y + 100);
    pop();

    push();
    textAlign(CENTER, CENTER);
    textSize(this.sizeBig);
    textFont(titleFont);
    fill(random(170, 210), this.colorG, this.colorB, this.opacity);
    text(this.titleText, this.x, this.y);
    pop();
  }

  mouseWheel(event) {
    this.opacity -= event.delta / this.fadeRate;
  }
}
