'use strict';

var ball, gravity, wind, step = Math.round(Math.random() * 1000);

function Ball() {
  this.radius = 64;
  this.diameter = this.radius * 2;
  this.position = createVector(width/2, 100);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.mass = 1;
}
Ball.prototype.render = function() {
  stroke(0);
  fill(200);
  ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
};
Ball.prototype.move = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
  this.bounce();
};
Ball.prototype.bounce = function() {
  if (this.position.y > height - this.radius) {
    this.velocity.y = Math.abs(this.velocity.y) * -1;
    this.position.y = height - this.radius;
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
Ball.prototype.applyForce = function(force) {
  force = force.copy();
  force.div(this.mass);
  this.acceleration.add(force);
};

function createWind() {
  step = step + 0.003;
  wind = noise(step) - 0.5;
  return createVector(wind / 10, 0);
}

function plotWind(windVec) {
  var windWidth = windVec.x * width * 100;
  rect(width/2, 0, windWidth, 10);
}


function setup() {
  createCanvas(500, 400).parent('canvas-container');
  gravity = createVector(0, 0.1);
  wind = createWind();
  ball = new Ball();
}

function draw() {
  background(255);
  ball.render();
  plotWind(wind);
  update();
}

function update() {
  wind = createWind();
  ball.applyForce(gravity);
  ball.applyForce(wind);
  ball.move();
}
