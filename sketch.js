var john, john_running;
var path, invisibleGround, pathImage, invisibleGround1;
function preload(){
  //pre-load images
  john_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
    path = createSprite(200,200);
    path.addImage(pathImage);
    
    path.velocityY = 6;
  
    invisibleGround= createSprite(400,200,50,200);
    invisibleGround.visible=false

    invisibleGround1= createSprite(5,200,50,200);
    invisibleGround1.visible=false
    
    john = createSprite(200,200);
    john.addAnimation("running", john_running);
    john.scale = 0.1;
}


function draw() {
  background(220);
    
  console.log(john.y);
    
    john.x = World.mouseX;
    
    
    
    

    if (path.y > 400) {
    path.y = path.width/2;
    }
    
    john.collide(invisibleGround);
    john.collide(invisibleGround1);
    drawSprites();

}
