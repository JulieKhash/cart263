class HummingBird {
  constructor(imageBird) {
    this.x = width / 2 + 300;
    this.y = height / 2 + 100;

    this.imageBird = imageBird;
  }

  update() {
    this.display();
  }

  display() {
    push();
    tint(255, 190);
    image(this.imageBird, this.x, this.y);
    pop();
  }
}
