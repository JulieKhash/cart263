class Statue {
  constructor(imageStatue) {
    this.x = width / 2;
    this.y = height / 2;
    this.vx = 0;
    this.vy = 0;

    this.w = 925;
    this.h = 1200;

    this.speed = 0.8;

    this.opacity = 0;

    this.imageStatue = imageStatue;
    // this.imageRedSpark = imageRedSpark;

    // this.imageBrokenGlass = imageBrokenGlass;
  }

  update() {
    this.move();
    this.display();
  }

  move() {
    // check if we need to change the moving direction
    let r = random(0, 1);
    if (r < 0.1) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    // move position with velocity
    this.x += this.vx;
    this.y += this.vy;
    // constrain to the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  display() {
    // push();
    // // this.opacity += 1;
    // // tint(255, this.opacity);
    // image(this.imageRedSpark, this.x, this.y - 50, 900, 900);
    // pop();

    push();
    this.opacity += 1;
    this.opacity = constrain(this.opacity, 0, 200);
    tint(255, this.opacity);
    image(this.imageStatue, this.x, this.y, this.w / 2, this.h / 2);
    pop();

    // push();
    // // tint(255, 100);
    // image(this.imageBrokenGlass, this.x, this.y, 1200, 1200);
    // pop();
  }
}
