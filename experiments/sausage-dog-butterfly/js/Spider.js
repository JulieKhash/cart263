// a class for a spider that extends Insect

class Spider extends Insect {
  constructor(x, y, image) {
    super(x, y, image);

    this.rotationSpeed = 0.2;
  }

  // updates spider behaviour, makes it rotate if it's detected
  update() {
    super.update();

    if (spiderDetected) {
      this.angle += this.rotationSpeed;
    }
  }

  // if the mouse clicks on a spider, it's detected
  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      spiderDetected = true;
      insectSFX.play(); // makes a sound if the spider is found
    }
  }
}
