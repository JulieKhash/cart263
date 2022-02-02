class Fireplace {
  constructor(imageFireplace) {
    this.x = width / 2;
    this.y = height / 2;

    this.imageFireplace = imageFireplace;
  }

  display() {
    push();
    image(this.imageFireplace, this.x, this.y);
    pop();
  }
}
