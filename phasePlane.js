class PhasePlane {

    constructor(origin) {
        this.origin = origin;
        this.diag = [];
        this.stablePoints = [];
        this.scale = 1000;
    }


    show() {
        stroke(255);
        strokeWeight(6);
        push();
        translate(this.origin);
        line(-500, 0, 500, 0); // x axis
        line(0, -200, 0, 200); // y axis

        let elem = {
            vel: p.aVel,
            acc: p.aAcc
        };
        this.diag.push(elem);
        noFill();

        beginShape();
        this.diag.forEach(element => {
            vertex(element.vel * this.scale, element.acc * this.scale);
        });
        endShape()

        stroke(100, 125, 255);
        ellipse(elem.vel * this.scale, elem.acc * this.scale, 10, 10);


        if (abs(elem.vel) < 0.01 && abs(elem.acc) < 0.01) {
            console.log("eeeeeeeeeeeeeeeeeeeeeh");
            this.stablePoints.push(elem);
        } else {
            console.log(abs(elem.vel), abs(elem.acc), abs(sin(p.angle)));
        }

        stroke(255, 125, 100);
        this.stablePoints.forEach(element => {
            point(element.vel * this.scale, element.acc * this.scale);
        })
        pop();
    }
}