//New Section 1
//Code for Role Selection
let roleSelected = 0; // 0 = No Roll Selected, 1 = Pathfinder Role, 2 = PuzzleMaster Role

let buttonDiameterPathfinder = 250;
let buttonDiameterPUzzleMaster = 250;

let buttonX1;
let buttonY1;

let buttonX2;
let buttonY2;

function preload() {
  backgroundImage = loadImage('materials/images/Background3.png');
  
  //New Section 2
  //Code for Role Selection
  //Load Button Images
  PathfinderIMG = loadImage('materials/images/buttons/Pathfinder BT1.png'); 
  PuzzleMasterIMG = loadImage('materials/images/buttons/PuzzleMaster BT1.png');
  
  PathfinderIMG_Press = loadImage('materials/images/buttons/Pathfinder BT2.png'); 
  PuzzleMasterIMG_Press = loadImage('materials/images/buttons/PuzzleMaster BT2.png');
  
  PathfinderIMG_Active = loadImage('materials/images/buttons/Pathfinder BT3.png'); 
  PuzzleMasterIMG_Active = loadImage('materials/images/buttons/PuzzleMaster BT3.png');
  
  //Load Button Sound
  RoleButtonPress = loadSound('materials/sounds/ButtonPress.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //New Section 3
  //Code for Role Selection
  //Create Roll Buttons
  //Pathfinder Button
  PathfinderBT = createImg('materials/images/buttons/Pathfinder BT1.png', 'Choose Pathfinder Roll');
  PathfinderBT.size(buttonDiameterPathfinder, buttonDiameterPathfinder);
  PathfinderBT.position(buttonX1, buttonY1);
  PathfinderBT.mousePressed(pathfinderselected);
  
  //PuzzleMaster Button
  PuzzleMasterBT = createImg('materials/images/buttons/PuzzleMaster BT1.png', 'Choose PuzzleMaster Roll');
  PuzzleMasterBT.size(buttonDiameterPUzzleMaster, buttonDiameterPUzzleMaster);
  PuzzleMasterBT.position(buttonX2, buttonY2);
  PuzzleMasterBT.mousePressed(puzzlemasterselected);
  
  buttonX1 = width / 2 - buttonDiameterPathfinder / 2 - 150; // Adjusted for centering
  buttonY1 = height / 2 - buttonDiameterPathfinder / 2;

  buttonX2 = width / 2 - buttonDiameterPUzzleMaster / 2 + 150;
  buttonY2 = height / 2 - buttonDiameterPUzzleMaster / 2;
  
  windowResized();
}

function draw() {
  image(backgroundImage, 0, 0, width, height);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buttonX1 = width / 2 - buttonDiameterPathfinder / 2 - width/4.1;
  buttonY1 = height / 2 - buttonDiameterPathfinder / 2 + height/18;
  buttonX2 = width / 2 - buttonDiameterPUzzleMaster / 2 + width/4.1;
  buttonY2 = height / 2 - buttonDiameterPUzzleMaster / 2 + height/18;
  buttonDiameterPathfinder = width/2.5;
  buttonDiameterPUzzleMaster = width/2.5;

  PathfinderBT.position(buttonX1, buttonY1);
  PuzzleMasterBT.position(buttonX2, buttonY2);
  PathfinderBT.size(buttonDiameterPathfinder, buttonDiameterPathfinder);
  PuzzleMasterBT.size(buttonDiameterPUzzleMaster, buttonDiameterPUzzleMaster);
}

//New Section 4
//Code for Role Selection
//Create Functions foe Roll Selection
function pathfinderselected() {
  PuzzleMasterBT.attribute('src', 'materials/images/buttons/PuzzleMaster BT1.png');
  PathfinderBT.attribute('src', 'materials/images/buttons/Pathfinder BT2.png');
  RoleButtonPress.setVolume(0.5);
  RoleButtonPress.play();
  
  setTimeout(function () {
    PathfinderBT.attribute('src', 'materials/images/buttons/Pathfinder BT3.png');
  }, 400);
  roleSelected = 1;
  
  console.log(`Pathfinder Button clicked! Role selected: ${roleSelected}`);
}

function puzzlemasterselected() {
  PathfinderBT.attribute('src', 'materials/images/buttons/Pathfinder BT1.png');
  PuzzleMasterBT.attribute('src', 'materials/images/buttons/PuzzleMaster BT2.png');
  RoleButtonPress.setVolume(0.5);
  RoleButtonPress.play();
  
  setTimeout(function () {
    PuzzleMasterBT.attribute('src', 'materials/images/buttons/PuzzleMaster BT3.png');
  }, 400);
  roleSelected = 2;
  
  console.log(`PuzzleMaster Button clicked! Role selected: ${roleSelected}`);
}