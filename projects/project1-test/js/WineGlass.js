class WineGlass {
  constructor(imageWineGlass) {
    this.x = width / 3 - 100;
    this.y = height / 3 - 20;

    this.imageWineGlass = imageWineGlass;
  }

  update() {
    this.display();
  }

  display() {
    push();

    image(this.imageWineGlass, this.x, this.y);
    pop();
  }
}
