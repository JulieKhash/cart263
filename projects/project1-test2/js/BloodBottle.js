class BloodBottle {
  constructor(imageBottle) {
    this.x = width / 2;
    this.y = height / 2;

    this.imageBottle = imageBottle;
  }

  update() {
    this.display();
  }

  display() {
    push();
    tint(random(200, 255), 170);
    image(this.imageBottle, this.x, this.y);
    pop();
  }
}
