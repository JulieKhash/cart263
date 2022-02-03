class BloomingFLower {
  constructor(imageBloom, imageBlackFrame) {
    this.x = width / 2;
    this.y = height / 2;
    this.w = 1450;
    this.h = 1080;

    this.imageBloom = imageBloom;

    this.imageBlackFrame = imageBlackFrame;

    // this.SplashW = 900;
    // this.SplashH = 600;
    // this.imageSplash = imageSplash;
  }

  update() {
    this.display();
  }

  display() {
    push();
    tint(255, 200);
    image(this.imageBloom, this.x, this.y, this.w - 300, this.h - 300);
    pop();

    push();
    // tint(255, 200);
    image(this.imageBlackFrame, this.x, this.y, this.w + 200, this.h + 200);
    pop();

    // push();
    // tint(255, random(40, 80));
    // image(this.imageSplash, this.x - 100, this.y, this.SplashW, this.SplashH);
    // pop();
  }
}