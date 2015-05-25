var center;

function setup() {
  createCanvas(500, 350).parent('canvas-container');
  center = createVector(width/2, height/2);
}

function draw() {
  var magnitude,
      mouse = createVector(mouseX, mouseY);
  background(255);
  mouse.sub(center);

  // Plot magnitude
  magnitude = mouse.mag();
  fill(0);
  rect(0         , height + 1 - magnitude, 10, magnitude);
  rect(width - 11, height + 1 - magnitude, 10, magnitude);

  translate(center.x, center.y);
  line(0, 0, mouse.x, mouse.y);
}
