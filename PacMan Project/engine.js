//Make Map
function Tile(iswall, hascoin, toppx, leftpx) {
  this.iswall = iswall;
  this.hascoin = hascoin;
}

var tiles_array = new Array(41);

for (var i = 0; i < tiles_array.length; i++) {
  tiles_array[i] = new Array(16);
}

for (var i = 0; i < 41; i++) {
  for (var j = 0; j < 46; j++) {
    const current = new Tile(
      iswall = 1,
      hascoin = 0,
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

  //Making Up and Down Movement
  for (var i = 0; i < 36; i++) {
    tiles_array[static_coordinates[1]][35 - i].iswall = 0;
  }
  for (var i = 0; i < 6; i++) {
    tiles_array[static_coordinates[4]][35 - i].iswall = 0;
    tiles_array[static_coordinates[2]][30 + i].iswall = 0;
    tiles_array[static_coordinates[3]][35 + i].iswall = 0;
    tiles_array[static_coordinates[1]][40 - i].iswall = 0;
    tiles_array[static_coordinates[2]][40 + i].iswall = 0;
    tiles_array[static_coordinates[4]][45 - i].iswall = 0;
  }
  for (var i = 0; i < 5; i++) {
    tiles_array[static_coordinates[5]][40 - i].iswall = 0;
  }

  //Making Left and Right Movement
  if (side === "right") {
    for (var i = 0; i < 13; i++) {
      tiles_array[static_coordinates[0] + i][35].iswall = 0;
    }
    for (var i = 0; i < 6; i++) {
      tiles_array[static_coordinates[3] - i][40].iswall = 0;
      tiles_array[static_coordinates[4] + i][40].iswall = 0;
    }
    for (var i = 0; i < 4; i++) {
      tiles_array[static_coordinates[2] - i][35].iswall = 0;
      tiles_array[static_coordinates[3] + i][40].iswall = 0;
    }
    for (var i = 0; i < 19; i++) {
      tiles_array[static_coordinates[4] + i][30].iswall = 0;
    }
    for (var i = 0; i < 21; i++) {
      tiles_array[static_coordinates[2] - i][45].iswall = 0;
    }
  }
  else{
    for (var i = 0; i < 13; i++) {
      tiles_array[static_coordinates[0] - i][35].iswall = 0;
    }
    for (var i = 0; i < 6; i++) {
      tiles_array[static_coordinates[3] + i][40].iswall = 0;
      tiles_array[static_coordinates[4] - i][40].iswall = 0;
    }
    for (var i = 0; i < 4; i++) {
      tiles_array[static_coordinates[2] + i][35].iswall = 0;
      tiles_array[static_coordinates[3] - i][40].iswall = 0;
    }
    for (var i = 0; i < 19; i++) {
      tiles_array[static_coordinates[4] - i][30].iswall = 0;
    }
    for (var i = 0; i < 21; i++) {
      tiles_array[static_coordinates[2] + i][45].iswall = 0;
    }
  }
}

//Make PacMan
function PacMan(speed, currentAnimation, currentPositionT, currentPositionL) {
  this.speed = speed;
  this.currentAnimation = currentAnimation;
  this.currentPositionL = currentPositionL;
  this.currentPositionT = currentPositionT;
}

const pacman = new PacMan(
  speed = 5,
  currentAnimation = document.getElementById("pacman_animation_right_1"),
  currentPositionL = 35,
  currentPositionT = 20
);

//Make PacMan animations

//Make PacMan move

window.addEventListener("load", () => {
  pacman.currentAnimation.style.position = "absolute";
  pacman.currentAnimation.style.left = 120 + "px";
  pacman.currentAnimation.style.top = 265 + "px";
});

let helping_coordinates = document.getElementById("pacman_coordinates");

function Movement() {
  window.addEventListener("keyup", (pressed) => {
    switch (pressed.key) {
      case "ArrowLeft":
        if (tiles_array[pacman.currentPositionL - 1][pacman.currentPositionT].iswall == 0) {
          pacman.currentAnimation.style.left = parseInt(pacman.currentAnimation.style.left) - pacman.speed + "px";
          pacman.currentPositionL -= 1;
        }
        helping_coordinates.innerHTML = pacman.currentPositionL + "|" + pacman.currentPositionT;
        break;

      case "ArrowRight":
        if (tiles_array[pacman.currentPositionL + 1][pacman.currentPositionT].iswall == 0) {
          pacman.currentAnimation.style.left = parseInt(pacman.currentAnimation.style.left) + pacman.speed + "px";
          pacman.currentPositionL += 1;
        }
        helping_coordinates.innerHTML = pacman.currentPositionL + "|" + pacman.currentPositionT;
        break;

      case "ArrowUp":
        if (tiles_array[pacman.currentPositionL][pacman.currentPositionT - 1].iswall == 0) {
          pacman.currentAnimation.style.top = parseInt(pacman.currentAnimation.style.top) - pacman.speed + "px";
          pacman.currentPositionT -= 1;
        }
        helping_coordinates.innerHTML = pacman.currentPositionL + "|" + pacman.currentPositionT;
        break;

      case "ArrowDown":
        if (tiles_array[pacman.currentPositionL][pacman.currentPositionT + 1].iswall == 0) {
          pacman.currentAnimation.style.top = parseInt(pacman.currentAnimation.style.top) + pacman.speed + "px";
          pacman.currentPositionT += 1;
        }
        helping_coordinates.innerHTML = pacman.currentPositionL + "|" + pacman.currentPositionT;
        break;
    }
  });
}

CreateMap("right");
CreateMap("left");
Movement();