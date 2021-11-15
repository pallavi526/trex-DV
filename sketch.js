
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,180,10,10);
  trex.addAnimation("running",trex_running);
  //label= a part of the variable
  trex.scale=0.5

}

function draw(){
  background("white");

  if(keyDown("space")){
    trex.velocityY=-14;
  }
  trex.velocityY+=0.8;
  edges=createEdgeSprites();

  trex.collide(edges[3]);
  
  drawSprites();
}
