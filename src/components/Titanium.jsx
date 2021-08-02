import React from 'react';
import * as PIXI from "pixi.js";

// Sprite Classes
import Atom from './Atom.js';
import CElectron from "./ColoredElectron";

import C from "./images/appImages/c.png";
import chrome from "./images/appImages/chrome.png";
import clion from "./images/appImages/clion.png";
import firefox from "./images/appImages/Firefox.png";


//style

// the render component
export default class Render extends React.Component {

    //using componenet did mount for PIXI game loop
    componentDidMount() {

        // calculate pixel width needed
        const pxWidth = window.innerWidth;
        const pxHeight = 400;
       
        // PIXI renderer and settings
        const renderer = PIXI.autoDetectRenderer({
            antialias: true,
            autoDensity: true,
            resolution: window.devicePixelRatio || 1,
            width: pxWidth,
            height: pxHeight,
            // transparent: true
        });
        
        // declare variables being used regularly
        let stage;
        let atom;
        let keys = {};
        let images = [];

        // append to the body
        // use this to place to whatever div you want it in
        document.getElementById("Titanium").appendChild(renderer.view);

        // listen for taps
        // window.addEventListener('touchstart', startTouch);
        // window.addEventListener('touchmove', touchMove);
        // window.addEventListener('touchend', cancelTouch);
        
        //create the PIXI loader
        // normally we would use the loader like this however i dont want to
        const loader = new PIXI.Loader();
        // loader.add("Clang",C);
        images.push("./images/appImages/c.png");
        images.push("./images/appImages/chrome.png");
        // images.push(clion);
        // images.push(firefox);

        
        // add resources to the loader to use later
        // loader.add();

        // on the load of the loader do the following
        loader.load((_, resources) => {
            //set stage
            stage = new PIXI.Container();

            // create and load players to stage
            loadAtom();
        
            // Setup rendering loop
            PIXI.Ticker.shared.add(() => renderer.render(stage));
            PIXI.Ticker.shared.add(loop);
        });

        // function startTouch(touchEvent) {
        //     // get the coordinates of the game div
        //     var rect = document.getElementById("Runner").getBoundingClientRect();
        //     // get the touch location
        //     const currentTouch = touchEvent.touches[0].screenY;
        //     // check of touch is in the element on top or bottom and store relavent move
        //     if ((currentTouch > rect.top) && (currentTouch < (rect.top + pxHeight/2))) {
        //         touches.down = false;
        //         touches.up = true;
        //     } else if ((currentTouch > (rect.top + pxHeight/2)) && (currentTouch < rect.bottom)) {
        //         touches.down = true;
        //         touches.up = false;
        //     }    
        // }

        // function cancelTouch() {
        //     touches.up = false;
        //     touches.down = false;
        // }

        // function touchMove(touchEvent) {
        //     touchEvent.preventDefault();
        // }


        function loop() {
            atom.move();
        }

        function loadAtom() {
            //store local variables based on current w/h
            const pxW = renderer.screen.width;
            const pxH = renderer.screen.height;
            const maxRadius = 150;
            const speed = .001;

            atom = new Atom(pxW/2, pxH/2, maxRadius, speed);

            atom.loadRings(stage, images);
        }
    };

    render() {
        return (
            <div>
            </div>
        )
    }
}