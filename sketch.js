
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1,b,l,r,dustbingreenIMG,paperIMG;
function preload()
{
	

}


   

function setup() {
	createCanvas(800, 700);


	
	r = createSprite(550,625,10,50);
	r .shapeColor = "red";
	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
paper1 = new Paper(200,150,80,80);
ground1 = new Ground(400,680,800,20);



function draw() {
Engine.update(engine);
  background(0);
  paper1.display();
  ground1.display();
  
  dustbingreenIMG=loadImage("dustbingreen.png")
  dustbingreenSprite.addImage(dustbingreenIMG)
  
  paperIMG=loadImage("paper.png")
  paperSprite.addImage(paperIMG)

  drawSprites();
 


}

function keyPressed()
 { 
	 if (keyCode === UP_ARROW) { 
	 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85}); } 
	}
}
