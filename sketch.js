const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var ground;
var score = 0;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var ball;
var Liga;

function preload() {
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    box1 = new Box(1100, 100, 50, 50);
    box2 = new Box(1050, 100, 50, 50);
    box3 = new Box(1100, 50, 50, 50);
    box4 = new Box(1050, 50, 50, 50);
    box5 = new Box(1100, 0, 50, 50);
    box6 = new Box(1050, 0, 50, 50);
    box7 = new Box(1100, -50, 50, 50);
    box8 = new Box(1050, -50, 50, 50);
    box9 = new Box(1100, -100, 50, 50);
    box10 = new Box(1050, -100, 50, 50);
    ball = new Box(1000,1000,50, 50);
    Liga = new liga(box10.body,{x:1000,y:1000})
}

function draw(){
background("lightBlue");

    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ball.display();
    Liga.display();
}

        //Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

