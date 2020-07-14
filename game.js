class Game{
    constructor(){

    }
    getGameState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
            }
        
            updateGameState(){
        database.ref("/").update({
            "gameState": gameState
        })
    }
   async start(){
var countref = await database.ref("playerCount").once("value")
if(countref.exists()){
    playerCount = countref.val()
    playerObj = new Player()
playerObj.getCount()
formObj = new Form()
formObj.display()

}
    }

    play(){
        formObj.greetings.hide()
        
    }
}