class Prologue {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.TextSize = 25;
    this.spacing = 50; // line spacing

    this.prologueText = `Life has no meaning anymore . . . does it ?
    The wine has no taste. The food sickens you.
    There seems no reason for any of it.
    But what if I could give it back to you ?
    Pluck out the pain and give you another life ?
   . . . One you could never imagine . . .

                                   Enter`;

    this.RectW = 1000;
    this.RectH = 500;

    this.fadeAMount = 0;
    this.minFadeAMount = 0;
    this.maxFadeAMount = 200; // semi-transparent bg
    this.fadeRate = 10;
  }

  update() {
    this.display();
  }

  display() {
    //rect background
    push();
    noStroke();
    fill(0, this.fadeAMount);
    rectMode(CENTER);
    rect(this.x, this.y, this.RectW, this.RectH);
    pop();

    push();
    textAlign(CENTER, CENTER);
    textSize(this.TextSize);
    textFont(scriptFont);
    textLeading(this.spacing); //line spacing
    fill(random(170, 210), 0, 0, this.fadeAMount);
    text(this.prologueText, this.x, this.y);
    pop();
  }

  mouseWheel(event) {
    this.fadeAMount += event.delta / this.fadeRate;
    this.fadeAMount = constrain(
      this.fadeAMount,
      this.minFadeAMount,
      this.maxFadeAMount
    ); // constrains opacity up to 200
  }
}
