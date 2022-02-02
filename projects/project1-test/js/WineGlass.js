class WineGlass {
  constructor(imageWineGlass) {
    this.x = width / 3;
    this.y = height / 3;

    this.imageWineGlass = imageWineGlass;
  }

  display() {
    push();

    image(this.imageWineGlass, this.x, this.y);
    pop();
  }
}
