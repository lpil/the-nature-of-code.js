var mover;

function Mover() {
  var rand = function() { return Math.random() * 2 + 1; };
  this.position = createVector(width / 2, height / 2);
  this.velocity = createVector(rand(), rand());
  this.radius   = Math.random() * 28 + 6;
  this.diameter = this.radius * 2;
}

Mover.prototype.move = function() {
  function bounceOff(axis, limit) {
    var hit = (position[axis] > limit - radius) || (position[axis] < radius);
    if (hit) { velocity[axis] = velocity[axis] * -1; }
  }
  var position = this.position,
      velocity = this.velocity,
      radius   = this.radius;
  position.add(velocity);
  bounceOff('x', width);
  bounceOff('y', height);
};

Mover.prototype.render = function() {
  stroke(0);
  fill(175);
  ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
};


function setup() {
  createCanvas(500, 200).parent('canvas-container');
  mover = new Mover();
}

function draw() {
  background(255);
  mover.render();
  mover.move();
}
