
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground, stand1, stand2
var Box1,Box3,Box4,Box5,Box6,Box7,Box8,Box9,Box10,Box11,Box12,Box13,Box14,Box15,
Box16

var Box17,Box18,Box19,Box20,Box21,Box22,Box23,Box24,Box25
var polygon_image, polygon

var backgroundImg;

var sling;


function preload() {
  
  polygon_image=loadImage("images/polygon.png");
  getBackgroundImage();

}



function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
 

    ground= new Ground(600,580,1200,20)
    stand1= new Ground(640,250,220,10)
    stand2= new Ground(330,450,250,10)

    Box1=new Box(240,425,30,30)
    Box2=new Box(270,425,30,30)
    Box3=new Box(300,425,30,30)
    Box4=new Box(330,425,30,30)
    Box5=new Box(360,425,30,30)
    Box6=new Box(390,425,30,30)
    Box7=new Box(420,425,30,30)

    Box8=new Box(270,395,30,30)
    Box9=new Box(300,395,30,30)
    Box10=new Box(330,395,30,30)
    Box11=new Box(360,395,30,30)
    Box12=new Box(390,395,30,30)

    Box13=new Box(300,365,30,30)
    Box14=new Box(330,365,30,30)
    Box15=new Box(360,365,30,30)

    Box16=new Box(330,335,30,30)


    Box17=new Box(580,225,30,30)
    Box18=new Box(610,225,30,30)
    Box19=new Box(640,225,30,30)
    Box20=new Box(670,225,30,30)
    Box21=new Box(700,225,30,30)

   Box22=new Box(610,195,30,30)
   Box23=new Box(640,195,30,30)
   Box24=new Box(670,195,30,30)

   Box25=new Box(640,165,30,30)

  

    polygon=Bodies.circle(50,100,20)
    World.add(world,polygon)

    sling=new Launcher(polygon,{x:150,y:200})

    


    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  if(backgroundImg)
    background(backgroundImg)
    Engine.update(engine);
 //background('rgb(252, 132, 255)');

  ground.display()
  stand1.display()
  stand2.display()

  Box1.display()
  Box2.display()
  Box3.display()
  Box4.display()
  Box5.display()
  Box6.display()
  Box7.display()

  Box8.display()
  Box9.display()
  Box10.display()
  Box11.display()
  Box12.display()

  Box13.display()
  Box14.display()
  Box15.display()

  Box16.display()



  Box17.display()
  Box18.display()
  Box19.display()
  Box20.display()
  Box21.display()

  Box22.display()
  Box23.display()
  Box24.display()

  Box25.display()

  sling.display()

  

  
    imageMode(CENTER)
    image(polygon_image,polygon.position.x,polygon.position.y,50,40)
  

 
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode===32){
   sling.attach(polygon)
  }
  
  }

  async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON=await response.json();
    console.log(responseJSON.datetime);
    var datetime=responseJSON.datetime
    var hour= datetime.slice(11,13)
    console.log(hour);
    if(hour>=06 && hour<=18){
        bg="images/light.png";
    }
    else{
        bg="images/dark.jpg";
    }
    backgroundImg=loadImage(bg);
  }




