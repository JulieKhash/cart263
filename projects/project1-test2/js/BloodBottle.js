class BloodBottle {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

    this.imageBottle = imageBottle;
  }

  update() {
    this.display();
  }

  display() {
    push();
    image(this.imageBottle, this.x, this.y);
    pop();
  }
}
