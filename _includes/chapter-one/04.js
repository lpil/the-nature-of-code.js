var center;

function setup() {
  createCanvas(500, 350).parent('canvas-container');
  center = createVector(width/2, height/2);
}

function draw() {
  var mouse = createVector(mouseX, mouseY);
  background(255);
  mouse.sub(center);
  mouse.mult(2);  // Scaling using vector multiplication
  translate(center.x, center.y);
  line(0, 0, mouse.x, mouse.y);
}
