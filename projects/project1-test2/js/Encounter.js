// Encounter
// extends Voice (responsive voice) class
// appears slowly when the user clicks with their mouse, adds on the sound effect
// the text box appears when it reaches the full visibility
// changes the state if the user agrees (types "Yes"),
// user "must" agree with the spirit encounter becuase there's no way back

class Encounter extends Voice {
  constructor(imageEncounter, imageRedSpark, imageRedSparkBW, voice1, voice2) {
    super();
    this.x = width / 2;
    this.y = height / 2;
    this.vx = 0;
    this.vy = 0;
    this.w = 1000;
    this.h = 1333;

    this.delayTime = 5000;

    this.speed = 0.8;
    this.encounterFadeRate = 1.5;
    this.imageEncounter = imageEncounter;

    this.imageRedSpark = imageRedSpark;
    this.imageRedSparkBW = imageRedSparkBW;
    this.size = 300;

    // voice parameters
    this.voice1 = voice1;
    this.voice2 = voice2;
  }

  update() {
    this.move();
    this.display();
  }

  voiceUtteranceLong() {
    super.utteranceLong();
  }

  voiceUtteranceShort() {
    super.utteranceShort();
  }

  userPromptBox() {
    currentResponse = prompt(userPrompt);
  }

  checkUserAnswer() {
    if (currentResponse === userResponse) {
      state = `lightningHeartbeat`;
      heartbeatScene = true;
      encounterScene = false;
    } else {
      this.voiceUtteranceShort();
    }
  }

  triggerPrompt() {
    setTimeout(function () {
      redSparkMuted = false;
      redSparkActive = true;
      encounterVisible = true;
    }, this.delayTime);
  }

  // adds the floating movement to the encounter
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
      encounterFade += this.encounterFadeRate;
      encounterFade = constrain(encounterFade, 0, 240);
      tint(255, encounterFade);
      image(this.imageEncounter, this.x, this.y, this.w, this.h);
      pop();
    }
  }

  mousePressed() {
    this.triggerPrompt();
    // plays the mysterious sound
    if (!mysteriousSFX.isPlaying()) {
      mysteriousSFX.setVolume(0.4);
      mysteriousSFX.loop();
    }
    if (encounterVisible && encounterFade >= 240) {
      this.voiceUtteranceShort();
      this.userPromptBox();
      this.checkUserAnswer();
    } else {
      this.voiceUtteranceLong();
    }
  }
}
