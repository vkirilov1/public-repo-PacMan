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

//Make PacMan
function PacMan(speed, character, currentMovement, currentPositionT, currentPositionL, isPoweredUp, score) {
  this.speed = speed;
  this.character = character;
  this.currentMovement = currentMovement;
  this.currentPositionL = currentPositionL;
  this.currentPositionT = currentPositionT;
  this.isPoweredUp = isPoweredUp;
  this.score = score;
}

const pacman = new PacMan(
  speed = 5,
  character = document.getElementById("pacman"),
  //Make findMovement("L") later
  currentMovement = FindMovement("I"),
  currentPositionL = 35,
  currentPositionT = 20,
  isPoweredUp = false,
  score = 0
);

//Make PacMan move
var ongoing;
var animation;
pacman.character.classList.add('pacman_animation_left_1');

window.addEventListener("load", () => {
  pacman.character.style.position = "absolute";
  pacman.character.style.left = 120 + "px";
  pacman.character.style.top = 265 + "px";
});

let helping_coordinates = document.getElementById("pacman_coordinates");
let score_id = document.getElementById("pacman_score");

function FindMovement(movement) {
  ongoing = setInterval(() => {
    if (movement === "L") {
      if (pacman.currentPositionL != 0) {
        if (tiles_array[pacman.currentPositionL - 1][pacman.currentPositionT].isWall == 0) {
          pacman.character.style.left = parseInt(pacman.character.style.left) - pacman.speed + "px";
          pacman.currentPositionL -= 1;
          if (tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasCoin == 1) {
            pacman.score += 10;
            tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasCoin = 0;
          }
          if (tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasPowerUp == 1) {
            pacman.isPoweredUp = true;
            tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasPowerUp == 0;
            //Make timer in which Pacman is powered up and then make pacman.isPoweredUp false!!
          }
        }
        if (pacman.currentPositionL == 0 && pacman.currentPositionT == 21) {
          pacman.currentPositionL = 40;
          pacman.currentPositionT = 21;
          pacman.character.style.left = 220 + "px";
          pacman.character.style.top = 195 + "px";
        }
        pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_left_1');
        setTimeout(() => {
          pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_left_2')
        }, 150);

        score_id.innerHTML = "Score: " + pacman.score;
        helping_coordinates.innerHTML = pacman.currentPositionT + "|" + pacman.currentPositionL;
      }
    } else if (movement === "R") {
      if (pacman.currentPositionL != 40) {
        if (tiles_array[pacman.currentPositionL + 1][pacman.currentPositionT].isWall == 0) {
          pacman.character.style.left = parseInt(pacman.character.style.left) + pacman.speed + "px";
          pacman.currentPositionL += 1;
          if (tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasCoin == 1) {
            pacman.score += 10;
            tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasCoin = 0;
          }
          if (tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasPowerUp == 1) {
            pacman.isPoweredUp = true;
            tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasPowerUp == 0;
            //Make timer in which Pacman is powered up and then make pacman.isPoweredUp false!!
          }
        }
        if (pacman.currentPositionL == 40 && pacman.currentPositionT == 21) {
          pacman.currentPositionL = 0;
          pacman.currentPositionT = 21;
          pacman.character.style.left = 20 + "px";
          pacman.character.style.top = 195 + "px";
        }
        pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_right_1');
        setTimeout(() => {
          pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_right_2')
        }, 150);

        score_id.innerHTML = "Score: " + pacman.score;
        helping_coordinates.innerHTML = pacman.currentPositionT + "|" + pacman.currentPositionL;

      }
    } else if (movement === "U") {
      if (pacman.currentPositionT != 0) {
        if (tiles_array[pacman.currentPositionL][pacman.currentPositionT - 1].isWall == 0) {
          pacman.character.style.top = parseInt(pacman.character.style.top) - pacman.speed + "px";
          pacman.currentPositionT -= 1;
          if (tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasCoin == 1) {
            pacman.score += 10;
            tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasCoin = 0;
          }
          if (tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasPowerUp == 1) {
            pacman.isPoweredUp = true;
            tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasPowerUp == 0;
            //Make timer in which Pacman is powered up and then make pacman.isPoweredUp false!!
          }
        }
        pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_up_1');
        setTimeout(() => {
          pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_up_2')
        }, 150);

        score_id.innerHTML = "Score: " + pacman.score;
        helping_coordinates.innerHTML = pacman.currentPositionT + "|" + pacman.currentPositionL;

      }
    } else if (movement === "D") {
      if (pacman.currentPositionT != 45) {
        if (tiles_array[pacman.currentPositionL][pacman.currentPositionT + 1].isWall == 0) {
          pacman.character.style.top = parseInt(pacman.character.style.top) + pacman.speed + "px";
          pacman.currentPositionT += 1;
          if (tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasCoin == 1) {
            pacman.score += 10;
            tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasCoin = 0;
          }
          if (tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasPowerUp == 1) {
            pacman.isPoweredUp = true;
            tiles_array[pacman.currentPositionL][pacman.currentPositionT].hasPowerUp == 0;
            //Make timer in which Pacman is powered up and then make pacman.isPoweredUp false!!
          }
        }
        pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_down_1');
        setTimeout(() => {
          pacman.character.classList.replace(pacman.character.classList[0], 'pacman_animation_down_2')
        }, 150);

        score_id.innerHTML = "Score: " + pacman.score;
        helping_coordinates.innerHTML = pacman.currentPositionT + "|" + pacman.currentPositionL;
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
        pacman.currentMovement = FindMovement("L");
        break;

      case "ArrowRight":
        clearInterval(ongoing);
        pacman.currentAnimation = pacman.character.classList.replace(current_element, 'pacman_animation_right_1');
        pacman.currentMovement = FindMovement("R");
        break;

      case "ArrowUp":
        clearInterval(ongoing);
        pacman.currentAnimation = pacman.character.classList.replace(current_element, 'pacman_animation_up_1');
        pacman.currentMovement = FindMovement("U");
        break;

      case "ArrowDown":
        clearInterval(ongoing);
        pacman.currentAnimation = pacman.character.classList.replace(current_element, 'pacman_animation_down_1');
        pacman.currentMovement = FindMovement("D");
        break;
    }
  });
}

CreateMap("right");
CreateMap("left");
MakeCoins();
Movement();