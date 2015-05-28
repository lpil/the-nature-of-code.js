var mover, acceleration, aKey = 65, zKey = 90;

function Mover() {
  this.radius   = Math.random() * 20 + 12;
  this.diameter = this.radius * 2;
  this.position = createVector(this.radius + 10, height / 2);
  this.velocity = createVector(0, 0);
}

Mover.prototype.move = function() {
  var position = this.position,
      velocity = this.velocity,
      radius   = this.radius;
  position.add(velocity);
  if (position.x - radius > width) {
    position.x = radius;
  }
};

Mover.prototype.render = function() {
  var diameter = this.diameter;
  stroke(0);
  fill(175);
  ellipse(this.position.x        , this.position.y, diameter, diameter);
  ellipse(this.position.x - width, this.position.y, diameter, diameter);
};


function setup() {
  createCanvas(500, 100).parent('canvas-container');
  acceleration = createVector(0.1, 0);
  mover = new Mover();
}

function draw() {
  background(255);
  mover.render();
  mover.move();
}

function keyPressed() {
  switch (keyCode) {
    case aKey:
      mover.velocity.add(acceleration);
      break;
    case zKey:
      if (mover.velocity.x > 0) { mover.velocity.sub(acceleration); }
      break;
  }
}


