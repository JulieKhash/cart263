// FlowerBloom
// slowly displays the animation of the flowers inside the frame

class FlowerBloom {
  constructor(imageBloom, imageBlackFrame) {
    this.x = width / 2;
    this.y = height / 2;
    this.w = 1450; // width
    this.h = 1080; // height

    this.fadeAMount = 0; // initial fade value

    this.imageBloom = imageBloom;
    this.imageBlackFrame = imageBlackFrame;
  }

  // updates the bl frame and the flowers
  update() {
    this.display();
    this.showSlowly();
  }

  // fade in effect
  showSlowly() {
    this.fadeAMount++;
  }

  // displays black frame and blomign flowers
  display() {
    push();
    tint(255, this.fadeAMount);
    image(this.imageBloom, this.x, this.y, this.w - 300, this.h - 300);
    pop();

    push();
    tint(255, this.fadeAMount);
    image(this.imageBlackFrame, this.x, this.y, this.w + 200, this.h + 200);
    pop();
  }

  // plays a bird chirping when the mouse is pressed
  mousePressed() {
    if (!birdChirpSFX.isPlaying()) {
      birdChirpSFX.setVolume(0.5);
      birdChirpSFX.loop();
    }
  }
}
