let canvasWidth = 600;
let canvasHeight = 600;

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas");
}

function draw() {
  background(0);
  fill(255);
  ellipse(width / 2, height / 2, 50, 50);
}
