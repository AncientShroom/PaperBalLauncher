
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var radius=70
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(310,100,radius/2.6,ball_options)
	World.add(world,ball)
	Engine.run(engine);
	ground=new Ground(width/2,670,width,20)
	leftSide=new Ground(1110,600,10,120)
	rightSide=new Ground(1270,600,10,120)
	bottomSide=new Ground(1190,650,150,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ellipse(ball.position.x,ball.position.y,35,35)
  leftSide.display();
  rightSide.display()
  bottomSide.display()
  
  drawSprites();
 
}


function keyPressed(){
	if (keyCode===32){
		Matter.Body.applyForce(ball,ball.position,{x:130,y:-145}
		)
	}
}
