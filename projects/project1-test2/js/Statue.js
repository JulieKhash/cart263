class Statue {
  constructor(imageStatue) {
    this.x = width / 2;
    this.y = height / 2;

    this.imageStatue = imageStatue;

    // this.imageBrokenGlass = imageBrokenGlass;
  }

  update() {
    this.display();
  }

  display() {
    push();
    tint(255, random(170, 200));
    image(this.imageStatue, this.x, this.y);
    pop();

    // push();
    // // tint(255, 100);
    // image(this.imageBrokenGlass, this.x, this.y, 1200, 1200);
    // pop();
  }
}
