class Fireplace {
  constructor(imageFireplace) {
    this.x = width / 2;
    this.y = height / 2;
    this.sizeW = 2500;
    this.sizeH = 1400;

    this.imageFireplace = imageFireplace;
  }

  update() {
    this.display();
  }

  display() {
    push();
    image(this.imageFireplace, this.x, this.y, this.sizeW, this.sizeH);
    pop();
  }
}
