const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var ground
var spring
var ball
var stand1
var stand2
   var score = 0;
    function setup()
    {
      createCanvas(900,400)
      engine = Engine.create();
      world = engine.world;

          ground = new Ground(500,500,10,500)
          
          block1 = new RedBox(300,275,30,40)
          block2 = new RedBox(330,275,30,40)
          block3 = new RedBox(360,275,30,40)
          block4 = new RedBox(390,275,30,40)
          block5 = new RedBox(420,275,30,40)
          block6 = new RedBox(450,275,30,40)
          block7 = new RedBox(480,275,30,40)

          block8 = new BlueBox(330,235,30,40)
          block9 = new BlueBox(360,235,30,40)
          block10= new BlueBox(390,235,30,40)
          block11= new BlueBox(420,235,30,40)
          block12 = new BlueBox(450,235,30,40)

          block13 = new PinkBox(360,195,30,40)
          block14 = new PinkBox(390,195,30,40)
          block15 = new PinkBox(420,195,30,40)
         
          block16 = new YellowBox(390,195,30,40)

          block17 = new YellowBox(490,280,30,40)
          block18 = new YellowBox(570,280,30,40)
          
          block19 = new GreenBox(540,250,30,40)
          block20 = new GreenBox(560,250,30,40)

          block21 = new BrownBox(550,220,30,40)
          
          block22= new PinkBox(520,75,30,40)
          block23 = new PinkBox(540,75,30,40)
          block24= new PinkBox(560,75,30,40)
          block25 = new PinkBox(580,75,30,40)

          block26 = new YellowBox(530,45,30,40)
          block27 = new YellowBox(550,45,30,40)
          block28 = new YellowBox(570,45,30,40)
          
          ball = new Ball(50,50,50,50);

          spring = new String(ball.body,{x:200,y:200})
           
          stand1= new Shelf(390,200,10,250)
          stand2= new Shelf(700,200,10,200)
          text("SCORE",+score,750,40);
        Engine.update(engine)
    }

    function draw()
    {
       background("pink") 
             
       ground.display();
       block1.display();
       block2.display();
       block3.display();
       block4.display();
       block5.display();
       block5.display();
       block6.display();
       block7.display();
       block8.display();
       block9.display();
       block10.display();
       block11.display();
       block12.display();
       block13.display();
       block15.display();
       block16.display();
       block17.display();
       block18.display();
       block19.display();
       block20.display();
       block21.display();
       block22.display();
       block23.display();
       block24.display();
       block25.display();
       block26.display();
       block27.display();
       block28.display();
       spring.display();
       
       ball.display();
       stand1.display();
       stand2.display();
       score ()
       {
         if(this.visibility<0 && this.visibility>-105)
            {
              score++
            } 
       }
       block1.score();  
       block2.score();  
       block3.score();  
       block4.score();  
       block5.score();  
       block6.score();  
       block7.score();  
       block8.score();  
       block9.score();  
       block10.score();  
       block11.score();  
       block12.score();  
       block13.score();  
       block14.score();  
       block15.score();  
       block16.score();  
       block17.score();  
       block18.score();  
       block19.score();  
       block20.score();  
       block21.score();  
       block22.score();  
       block23.score();  
       block24.score();  
       block25.score();  
       block26.score();  
       block27.score();  
       block28.score();  
       


    }

    
    function mouseDragged(){
        Matter.body.setPosition(ball.boy,{x:mouseX,y:mouseY})
    }

    function mouseReleased(){
        spring.released();
    }
    function keyPressed(){
      if(keyCode=== 32){
        string.attach(ball.body)
      }
    };      
    