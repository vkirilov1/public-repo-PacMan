# public-repo-PacMan
A game like PacMan simple project!




Notes:
Важна Информация от условието!

1.This is described also later, but sometimes people oversee it. In this course
we implement PacMan cutting the spritesheet w/
CSS, not drawing it w/ canvas. Canvas is a more complex approach and draws too much attention
and effort, while we want to have a more balanced attention and effort
distributed among the different elements of the game.

2.In the same spirit we do not use CSS animations, but animate the PacMan w/
JavaScript using its different phases or costumes which can be found on the
spritesheet.

3. THE GAME LOOP

// GAME LOOP

// A CYCLE THAT GOES ON AND ON// HEARTBEAT
// The overall speed of the game.
// Nothing in the game can be faster than that.// STATE
// EVERY ACTOR SHOULD HAVE A STATE
// Birth. For example a bomb in Space Invaders.
// Where is the actor?
// Costume
// Actor heartbeat
// etc // READING THE KEYBOARD// DECISION (BRAIN)
// ONE BRAIN PER ACTOR
// What to do next?
// What is a collision? What happens? // EXECUTION
// Execute the decision of the Brain.

https://spicyyoghurt.com/tutorials/html5-javascript-game-development/create-a-proper-game-loop-with-requestanimationframe


4. Clean and easy to understand code
 
let lastPressedKey = undefined;

// This is easier to read...

lastPressedKey = e.code;

window.localStorage.setItem("lastPressedKey", lastPressedKey);

// ...than this

window.localStorage.setItem("lastPressedKey", e.code);

5. Useful links!
https://en.wikipedia.org/wiki/Texture_atlas
https://www.w3schools.com/html/default.asp
https://www.w3schools.com/css/default.asp
https://www.w3schools.com/js/default.asp
https://www.w3schools.com/html/html_css.asp
https://dahoum.wales/the-pacman-as-a-nursery-32ba07b282b1
