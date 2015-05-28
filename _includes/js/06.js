var center, scaleVal;

function setup() {
  createCanvas(500, 350).parent('canvas-container');
  center = createVector(width/2, height/2);
  scaleVal = height / 2;
}

function draw() {
  var magnitude,
      mouse = createVector(mouseX, mouseY);
  mouse.sub(center);
  mouse.normalize(); // magnitude is now 1
  mouse.mult(scaleVal);
  render(mouse);
}

function render(mouse) {
  magnitude = mouse.mag();
  background(255);
  fill(0);
  // meters
  rect(0         , height + 1 - magnitude, 10, magnitude);
  rect(width - 11, height + 1 - magnitude, 10, magnitude);
  // vector
  translate(center.x, center.y);
  line(0, 0, mouse.x, mouse.y);
}
