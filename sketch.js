let noiseVal = 0; // starting noise value
let noiseIncrement = 0.01; // increment value for noise animation

function setup() {
  createCanvas(800, 600);
}

function draw() {
  createGrid(40, 40);
  //update the noiseVal variable over time
  noiseVal += noiseIncrement;
}

function createGrid(numRows, numCols) {

  // calculate cell size based on canvas dimensions and number of rows and columns
  let cellWidth = width / numCols;
  let cellHeight = height / numRows;
  
  // define a gradient of colors to use with Perlin noise
  let colors = [
    color(255, 128, 0),
    color(255, 0, 0),
    color(255, 255, 0),
    //color(200, 255, 0),
    color(0, 255, 0),
    color(0, 255, 255),
    color(0, 0, 255),
    color(255, 0, 255)
  ];
   
  // nested for loop to create cells
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      // calculate x and y positions for each cell
      let x = col * cellWidth;
      let y = row * cellHeight;
      
      // calculate a Perlin noise value based on the cell's x and y coordinates
      let cellNoiseVal = noise(x / 100, y / 100, noiseVal);
      
      // map the noise value to an index in the colors array
      let colorIndex = Math.floor(map(cellNoiseVal, 0, 1, 0, colors.length));
      let cellColor = colors[colorIndex];
      
      // set fill color for this cell
      fill(cellColor);
      noStroke();
      
      // draw cell
      rect(x, y, cellWidth, cellHeight);
    }
  }
}
