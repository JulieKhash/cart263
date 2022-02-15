class Eye {
  constructor(imageEye) {
    this.x = width / 2;
    this.y = height / 2;
    this.w = 500; //intial width
    this.h = 281;
    this.size = 10;

    this.fadeAMount = 0;
    this.fadeRate = 1 / 8;

    this.imageEye = imageEye;
  }

  update() {
    this.display();
    this.showEyeSlowly();
    this.increaseEyeSlowly();
    this.changeState();
  }

  changeState() {
    if (this.fadeAMount >= 150) {
      state = `flowerDragonFly`;
      bottleScene = false;
      flowerDragonFlyScene = true;
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
      this.fadeAMount += this.fadeRate;
      this.fadeAMount = constrain(this.fadeAMount, 0, 200);
    }
  }

  display() {
    push();
    tint(255, this.fadeAMount);
    image(this.imageEye, this.x, this.y, this.w, this.h);
    pop();
  }
}
