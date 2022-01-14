class SausageDog extends Animal {
  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotatationSpeed = 0.25;
  }

  update() {
    super.update();

    if (this.found) {
      this.angle += this.rotatationSpeed;
    }
  }

  mousePressed() {

    if (this.overlap(mouseX, mouseY)) {
      this.found = true;
      barkSFX.play();
    }
  }
}
