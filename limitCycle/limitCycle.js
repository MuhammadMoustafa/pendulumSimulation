class LimitCycle {
 
    constructor(initial) {

        this.x1 = initial.x;
        this.x2 = initial.y;
        console.log(this.x2);
        /*
        this.pendRadius = 50;
        this.g = -10;
    
        this.origin = origin;
        this.radius = radius;
        this.bob = createVector(origin.x, radius);
        this.angle = angle;
        this.mass = mass;
        this.fricCoeff = fricCoeff;
        */
        this.rStroke = random(255);
        this.gStroke = random(255);
        this.bStroke = random(255);
        this.trajectory = [];
        this.initial = initial;//createVector(this.origin.x + this.radius * sin(this.angle), this.origin.y + this.radius * cos(this.angle));
        this.trajectory.push(this.initial);
    }
    /*
    show() {
        stroke(255);
        strokeWeight(3);
        fill(255)
        line(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
        ellipse(this.bob.x, this.bob.y, this.pendRadius, this.pendRadius);
    }
    */
    go() {
        this.update();
        //this.show();
    }

    update() {
        //this.bob.x = this.origin.x + this.radius * sin(this.angle);
        //this.bob.y = this.origin.y + this.radius * cos(this.angle);
        let e = 0.12;

        this.x1 += this.x2
        this.x2 = this.x2 -this.x1 + e*(1 - this.x1**2)*this.x2
        //this.x1 += this.x2/e;
        //this.x2 = this.x2 - e*(this.x1-this.x2+this.x2**3/3);

        if(abs(this.x1) < 0.001 && abs(this.x2) < 0.001) {
            return;
        } else {
            this.trajectory.push(createVector(this.x1, this.x2));
        }
    }

    showTrajectory(){

    }
}