var liquid, balls = [];


function Liquid(coefficientOfDrag) {
  this.x = 0;
  this.y = height / 2;
  this.w = width;
  this.h = height / 2;
  this.coefficientOfDrag = coefficientOfDrag || 0.07;
}
Liquid.prototype.render = function() {
  noStroke();
  fill(175);
  rect(this.x, this.y, this.w, this.h);
};
Liquid.prototype.contains = function(point) {
  return (
    (point.x >= this.x || point.x <= this.width) &&
    (point.y >= this.y || point.y <= this.height)
  );
};



function Ball(i) {
  i++;
  this.radius   = 16 + 3 * i;
  this.diameter = this.radius * 2;
  this.position = createVector(width / 6 * i, 80 - this.radius);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.mass = this.radius / 64;
  this.gravity = createVector(0, this.mass * 0.15);
}
Ball.prototype.render = function() {
  stroke(0);
  fill(200, 200, 200, 200);
  ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
};
Ball.prototype.move = function() {
  if (this.radius + this.position.y > height) { return; }
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};
Ball.prototype.applyForce = function(force) {
  force = force.copy();
  force.div(this.mass);
  this.acceleration.add(force);
};
Ball.prototype.applyDrag = function(liquid) {
  var speed   = this.velocity.mag(),
      dragMag = liquid.coefficientOfDrag * speed * speed,
      drag    = this.velocity
                    .copy()
                    .mult(-1)
                    .normalize()
                    .mult(dragMag);
  this.applyForce(drag);
};


function setup() {
  var i = 5;
  createCanvas(500, 400).parent('canvas-container');
  liquid = new Liquid();
  while (i--) {
    balls.push(new Ball(i));
  }
}

function draw() {
  var i = balls.length;
  background(255);
  liquid.render();
  while (i--) {
    balls[i].render();
  }
  update();
}

function update() {
  var ball, i = balls.length;
  while (i--) {
    ball = balls[i];
    ball.applyForce(ball.gravity);
    if (liquid.contains(ball.position)) {
      ball.applyDrag(liquid);
    }
    ball.move();
  }
}
