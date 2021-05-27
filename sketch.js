const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world;
var ground;
var div1,div2,div3,div4,div5,div6,div7;
var l1;

var score=0;
var particle;
var turn=0;
var gameState;
gameState="PLAY";

var particles=[];
var plinkos=[];
var division=[];
var ball;
//var divisionHeight=300;

function setup(){
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  for(var j = 50; j <=width; j=j+50){

    plinkos.push(new Plinko(j,75));
  }

  for(var j = 30; j <=width-10; j=j+50){

    plinkos.push(new Plinko(j,175));
  }

  for(var j = 50; j <=width; j=j+50){

    plinkos.push(new Plinko(j,275));
  }

  for(var j = 30; j <=width-10; j=j+50){

    plinkos.push(new Plinko(j,375));
  }



 

  ground=new Ground(240,760,480,20);

  div1=new Division(4,620,6,300);
  div2=new Division(476,620,6,300);
  div3=new Division(84,620,6,300);
  div4=new Division(164,620,6,300);
  div5=new Division(244,620,6,300);
  div6=new Division(324,620,6,300);
  div7=new Division(404,620,6,300);

  l1=createSprite(240,430,480,10);

}

function draw(){

  background(0);
  Engine.update(engine);
  if(ball=null){
    ball.display();

    if(ball.body.position.y>760){
      if(ball.body.position.x<300){
        score=score+500;
        ball=null;
        if(count>=5){
          gameState="end";
        }
      }
      else if(ball.body.position.x<600 && ball.body.position.x>301){
          score=score+100;
          ball=null;
          if(count>=5){
            gameState="end";
          }
      }
      else if(ball.body.position.x<900 && ball.body.position.x>601 ){
        score=score+200;
        ball=null;
        if(count>=5){
          gameState="end";
        }
      }
    }
  }

  text("score: "+score,410,20);
  text("500",35,600);
  text("500",115,600);
  text("100",195,600);
  text("100",275,600);
  text("200",355,600);
  text("200",435,600);
  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  l1.display();
  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  particleSpawn();
  for(var k=0; k<particles.length; k++){
    particles[k].display();
  }
 
}

function particleSpawn(){

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    ball=new Particle(mouseX,10,10,10);
  }
}

function heading(){
  if(gameState==="end"){
    text("GAME OVER",240,400);
  }
}