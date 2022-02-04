class RedSpark {
  constructor(imageRedSpark) {
    this.x = width / 2;
    this.y = height / 2;

    this.imageRedSpark = imageRedSpark;
  }

  update() {
    this.display();
  }

  display() {
    push();
    image(this.imageRedSpark, this.x, this.y);
    pop();
  }
}
