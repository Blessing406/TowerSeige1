
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world,holder,ball,ground
var stand
var slingshot
var poly_img

function preload(){
    poly_img=loadImage("polygon.png")
}


function setup(){
createCanvas(900,400)
engine = Engine.create()
world = engine.world

Engine.run(engine)

ground = new Ground()
stand = new Stand(390,300,250,10)

block1 = new Block(330,275,30,40);
block2 = new Block(330,275,30,40)
block3 = new Block(360,275,30,40)
block4 = new Block(390,275,30,40)
block5 = new Block(420,275,30,40)
block6 = new Block(450,275,30,40)
block7 = new Block(480,275,30,40)


block8 = new Block(330,235,30,40)
block9 = new Block(360,235,30,40)
block10 = new Block(390,235,30,40)
block11 = new Block(420,235,30,40)
block12 = new Block(450,235,30,40)

block13 = new Block(360,195,30,40)
block14 = new Block(390,195,30,40)
block15 = new Block(420,195,30,40)

block16 = new Block(390,155,30,40)

ball=Bodies.circle(50,200,20)
World.add(world,ball)

slingshot=new Slingshot(this.ball,{x:100,y:200})
}


function draw() {
    background("lightblue")
    ground.display();
    stand.display();

    fill("red")
    //block1 to 7
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

    fill("blue")
    //block8 to12
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

    fill("purple")
block13.display();
block14.display();
block15.display();

    fill("orange")
block16.display();
    
imageMode(CENTER)
    image(poly_img,ball.position.x,ball.position.y,40,40)
    
    slingshot.display()
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }