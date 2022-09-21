var canvas
var player, player2, playerSprite
var zombie, zombie2, zombieSprite
var cutscene
var sword
var shield
var boss
var backImage
var game, npc, playson, boss, deadBoss, bossSprite
var teto
var chao
var leftWall
var rightWall
var parede1
var parede2
var parede3
var parede4
var parede5
var parede6
var parede7
var parede8
var parede9
var parede10
var parede11
var parede12
var parede13
var parede14
var parede15
var parede16
var parede17
var parede18
var parede19

function preload() {
  backImage = loadImage("assets/background.jpg")
  player = loadAnimation("assets/playerR1.png", "assets/playerR2.png")
  player2 = loadAnimation("assets/playerL1.png", "assets/playerL2.png")
  zombie = loadAnimation("assets/zombieR1.png", "assets/zombieR2.png")
  zombie2 = loadAnimation("assets/zombieL1.png", "assets/zombieL2.png")
  boss = loadImage("assets/boss1.png")
  deadBoss = loadImage("assets/boss2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  teto = createSprite(width / 2, 1, width, 1);
  chao = createSprite(width / 2, height, width, 1)
  leftWall = createSprite(0, height / 2, 1, height)
  rightWall = createSprite(width, height / 2, 1, height)
  parede1 = createSprite(0, 50, 3, 50);
  parede2 = createSprite(190, 260, 250, 3);
  parede3 = createSprite(67, 145, 3, 50);
  parede4 = createSprite(67, 235, 3, 50);
  parede5 = createSprite(313, 145, 3, 50);
  parede6 = createSprite(313, 235, 3, 50);
  parede7 = createSprite(41, 170, 50, 3);
  parede8 = createSprite(41, 210, 50, 3);
  parede9 = createSprite(337, 210, 50, 3);
  parede10 = createSprite(337, 170, 50, 3);
  parede11 = createSprite(18, 190, 3, 40);
  parede12 = createSprite(361, 190, 3, 40);
  parede13 = createSprite(361, 190, 3, 40);
  parede14 = createSprite(361, 190, 3, 40);
  parede15 = createSprite(361, 190, 3, 40);
  parede16 = createSprite(361, 190, 3, 40);
  parede17 = createSprite(361, 190, 3, 40);
  parede18 = createSprite(361, 190, 3, 40);
  parede19 = createSprite(361, 190, 3, 40);
  playerSprite = createSprite(100, 30)
  playerSprite.addAnimation("playerImage", player)
  playerSprite.addAnimation("player2Image", player2)
  zombieSprite = createSprite(30, 30)
  zombieSprite.addAnimation("zombieImage", zombie)
  zombieSprite.addAnimation("zombie2Image", zombie2)
  bossSprite = createSprite(width - 200, height - 100)
  bossSprite.addImage("boss1", boss)
  bossSprite.addImage("boss2", deadBoss)
  bossSprite.scale = 4
  //game = new Game()
  //game.start()
}

function draw() {
  background(backImage)
  playerSprite.bounceOff(teto)
  playerSprite.bounceOff(chao)
  playerSprite.bounceOff(leftWall)
  playerSprite.bounceOff(rightWall)

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
  if (playerSprite.isTouching(bossSprite)) {
    bossSprite.changeImage("boss2")
    zombieSprite.x = playerSprite.x
    zombieSprite.y = playerSprite.y
    playerSprite.remove()
  }
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}