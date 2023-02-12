let squareSize = 100;
let gap = 20;
let colors = ['#81BB7D', '#BB7DA9', '#5DC9EE', '#F4BE3A'];
let textData;

function preload() {
textData = loadJSON('textData.json');
}

function setup() {
createCanvas(squareSize * 4 + gap * 3, squareSize * 4 + gap * 3);
textSize(20);
textAlign(CENTER, CENTER);
}

function draw() {
let texts = Object.keys(textData);
background(255);
for (let i = 0; i < 4; i++) {
for (let j = 0; j < 4; j++) {
let x = j * (squareSize + gap);
let y = i * (squareSize + gap);
fill(colors[i]);
stroke('#000CFF');
strokeWeight();
rect(x, y, squareSize, squareSize);
noStroke();
fill(0);
let index = i * 4 + j;
if (mouseX > x && mouseX < x + squareSize && mouseY > y && mouseY < y + squareSize) {
  text(textData[texts[index]], x + squareSize / 2, y + squareSize / 2);
} else {
  text(texts[index], x + squareSize / 2, y + squareSize / 2);
}
}
}
}
