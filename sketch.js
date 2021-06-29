var ground ;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400)
ground = createSprite(200,370,400,20)
monkey = createSprite(10,315,20,20)
monkey.addAnimation("monkeys",monkey_running)
monkey.scale=0.1
}


function draw() {
background("pink")
text("x : "+mouseX+"y : "+mouseY,mouseX,mouseY)
bananas()
objects()
ground.velocityX=-5
if(ground.x < 200){
ground.x=200
}

if(keyDown("space")){
console.log("hi")
monkey.velocityY=-12
}
monkey.velocityY = monkey.velocityY+0.5
monkey.collide(ground)
 drawSprites()
}
function bananas(){
if(frameCount%70==0){
bananass = createSprite(400,random(250,360),20,20)
bananass.addImage(bananaImage)
bananass.scale=0.1
bananass.velocityX=-2
}


}
function objects(){
if(frameCount%100==0){
object = createSprite(400,350,20,20)
object.addImage(obstaceImage)
object.scale=0.1
object.velocityX=-2
}
}





