/* electron.js
author: Codie Cottrell
*/
import * as PIXI from "pixi.js";
import electronIMG from './images/electron.png';
import c from "./images/appImages/c.png";

let electron;

export default class Electron extends PIXI.Sprite {
    constructor(x = 0, y = 0, radius = 10, startRadian=0, speed=1) {
        // like PIXI.texture.from to create sprite from texture
        loadElectron();
        //work with it set values
        super(electron);
        this.centerY = y; //k
        this.centerX = x; //h
        this.radius = radius;
        this.radian = startRadian;
        this.xLower = (this.centerX - this.radius); // the start of the diameter
        this.xHigher = (this.centerX + this.radius); // the end of the diameter
        this.y = this.centerY; // 0 starting point
        this.x = this.xHigher;
        this.anchor.set(0.5, 0.5)
        this.scale.x = 1;
        this.scale.y = 1;

        this.speed = speed;
        
    }

    reset() {
        this.y = this.centerY + this.radius;
        this.x = this.centerX + this.radius;
    }

    move() {
        this.x = this.centerX + (this.radius * Math.cos(this.radian));
        this.y = this.centerY + (this.radius * Math.sin(this.radian));
        this.radian += 0.01*(this.speed);
    }
}

//set the image as the player
function loadElectron() {
    electron = new PIXI.Texture.from(electronIMG);
}