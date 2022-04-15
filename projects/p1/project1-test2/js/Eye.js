// Eye
// slowly emerges from a glass bottle, gets bigger to pull the user into the hypnotic experience
// changes the state

class Eye {
  constructor(imageEye) {
    this.x = width / 2;
    this.y = height / 2;
    this.w = 500; // intial width
    this.h = 281; // intial height

    this.fadeAMount = 0; // inital fade value
    this.fadeRate = 1 / 8; // fade increase value
    this.fadeThreshold = 150; // max fade value

    this.imageEye = imageEye;
  }

  // updates the eye
  update() {
    this.display();
    this.showEyeSlowly();
    this.increaseEyeSlowly();
    this.changeState();
  }

  // changes the scene when the it reaches the fade threshold
  changeState() {
    if (this.fadeAMount >= this.fadeThreshold) {
      state = `flowerDragonFly`;
      bottleScene = false;
      flowerDragonFlyScene = true;
    }
  }

  // proportionally enlarges the image
  increaseEyeSlowly() {
    if (bottleDrunken) {
      this.w += 1.5;
      this.h += 1;
    }
  }

  // fade in effect
  showEyeSlowly() {
    if (bottleDrunken) {
      this.fadeAMount += this.fadeRate;
      this.fadeAMount = constrain(this.fadeAMount, 0, 200);
    }
  }

  // displays the animation of the bloody eye
  display() {
    push();
    tint(255, this.fadeAMount);
    image(this.imageEye, this.x, this.y, this.w, this.h);
    pop();
  }
}
