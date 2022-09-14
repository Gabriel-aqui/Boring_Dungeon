class Game {
    constructor(){}
    start(){
      playson = new Player()
      playerSprite = createSprite(100, 30)
      playerSprite.addImage("playerImage", player)
      zombieSprite = createSprite(30, 30)
      zombieSprite.addImage("zombieImage", zombie)
      this.playerControl()
    }
    playerControl() {
        if(keyIsDown == UP_ARROW){
            playson.yPos += 7
        }

        if(keyIsDown == LEFT_ARROW){
            playson.yPos -= 7
        }

        if(keyIsDown == RIGHT_ARROW){
            playson.yPos += 7
        }

        if(keyIsDown == DOWN_ARROW){
            playson.yPos -= 7
        }
    }
}