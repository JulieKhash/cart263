class RedSpark extends Statue {
  constructor(imageRedSpark) {
    super();
    this.x = width / 2;
    this.y = height / 2;

    this.size = 300;

    this.opacity = 255;

    this.imageRedSpark = imageRedSpark;
  }

  update() {
    this.move();
    this.display();
  }

  move() {
    super.move();
  }

  display() {
    push();
    this.size += 1;
    this.size = constrain(this.size, 300, 1000);
    image(this.imageRedSpark, this.x, this.y, this.size, this.size);
    pop();
  }
}
