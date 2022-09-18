var canvas
var player, player2, playerSprite
var zombie, zombie2, zombieSprite
var cutscene
var sword
var shield
var boss
var backImage
var game, npc, playson

function preload() {
  backImage = loadImage("assets/background.jpg")
  player = loadAnimation("assets/playerR1.png", "assets/playerR2.png")
  player2 = loadAnimation("assets/playerL1.png", "assets/playerL2.png")
  zombie = loadAnimation("assets/zombieR1.png", "assets/zombieR2.png")
  zombie2 = loadAnimation("assets/zombieL1.png", "assets/zombieL2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  playerSprite = createSprite(100, 30)
  playerSprite.addAnimation("playerImage", player)
  playerSprite.addAnimation("player2Image", player2)
  zombieSprite = createSprite(30, 30)
  zombieSprite.addAnimation("zombieImage", zombie)
  zombieSprite.addAnimation("zombie2Image", zombie2)
  game = new Game()
  game.start()
}

function draw() {
  background(backImage)
  if (keyIsDown(UP_ARROW)) {
    playerSprite.position.y -= 7
    zombieSprite.y = playerSprite.y + 110
    zombieSprite.x = playerSprite.x

}

if (keyIsDown(LEFT_ARROW)) {
  playerSprite.position.x -= 7
    zombieSprite.x = playerSprite.x + 70
    zombieSprite.y = playerSprite.y
    playerSprite.changeAnimation("player2Image", player2)
    zombieSprite.changeAnimation("zombie2Image", zombie2)
}

if (keyIsDown(RIGHT_ARROW)) {
  playerSprite.position.x += 7
    zombieSprite.x = playerSprite.x - 70
    zombieSprite.y = playerSprite.y
    playerSprite.changeAnimation("playerImage", player)
    zombieSprite.changeAnimation("zombieImage", zombie)
}

if (keyIsDown(DOWN_ARROW)) {
  playerSprite.position.y += 7
    zombieSprite.y = playerSprite.y - 110
    zombieSprite.x = playerSprite.x

}
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}