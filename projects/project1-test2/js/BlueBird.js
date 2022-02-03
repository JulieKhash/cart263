class BlueBird {
  constructor(imageBlueBird) {
    this.x = width / 2 + 300;
    this.y = height / 2 - 300;

    this.imageBlueBird = imageBlueBird;
  }

  update() {
    this.display();
  }

  display() {
    push();
    image(this.imageBlueBird, this.x, this.y);

    pop();
  }
}
