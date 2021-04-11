var path,mainCyclist;

var pathImg,mainRacerImg1,mainRacerImg2;

var bicycleBell

var END =0;

var PLAY =1;

var gameOver,  gameOverImage

var gameState = PLAY;

var cyclists1, cyclists2, cyclists3

var cyclists1Image, cyclists2Image, cyclists3Image

var distance=1;



function preload(){
  pathImg = loadImage("images/Road.png");
  
  mainRacerImg1 = 
    
  loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  
  cyclists1Image=loadImage("opponent1.png")
  
  cyclists2Image=loadImage("opponent2.png")
  
  cyclists3Image=loadImage("opponent4.png")
  
  gameOverImage=loadImage("gameOver.png")
  
  bicycleBell=loadSound("sound/bell.mp3")
}

function setup(){
  
createCanvas(550,350);
  
path=createSprite(100,150);
  
path.addImage(pathImg);
  
path.velocityX = -(6 + 3*distance/100);

mainCyclist  = createSprite(70,150,100,100);
  
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  
mainCyclist.scale=0.07;
  
  cyclist1Group = new Group() 
  
  cyclist2Group = new Group() 
  
  cyclist3Group = new Group() 
  
}

function draw() {
  background(0);
  
  spawnOpponentCyclists()
  
  
  if(gameState===PLAY){
    
    if(mainCyclist.isTouching(cyclist1Group)){
      
    gameOver = createSprite(250, 150, 10, 10)
      
      
gameOver.addImage("gameOver.png",gameOverImage)
      cyclist1Group.velocityX = 0
      
      cyclist2Group.velocityX = 0
      
cyclist3Group.velocityX = 0
      
      

path.velocityX = 0

    
      

    console.log("b")
    }
    
  if(mainCyclist.isTouching(cyclist2Group)){
    
    gameOver = createSprite(250, 150, 10, 10)
    
gameOver.addImage("gameOver.png",gameOverImage)
    
    cyclist2Group.velocityX = 0
    
    cyclist3Group.velocityX = 0
    
cyclist1Group.velocityX = 0

path.velocityX = 0


    
    console.log("b")
    }
      if(mainCyclist.isTouching(cyclist3Group)){
        
    gameOver = createSprite(250, 150, 10, 10)
        
gameOver.addImage("gameOver.png",gameOverImage)
        
cyclist3Group.velocityX = 0
        
        cyclist2Group.velocityX = 0
        
cyclist1Group.velocityX = 0
        

        path.velocityX = 0

  
        

    console.log("c")
  }  
   mainCyclist.y = World.mouseY;
    
   mainCyclist.x = World.mouseX;
 
   edges= createEdgeSprites();
    
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    
    path.x = width/2;
  }
    if (keyDown("space")){
      
      bicycleBell.play()
      }
 
 }
  
mainCyclist.setCollider("circle",20,20,40);
  
  mainCyclist.debug = true
   
  drawSprites()
  textSize(30)
  fill("BLUE")
  text("FeetDistance:"+ distance,270,30);
  console.log(distance)
  textSize(30)
  fill("BLUE")
  
  distance = distance + Math.round(getFrameRate()/60)

 
}

function spawnOpponentCyclists()
{
  if (frameCount % 130 === 0){
  var cyclists = createSprite(600,165,10,40); 
    
  var cyclists1 = createSprite(600,165,10,40);
    
  var cyclists2 = createSprite(600,165,10,40);
    
  var cyclists3 = createSprite(600,165,10,40);
    
  cyclists1.velocityX = -(6 + 3*distance/100);
    
  cyclists2.velocityX = -(6 + 3*distance/100);
    
  cyclists3.velocityX = -(6 + 3*distance/100);
    
  cyclist1Group.add(cyclists1)
    
  cyclist2Group.add(cyclists2)
    
  cyclist3Group.add(cyclists3)
    
    
  cyclists1.scale=0.07
    
  cyclists2.scale=0.07
    
  cyclists3.scale=0.07
    
  
 
      
  mainCyclist.setCollider("circle",20,20,40);
    
    if(mainCyclist.isTouching(cyclists1)){
      
    gameOver = createSprite(200, 200, 10, 10)
      
gameOver.addImage("gameOver.png")
      
    FeetDistance=FeetDistance+0
      
    highDistance=highDistance+0
      
    mainCyclist.velocityX=0
      
    mainCyclist.velocityY=0 
      
    gameState=END  
      
    console.log("a")
  }
    
 var rand = Math.round(random(1,3));
    
   cyclists.y=Math.round(random(0,300))
    
 if(rand==1)
      {
        //console.log("d")
        cyclists1.addImage("opponent1.png",cyclists1Image)
              } 
      else if (rand == 2) 
      { 
        //console.log("c")
        cyclists2.addImage("opponent2.png",cyclists2Image )
      }
    else{
      cyclists3.addImage("opponent4.png", cyclists3Image)
    }
}
 
}
