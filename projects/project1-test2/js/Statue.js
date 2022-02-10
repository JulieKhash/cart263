class Statue {
  constructor(imageStatue, imageRedSpark, imageRedSparkBW, lightImg, birdsImg) {
    this.x = width / 2;
    this.y = height / 2;
    this.vx = 0;
    this.vy = 0;

    this.w = 925;
    this.h = 1200;

    this.speed = 0.8;

    this.opacity = 0;

    this.imageStatue = imageStatue;

    this.imageRedSpark = imageRedSpark;
    this.imageRedSparkBW = imageRedSparkBW;
    this.size = 300;

    this.lightImg = lightImg;
    this.birdsImg = birdsImg;
    // this.imageBrokenGlass = imageBrokenGlass;
  }

  update() {
    this.move();
    this.display();
  }

  triggerAction() {
    setTimeout(this.makeVisible, 5000);
  }

  makeVisible() {
    redSparkMuted = false;
    redSparkActive = true;
    encounterVisible = true;
  }

  voiceInstruction() {
    if (!responsiveVoice.isPlaying()) {
      responsiveVoice.speak(
        `Don't you see?  I'm not the spirit of any age.
        I am the oldest living vampire in the world.
The one who made you should have told you this.
The one who left the Old World for the New...
He knew nothing. Nor did he care.
Have you said your good-byes to the light?
If I leave you here you'll die.
Or you can be young always, my friend
as we are now. But you must tell me
will you come or no?`,
        VOICE_NAME,
        VOICE_PARAMS
      );
    }
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
    if (redSparkMuted) {
      push();
      // this.size += 1;
      // this.size = constrain(this.size, 300, 1000);
      image(
        this.imageRedSparkBW,
        this.x + 25,
        this.y - 50,
        this.size,
        this.size
      );
      pop();
    } else if (redSparkActive) {
      push();
      this.size += 1;
      this.size = constrain(this.size, 300, 1000);
      image(this.imageRedSpark, this.x + 25, this.y - 50, this.size, this.size);
      pop();
    }
    if (encounterVisible) {
      push();
      this.opacity += 1;
      this.opacity = constrain(this.opacity, 0, 200);
      tint(255, this.opacity);
      image(this.imageStatue, this.x, this.y, this.w / 2, this.h / 2);
      pop();
    }

    push();
    this.opacity += 0.1;
    this.opacity = constrain(this.opacity, 0, 50);
    tint(255, this.opacity);
    image(this.lightImg, width / 2, height / 2, 800, 1200);
    pop();

    push();
    tint(255, 50);
    image(this.birdsImg, width / 2, height / 2, 700, 400);
    pop();
  }

  mousePressed() {
    this.triggerAction();
    // plays the bell sound
    if (!mysteriousSFX.isPlaying()) {
      mysteriousSFX.setVolume(0.5);
      mysteriousSFX.loop();
    }
    this.voiceInstruction();
  }
}
