var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0e13f43a-71e0-43ce-b026-f9dea3ee1e5a"],"propsByKey":{"0e13f43a-71e0-43ce-b026-f9dea3ee1e5a":{"name":"canon1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"RMkUgB28e5PpZSTPABSA1K.cEiC85o.J","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0e13f43a-71e0-43ce-b026-f9dea3ee1e5a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var canon = createSprite (200,375,30,40)
    canon.shapeColor = "#f2d574"
    
var car1 = createSprite (350,300,40,20)
car1.shapeColor = "#a79cad"
var car2 = createSprite (350,200,40,20)
car2.shapeColor = "#92a68f"
var car3 = createSprite (350,100,40,20)
car3.shapeColor = "#ffeba3"
var car4 = createSprite (50,250,40,20)
car4.shapeColor = "#e8b96d"
var car5 = createSprite (50,150,40,20)
car5.shapeColor = "#8f98a6"
var car6 = createSprite (50,50,40,20)
car6.shapeColor ="#a87163"

var Deliveries = 0 
var Deaths = 0 


var home = createSprite (200,10,400,20)
  home.shapeColor = "#ad946d"

var bag = createSprite (200,350,10,10)
    bag.shapeColor = "white"
var point = 0 
var deaths = 0

car1.velocityX = 0
car2.velocityX = 0
car3.velocityX = 0
car4.velocityX = 0
car5.velocityX = 0
car6.velocityX = 0





function draw() {
createEdgeSprites()
  background("#4e5869")
  
  car1.bounceOff(edges)
  car2.bounceOff(edges)
  car3.bounceOff(edges)
  car4.bounceOff(edges)
  car5.bounceOff(edges)
  car6.bounceOff(edges)


  var gamestate = "serve"
    if (keyDown("ENTER")){
   gamestate === "serve"
      car1.velocityX = -9.3
      car2.velocityX = -9.3
      car3.velocityX = -9.3
      car4.velocityX = 9.3
      car5.velocityX = 9.3
      car6.velocityX = 9.3
    }
var gamestate = "play"
    if (keyDown("space")){
    gamestate === "play"
       bag.velocityY = -10
     }
   
    
    if (bag.isTouching(home)){
      Deliveries = Deliveries + 1 
      bag.velocityY = 0 
      bag.x = 200
      bag.y = 350
    }

     
  
  if (bag.isTouching (car1) ||bag.isTouching(car2) ||bag.isTouching(car3)  || bag.isTouching(car4)  || bag.isTouching(car5)  || bag.isTouching(car6) ){
    Deaths = Deaths +1 
    bag.velocityY = 0 
      bag.x = 200
      bag.y = 350
  }
var gamestate = "end"
  if (Deaths >=5){
  gamestate === "end"
    Deliveries = 0
    textSize(40)
  stroke("white")
  strokeWeight("2")
  text( 'You Lose', 200,200)
  }

if (Deliveries >=10){
  Deaths === 0
  textSize(40)
  stroke("white")
  strokeWeight("2")
  text( 'All Bags Delivered!', 10,200)
}
  
   drawSprites();
   textSize(20)
  stroke("white")
  strokeWeight("2")
  text( Deliveries +'/10 Delivered', 10,350)
  
   textSize(20)
  stroke("#e85d54")
  strokeWeight("2")
  text( Deaths +'/5 Deaths', 10,370)
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
