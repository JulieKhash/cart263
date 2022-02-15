class Statue extends Voice {
  constructor(imageStatue, imageRedSpark, imageRedSparkBW, voice1, voice2) {
    super();
    this.x = width / 2;
    this.y = height / 2;
    this.vx = 0;
    this.vy = 0;

    this.w = 1000;
    this.h = 1333;

    this.speed = 0.8;

    this.opacity = 0;

    this.imageStatue = imageStatue;

    this.imageRedSpark = imageRedSpark;
    this.imageRedSparkBW = imageRedSparkBW;
    this.size = 300;

    this.voice1 = voice1;
    this.voice2 = voice2;
  }

  update() {
    this.move();
    this.display();
  }

  userPromptBox() {
    currentResponse = prompt(userPrompt);
  }

  checkUserAnswer() {
    if (currentResponse === userResponse) {
      state = `lightningRed`;
      heartbeatScene = true;
      encounterScene = false;
    } else {
      this.voiceInstruction2();
    }
  }

  triggerAction() {
    setTimeout(this.makeVisible, 5000);
  }

  makeVisible() {
    redSparkMuted = false;
    redSparkActive = true;
    encounterVisible = true;
  }

  voiceInstruction1() {
    super.voiceInstruction();
  }

  voiceInstruction2() {
    super.voiceInstruction();
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
      this.size = constrain(this.size, 300, 500);
      image(this.imageRedSpark, this.x + 25, this.y - 50, this.size, this.size);
      pop();
    }
    push();
    if (encounterVisible) {
      this.opacity += 1.5;
      this.opacity = constrain(this.opacity, 0, 240);
      tint(255, this.opacity);
      image(this.imageStatue, this.x, this.y, this.w, this.h);
      pop();
    }
  }

  mousePressed() {
    this.triggerAction();
    // plays the mysterious sound
    if (!mysteriousSFX.isPlaying()) {
      mysteriousSFX.setVolume(0.4);
      mysteriousSFX.loop();
    }
    if (encounterVisible) {
      this.voiceInstruction2();
      this.userPromptBox();
      this.checkUserAnswer();
    } else {
      this.voiceInstruction1();
    }
  }
}
