var loginBackground, gameBackground;
var gameState = 0;
var playerCount, database, game, form, player;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var wall21, wall22, wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30;
var player1, player2, player3, player4,player5,player6, allPlayers, players;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
  loginBackground = loadImage('Images/FirstBackground.jpg');
  gameBackground = loadImage('Images/Temple.jpg');
  themeMusic = loadSound("Sounds/BackGround Music.mp3")
}

function setup() {
  //createEdgeSprites();
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  wall1 = createSprite(300,290,10,500);
  wall2 = createSprite()
}

function draw() {
  background(loginBackground);
  themeMusic.play();
  //console.log(mouseX, mouseY)


  if(playerCount === 2){
    gameState = 1;
    game.update(1);
  }

  if(gameState === 1){
    game.play();
  }
}