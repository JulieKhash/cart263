class Statue {
  constructor(imageStatue) {
    this.x = width / 2;
    this.y = height / 2;

    this.imageStatue = imageStatue;
  }

  update() {
    this.display();
  }

  display() {
    push();
    image(this.imageStatue, this.x, this.y);
    pop();
  }
}
