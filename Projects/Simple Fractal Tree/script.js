let canvasWidth = 600;
let canvasHeight = 600;

let originalBranchLength = 150;

let angleOfBranches;

let maximumBranches = 4;

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas");

  angleOfBranches = radians(30);
}

function draw() {
  background(50);
  stroke(255);

  strokeWeight(2);

  translate(width / 2, height);

  branch(originalBranchLength);
}

function branch(length) {
  line(0, 0, 0, -length);

  translate(0, -length);

  if (length > maximumBranches) {
    push();

    rotate(angleOfBranches);
    branch(length * 0.67); // Make the branch shorter

    pop();
    push();
    rotate(-angleOfBranches);
    branch(length * 0.67);
    pop();
  }
}

let sliderElement = document.querySelector("#slider");
let sliderText = document.querySelector("#slider-value");

sliderElement.addEventListener("input", (e) => {
  let angleInDegrees = parseInt(e.target.value);
  angleOfBranches = radians(angleInDegrees);
  sliderText.textContent = angleInDegrees;
});
