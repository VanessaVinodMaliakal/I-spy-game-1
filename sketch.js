var database,formObj,playerCount,playerObj,gameState,gameObj;
playerCount = 0
gameState = 0

function setup(){
	createCanvas(displayWidth-30,displayHeight-150)
	database = firebase.database();
	gameObj =  new Game()
	gameObj.getGameState()
	gameObj.start()
}

function draw(){
	
	if(formObj.start.mousePressed){
		gameState = 1
		gameObj.updateGameState()
	}
	if(gameState == 1){
		gameObj.play()
	}
}