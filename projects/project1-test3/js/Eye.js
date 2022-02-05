class Eye {
  constructor(imageEye) {
    this.x = width / 2;
    this.y = height / 2;
    this.w = 500; //intial width
    this.h = 281;
    this.size = 10;

    this.opacity = 0;
    this.fadeRate = 8;

    this.imageEye = imageEye;
  }

  update() {
    this.display();
    this.showEyeSlowly();
    this.increaseEyeSlowly();
    this.changeState();
  }

  changeState() {
    if (this.opacity >= 150) {
      state = `flowerBird`;
      bottleScene = false;
      flowerBirdScene = true;
    }
  }

  increaseEyeSlowly() {
    if (bottleDrunken) {
      this.w += 1.5;
      this.h += 1;
    }
  }

  showEyeSlowly() {
    if (bottleDrunken) {
      this.opacity += 1 / 8;
      this.opacity = constrain(this.opacity, 0, 200);
    }
  }

  display() {
    push();
    tint(255, this.opacity);
    image(this.imageEye, this.x, this.y, this.w, this.h);
    pop();
  }
}
