const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img,food,rabbit;
var bunny,rabbit;
var button1;

function preload(){
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  bunny=createSprite(250,650,100,100);
  bunny.addImage(rabbit);
  bunny.scale=0.2;
  
  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  textSize(50)

  button1=createImg("cut_btn.png");
  button1.position(220,30);
  button1.size(50,50);
  button1.mouseClicked(drop);
  
}

function draw() 
{
  background(51);

 
  image(bg_img,0,0,displayWidth+80,displayHeight);

  rope.show();
  push();
  imageMode(CENTER);
  image(food,fruit.position.x,fruit.position.y,30,30);
  pop();
  Engine.update(engine);
  ground.show();
 
  drawSprites();
 
   
}

function drop(){
  //break-rope class
  rope.break();

  //detach-link class
  fruit_con.detach();
  fruit_con=null;
}