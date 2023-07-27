//Make Map
/*Making Map explanation: The way we made the map is when we find the coordinates (the elements inside the matrix x:x)
of every single tile that should be traversible and instead of hardcoding it we use "for" loops to go through and create each
little "corridor" the pacman goes through in the game. The usage of "static_coordinates" array is necessary because to save
some code and space, we imagine a line that seperates the map into two (from 0th element to 20th and from 20th element to 40th
element in the array). We seperate creating the map into two - Up and Down (from the 0th element to the 45th element of each array)
and Left and Right (from the 0th to the 40th element). The Up and Down are created the same away in both imaginable parts of the map
so we just use the array "static_coordinates", which contains elements from the main array, to get the specific coordinates we need from
0 to 20 and from 20 to 40. The main problem is that when creating the traversible parts from left to right is that we have to 
subtract or add to the numbers from the static coordinates. Because the elements from 0 to 20 and from 20 to 40 are opposites,
we have to reverse the symbol we use for the operation, which is why from code line 67 to 99 and from 100 do 130, we have the
same operations but with the opposite of the calculation symbol "+" or "-"
*/
/*Another good way of making the map is finding the coordinates of each wall and then looping through the whole array
and making the coordinates that are in the list - not traversible a.k.a walls
*/
/*Ways of making the coins vanish from the map after pacman has taken them:
1.We can put the empty map as an image under the image of the original map and after pacman moves
through the original map, at the same time this certain part of the map get overlayed by the empty map underneath
creating the effect of "taking the coins". This way makes pacman work like an "eraser".
2.Making pacman leave a trail that is the same color as the spaces between the coins so it draws over them.
3.Making each coin an object and placing it on the map and after pacman goes through the coin, its display property in css
goes "hidden".
*/
function Tile(isWall, hasCoin, hasPowerUp) {
  this.isWall = isWall;
  this.hasCoin = hasCoin;
  this.hasPowerUp = hasPowerUp;
}

var tiles_array = new Array(41);

for (var i = 0; i < tiles_array.length; i++) {
  tiles_array[i] = new Array(46);
}

for (var i = 0; i < 41; i++) {
  for (var j = 0; j < 46; j++) {
    const current = new Tile(
      isWall = 1,
      hasCoin = 1,
      hasPowerUp = 0
    );
    tiles_array[i][j] = current;
  }
}

function CreateMap(side) {
  if (side === "right") {
    var static_coordinates = [20, 32, 40, 37, 22, 27];
  } else {
    var static_coordinates = [20, 8, 0, 3, 18, 13];
  }

  //Making Up and Down Traversible
  for (var i = 0; i < 15; i++) {
    tiles_array[static_coordinates[5]][30 - i].isWall = 0;
  }
  for (var i = 0; i < 36; i++) {
    tiles_array[static_coordinates[1]][35 - i].isWall = 0;
  }
  for (var i = 0; i < 6; i++) {
    tiles_array[static_coordinates[4]][35 - i].isWall = 0;
    tiles_array[static_coordinates[2]][30 + i].isWall = 0;
    tiles_array[static_coordinates[3]][35 + i].isWall = 0;
    tiles_array[static_coordinates[1]][40 - i].isWall = 0;
    tiles_array[static_coordinates[2]][40 + i].isWall = 0;
    tiles_array[static_coordinates[4]][45 - i].isWall = 0;
    tiles_array[static_coordinates[4]][0 + i].isWall = 0;
    tiles_array[static_coordinates[5]][6 + i].isWall = 0;
    tiles_array[static_coordinates[4]][11 + i].isWall = 0;
  }
  for (var i = 0; i < 5; i++) {
    tiles_array[static_coordinates[5]][40 - i].isWall = 0;
  }
  for (var i = 0; i < 12; i++) {
    tiles_array[static_coordinates[2]][11 - i].isWall = 0;
  }

  //Making Left and Right Traversible
  if (side === "right") {
    for (var i = 0; i < 13; i++) {
      tiles_array[static_coordinates[0] + i][35].isWall = 0;
    }
    for (var i = 0; i < 6; i++) {
      tiles_array[static_coordinates[3] - i][40].isWall = 0;
      tiles_array[static_coordinates[4] + i][40].isWall = 0;
      tiles_array[static_coordinates[5] - i][11].isWall = 0;
    }
    for (var i = 0; i < 4; i++) {
      tiles_array[static_coordinates[2] - i][35].isWall = 0;
      tiles_array[static_coordinates[3] + i][40].isWall = 0;
    }
    for (var i = 0; i < 19; i++) {
      tiles_array[static_coordinates[4] + i][30].isWall = 0;
      tiles_array[static_coordinates[2] - i][0].isWall = 0;
    }
    for (var i = 0; i < 21; i++) {
      tiles_array[static_coordinates[2] - i][45].isWall = 0;
      tiles_array[static_coordinates[2] - i][6].isWall = 0;
    }
    for (var i = 0; i < 5; i++) {
      tiles_array[static_coordinates[5] + i][21].isWall = 0;
    }
    for (var i = 0; i < 9; i++) {
      tiles_array[static_coordinates[1] + i][21].isWall = 0;
      tiles_array[static_coordinates[1] + i][11].isWall = 0;
    }
    for (var i = 0; i < 8; i++) {
      tiles_array[static_coordinates[5] - i][26].isWall = 0;
      tiles_array[static_coordinates[5] - i][16].isWall = 0;
    }
  } else {
    for (var i = 0; i < 13; i++) {
      tiles_array[static_coordinates[0] - i][35].isWall = 0;
    }
    for (var i = 0; i < 6; i++) {
      tiles_array[static_coordinates[3] + i][40].isWall = 0;
      tiles_array[static_coordinates[4] - i][40].isWall = 0;
      tiles_array[static_coordinates[5] + i][11].isWall = 0;
    }
    for (var i = 0; i < 4; i++) {
      tiles_array[static_coordinates[2] + i][35].isWall = 0;
      tiles_array[static_coordinates[3] - i][40].isWall = 0;
    }
    for (var i = 0; i < 19; i++) {
      tiles_array[static_coordinates[4] - i][30].isWall = 0;
      tiles_array[static_coordinates[2] + i][0].isWall = 0;
    }
    for (var i = 0; i < 21; i++) {
      tiles_array[static_coordinates[2] + i][45].isWall = 0;
      tiles_array[static_coordinates[2] + i][6].isWall = 0;
    }
    for (var i = 0; i < 5; i++) {
      tiles_array[static_coordinates[5] - i][21].isWall = 0;
    }
    for (var i = 0; i < 9; i++) {
      tiles_array[static_coordinates[1] - i][21].isWall = 0;
      tiles_array[static_coordinates[1] - i][11].isWall = 0;
    }
    for (var i = 0; i < 8; i++) {
      tiles_array[static_coordinates[5] + i][26].isWall = 0;
      tiles_array[static_coordinates[5] + i][16].isWall = 0;
    }
  }
}

function MakeCoins() {
  for (var i = 0; i < 3; i++) {
    tiles_array[19 + i][35].hasCoin = 0;
  }
  for (var i = 0; i <= 13; i++) {
    tiles_array[13][16 + i].hasCoin = 0;
    tiles_array[27][16 + i].hasCoin = 0;
  }
  for (var i = 0; i <= 14; i++) {
    tiles_array[13 + i][16].hasCoin = 0;
    tiles_array[13 + i][26].hasCoin = 0;
  }
  for (var i = 0; i < 4; i++) {
    tiles_array[27 + i][21].hasCoin = 0;
  }
  for (var i = 0; i < 5; i++) {
    tiles_array[9 + i][21].hasCoin = 0;
    tiles_array[18][12 + i].hasCoin = 0;
    tiles_array[22][12 + i].hasCoin = 0;
  }
  for (var i = 0; i <= 7; i++) {
    tiles_array[33 + i][21].hasCoin = 0;
    tiles_array[0 + i][21].hasCoin = 0;
  }
  tiles_array[0][35].hasPowerUp = 1;
  tiles_array[0][3].hasPowerUp = 1;
  tiles_array[40][3].hasPowerUp = 1;
  tiles_array[40][35].hasPowerUp = 1;
}

//Get the accessible coordinates for later use for the ghosts
let non_wall_tiles = [];

function AccessibleCoordinatesArray() {
  for (var i = 0; i < 41; i++) {
    for (var j = 0; j < 46; j++) {
      if (tiles_array[i][j].isWall == 0) {
        non_wall_tiles.push(i + "|" + j);
      }
    }
  }
}

//Make PacMan
function PacMan(speed, character, currentMovement, currentPositionY, currentPositionX, isPoweredUp, score) {
  this.speed = speed;
  this.character = character;
  this.currentMovement = currentMovement;
  this.currentPositionY = currentPositionY;
  this.currentPositionX = currentPositionX;
  this.isPoweredUp = isPoweredUp;
  this.score = score;
}

const pacman = new PacMan(
  speed = 5,
  character = document.getElementById("pacman"),
  //Make MovementLogic("L") later
  currentMovement = MovementLogic("I"),
  currentPositionY = 35,
  currentPositionX = 20,
  isPoweredUp = false,
  score = 0
);

//Make in-game timer
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var min;
var sec;

var counter = 0;
setInterval(setTime, 1000);

function setTime() {
  counter++;
  if (counter % 60 < 10) {
    seconds.innerHTML = "0" + counter % 60;
  } else {
    seconds.innerHTML = counter % 60;
  }
  if (Math.floor(counter / 60) < 10) {
    minutes.innerHTML = "0" + Math.floor(counter / 60);
  } else {
    minutes.innerHTML = Math.floor(counter / 60);
  }
  min = Math.floor(counter / 60);
  sec = counter % 60;
  if (min == 0 && sec == 20) {
    ghosts_array[1].character.style.top = 90 + "px";
    ghosts_array[1].character.style.left = 20 + "px";
    pink_pass = true;
  }
  if (min == 0 && sec == 30) {
    ghosts_array[2].character.style.top = 90 + "px";
    ghosts_array[2].character.style.left = 130 + "px";
    blue_pass = true;
  }
  if (min == 0 && sec == 40) {
    ghosts_array[3].character.style.top = 315 + "px";
    ghosts_array[3].character.style.left = 120 + "px";
    orange_pass = true;
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Make Ghosts
function Ghost(speed, character, color, currentPositionY, currentPositionX, gotPacman) {
  this.speed = speed;
  this.character = character;
  this.color = color;
  this.currentPositionY = currentPositionY;
  this.currentPositionX = currentPositionX;
  this.gotPacman = gotPacman;
}

var ghosts_array = new Array(4);

const red = new Ghost(
  speed = 5,
  character = document.getElementById("red_ghost"),
  color = "red",
  currentPositionY = 16,
  currentPositionX = 20,
  gotPacman = false
);

const pink = new Ghost(
  speed = 5,
  character = document.getElementById("pink_ghost"),
  color = "pink",
  currentPositionY = 0,
  currentPositionX = 0,
  gotPacman = false
);

const blue = new Ghost(
  speed = 5,
  character = document.getElementById("blue_ghost"),
  color = "blue",
  currentPositionY = 0,
  currentPositionX = 22,
  gotPacman = false
);

const orange = new Ghost(
  speed = 5,
  character = document.getElementById("orange_ghost"),
  color = "orange",
  currentPositionY = 45,
  currentPositionX = 20,
  gotPacman = false
);

ghosts_array[0] = red;
ghosts_array[1] = pink;
ghosts_array[2] = blue;
ghosts_array[3] = orange;

var red_animations = ['red_left', 'red_right', 'red_up', 'red_down'];
var orange_animations = ['orange_left', 'orange_right', 'orange_up', 'orange_down'];

var pink_animations = ['pink_left', 'pink_right', 'pink_up', 'pink_down'];
var LeftP = false,
  DownP = false,
  UpP = false,
  RightP = false;
var pink_directions = [LeftP, DownP, UpP, RightP];

var blue_animations = ['blue_left', 'blue_right', 'blue_up', 'blue_down'];
var LeftB = false,
  DownB = false,
  UpB = false,
  RightB = false;
var blue_directions = [LeftB, DownB, UpB, RightB];

//Make Ghost Logic and Movement

function BestMove(ghost, major_side, pacman_major, pacman_minor, major, minor, animations) {
  var travelSide;
  var coordinates;

  var current_animation = animations[0];
  if (pacman_major - major != 0) {
    travelSide = (pacman_major - major) / Math.abs(pacman_major - major);
    if (major_side === "x") {
      coordinates = (major + travelSide) + "|" + minor;
      if (non_wall_tiles.includes(coordinates)) {
        ghost.character.style.left = (parseInt(ghost.character.style.left) + (ghost.speed * travelSide)) + "px";
        ghost.currentPositionX += travelSide;
        if (travelSide >= 0) {
          current_animation = animations[1];
        } else {
          current_animation = animations[0];
        }
      }
    } else {
      coordinates = minor + "|" + (major + travelSide);
      if (non_wall_tiles.includes(coordinates)) {
        ghost.character.style.top = (parseInt(ghost.character.style.top) + (ghost.speed * travelSide)) + "px";
        ghost.currentPositionY += travelSide;
        if (travelSide >= 0) {
          current_animation = animations[3];
        } else {
          current_animation = animations[2];
        }
      }
    }
  }

  if (pacman_minor - minor != 0) {
    travelSide = (pacman_minor - minor) / Math.abs(pacman_minor - minor);
    if (major_side === "x") {
      coordinates = major + "|" + (minor + travelSide);
      if (non_wall_tiles.includes(coordinates)) {
        ghost.character.style.top = (parseInt(ghost.character.style.top) + (ghost.speed * travelSide)) + "px";
        ghost.currentPositionY += travelSide;
        if (travelSide >= 0) {
          current_animation = animations[3];
        } else {
          current_animation = animations[2];
        }
      }
    } else {
      coordinates = (minor + travelSide) + "|" + major;
      if (non_wall_tiles.includes(coordinates)) {
        ghost.character.style.left = (parseInt(ghost.character.style.left) + (ghost.speed * travelSide)) + "px";
        ghost.currentPositionX += travelSide;
        if (travelSide >= 0) {
          current_animation = animations[1];
        } else {
          current_animation = animations[0];
        }
      }
    }
  }

  ghost.character.classList.replace(ghost.character.classList[0], current_animation);

  if (pacman_major - major == 0 && pacman_minor - minor == 0) {
    ghost.gotPacman = true;
    //make game over screen and pacman animation!
  }
}

function Scatter(ghost, cA, cB, cC, cD, animations, directions) {
  var currentAnimation = animations[0];
  if (ghost.currentPositionX == cA && ghost.currentPositionY == cC) {
    directions[0] = false;
    directions[1] = true;
  }
  if (ghost.currentPositionX == cA && ghost.currentPositionY == cB) {
    directions[1] = false;
    directions[3] = true;
  }
  if (ghost.currentPositionX == cD && ghost.currentPositionY == cB) {
    directions[3] = false;
    directions[2] = true;
  }
  if (ghost.currentPositionX == cD && ghost.currentPositionY == cC) {
    directions[2] = false;
    directions[0] = true;
  }

  if (directions[0]) {
    ghost.character.style.left = (parseInt(ghost.character.style.left) + ghost.speed) + "px";
    ghost.currentPositionX += 1;
    currentAnimation = animations[1];
  }
  if (directions[3]) {
    ghost.character.style.left = (parseInt(ghost.character.style.left) - ghost.speed) + "px";
    ghost.currentPositionX -= 1;
    currentAnimation = animations[0];
  }
  if (directions[1]) {
    ghost.character.style.top = (parseInt(ghost.character.style.top) + ghost.speed) + "px";
    ghost.currentPositionY += 1;
    currentAnimation = animations[3];
  }
  if (directions[2]) {
    ghost.character.style.top = (parseInt(ghost.character.style.top) - ghost.speed) + "px";
    ghost.currentPositionY -= 1;
    currentAnimation = animations[2];
  }

  ghost.character.classList.replace(ghost.character.classList[0], currentAnimation);
}

var pacman_positionX;
var pacman_positionY;

function RedMovement(ghost, animations) {
  //We will make the red ghost chase pacman
  pacman_positionX = pacman.currentPositionX;
  pacman_positionY = pacman.currentPositionY;

  if (Math.abs(pacman_positionX - ghost.currentPositionX) < Math.abs(pacman_positionY - ghost.currentPositionY)) {
    BestMove(ghost, "x", pacman_positionX, pacman_positionY, ghost.currentPositionX, ghost.currentPositionY, animations);
  } else {
    BestMove(ghost, "y", pacman_positionY, pacman_positionX, ghost.currentPositionY, ghost.currentPositionX, animations);
  }
}

var resetp = 0;
var resetb = 0;

function PinkMovement(ghost, animations, directions) {
  //We will make the Pink Ghost to go "Scatter" mode and chase pacman if he is nearby, then go to "Scatter" mode again
  //Scatter path is from 0|0 to 18|6
  if (Math.abs(pacman.currentPositionX - ghost.currentPositionX) + Math.abs(pacman.currentPositionY - ghost.currentPositionY) < 15) {
    if (Math.abs(pacman_positionX - ghost.currentPositionX) < Math.abs(pacman_positionY - ghost.currentPositionY)) {
      BestMove(ghost, "x", pacman_positionX, pacman_positionY, ghost.currentPositionX, ghost.currentPositionY, animations);
    } else {
      BestMove(ghost, "y", pacman_positionY, pacman_positionX, ghost.currentPositionY, ghost.currentPositionX, animations);
    }
    resetp = 1;
  } else {
    if (resetp == 1) {
      ghost.currentPositionX = 0;
      ghost.currentPositionY = 0;
      ghost.character.style.top = 90 + "px";
      ghost.character.style.left = 20 + "px";
      directions[0] = false;
      directions[1] = false;
      directions[2] = false;
      directions[3] = false;
      resetp = 0;
    }
    Scatter(ghost, 18, 6, 0, 0, animations, directions);
  }
}

function BlueMovement(ghost, animations, directions) {
  //We will make the Blue Ghost to do the same thing as the Pink Ghost, but instead on the other side of the map
  //Scatter path is from 22|0 to 40|6
  if (Math.abs(pacman.currentPositionX - ghost.currentPositionX) + Math.abs(pacman.currentPositionY - ghost.currentPositionY) < 15) {
    if (Math.abs(pacman_positionX - ghost.currentPositionX) < Math.abs(pacman_positionY - ghost.currentPositionY)) {
      BestMove(ghost, "x", pacman_positionX, pacman_positionY, ghost.currentPositionX, ghost.currentPositionY, animations);
    } else {
      BestMove(ghost, "y", pacman_positionY, pacman_positionX, ghost.currentPositionY, ghost.currentPositionX, animations);
    }
    resetb = 1;
  } else {
    if (resetb == 1) {
      ghost.currentPositionX = 22;
      ghost.currentPositionY = 0;
      ghost.character.style.top = 90 + "px";
      ghost.character.style.left = 130 + "px";
      directions[0] = false;
      directions[1] = false;
      directions[2] = false;
      directions[3] = false;
      resetb = 0;
    }
    Scatter(ghost, 40, 6, 0, 22, animations, directions);
  }
}

var random_number = 1;
var global_available_sides = [];
var available_sides = [];

function OrangeMovement(ghost, animations, random_number) {
  //The orange ghost moves very randomly so the logic we will be using is 
  //if the ghost is not 8 tiles or less away from pacman, he is going to move at a direction and
  //if there is another path available to go, he is going to automatically choose it and start moving there.

  if (Math.abs(pacman.currentPositionX - ghost.currentPositionX) + Math.abs(pacman.currentPositionY - ghost.currentPositionY) < 8) {
    if (Math.abs(pacman_positionX - ghost.currentPositionX) < Math.abs(pacman_positionY - ghost.currentPositionY)) {
      BestMove(ghost, "x", pacman_positionX, pacman_positionY, ghost.currentPositionX, ghost.currentPositionY, animations);
    } else {
      BestMove(ghost, "y", pacman_positionY, pacman_positionX, ghost.currentPositionY, ghost.currentPositionX, animations);
    }
  } else {
    var left_pass = false;
    var right_pass = false;
    var up_pass = false;
    var down_pass = false;
    available_sides = [];
    if (ghost.currentPositionY != 45) {
      if (tiles_array[ghost.currentPositionX][ghost.currentPositionY + 1].isWall == 0) {
        available_sides.push("down");
        down_pass = true;
      }
    }
    if (ghost.currentPositionY != 0) {
      if (tiles_array[ghost.currentPositionX][ghost.currentPositionY - 1].isWall == 0) {
        available_sides.push("up");
        up_pass = true;
      }
    }
    if (ghost.currentPositionX != 40) {
      if (tiles_array[ghost.currentPositionX + 1][ghost.currentPositionY].isWall == 0) {
        available_sides.push("right");
        right_pass = true;
      }
    }
    if (ghost.currentPositionX != 0) {
      if (tiles_array[ghost.currentPositionX - 1][ghost.currentPositionY].isWall == 0) {
        available_sides.push("left");
        left_pass = true;
      }
    }

    console.log(random_number);
    if (global_available_sides[random_number] === "left") {
      if (left_pass) {
        ghost.character.style.left = parseInt(ghost.character.style.left) - ghost.speed + "px";
        ghost.currentPositionX -= 1;
        ghost.character.classList.replace(ghost.character.classList[0], animations[0]);
      }
    } else if (global_available_sides[random_number] === "right") {
      if (right_pass) {
        ghost.character.style.left = parseInt(ghost.character.style.left) + ghost.speed + "px";
        ghost.currentPositionX += 1;
        ghost.character.classList.replace(ghost.character.classList[0], animations[1]);
      }
    } else if (global_available_sides[random_number] === "up") {
      if (up_pass) {
        ghost.character.style.top = parseInt(ghost.character.style.top) - ghost.speed + "px";
        ghost.currentPositionY -= 1;
        ghost.character.classList.replace(ghost.character.classList[0], animations[2]);
      }
    } else if (global_available_sides[random_number] === "down") {
      if (down_pass) {
        ghost.character.style.top = parseInt(ghost.character.style.top) + ghost.speed + "px";
        ghost.currentPositionY += 1;
        ghost.character.classList.replace(ghost.character.classList[0], animations[3]);
      }
    }
  }
}

//Make PacMan move
var ongoing;
var animation;
pacman.character.classList.add('pacman_animation_left_1');
red.character.classList.add('red_left');
pink.character.classList.add('pink_right');
blue.character.classList.add('blue_right');
orange.character.classList.add('orange_right');


window.addEventListener("load", () => {
  pacman.character.style.position = "absolute";
  pacman.character.style.left = 120 + "px";
  pacman.character.style.top = 265 + "px";
  red.character.style.position = "absolute";
  red.character.style.left = 120 + "px";
  red.character.style.top = 170 + "px";
  pink.character.style.position = "absolute";
  pink.character.style.left = 104 + "px";
  pink.character.style.top = 194 + "px";
  blue.character.style.position = "absolute";
  blue.character.style.left = 120 + "px";
  blue.character.style.top = 194 + "px";
  orange.character.style.position = "absolute";
  orange.character.style.left = 135 + "px";
  orange.character.style.top = 194 + "px";
});



let helping_coordinates = document.getElementById("pacman_coordinates");
let score_id = document.getElementById("pacman_score");

function MovementLogic(movement) {
  ongoing = setInterval(() => {
    if (movement === "L") {
      if (pacman.currentPositionX != 0) {
        if (tiles_array[pacman.currentPositionX - 1][pacman.currentPositionY].isWall == 0) {
          pacman.character.style.left = parseInt(pacman.character.style.left) - pacman.speed + "px";
          pacman.currentPositionX -= 1;
          if (tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasCoin == 1) {
            pacman.score += 10;
            tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasCoin = 0;
          }
          if (tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasPowerUp == 1) {
            pacman.isPoweredUp = true;
            tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasPowerUp == 0;
            //Make timer in which Pacman is powered up and then make pacman.isPoweredUp false!!
          }
        }
        if (pacman.currentPositionX == 0 && pacman.currentPositionY == 21) {
          pacman.currentPositionX = 40;
          pacman.currentPositionY = 21;
          pacman.character.style.left = 220 + "px";
          pacman.character.style.top = 195 + "px";
        }
        pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_left_1');
        setTimeout(() => {
          pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_left_2')
        }, 150);

        score_id.innerHTML = "Score: " + pacman.score;
        helping_coordinates.innerHTML = pacman.currentPositionX + "|" + pacman.currentPositionY;
      }
    } else if (movement === "R") {
      if (pacman.currentPositionX != 40) {
        if (tiles_array[pacman.currentPositionX + 1][pacman.currentPositionY].isWall == 0) {
          pacman.character.style.left = parseInt(pacman.character.style.left) + pacman.speed + "px";
          pacman.currentPositionX += 1;
          if (tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasCoin == 1) {
            pacman.score += 10;
            tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasCoin = 0;
          }
          if (tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasPowerUp == 1) {
            pacman.isPoweredUp = true;
            tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasPowerUp == 0;
            //Make timer in which Pacman is powered up and then make pacman.isPoweredUp false!!
          }
        }
        if (pacman.currentPositionX == 40 && pacman.currentPositionY == 21) {
          pacman.currentPositionX = 0;
          pacman.currentPositionY = 21;
          pacman.character.style.left = 20 + "px";
          pacman.character.style.top = 195 + "px";
        }
        pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_right_1');
        setTimeout(() => {
          pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_right_2')
        }, 150);

        score_id.innerHTML = "Score: " + pacman.score;
        helping_coordinates.innerHTML = pacman.currentPositionX + "|" + pacman.currentPositionY;

      }
    } else if (movement === "U") {
      if (pacman.currentPositionY != 0) {
        if (tiles_array[pacman.currentPositionX][pacman.currentPositionY - 1].isWall == 0) {
          pacman.character.style.top = parseInt(pacman.character.style.top) - pacman.speed + "px";
          pacman.currentPositionY -= 1;
          if (tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasCoin == 1) {
            pacman.score += 10;
            tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasCoin = 0;
          }
          if (tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasPowerUp == 1) {
            pacman.isPoweredUp = true;
            tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasPowerUp == 0;
            //Make timer in which Pacman is powered up and then make pacman.isPoweredUp false!!
          }
        }
        pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_up_1');
        setTimeout(() => {
          pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_up_2')
        }, 150);

        score_id.innerHTML = "Score: " + pacman.score;
        helping_coordinates.innerHTML = pacman.currentPositionX + "|" + pacman.currentPositionY;

      }
    } else if (movement === "D") {
      if (pacman.currentPositionY != 45) {
        if (tiles_array[pacman.currentPositionX][pacman.currentPositionY + 1].isWall == 0) {
          pacman.character.style.top = parseInt(pacman.character.style.top) + pacman.speed + "px";
          pacman.currentPositionY += 1;
          if (tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasCoin == 1) {
            pacman.score += 10;
            tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasCoin = 0;
          }
          if (tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasPowerUp == 1) {
            pacman.isPoweredUp = true;
            tiles_array[pacman.currentPositionX][pacman.currentPositionY].hasPowerUp == 0;
            //Make timer in which Pacman is powered up and then make pacman.isPoweredUp false!!
          }
        }
        pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_down_1');
        setTimeout(() => {
          pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_down_2')
        }, 150);

        score_id.innerHTML = "Score: " + pacman.score;
        helping_coordinates.innerHTML = pacman.currentPositionX + "|" + pacman.currentPositionY;
      }
    }
  }, 100);
}

function Movement() {
  window.addEventListener("keyup", (pressed) => {
    var current_element = pacman.character.classList[0];
    switch (pressed.key) {
      case "ArrowLeft":
        clearInterval(ongoing);
        pacman.currentAnimation = pacman.character.classList.replace(current_element, 'pacman_animation_left_1');
        pacman.currentMovement = MovementLogic("L");
        break;

      case "ArrowRight":
        clearInterval(ongoing);
        pacman.currentAnimation = pacman.character.classList.replace(current_element, 'pacman_animation_right_1');
        pacman.currentMovement = MovementLogic("R");
        break;

      case "ArrowUp":
        clearInterval(ongoing);
        pacman.currentAnimation = pacman.character.classList.replace(current_element, 'pacman_animation_up_1');
        pacman.currentMovement = MovementLogic("U");
        break;

      case "ArrowDown":
        clearInterval(ongoing);
        pacman.currentAnimation = pacman.character.classList.replace(current_element, 'pacman_animation_down_1');
        pacman.currentMovement = MovementLogic("D");
        break;
    }
  });
}

CreateMap("right");
CreateMap("left");
MakeCoins();
AccessibleCoordinatesArray();
Movement();
var pink_pass = false;
var blue_pass = false;
var orange_pass = false;

var repeats = 0;

setInterval(() => {
  RedMovement(ghosts_array[0], red_animations);

  if (pink_pass) {
    PinkMovement(ghosts_array[1], pink_animations, pink_directions);
  }
  if (blue_pass) {
    BlueMovement(ghosts_array[2], blue_animations, blue_directions);
  }
  if (orange_pass) {
    if (repeats == 15) {
      global_available_sides = available_sides;
      random_number = randomNumber(0, global_available_sides.length);
      repeats = 0;
    }
    OrangeMovement(ghosts_array[3], orange_animations, random_number);
    repeats += 1;
  }
}, 150);