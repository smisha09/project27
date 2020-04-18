const Engine = Matter.Engine;  // Universe
const World = Matter.World;   // Earth 
const Bodies = Matter.Bodies; // human

var engine,world, ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var goptions = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,200,20,goptions);

  World.add(world,ground);

  //console.log(object);

  ball = Bodeis.circle(200,100,50);
  World.add(world,ball);



}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40);
}