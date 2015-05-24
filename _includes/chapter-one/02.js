var position,
    velocity,
    rand     = Math.random,
    radius   = rand() * 28 + 6,
    diameter = radius * 2;

function setup() {
  // It seems we can't use createVector before setup
  position = createVector(100, 100);
  velocity = createVector(rand()*4, rand()*4);
  createCanvas(500, 200).parent('canvas-container');
}

function draw() {
  position.add(velocity);

  if ((position.x > width - radius) || (position.x < radius)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y > height - radius) || (position.y < radius)) {
    velocity.y = velocity.y * -1;
  }

  render(position);
}

function render(position) {
  background(255);
  stroke(0);
  fill(175);
  ellipse(position.x, position.y, diameter, diameter);
}
