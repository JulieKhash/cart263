class Fireplace {
  constructor(imageFireplace, imageFire) {
    this.x = width / 2;
    this.y = height / 2;
    this.sizeW = 2500;
    this.sizeH = 1400;
    this.imageFireplace = imageFireplace;

    // fire place position, size
    this.fireX = width / 2 + 20;
    this.fireY = 940;
    this.fireSizeW = 730;
    this.fireSizeH = 515;
    this.imageFire = imageFire;
  }

  update() {
    this.display();
  }

  display() {
    push();
    image(this.imageFireplace, this.x, this.y, this.sizeW, this.sizeH);
    pop();

    push();
    tint(255, 150);
    image(
      this.imageFire,
      this.fireX,
      this.fireY,
      this.fireSizeW,
      this.fireSizeH
    );
    pop();
  }
}
