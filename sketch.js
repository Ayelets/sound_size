var song, analyzer;

function preload() {
  song = loadSound('h.mp3');
  img = loadImage("m.png")
  bk = loadImage("p.png")
}

function setup() {
  createCanvas(500, 500);
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background(bk);

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with size based on volume
  image(img, width / 2 - 166, height / 2 + 60 + rms * 20, 343, 140 + rms * 50);
}