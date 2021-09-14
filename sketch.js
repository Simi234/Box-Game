var Box;
function setup() {
  createCanvas(400,400);
  
  Box = createSprite(200,200,30,50);
  Box.shapeColor="red"
}

function draw() 
{
  background(30);
if (keyDown("right")){
  Box.x = Box.x+4;
}
if (keyDown("left")){
  Box.x = Box.x-4;
}
if (keyDown("up")){
  Box.y = Box.y+4;
}
if (keyDown("down")){
  Box.y = Box.y-4;
}
drawSprites();
}




