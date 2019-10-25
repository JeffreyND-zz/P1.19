let capture;
let img;

function setup() {
  createCanvas(800, 800);
  capture = createCapture(VIDEO);
  capture.hide();
}

function preload(){
  img = loadImage('assets/Left_Health.png');
}

function draw() {
  image(capture, 0, 0, 480, 360);
  fill(color(255, 204, 0));
  rect(10, 10, 10, 340);
  rect(460, 10, 10, 340);
  fill(color(255, 255, 255)); 
  image(img, 60, 60, 60, 50);
  circle(60, 50, 60, 60);
  circle(60, 175, 60, 60);
  circle(60, 300, 60, 60);
  
  
    //clock setion start
  sec = second();
  minut = minute();
  hou = hour();
  text(sec+':'+minut+':'+hou, 3,10);
  textSize(15);
  //clocksection end
}