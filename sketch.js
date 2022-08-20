var sea,seaImage 
var ship,ship_Animation

function preload(){

 

 seaImage=loadImage("sea.png");
 ship_Animation=loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");

 

}

function setup(){
  createCanvas(400,400);

sea=createSprite(200, 180, 400, 20)
sea.addImage(seaImage);
sea.scale=0.3;


ship=createSprite(200, 200, 20, 50);
ship.addAnimation("running",ship_Animation);
ship.scale=0.3;


  
}

function draw() {
  background("blue");
 
  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }

 drawSprites();
}
