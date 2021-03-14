
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var paper1;
var dustbin1;
var dustbin2;
var dustbin3;

function preload() 
{
	
}

function setup() {
	createCanvas(1000, 400);
    var options={
     isStatic:false,
     restitution:0.3,
     friction:0.5,
	 density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(700,250,1000,20)
  paper1 = new Paper(130,200,30)
  dustbin1 = new Dustbin(720,290,20,100)
  dustbin2 = new Dustbin(800,330,160,20)
  dustbin3 = new Dustbin(880,290,20,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  paper1.display();
  dustbin2.display();
  dustbin1.display();
  dustbin3.display();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
   
   Matter.Body.applyForce(paper1.body,paper1.body.posititon,{x:35,y:-35});

  }
 }

