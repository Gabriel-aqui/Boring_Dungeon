var canvas
var player, playerSprite
var zombie, zombieSprite
var cutscene
var sword
var shield
var boss
var backImage
var game, npc, playson
function preload(){
  backImage = loadImage("assets/background.jpg")
  player = loadImage("assets/player.png")
  zombie = loadImage("assets/zombie.png")
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  game = new Game()
  game.start()
}

function draw() {
    background(backImage)
    drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}