function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2);

  if(abs(movingRect.x-fixedRect.x)<movingRect.width/2+fixedRect.width/2
  &&abs(movingRect.y-fixedRect.y)<movingRect.height/2+fixedRect.height/2 ){
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  drawSprites();
} 