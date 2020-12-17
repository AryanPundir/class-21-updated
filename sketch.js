var fixedRect,movingRect,obj1,obj2,obj3;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600,200,50,50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  obj1=createSprite(100,200,50,50);
  obj1.shapeColor="white";

  obj2=createSprite(200,200,50,50);
  obj2.shapeColor="white";

  obj3=createSprite(300,200,50,50);
  obj3.shapeColor="white";


  obj3.velocityX = -5;
  obj1.velocityX = +5;
}
 
function draw() {
  background(0);

  console.log(movingRect.x-fixedRect.x);
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;  

  if(isTouching(obj3,movingRect))
{
  obj3.shapeColor="blue";
  movingRect.shapeColor="blue";
}
else{
  obj3.shapeColor="green";
  movingRect.shapeColor="green";
}

bounceOff(obj1, obj3);
  
  drawSprites();
}

 