
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,680,800,20);
	ball = new Paper(100,500,20);
	bin1 = new Dustbin(700,660,150,20);
	bin2 = new Dustbin(655,660,20,80);
	bin3 = new Dustbin(750,660,20,80)
	

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
  

}
function KeyPressed(){
	if (keyCode ===UP_ARROW){
		Matter.Body.appplyForce(ball.body,ball.body.position,{x:85,y:50});
	}
}

