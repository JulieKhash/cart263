class HummingBird {
  constructor(imageBird, imageSplash) {
    this.x = width / 2 + 250;
    this.y = height / 2 - 50;
    this.vx = 0;
    this.vy = 0;
    this.speed = 2;

    this.imageBird = imageBird;

    this.SplashX = width / 2 - 100;
    this.SplashY = height / 2;
    this.SplashW = 900;
    this.SplashH = 600;
    this.imageSplash = imageSplash;
  }

  update() {
    this.move();
    this.display();
  }

  // a default move of the insects, gives a flaoting impression
  move() {
    // check if we need to change their moving direction
    let r = random(0, 1);
    if (r < 0.8) {
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
    push();
    tint(255, random(100, 160));
    image(this.imageBird, this.x, this.y);
    pop();

    push();
    tint(255, random(40, 80));
    image(
      this.imageSplash,
      this.SplashX,
      this.SplashY,
      this.SplashW,
      this.SplashH
    );
    pop();
  }
}
