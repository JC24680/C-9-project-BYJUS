var RunnerImg, Runner;
var TownImg, Town;
let ground;


function preload() {
  firstRunImg = loadImage("RUNNING.html");
  TownImg = loadImage("Town/Town.avif")
  }

function setup() {
  createCanvas(600, 600);

  Town = createSprite(300, 300);
  Town.addImage("town", TownImg);
  Town.velocityX = -2;


  Runner = createSprite(200, 200, 50, 50);
  Runner.addImage("Runner", firstRunImg)
  Runner.scale = 0.5;

  ground = createSprite(width/2, 450, 600, 10);
  ground.visible=false;
}

function draw() {
  background(200);
  if (Town.x  < 400) {
    Town.x = Town.width/2
  }

  if (keyDown("space")) {
    Runner.velocityY = -10; 
  }

  Runner.velocityY = Runner.velocityY + 0.8
  
  Runner.collide(ground)
  drawSprites() 

}


 

 











