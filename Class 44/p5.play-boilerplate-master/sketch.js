var P1,P2,enemy,ground,heart,power;
var P1_Img,P2_Img,Enemy_Img,Ground_Img,Heart_Img,Power_Img

function preload(){
  P1_Img=loadImage("P1.png")
  P2_Img=loadImage("P2.png")
  Enemy_Img=loadImage("Enemy.png")
  Ground_Img=loadImage("Ground.jpg")
  Heart_Img=loadImage("Heart.png")
  Power_Img=loadImage("power.png")
}
function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255); 
  drawSprites();
}
