const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup(){
   createCanvas(1200,700)

   engine = Engine.create();
   world = engine.world
   Engine.run(engine)
  ground1 = new Ground(450,390,300,20)
   box1 = new Blocks (350,360,30,40);
   box2 = new Blocks (380,360,30,40);
   box3 = new Blocks (410,360,30,40);
   box4 = new Blocks (440,360,30,40);
   box5 = new Blocks (320,360,30,40);
   box6 = new Blocks (470,360,30,40);
   box7 = new Blocks (500,360,30,40);
   box8 = new Blocks (530,360,30,40);
   box9 = new Blocks (560,360,30,40);
   box10 = new Blocks (587,360,27,40);
   box11 = new Blocks (560,320,27,40);
   box12 = new Blocks (530,320,27,40);
   box13 = new Blocks (500,320,27,40);
   box13 = new Blocks (500,320,27,40);
   box14 = new Blocks (470,320,27,40);
   box15 = new Blocks (440,320,27,40);
   box16 = new Blocks (410,320,27,40);
   box17 = new Blocks (380,320,27,40);
   box18 = new Blocks (350,320,27,40);
   box19 = new Blocks (440,275,40,50);
   box20 = new Blocks (480,275,40,50);
   box21 = new Blocks (460,225,40,50);

}

function draw(){
    background(0)

    ground1.display();
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
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    drawSprites();
}
