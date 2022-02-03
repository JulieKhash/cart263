class BloomingFLower {
  constructor(imageBloom, imageSplash) {
    this.x = width / 2;
    this.y = height / 2;
    this.w = 1200;
    this.h = 880;

    this.imageBloom = imageBloom;

    this.SplashW = 900;
    this.SplashH = 600;
    this.imageSplash = imageSplash;
  }

  update() {
    this.display();
  }

  display() {
    push();
    tint(255, 200);
    image(this.imageBloom, this.x, this.y, this.w, this.h);
    pop();

    push();
    tint(255, random(40, 80));
    image(this.imageSplash, this.x - 100, this.y, this.SplashW, this.SplashH);
    pop();
  }
}
