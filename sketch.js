 var bullet, wall;
 var speed, weight;
 var thickness;

function setup(){
 createCanvas(1600,400);

 speed = random(223,321);
 weight = random(30,52);
 thickness = random(22,83);

 bullet = createSprite(50,200,50,20);
 bullet.shapeColor = color(225,225,225);

 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80);

}

function draw (){
 background(10);

 bullet.velocityX = speed;
 
 bullet.depth = wall.depth+1;

 if(collision(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
   }

 if (damage>10){
     bullet.shapeColor = color(250,0,0);
   }

 if (damage<10){

bullet.shapeColor = color(0,255,0);
   }

drawSprites();

}

function collision(bullet,wall) {

 bulletRightEdge = bullet.x + bullet.width;
 wallLeftEdge = wall.x;

if(bulletRightEdge>=wallLeftEdge) {
   return true
  }
   return false;
}