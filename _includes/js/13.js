var balloon, lift, wind, step = Math.round(Math.random() * 1000);

function Balloon() {
  this.radius = 64;
  this.diameter = this.radius * 2;
  this.position = createVector(width/2, height - this.diameter);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
}
Balloon.prototype.render = function() {
  stroke(0);
  fill(200);
  ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
};
Balloon.prototype.move = function() {
  this.acceleration.add(lift);
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
  this.bounce();
};
Balloon.prototype.bounce = function() {
  if (this.position.y < this.radius) {
    this.velocity.y = Math.abs(this.velocity.y);
    this.position.y = this.radius;
  }
  if (this.position.x < this.radius) {
    this.position.x = this.radius;
    this.velocity.x = Math.abs(this.velocity.x) / 2;
  } else
    if (this.position.x > width - this.radius) {
    this.position.x = width - this.radius;
    this.velocity.x = Math.abs(this.velocity.x) * -1 / 2;
  }
};
Balloon.prototype.applyForce = function(force) {
  this.acceleration.add(force);
};

function plotWind(wind) {
  wind = wind * width;
  rect(width/2, height - 10, wind, 10);
}


function setup() {
  createCanvas(500, 400).parent('canvas-container');
  lift = createVector(0, -0.02);
  balloon = new Balloon();
}

function draw() {
  background(255);
  balloon.render();
  plotWind(wind);
  update();
}

function update() {
  step = step + 0.002;
  wind = noise(step) - noise(step + 1000);
  wind = wind / 2;
  balloon.applyForce(wind / 7);
  balloon.move();
}
