
var ground, player, boss;
var forest;
var armyGroup;

function preload(){
  forest = loadImage("bg1.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight-145);
 
   ground=createSprite(displayWidth, displayHeight/2-70,displayWidth , displayHeight);
   ground.addImage(forest);
   ground.scale = 3;

   player=createSprite(displayWidth/5, displayHeight-320,20,20);

   armyGroup = new Group();
   


 
 
}

function draw() {
  background(147,168,101)
  
  if(keyDown("right")){
    spawnArmy();
    armyGroup.velocityX=-4;
  }
 
  drawSprites();
}

function spawnArmy(){
  army = createSprite(displayWidth+50, displayHeight-320, 20, 20);
  armyGroup.add(army)
  
}