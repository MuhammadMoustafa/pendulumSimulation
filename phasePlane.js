class PhasePlane {

    constructor(origin) {
        this.origin = origin;
    }


    show() {
        stroke(255);
        strokeWeight(6);
        push();
        translate(this.origin);
        line(-500, 0, 500, 0); // x axis
        line(0, -200, 0, 200); // y axis
        ellipse(p.aVel * 20000, p.aAcc * 20000, 10, 10);
        console.log(p.aVel * 20000, p.aAcc * 20000);
        pop();
    }
}