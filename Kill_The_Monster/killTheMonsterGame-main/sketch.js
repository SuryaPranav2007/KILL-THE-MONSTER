const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;
var box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero;
var monster;
var rope;
var ground;

function preload() {
  bg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(1300, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,500,300);

  box1 = new Box(600, 100, 80, 80);
  box2 = new Box(900, 100, 80, 80);
  box3 = new Box(900, 100, 80, 80);
  box4 = new Box(900, 100, 80, 80);
  box5 = new Box(900, 100, 80, 80);
  box6 = new Box(900, 100, 80, 80);
  box7 = new Box(800, 100, 80, 80);
  box8 = new Box(800, 100, 80, 80);
  box9 = new Box(800, 100, 80, 80);
  box10 = new Box(800, 100, 80, 80);
  box11 = new Box(800, 100, 80, 80);
  box12 = new Box(800, 100, 80, 80);
  box13 = new Box(800, 100, 80, 80);
  box14 = new Box(800, 100, 80, 80);
  box15 = new Box(700, 100, 80, 80);
  box16 = new Box(700, 100, 80, 80);
  box17 = new Box(700, 100, 80, 80);
  box18 = new Box(700, 100, 80, 80);
  box19 = new Box(700, 100, 80, 80);
  box20 = new Box(700, 100, 80, 80);
  box21 = new Box(600, 100, 80, 80);
  box22 = new Box(600, 100, 80, 80);
  box23 = new Box(600, 100, 80, 80);
  box24 = new Box(600, 100, 80, 80);
  box25 = new Box(600, 100, 80, 80);
  box26 = new Box(600, 100, 80, 80);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}


