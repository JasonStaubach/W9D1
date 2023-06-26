console.log("Webpack is working!");
import MovingObject from "./moving-object.js";
import Asteroid from "./asteroid.js";

window.MovingObject = MovingObject;

window.Asteroid = Asteroid;

window.Game = Game;

const Game = new Game()

// console.log(MovingObject([4,4],[10,10]))

//   window.mo;


//   console.log(mo);

const asty = new Asteroid({
    pos: [50,50]
});

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });

  console.log(asty);

  asty.draw();
// mo.draw();
//   console.log(mo.pos);
//   mo.move();
//   console.log(mo.pos);
//   mo.draw();