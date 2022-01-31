class Prologue {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.TextSize = 25;
    this.spacing = 50; // line spacing

    this.prologueText = `I was waiting for you in that alley. Watching you watching me
    What're you doing in my house?
    What if I could give it back to you?
    Pluck out the pain...and give you another life?
   ...One you could never imagine...

                                   Enter`;

    this.RectW = 1000;
    this.RectH = 500;

    this.opacity = 0;
    this.minOpacity = 0;
    this.MaxOpacity = 200; // semi-transparent bg
    this.fadeRate = 10;
  }

  update() {
    this.display();
  }

  display() {
    //rect background
    push();
    noStroke();
    fill(0, this.opacity);
    rectMode(CENTER);
    rect(this.x, this.y, this.RectW, this.RectH);
    pop();

    push();
    textAlign(CENTER, CENTER);
    textSize(this.TextSize);
    textFont(scriptFont);
    textLeading(this.spacing); //line spacing
    fill(random(170, 210), 0, 0, this.opacity);
    text(this.prologueText, this.x, this.y);
    pop();
  }

  mouseWheel(event) {
    this.opacity += event.delta / this.fadeRate;
    this.opacity = constrain(this.opacity, this.minOpacity, this.MaxOpacity); // constrains opacity up to 200
  }
}
