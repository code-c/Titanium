/* ColoredElectron.js
author: Codie Cottrell
*/
import * as PIXI from "pixi.js";

let initX, initY;
let time = 0;
let color = 0xffffff;

export default class Electron extends PIXI.Graphics {
    constructor(x = 0, y = 0, orbitRadius = 10, startRadian=0, speed=1, radius=5) {
        // like PIXI.texture.from to create sprite from texture
        //work with it set values
        super();
        this.centerY = y; //k
        this.centerX = x; //h
        this.radius = radius;
        this.orbitRadius = orbitRadius;
        this.radian = startRadian;
        this.xLower = (this.centerX - this.radius); // the start of the diameter
        this.xHigher = (this.centerX + this.radius); // the end of the diameter
        this.y = this.centerY; // 0 starting point
        this.x = this.xHigher;
        // this.anchor.set(0.5, 0.5)
        // this.scale.x = 1;
        // this.scale.y = 1;

        this.speed = speed;
        
    }

    draw(){
        this.beginFill(color);
        this.drawCircle(this.centerX, this.centerY, this.radius);
        this.endFill();
    }

    reset() {
        this.y = this.centerY + this.radius;
        this.x = this.centerX + this.radius;
    }

    move() {
        this.x = this.centerX + (this.orbitRadius * Math.cos(this.radian));
        this.y = this.centerY + (this.orbitRadius * Math.sin(this.radian));
        this.radian += 0.01*(this.speed);
    }

    changeColor() {
        color = 0x00ff00;
    }
}