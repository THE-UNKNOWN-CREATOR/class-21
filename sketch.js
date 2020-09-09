var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  
  fixedRect=createSprite(1100, 100, 50, 50);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;
  fixedRect.velocityX=-3;
  

  movingRect=createSprite(100, 100, 30, 50); 
  movingRect.shapeColor="blue";
  movingRect.velocityX=3;

  gameObject1=createSprite(100, 400, 20, 30);
  gameObject1.shapeColor="orange";

  gameObject2=createSprite(200, 500, 30, 40);
  gameObject2.shapeColor="orange";

  gameObject3=createSprite(400, 100, 30, 20);
  gameObject3.shapeColor="orange";

  gameObject4=createSprite(100,200, 40, 40);
  gameObject4.shapeColor="orange";

}

function draw() {
  background(0);  

  bounceOff(fixedRect, movingRect); 

  drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}

