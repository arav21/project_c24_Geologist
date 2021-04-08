const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    stone = new Stone(500,100);
    iron = new Iron(300,100);

    rubber = new Rubber(700,10,10)
    rubber1 = new Rubber(710,10,10)
    rubber2 = new Rubber(720,10,10)
    rubber3 = new Rubber(730,10,10)
    rubber4 = new Rubber(740,10,10)
    rubber5 = new Rubber(750,10,10)
    rubber6 = new Rubber(760,10,10)
    rubber7 = new Rubber(770,10,10)
    rubber8 = new Rubber(780,10,10)
    rubber9 = new Rubber(790,10,10)
    rubberBig = new Rubber(700,80,80)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubberBig.display();
    stone.display();
    iron.display();

}