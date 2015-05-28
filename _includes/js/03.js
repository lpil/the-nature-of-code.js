var center;

function setup() {
  createCanvas(500, 350).parent('canvas-container');
  center = createVector(width/2, height/2);
}

function draw() {
  var mouse = createVector(mouseX, mouseY);
  background(255);
  mouse.sub(center);             // mouse from the center, not top-left
  translate(center.x, center.y); // move 0,0 to center of window
  line(0, 0, mouse.x, mouse.y);
}
