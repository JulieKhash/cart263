class MirrorSmall {
  constructor(image) {
    this.x = width / 2 - 600; // position x
    this.y = height / 2 + 100; // position y
    this.w = 90; // image width
    this.h = 131; // image height
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
      image(this.image, this.x, this.y, this.w, this.h);
      pop();
    }
  }
}
