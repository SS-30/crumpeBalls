var dustbin,bll,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	ball=createSprite(width/2, 80, 10,10);
	ball.scale=0.2


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    //create and run engine
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	dustbin=new Dustbin(400,600,150,155)
	ground=new Ground(400,650,800,15)
	ball1=new Ball(50,550,60,50)
  
}


function draw() {
  rectMode(CENTER);
  background("white")
  fill("red")
  dustbin.display()
  ground.display()
  ball1.display()
  fill("white")
  drawSprites();
}

//function keypressed
function keyPressed() {
 if (keyCode === UP_ARROW){
	Body.applyForce(ball1.body,ball1.body.position,{x:140,y:-145});
 }
}

