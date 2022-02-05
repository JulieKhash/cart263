class RedSpark extends Statue {
  constructor(imageRedSpark) {
    super();
    this.x = width / 2;
    this.y = height / 2;

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
    // this.opacity -= 1;
    tint(150, 200);
    image(this.imageRedSpark, this.x, this.y, 900, 900);
    pop();
  }
}
