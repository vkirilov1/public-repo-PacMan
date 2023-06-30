//Make PacMan

/*function pacMan(speed, currentAnimation) {
    this.speed = speed;
    this.currentAnimation = currentAnimation;
}*/

let pacman = document.getElementById("pacman_animation_right_1");

//Make PacMan animations

//Make PacMan move
let movementSpeed = 5;

window.addEventListener("load", () => {
  pacman.style.position = "absolute";
  pacman.style.left = 120 + "px";
  pacman.style.top = 380 + "px";
});

window.addEventListener("keyup", (pressed) => {
  switch (pressed.key) {
    case "ArrowLeft":
      pacman.style.left = parseInt(pacman.style.left) - movementSpeed + "px";
      if (parseInt(pacman.style.left) < 20) {
        pacman.style.left = 20 + "px";
      }
      if (
        parseInt(pacman.style.left) == 20 &&
        parseInt(pacman.style.top) == 305
      ) {
        pacman.style.left = 215 + "px";
        pacman.style.top = 305 + "px";
      }
      break;
    case "ArrowRight":
      pacman.style.left = parseInt(pacman.style.left) + movementSpeed + "px";
      if (parseInt(pacman.style.left) > 215) {
        pacman.style.left = 215 + "px";
      }
      if (
        parseInt(pacman.style.left) == 215 &&
        parseInt(pacman.style.top) == 305
      ) {
        pacman.style.left = 20 + "px";
        pacman.style.top = 305 + "px";
      }
      break;
    case "ArrowUp":
      pacman.style.top = parseInt(pacman.style.top) - movementSpeed + "px";
      if (parseInt(pacman.style.top) < 205) {
        pacman.style.top = 205 + "px";
      }
      break;
    case "ArrowDown":
      pacman.style.top = parseInt(pacman.style.top) + movementSpeed + "px";
      if (parseInt(pacman.style.top) > 425) {
        pacman.style.top = 425 + "px";
      }
      break;
  }
});
