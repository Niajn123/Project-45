var welcomeScreenImg, buttonImg, Start;
var gameState = 0;
var ScramblerImg;

function preload(){
	welcomeScreenImg = loadImage("Racing Flag.png")
	buttonImg = loadImage("Start.png")
	ScramblerImg = loadImage("Scrambler.png")
}

function setup() {
	createCanvas(800, 700);  

	Start = createSprite(width/2, height/2)
	Start.addImage(buttonImg)
	Start.scale = 0.1 
}


function draw() {  
	if(gameState == 0){
		background(welcomeScreenImg)
	if(mousePressedOver(Start)){
		gameState = 1
		Start.visible = false 
	}
}
	else{background("white")


}

  drawSprites();
 
}



