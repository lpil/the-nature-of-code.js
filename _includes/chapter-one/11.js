var mover, target, currentlyChasing;

function Mover() {
  this.diameter = rand(32) + 32;
  this.position = createVector(rand(width), rand(height));
  this.velocity = createVector(0, 0);
  this.acceleration = [0.3, 0.1];
  this.topSpeed     = [6, 3];
}
Mover.prototype.render = function() {
  var d = this.diameter;
  stroke(0);
  fill(currentlyChasing ? 20 : 175);
  ellipse(this.position.x, this.position.y, d, d);
};
Mover.prototype.move = function() {
  var direction = p5.Vector.sub(target, this.position);
  direction.normalize();
  direction.mult( this.acceleration[currentlyChasing ? 0 : 1] );
  this.velocity.add(direction);
  this.velocity.limit( this.topSpeed[currentlyChasing ? 0 : 1] );
  this.position.add(this.velocity);
};

function rand(max) {
  return Math.random() * max;
}

function isMouseInBounds() {
  return ((mouseX > -10 && mouseX < width  + 10) &&
          (mouseY > -10 && mouseY < height + 10));
}

function createTarget() {
  if (currentlyChasing) {
    return createVector(mouseX, mouseY);
  } else {
    return createVector(width/2, height/2);
  }
}


function setup() {
  createCanvas(500, 400).parent('canvas-container');
  mover = new Mover();
  mouseX = -100;
  mouseY = -100;
}

function draw() {
  background(255);
  mover.render();
  currentlyChasing = isMouseInBounds();
  target   = createTarget();
  mover.move();
}
