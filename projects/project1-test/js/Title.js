class Title {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.sizeSmall = 15; // scroll down text
    this.sizeBig = 50; // main title
    this.title = `The Lestat Vampire`;
    this.scrollText = `scroll down`;
    // this.colorR = random(170, 210);
    this.colorG = 0;
    this.colorB = 10;
    this.opacity = 255; // for lestat/scroll down
    this.fadeRate = 5;
  }

  display() {
    push();
    textAlign(CENTER, CENTER);
    textSize(this.sizeSmall);
    textFont(`Georgia`);
    fill(random(170, 210), this.colorG, this.colorB, title.opacity);
    text(title.phrase2, this.x, this.y + 100);
    pop();

    push();
    textAlign(CENTER, CENTER);
    textSize(this.sizeBig);
    textFont(titleFont);
    fill(random(170, 210), this.colorG, this.colorB, title.opacity);
    text(title.phrase, this.x, this.y);
    pop();
  }

  mouseWheel(event) {
    title.opacity -= event.delta / this.fadeRate;
  }
}
