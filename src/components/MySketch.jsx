import React from 'react';
import Sketch from 'react-p5';
import './MySketch.scss';

const MySketch = () => {
    const setup = (p5, canvasParentRef) => {
        // Make canvas responsive
        const canvasWidth = Math.min(600, window.innerWidth * 0.9);
        const canvasHeight = Math.min(600, window.innerHeight * 0.6);
        p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    };

    const draw = (p5) => {
        // Create a dark background with subtle gradient effect
        p5.background(18, 18, 18);

        // Add grid pattern
        p5.stroke(0, 255, 64, 30);
        p5.strokeWeight(1);
        for (let i = 0; i < p5.width; i += 20) {
            p5.line(i, 0, i, p5.height);
        }
        for (let j = 0; j < p5.height; j += 20) {
            p5.line(0, j, p5.width, j);
        }

        // Main interactive element
        p5.noStroke();

        // Create glowing effect
        for (let r = 60; r > 0; r -= 10) {
            p5.fill(0, 255, 64, 255 - r * 3);
            p5.ellipse(p5.mouseX, p5.mouseY, r, r);
        }

        // Center bright circle
        p5.fill(0, 255, 64);
        p5.ellipse(p5.mouseX, p5.mouseY, 20, 20);

        // Add trailing effect
        p5.stroke(0, 255, 64, 100);
        p5.strokeWeight(2);
        p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
    };

    const windowResized = (p5) => {
        const canvasWidth = Math.min(600, window.innerWidth * 0.9);
        const canvasHeight = Math.min(600, window.innerHeight * 0.6);
        p5.resizeCanvas(canvasWidth, canvasHeight);
    };

    return (
        <div className="sketch-container">
            <div className="sketch-wrapper">
                <h3 className="sketch-title">Interactive Canvas</h3>
                <p className="sketch-description">Move your mouse to create glowing trails</p>
                <div className="canvas-container">
                    <Sketch
                        setup={setup}
                        draw={draw}
                        windowResized={windowResized}
                    />
                </div>
            </div>
        </div>
    );
};

export default MySketch;