class Eye {
  constructor(imageEye) {
    this.x = width / 2;
    this.y = height / 2;
    this.opacity = 0;

    this.fadeRate = 10;

    this.imageEye = imageEye;
  }

  update() {
    this.display();
    this.showEye();
  }

  showEye() {
    if (bottleDrunken) {
      this.opacity += 1 / 10;
    }
  }

  display() {
    push();
    tint(255, this.opacity);
    image(this.imageEye, this.x, this.y);
    pop();
  }
}
