console.log("Webpack is working!");
import MovingObject from "./moving-object.js";

window.MovingObject = MovingObject;

// console.log(MovingObject([4,4],[10,10]))

//   window.mo;


//   console.log(mo);




const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });