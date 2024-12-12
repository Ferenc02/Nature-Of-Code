let canvasWidth = 600;
let canvasHeight = 600;

let maxIterations = 100;

let realRange;
let imaginaryRange;

let currentRowIndex = 0; // Track the current row being rendered
let rowsPerRender = 25; // Number of rows to render per frame

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas");

  // Define the real and imaginary axis ranges for the Mandelbrot set
  realRange = createVector(-1.5, 1.5);
  imaginaryRange = createVector(-1.5, 1.5);

  pixelDensity(1);
  loadPixels();
}

function draw() {
  for (
    let row = currentRowIndex;
    row < currentRowIndex + rowsPerRender && row < height;
    row++
  ) {
    for (let x = 0; x < width; x++) {
      // Map the pixel's x and y positions to the real and imaginary ranges
      let realPart = map(x, 0, width, realRange.x, realRange.y);
      let imaginaryPart = map(
        row,
        0,
        height,
        imaginaryRange.x,
        imaginaryRange.y
      );

      let constantReal = realPart;
      let constantImaginary = imaginaryPart;

      let brightnessValue = 0;

      for (let n = 0; n < maxIterations; n++) {
        // Calculate the real and imaginary parts of z^2
        let realSquared = realPart * realPart - imaginaryPart * imaginaryPart; // Real part of z^2
        let imaginarySquared = 2 * realPart * imaginaryPart; // Imaginary part of z^2

        // Update real and imaginary parts of z
        realPart = realSquared + constantReal;
        imaginaryPart = imaginarySquared + constantImaginary;

        // Check if the point has escaped the Mandelbrot set
        if (abs(realPart + imaginaryPart) > 16) {
          brightnessValue = (n * 16) % 255; // Assign brightness based on iteration count
          break;
        }
      }

      // If the point is inside the Mandelbrot set, set the brightness to 0
      if (brightnessValue === 0) brightnessValue = 0;

      // Calculate the pixel index and set the color in the pixel array
      let pixelIndex = (x + row * width) * 4;
      pixels[pixelIndex + 0] = brightnessValue; // Red
      pixels[pixelIndex + 1] = brightnessValue; // Green
      pixels[pixelIndex + 2] = brightnessValue; // Blue
      pixels[pixelIndex + 3] = 255; // Alpha
    }
  }

  // Update the pixels on the canvas
  updatePixels();

  // Move to the next set of rows
  currentRowIndex += rowsPerRender;

  // Stop the drawing loop when all rows are rendered
  if (currentRowIndex >= height) {
    noLoop();
  }
}
