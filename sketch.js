	const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var holder1, hexagon,groundObject;	
var block1,block2,block3,block4,block5,block6,block7,b1,b2,b3,b4,b5,b6,B1,B2,B3,B4,B5,bk1,bk2,bk3,bk4,BLOCK;


var world;
var launcher;
var bd,backgroundImg;

function preload() {
	// backgroundImg = loadImage("sprites/bg.png");
	 getbg();
 }

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	hexagon=new shooter(250,100,40);
	groundObject=new Ground(width/2,670,width,20);
	holder1 = new Ground(450,480,390,10);
block1 = new Block(480,455,30,40);
block2 = new Block(470,455,30,40);
block3 = new Block(460,455,30,40);
block4 = new Block(450,455,30,40);
block5 = new Block(440,455,30,40);
block6 = new Block(430,455,30,40);
block7 = new Block(420,455,30,40);

b1 = new BlockA(455,435,30,40);
b2 = new BlockA(465,435,30,40);
b3 = new BlockA(475,435,30,40);
b4 = new BlockA(445,435,30,40);
b5 = new BlockA(435,435,30,40);
b6 = new BlockA(425,435,30,40);

B1 = new BlockB(460,415,30,40);
B2 = new BlockB(430,415,30,40);
B3 = new BlockB(435,415,30,40);
B4 = new BlockB(440,415,30,40);
B5 = new BlockB(470,415,30,40);

bk1 = new BlockC(455,395,30,40);
bk2 = new BlockC(465,395,30,40);
bk3 = new BlockC(435,395,30,40);
bk4 = new BlockC(445,395,30,40);

BLOCK = new BlockD(440,375,50,50);

	launcher = new Launcher(hexagon.body,{x:100,y:350})
	


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  
  if(backgroundImg){
	background(backgroundImg);
}
	hexagon.display();
  groundObject.display();
 
holder1.display();
 launcher.display();
  
 block1.display();
 block2.display();
 block3.display(); 
 block4.display(); 
 block5.display(); 
 block6.display(); 
 block7.display(); 

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();


B1.display();
B2.display();
B3.display();
B4.display();
B5.display();

bk1.display();
bk2.display();
bk3.display();
bk4.display();

BLOCK.display();


}

function mouseDragged(){
	Matter.Body.setPosition(hexagon.body,{x:mouseX, y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode===32){
	launcher.attach(hexagon.body);
	}
}

async function getbg(){
	var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
	var responseJson = await response.json();
	console.log(responseJson)
	var datetime = responseJson.datetime
	var hour = datetime.slice(11,13)
	console.log(hour)
	if(hour>=6 && hour<=18){
		bd = "Images/day.jpg"
	}
	else{
		bd = "Images/night.jpg"
	}
	backgroundImg = loadImage(bd)
	}
