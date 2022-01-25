class TimeBar {
  constructor(lowX, highX, lowY, highY){
    this.lowX = lowX,
    this.highX = highX,
    this.lowY = lowY,
    this.highY = highY,
    this.color = 180
  }


  update(){
    this.display();
  }

  fillBarr(){

  }


  display(){
    push();
    stroke(this.color, 50);
    strokeWeight(50);
    line(this.lowX, this.lowY, this.highX, this.highY);
    pop();
  }
}
