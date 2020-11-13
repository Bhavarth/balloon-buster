  var blue_b,red_b, green_b, pink_b;
  var blueimg,redimg,greenimg,pinkimg;
  var bow,bowimg;
  var screen, screenimg;
  var arrow,arrowimg;
  var score=0;
  var arrowgroup;
  var redg, blueg,pinkg, greeng;
function preload() {
  screenimg=
  loadImage("background0.png");
  
  
  blueimg=
  loadImage("blue_balloon0.png");
  
  redimg=
  loadImage("red_balloon0.png");
  
  greenimg=
  loadImage("green_balloon0.png");
  
  pinkimg=
  loadImage("pink_balloon0.png");
  
  bowimg=loadImage("bow0.png");
  
  arrowimg=loadImage("arrow0.png");
}

function setup(){

  createCanvas(500,500);
  createEdgeSprites();
  
  screen=createSprite(250,80,500,500);
  screen.addImage("screenimg",screenimg)
  screen.velocityX=-2;
  screen.scale=2.5;
  
  screen.x = screen.width / 2;
   
  bow=createSprite(450,250,10,10);
  bow.addImage("bowimg",bowimg);
  
  arrowgroup=new Group();
  
  redg=new Group();
  
  blueg=new Group();
  
  pinkg=new Group();
  
  greeng=new Group();
  
}

function draw(){
  background("white")
 
  
  bow.y= World.mouseY;
  
  if (keyDown("space")){
  createArrow();


}
  createballoons();
  
  
  if (screen.x < 0) {
    screen.x = screen.width / 2;
  }
  
  if(arrowgroup.isTouching(redg)){
    redg.destroyEach();
    arrowgroup.destroyEach();
    score++
    
  }
  
  if(arrowgroup.isTouching(blueg)){
    blueg.destroyEach();
    arrowgroup.destroyEach();
    score++
    
  }
  
  if(arrowgroup.isTouching(pinkg)){
    pinkg.destroyEach();
    arrowgroup.destroyEach();
    score++
    
  }
  
  if(arrowgroup.isTouching(greeng)){
    greeng.destroyEach();
    arrowgroup.destroyEach();
    score++
    
  }
  drawSprites();
  
  text("score:"+ score,400,50);
  //score= score+Math.round(getFrameRate()/60);
  
}


function createArrow(){
  
 arrow=createSprite(420,bow.y,10,10) ;
  arrow.addImage("arrow",arrowimg);
  arrow.velocityX=-4;
  arrow.scale=0.25;
  arrowgroup.add(arrow);
  
  
}

function createballoons(){
  
  var num= Math.round(random(1,4));
    if (frameCount % 120===0){
  if(num === 1){
    blue_balloon_create();
  }
  else if(num === 2){
    red_balloon_create();
  }
      else if(num === 3){
    green_balloon_create();
  }
      else if(num === 4){
    pink_balloon_create();
  }
    }
  
}

function blue_balloon_create(){
  blue_b=createSprite(10,Math.round(random(50,500)),10,10);
  blue_b.addImage("blueimg",blueimg);
  blue_b.scale=0.1;
  blue_b.velocityX=2;
  blueg.add(blue_b);
}

function red_balloon_create(){
   red_b=createSprite(10,Math.round(random(100,400)),10,10);
  red_b.addImage("redimg",redimg);
  red_b.scale=0.1;
  red_b.velocityX=2;
  redg.add(red_b);
}
function green_balloon_create(){
  green_b=createSprite(10,Math.round(random(150,350)),10,10);
  green_b.addImage("greenimg",greenimg);
  green_b.scale=0.1;
  green_b.velocityX=2;
  greeng.add(green_b);
}
function pink_balloon_create(){
   pink_b=createSprite(10,Math.round(random(200,300)),10,10);
  pink_b.addImage("pinkimg",pinkimg);
  pink_b.scale=1.3;
  pink_b.velocityX=2;
  pinkg.add(pink_b);
}