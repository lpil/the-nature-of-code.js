var mover, aKey = 65, zKey = 90;

function Mover() {
  this.diameter = 64;
  this.position = createVector(width / 2, height / 2);
  this.velocity = createVector(0, 0);
}

Mover.prototype.render = function() {
  var d = this.diameter,
      x = this.position.x,
      y = this.position.y;
  stroke(0);
  fill(175);
  ellipse(x        , y         , d, d);
  ellipse(x - width, y         , d, d);
  ellipse(x + width, y         , d, d);
  ellipse(x        , y - height, d, d);
  ellipse(x - width, y - height, d, d);
  ellipse(x + width, y - height, d, d);
  ellipse(x        , y + height, d, d);
  ellipse(x - width, y + height, d, d);
  ellipse(x + width, y + height, d, d);
};

Mover.prototype.move = function() {
  function rand() { return Math.random() * 10 - 5; }
  var acceleration = createVector(rand(), rand());
  acceleration.normalize();
  acceleration.mult(Math.random() * 1);
  this.velocity.limit(5);
  this.velocity.add(acceleration);
  this.position.add(this.velocity);
  this.wrap();
};

Mover.prototype.wrap = function() {
  if (this.position.x > width) {
    this.position.x = 0;
  } else if (this.position.x < 0) {
    this.position.x = width;
  }
  if (this.position.y > height) {
    this.position.y = 0;
  } else if (this.position.y < 0) {
    this.position.y = height;
  }
};


function setup() {
  createCanvas(500, 400).parent('canvas-container');
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
    case yKey:
      if (mover.velocity.x > 0) { mover.velocity.sub(acceleration); }
      break;
  }
}


