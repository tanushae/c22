const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine 
var world
var ground
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options={
    isStatic:true
  }
  ground = Bodies.rectangle(200, 380, 800, 20, ground_options);
  var ball_options={
    restitution: 1.0
  }
  ball = Bodies.circle(200, 200, 20, ball_options)
  
  World.add(world,ground);
  World.add(world,ball);
}

function draw() {
  background("purple");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 800, 20);
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  drawSprites();
}