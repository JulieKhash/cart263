class Title {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.sizeSmall = 15; // scroll down text
    this.sizeBig = 50; // main title
    this.titleText = `The Lestat Vampire`;
    this.scrollText = `scroll down`;
    // this.colorR = random(170, 210);
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
