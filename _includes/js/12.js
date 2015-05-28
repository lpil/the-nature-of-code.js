var movers, target, currentlyChasing;

function Mover() {
  function speeds() { return [rand(3) + 5, rand(1) + 3]; }
  function accels() { return [rand(3), rand(2)]; }
  this.diameter = rand(50) + 14;
  this.position = createVector(rand(width), rand(height));
  this.velocity = createVector(0, 0);
  this.acceleration = [0.3, 0.1];
  this.topSpeed     = speeds();
}
Mover.prototype.render = function() {
  var d = this.diameter;
  stroke(currentlyChasing ? 200 : 0);
  fill(currentlyChasing ? 20 : 200);
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
  var i = 15;
  movers = [];
  while (i--) { movers.push(new Mover()); }
  createCanvas(500, 400).parent('canvas-container');
  mouseX = -100;
  mouseY = -100;
}

function draw() {
  var i = movers.length;
  background(255);
  currentlyChasing = isMouseInBounds();
  target = createTarget();
  while (i--) {
    movers[i].render();
    movers[i].move();
  }
}
