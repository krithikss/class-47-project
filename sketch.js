var bg,bgimg
var man, manimg
var ground, ceiling
var monster, monsterimg
var plank, plankimg, plankGroup
var rock,rockimg

function preload(){
 bgimg = loadAnimation('background.gif')
 manimg = loadAnimation('man1.gif')
 monsterimg = loadAnimation('monster.gif')
 plankimg = loadImage('plank.png')
 rockimg = loadImage('rock.png')
}

function setup(){
 createCanvas(windowWidth,windowHeight)

 bg = createSprite(windowWidth/2 - 7, windowHeight/2, windowWidth, windowHeight)
 bg.addAnimation('moving',bgimg)
 bg.scale = 1.085

 man = createSprite(windowWidth/5 + 120, windowHeight/5 +400)
 man.addAnimation('running',manimg)
 man.scale = 0.75
 man.debug = true

 monster = createSprite(windowWidth/5 -190,windowHeight/5 +430)
 monster.addAnimation('running1',monsterimg)
 monster.scale = 0.4

 ground = createSprite(windowWidth/2 - 7,  windowHeight/5 +570, windowWidth, 10)
 ceiling = createSprite(windowWidth/2 - 7, -40, windowWidth, 1)

 plankGroup = createGroup()
}

function draw(){
 background(0)

 

 if(keyDown("space") ) {
  man.velocityY = -22.5;
  setTimeout(follow, 950);
 }
 man.velocityY = man.velocityY + 0.8
 man.collide(ground)
 man.collide(ceiling)

 monster.velocityY = monster.velocityY + 0.8
 monster.collide(ground)
 monster.collide(ceiling)


 if (frameCount%143 === 0){
   createPlanks()
 }

 if (frameCount%185 === 0){
   createRocks()
 }


 drawSprites()

 fill('white')
 text("X "+mouseX+","+"Y "+mouseY,mouseX,mouseY);
}

function follow() {
 monster.velocityY = -24;
}

function createPlanks (){
 plank = createSprite(windowWidth, random(300,365))
 plank.velocityX = -8
 plank.addImage('plank',plankimg)
 plank.scale = 0.35
 plankGroup.add(plank)
 plank.debug = true
 if(man.isTouching(plankGroup)){
  man.collide(plankGroup)
 }
}

function createRocks (){
 rock = createSprite(windowWidth, 675)
 rock.velocityX = -8
 rock.addImage('rock',rockimg)
 rock.scale = 0.60
}