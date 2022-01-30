class Title {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.sizeSmall = 15; // scroll down text
    this.sizeBig = 50; // main title
    this.opacity = 255; // for lestat/scroll down
    this.title = `The Lestat Vampire`;
    this.scrollText = `scroll down`;
    this.colorR = random(170, 210);
    this.colorG = 0;
    this.colorB = 10;
  }

  display() {
    push();
    textAlign(CENTER, CENTER);
    textSize(this.sizeSmall);
    textFont(`Georgia`);
    fill(this.colorR, this.colorG, this.colorB, title.opacity);
    text(title.phrase2, this.x, this.y + 100);
    pop();

    push();
    textAlign(CENTER, CENTER);
    textSize(this.titleBig);
    textFont(titleFont);
    fill(this.colorR, this.colorG, this.colorB, title.opacity);
    text(title.phrase, this.x, this.y);
    pop();
  }
}
