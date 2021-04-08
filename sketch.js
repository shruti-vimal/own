var bow, green_balloon1,green_balloon2,green_balloon3 ,    red_balloon,red_balloon1,red_balloon2,red_balloon3       ,pink_balloon,pink_balloon1,pink_balloon2 ,
blue_balloon, background,bowImage,green_balloonImage, red_balloonImage, pink_balloonImage,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage   = loadImage("background0.png");
  bowImage          = loadImage("bow0.png");
  red_balloonImage  = loadImage("red_balloon0.png");
  green_balloonImage= loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  arrowImage=loadImage("arrow0.png")
}

function setup() {
  createCanvas(600,600);
  P1=new Group();
  for(var i=230;i<310;i=i+20){
    pink_balloon = createSprite(i,300, 10, 10);
    pink_balloon.addImage(pink_balloonImage);
    pink_balloon.scale = 1.2;
    P1.add(pink_balloon)
    P1.visible=true;
  }
 

  var rend=Math.round(random(1,1)) ;
    if (rend==1){
      pink = createSprite(300,500, 10, 10);
   
        pink.addImage(pink_balloonImage);
        pink.velocityY=-2;
        
    }
     
    



  bow = createSprite(220,480,20,50);
  bow.addImage(bowImage); 
  bow.scale=1.5
  
  
//red balloon
  for(var i=490;i<590;i=i+20){
  red_balloon = createSprite(i,50, 1, 1);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1
}

for(var i=100;i<200;i=i+20){
    red_balloon1 = createSprite(i,50, 1, 1);
    red_balloon1.addImage(red_balloonImage);
    red_balloon1.scale = 0.1
  }

  for(var i=120;i<180;i=i+20){
    red_balloon1 = createSprite(i,100, 1, 1);
    red_balloon1.addImage(red_balloonImage);
    red_balloon1.scale = 0.1
  }

for(var i=230;i<470;i=i+20){
  
  green_balloon = createSprite(i,50, 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
}

for(var i=210;i<420;i=i+20){
  
  green_balloon = createSprite(i,50, 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
}
  
for(var i=170;i<380;i=i+60){ 
  blue_balloon = createSprite(i,150, 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale=0.1;
}






 
}

function draw() {

  
background("blue");

if(pink.isTouching( P1)){
  P1.destroyEach();
}
drawSprites();

}

function keyPressed(){
  if(keyCode==32){
    setup();
    }
      }



  
