class MirrorSmall {
  constructor(image) {
    // small mirror
    this.smX = width / 2 - 600; // position x
    this.smY = height / 2 + 100; // position y
    this.smW = 90; // image width
    this.smH = 131; // image height
    this.glitter = 180;

    this.image = image;
    this.visible = true;
  }

  update() {
    // super.update();

    this.display();
  }

  // checkOverlap(x, y) {
  //   if (
  //     this.x > this.x - this.image.width / 2 &&
  //     this.x < this.x + this.image.width / 2 &&
  //     this.y > this.y - this.image.height / 2 &&
  //     this.y < this.y + this.image.height / 2
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  display() {
    if (this.visible) {
      push();
      tint(255, random(160, 250));
      image(this.image, this.smX, this.smY, this.smW, this.smH);
      pop();
    }
  }
}
