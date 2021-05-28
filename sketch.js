var pacMan,G1,G2,G3,G4,P1,P2,P3,P4,P5

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14
var wall15,wal16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27
var wall28,wall29,wall30

function setup() {
  createCanvas(1000,500);
 pacMan=createSprite(500,200,20,20);

 G1= createSprite(200,300,20,20);
 G2= createSprite(300,100,20,20);
 G3= createSprite(400,400,20,20);
 G4= createSprite(800,150,20,20);

 wall1=createSprite(50,50,8,300);
 wall2=createSprite(50,350,8,240);
 wall3=createSprite(500,465,900,8);
 wall4=createSprite(500,10,900,8);
 wall5=createSprite(950,239,8,458);
 wall6=createSprite(100,150,8,190);
 wall7=createSprite(500,450,150,8);
 wall8=createSprite(200,50,750,8);
 wall9=createSprite(160,550,8,540);
 wall10=createSprite(700,100,180,8);
 wall11=createSprite();
 wall12=createSprite();
 wall13=createSprite();
 wall14=createSprite();
 wall15=createSprite();
 wall16=createSprite();
 wall17=createSprite();
 wall18=createSprite();
 wall19=createSprite();
 wall20=createSprite();
 wall21=createSprite();
 wall22=createSprite();
 wall23=createSprite();
 wall24=createSprite();
 wall25=createSprite();
 wall26=createSprite();
 wall27=createSprite();
 wall28=createSprite();
 wall29=createSprite();
 wall30=createSprite();

}

function draw() {
  background(0);  
  drawSprites();
}