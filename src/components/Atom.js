/* atom.js
author: Codie Cottrell
*/
import Electron from "./Electron.js";
import CElectron from "./ColoredElectron";
import { Loader, resources } from "pixi.js";

let electrons = [];

export default class Atom {
    constructor(x = 0, y = 0, maxRadius = 100, speed = .100) {
        // parameters
        this.centerX = x; //h
        this.centerY = y; //k
        this.maxRadius = maxRadius;
        this.radius = 20;
        this.speed = speed;
        this.rings = 4;
    }

    move() {
        electrons.forEach(electron => electron.move());
    }

    loadRings(stage, images) {

        let numElectrons = 2;

        const radiusScale = this.maxRadius/this.rings;
        const speedScale = 1/(2 * this.rings);

        for(let qn=0; qn<this.rings; qn++){
            let direction = 1;
            console.log("first loop:", this.radius)

            // weird maths
            numElectrons = 2*Math.pow(qn,2);

            if(qn%2){
                direction = direction * -1;
            }

            this.loadElectrons(stage, images, numElectrons, (direction * this.speed));
            this.radius += radiusScale;
            this.speed += speedScale;
        }
    }

    loadElectrons(stage, images, numElectrons, speed){

        const spacing = (2*Math.PI)/numElectrons;
        let initialRadian = 0;

        for(let i = 0; i < numElectrons; i++) {
            // create new electron
            let newElectron = new Electron(this.centerX, this.centerY, this.radius , initialRadian, speed);
            // add the electron to the valance shells
            electrons.push(newElectron);
            // add electron to stage
            stage.addChild(newElectron);
            // add spacing to start radian for next electron
            initialRadian += spacing;
            console.log("second loop:", this.radius)
        }
    }
}