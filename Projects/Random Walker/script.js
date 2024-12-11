let canvasWidth = 600;
let canvasHeight = 600;

let x;
let y;
function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas");

  x = width / 2;
  y = height / 2;

  background(50);
}

function draw() {
  fill(255);
  stroke(255);
  strokeWeight(4);
  point(x, y);

  let randomNum = floor(random(4));

  switch (randomNum) {
    case 0:
      x += 1;
      break;
    case 1:
      x -= 1;
      break;
    case 2:
      y += 1;
      break;
    case 3:
      y -= 1;
      break;
  }
}
