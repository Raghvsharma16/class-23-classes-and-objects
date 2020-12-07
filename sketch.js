 
// Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,ground;

var box1,box2;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 ground = new Ground(400,390,800,20);

  

  box1 = new Box(200,100,50,50);
box2 = new Box(220,200,70,70);
}


function draw() {
  background(0,0,0);  
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();
}