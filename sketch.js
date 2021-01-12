var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
 ellipse(starBody.position.x,starBody.position.y,10,10);
if(keyDown(RIGHT_ARROW)){
		fairy.x = fairy.x + 20
	}
	if(keyDown(LEFT_ARROW)){
		fairy.x = fairy.x - 20
	}

	keyPressed();
	
	star.x = starBody.position.x;
	star.y = starBody.position.y;

	drawSprites();
  console.log(fairy.x,star.y);
}

function keyPressed() {
	if(keyDown(DOWN_ARROW)){
		//fairyVoice.play();
		Matter.Body.setStatic(starBody,false);
	}
	if(star.y>460 && fairy.x===510){
		Matter.Body.setStatic(starBody,true);
	}

	//write code here
}
