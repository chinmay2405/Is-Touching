var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite (500,200,50,50); 
  
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";


}

function draw() {
  background(255,255,255);
  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  if (fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 && 
     fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red"; 
  } else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  
  drawSprites();
}