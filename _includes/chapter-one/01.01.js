var x = 100,
    y = 100,
    xSpeed = 1.5,
    ySpeed = 2.5,
    radius = 16,
    diameter = radius * 2;

function setup() {
  var canvas = createCanvas(500, 200);
  canvas.parent('canvas-container');
}

function draw() {
  background(255);
  x = x + xSpeed;
  y = y + ySpeed;

  if ((x > width - radius) || (x < radius)) {
    xSpeed = xSpeed * -1;
  }
  if ((y > height - radius) || (y < radius)) {
    ySpeed = ySpeed * -1;
  }

  stroke(0);
  fill(175);
  ellipse(x, y, diameter, diameter);
}
