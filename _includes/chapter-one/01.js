var rand     = Math.random,
    x        = 100,
    y        = 100,
    xSpeed   = rand() * 4,
    ySpeed   = rand() * 4,
    radius   = rand() * 28 + 6,
    diameter = radius * 2;

function setup() {
  createCanvas(500, 200).parent('canvas-container');
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
