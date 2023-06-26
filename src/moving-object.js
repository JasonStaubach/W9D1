export default class MovingObject{
    constructor (options) {
        this.pos = options["pos"];
        this.vel = options["vel"];
        this.radius = options["radius"];
        this.color = options["color"];
    }
    
    draw = function (context = null){
        const canvas = document.getElementById("game-canvas");
        canvas.height = 500;
        canvas.width = 500;
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.arc(this.pos[0],this.pos[1],this.radius, 0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
        console.log("hi");
    }

    move = function (){
        this.pos[0] = this.pos[0] + this.vel[0]
        this.pos[1] = this.pos[1] + this.vel[1]
    }
}

