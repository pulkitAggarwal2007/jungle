
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var ground;
var jungle;
function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 jungle = loadImage("jungle.jpg");
}



function setup() {
  createCanvas(600,400);
  background(220);
  
  monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
 
  score = 0;
  
  bananaGroup = createGroup();
   obstacleGroup= createGroup();
}


function draw() {
background(jungle);
  
  stroke("red");
  textSize(20);
  fill("white");
  text("score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,200,50);
  
  if(ground.x <200){
    ground.x = ground.width/2;
  }
    
  
  if(keyDown("space") && monkey.y >200){
    monkey.velocityY = -9;
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  if(bananaGroup.isTouching(monkey)){
 bananaGroup.destroyEach();
  score = score+2;
  monkey.scale += + 0.1;
  }
  
  if(obstacleGroup.isTouching(monkey)){
    textSize(20);
    text("Game Over",280,200);
     obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    score = 0;
    SurvivalTime = 0;
    ground.setvelocityX = 0;
  }
  
  
  
   bananas ();
  obstacles();
  drawSprites();
}

function obstacles(){
  if(frameCount%150 === 0){
    obstacle = createSprite(600,315,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -(7+score/5);
     obstacle.scale = 0.2;
    obstacle.lifetime = 120;
    
    
    obstacleGroup.add(obstacle)
  }
}

function bananas (){
  if(frameCount%150 === 0){
    banana = createSprite(600,220,20,20);
    banana.addImage(bananaImage);
    banana.velocityX = -(7+score/5);;
    banana.scale = 0.1;
     banana.lifetime = 120;
     bananaGroup.add(banana);
  }
}










