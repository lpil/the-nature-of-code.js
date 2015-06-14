var segments = 40,
    rotStep  = 0,
    angle    = Math.PI * 2 / segments,
    radStep  = 100;

function setup() {
  createCanvas(600, 600).parent('canvas-container');
}

function draw() {
  var i        = segments,
      radius   = Math.sin(radStep) * 10 + 130,
      diameter = radius * 2;

  translate(width/2, height/2);
  background(0);

  rotate(rotStep);

  rotStep -= 0.002;
  radStep += 0.007;

  fill(0, 0);
  stroke(255);
  while (i--) {
    ellipse(radius, 0, diameter, diameter);
    rotate(angle);
  }
}
