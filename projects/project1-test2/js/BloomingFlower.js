class BloomingFLower {
  constructor(imageBloom) {
    this.x = width / 2;
    this.y = height / 2;

    this.imageBloom = imageBloom;
  }

  update() {
    this.display();
  }

  display() {
    push();

    image(this.imageBloom, this.x, this.y);
    pop();
  }
}
