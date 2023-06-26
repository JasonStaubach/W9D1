import Asteroid from "./asteroid.js";

class Game{
    static DIM_X = 1000;
    static DIM_Y = 1000;
    static NUM_ASTEROIDS = 8;
    constructor () {
        const asteroids = [];
        this.addAsteroids();
    }
    addAsteroids = function(){
        for(let i = 0; i < Game.NUM_ASTEROIDS; i++){
            let aster = new Asteroid({pos: Game.randomPosition()})
            asteroids.push(aster)
            console.log(aster);
        }
    }


}
Game.prototype.randomPosition = function(){
    let y = Math.floor(Math.random * Game.DIM_Y);
    let x = Math.floor(Math.random * Game.DIM_X);

    return [x,y];
}

Game.prototype.draw(ctx){
    const canvas = document.getElementById("myCanvas");
    canvas.height = Game.DIM_X;
    canvas.width = Game.DIM_Y;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    //ctx.fillRect(10,10,150,100);
}