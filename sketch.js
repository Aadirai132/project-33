const Engine = Matter.Engine;
const World= Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles ;
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var count = 0;
var world, gameState = "play";
var ground;
function setup() 
{
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,790,800,20);

  for (var k = 0; k <=width; k = k + 80) 
  {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) 
  {
     plinkos.push(new Plinko(j,75));
  }
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
    
}
 
function draw() 
{
  background("black");
  textSize(20);
  text("Score : "+score,20,30);

  textSize(35);
  text("500",10,545);

  textSize(35);
  text("500",90,545);

  textSize(35);
  text("500",170,545);

  textSize(35);
  text("500",250,545);

  textSize(35);
  text("100",330,545);

  textSize(35);
  text("100",410,545);

  textSize(35);
  text("100",490,545);

  textSize(35);
  text("200",570,545);

  textSize(35);
  text("200",650,545);

  textSize(35);
  text("200",730,545);

  Engine.update(engine);

  ground.display();

if(mouseIsPressed && gameState !== "end")
{
    particles=new Particles(mouseX,10,10,10);
    count++;
}
if(particles!=null)
{
  particles.display();
  if(particles.body.position.y>760)
  {
    if(particles.body.position.x < 300)
    {
      score = score+500;
      particles = null;
    }
    else
    {
      if(particles.body.position.x > 300 && particles.body.position.x < 505)
      {
         score = score+100;
         particles=null;
      }
    }  
  }
  if(particles!=null)
  {
  particles.display();
  if(particles.body.position.y>760)
  {
    if(particles.body.position.x > 495 && particles.body.position.x <= 735)
    {
      score = score+200;
      particles=null;
    }
  }
}
}
if(count === 20 && gameState === "play")
{
   gameState = "end";   
}

if(gameState === "end")
{
   textSize(55);
   fill("red");
   text("Game Over",250,255);

   textSize(30);
   fill("white");
   text("press SPACE to play again.",250,325)
}

if(keyIsDown(32) && gameState !== "play")
{
  gameState = "play";
  score = 0;
  count = 0;
}
  
for (var i = 0; i < plinkos.length; i++) 
{
  plinkos[i].display(); 
}
   
for (var k = 0; k < divisions.length; k++) 
{
   divisions[k].display();
}
 
}