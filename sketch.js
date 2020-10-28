const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base;
var box1,box2,box3,box4;
var box5,box6,box7;
var box8,box9,box10;
var shooter;

function setup() {
  createCanvas(1000,580);
  engine = Engine.create();
  world = engine.world;

 

 // createSprite(400, 200, 50, 50);
//base = new Ground(500,600,100);
base2 = new Ground2(500,610,1000,200);
box1 = new Box(600,450,100,100);
box2 = new Box(700,450,100,100);
box3 = new Box(800,450,100,100);
box4 = new Box(900,450,100,100);
box5 = new Box(750,350,100,100);
box6 = new Box(850,350,100,100);
box7 = new Box(650,350,100,100);
box8 = new Box(750,250,100,100);
shooter = new Stone(100,200,25);
spring = new SlingShot(shooter.body,{x:150,y:180});
}

function draw() {
  background("rgb(115,194,251)"); 
  Engine.update(engine);
  //base.display();
  base2.display();
  box1.display(); 
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  spring.display();
  shooter.display();
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
  
  }
  
  function mouseReleased(){
    spring.fly();  
  }
  