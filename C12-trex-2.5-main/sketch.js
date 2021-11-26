var trex, trex_running, edges;
var groundImage;
var invisibleground;
var cloud;
var cloudImage;
var obstacle,obstacle_1,obstacle_2,obstacle_3,obstacle_4,obstacle_5,obstacle_6;
var score;

var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  obstacle_1 = loadImage("obstacle1.png");
  obstacle_2 = loadImage("obstacle2.png");
  obstacle_3 = loadImage("obstacle3.png");
  obstacle_4 = loadImage("obstacle4.png");
  obstacle_5 = loadImage("obstacle5.png");
  obstacle_6 = loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //agregar tamaño y posición al Trex
  trex.scale = 0.5;
  trex.x = 50
  ground = createSprite(200,180,400,20);
  ground.addAnimation("ground", groundImage);

  score = 0;
}



function draw(){
  //establecer color de fondo.
  background("black");
  fill("white");
  text("Score: "+ score,500,50);
  score = score + Math.round(frameCount/60);

  
  ground.velocityX = -2;
  invisibleground = createSprite(200,190,400,20);
  invisibleground.visible = false;
  if(ground.x<0){
    ground.x = ground.width/2;



  }
  //cargar la posición Y del Trex
  
  
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")&&trex.y>=100){
    trex.velocityY = -10;

  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //evitar que el Trex caiga
  trex.collide(invisibleground)

  spawnClouds();
  spawnObstacles();
  drawSprites();


}
function spawnClouds(){
  if(frameCount %60 == 0){
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage);
    cloud.scale = 0.4;
    cloud.y = Math.round(random(10,60));
    cloud.velocityX = -3;
    cloud.lifetime = 220;

    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    console.log(trex.depth);
    console.log(cloud.depth);
    
  }


}
function spawnObstacles(){
  if(frameCount %60 == 0){
    obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1:
        obstacle.addImage(obstacle_1);
        break;

        case 2:
        obstacle.addImage(obstacle_2);
        break;

        case 3:
        obstacle.addImage(obstacle_3);
        break;

        case 4:
        obstacle.addImage(obstacle_4);
        break;

        case 5:
        obstacle.addImage(obstacle_5);
        break;

        case 6:
        obstacle.addImage(obstacle_6);
        break;

        default:break;

    }
   obstacle.scale = 0.5;
   obstacle.lifetime = 220;

  }
  

}




