var player, player_img;
var spikes;
var water;
var lava;
var block, block_img;

function preload(){
  block_img = loadImage("images/block.jpg");
}

function setup(){
  cancas = createCanvas(800, 450);
  block = createSprite(-300, 100);
  block.addImage(block_img);
  
}

function draw() {
  background("black");
  drawSprites();
}