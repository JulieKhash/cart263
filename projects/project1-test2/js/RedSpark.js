class RedSpark extends Encounter {
  constructor(imageRedSpark) {
    super();
    this.x = width / 2;
    this.y = height / 2;
    this.size = 300; // intial size

    this.imageRedSpark = imageRedSpark; //
  }

  // updates the spark in sync with the encounter
  update() {
    this.move();
    this.display();
  }

  // moves the spark
  move() {
    super.move();
  }

  // displays the red spark
  display() {
    push();
    this.size++; // incremement spark size
    this.size = constrain(this.size, 300, 1000); // size constrain
    image(this.imageRedSpark, this.x, this.y, this.size, this.size);
    pop();
  }
}
