var fixedRect, movingRect;
var fR, mR
function setup() {
  createCanvas(1200,800);
  fR = createSprite(400, 100, 50, 80);
  fR.shapeColor = "green";
  fR.debug = true;
  mR = createSprite(400, 800,80,30);
  mR.shapeColor = "green";
  mR.debug = true;

  mR.velocityY = -5;
  fR.velocityY = +5;
}

function draw() {
  
  background(0,0,0);  

  bounceOff(fR,mR);
  drawSprites();
  if(isTouching(fR,mR)){
fR.shapeColor= "yellow"
mR.shapeColor="yellow"
  }
  }







//10-10 < 10/2 + 10/2 && 10-10 < 5 +5 