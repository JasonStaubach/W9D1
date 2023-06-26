import MovingObject from "./moving-object";
import * as Util from "./utils.js";

export default class Asteroid extends MovingObject{
    static RADIUS = 25;
    static COLOR = "#FF0000";
    constructor (options) {
        super(options["pos"])
        this.radius = Asteroid.RADIUS;
        this.color = Asteroid.COLOR;
        this.vec = Util.randomVec(10);
        this.pos = options["pos"];
    }
}