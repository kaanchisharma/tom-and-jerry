var tom,tomimage
var jerry,jerryimage
var garden
function preload() {
    //load the images here
    tomimage=loadImage("images/cat1.png")
    jerryimage=loadImage("images/mouse1.png")
    garden=loadImage("images/garden.png")
    tomimage=loadAnimation("images/cat2.png","cat3.png")
    jerryimage=loadAnimation("images/mouse2.png","mouse3.png")
    //tomimage=loadAnimation("images/cat4.png")
    //jerryimage=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(400,400);
    //create tom and jerry sprites here
 tom=createSprite(330,360)
 tom.scale=0.05
 jerry=createSprite(115,350)
 tom.addImage("sitting",tomimage)
 jerry.addImage("standing",jerryimage)
 jerry.scale=0.05
 //tom.addImage("standing",tomimage)
//jerry.addImage("sitting",jerryimage)
 
 
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
textSize(30)
fill("red")
text(mouseX+","+mouseY,mouseX,mouseY)
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("catRunning",tomimage);
    tom.changeAnimation("catRunning");
    jerry.addAnimation("jumping",jerryimage);
    
}

}
