class BlueBird {
  constructor(imageBlueBird) {
    this.x = width / 2 + 300;
    this.y = height / 2 - 200;
    this.w = 137;
    this.h = 400;

    this.imageBlueBird = imageBlueBird;
  }

  update() {
    this.display();
  }

  display() {
    push();
    tint(255, random(200, 250));
    image(this.imageBlueBird, this.x, this.y, this.w, this.h);
    pop();
  }
}
