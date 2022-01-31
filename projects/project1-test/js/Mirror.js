class Mirror {
  constructor(image) {
    // small mirror
    this.smX = width / 2 - 600; // position x
    this.smY = height / 2 + 100; // position y
    this.smW = 90; // image width
    this.smH = 131; // image height
    this.glitter = 180;

    this.image = image;
  }

  update() {
    this.display();
  }

  display() {
    push();
    tint(255, random(160, 250));
    image(this.image, this.smX, this.smY, this.smW, this.smH);
    pop();
  }
}
