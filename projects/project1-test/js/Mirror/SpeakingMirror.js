class SpeakingMirror {
  constructor(image) {
    this.X = width / 2; // position x
    this.Y = height / 2; // position y

    this.frameOpacity = 200;
    this.image = image;
    this.visible = false;
  }

  update() {
    this.display();
  }

  checkOverlap(x, y) {
    if (
      this.x > this.x - this.image.width / 2 &&
      this.x < this.x + this.image.width / 2 &&
      this.y > this.y - this.image.height / 2 &&
      this.y < this.y + this.image.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    if (!this.visible) {
      push();
      tint(255, this.frameOpacity);
      image(this.image, this.smX, this.smY, this.smW, this.smH);
      pop();
    }
  }
}
