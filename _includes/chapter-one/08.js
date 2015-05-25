var mover;

function Mover() {
  var rand = function() { return Math.random() * 2 + 1; };
  this.radius       = Math.random() * 20 + 12;
  this.diameter     = this.radius * 2;
  this.position     = createVector(width / 2, this.diameter * 1.1);
  this.velocity     = createVector(0, 0);
  this.acceleration = createVector(0, 0.2);
}

Mover.prototype.move = function() {
  var position = this.position,
      velocity = this.velocity,
      radius   = this.radius;
  velocity.add(this.acceleration);
  position.add(velocity);
  if (position.y > height) {
    velocity.y = Math.abs(velocity.y) * -1;
    position.y = height -1;
  }
};

Mover.prototype.render = function() {
  stroke(0);
  fill(175);
  ellipse(
    this.position.x,
    this.position.y - this.radius,
    this.diameter,
    this.diameter
  );
};


function setup() {
  createCanvas(200, 400).parent('canvas-container');
  mover = new Mover();
}

function draw() {
  background(255);
  mover.render();
  mover.move();
}
