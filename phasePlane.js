class PhasePlane {

    constructor(origin) {
        this.origin = origin;
        this.scale = 4000
    }

    show() {
        stroke(255);
        strokeWeight(4);
        push();
        
        translate(this.origin);
        line(-500, 0, 500, 0); // x axis
        line(0, -200, 0, 200); // y axis
        pop();
    }

    showTrajectories(pendulums){
        push();
        
        translate(this.origin);
        
        pendulums.forEach(pendul => {
            stroke(pendul.rStroke, pendul.gStroke, pendul.bStroke);
            strokeWeight(2)    
            noFill()
            beginShape();
            pendul.trajectory.forEach( point => {
                vertex(point.x * this.scale, point.y * this.scale);
            })
            endShape();
        });
        pop();
    }

    showCurrentPoint(p){
        push();
        translate(this.origin);
        stroke(100, 125, 255);
        strokeWeight(6)
        fill(255);
        ellipse(p.aVel * this.scale, p.aAcc * this.scale, 10, 10);
        pop()
    }

    showInitials(pendulums){
        pendulums.forEach(pendul => {
            stroke(pendul.rStroke, pendul.gStroke, pendul.bStroke);
            fill(pendul.rStroke, pendul.gStroke, pendul.bStroke)
            ellipse(pendul.initial.x, pendul.initial.y, 10, 10);
        });
    }
}