const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,380,1200,20); 
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

    box5=new Box(810, 180, 300, 20);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box6 = new Box(810,120,70,70);

    box7=new Box(760, 120, 20, 150);
    box8=new Box(870, 120, 20, 150);

    box9=new Box(810, 200, 70, 70);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();

    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();

    box9.display();


}