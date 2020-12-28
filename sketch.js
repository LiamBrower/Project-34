const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1, rope1, ball2, rope2, ball3, rope3, ball4, rope4, ball5, rope5;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  platform = new Platform(610, 90, 440, 20);

  ball1 = new Ball(200, 300, 80, 80);
  rope1 = new Rope(ball1.body, { x: 410, y: 100 });

  ball2 = new Ball(300, 300, 80, 80);
  rope2 = new Rope(ball2.body, { x: 510, y: 100 });

  ball3 = new Ball(400, 300, 80, 80);
  rope3 = new Rope(ball3.body, { x: 610, y: 100 });

  ball4 = new Ball(500, 300, 80, 80);
  rope4 = new Rope(ball4.body, { x: 710, y: 100 });

  ball5 = new Ball(600, 300, 80, 80);
  rope5 = new Rope(ball5.body, { x: 810, y: 100 });

}

function draw() {
  background(180);
  Engine.update(engine);
  platform.display();
  ball1.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope4.display();
  ball5.display();
  rope5.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
}
