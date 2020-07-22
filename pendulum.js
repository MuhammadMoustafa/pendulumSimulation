class Pendulum {
 

    constructor(origin, radius, angle = PI/4, mass = 10, fricCoeff = 50000) {

        this.aAcc = 0;
        this.aVel = 0;
        this.pendRadius = 50;
        this.g = -10;
    
        this.origin = origin;
        this.radius = radius;
        this.bob = createVector(origin.x, radius);
        this.angle = angle;
        this.mass = mass;
        this.fricCoeff = fricCoeff;

        this.rStroke = random(255);
        this.gStroke = random(255);
        this.bStroke = random(255);
        this.trajectory = [];

        this.initial = createVector(this.origin.x + this.radius * sin(this.angle), this.origin.y + this.radius * cos(this.angle));
    }

    show() {
        stroke(255);
        strokeWeight(3);
        fill(255)
        line(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
        ellipse(this.bob.x, this.bob.y, this.pendRadius, this.pendRadius);
    }

    go() {
        this.update();
        this.show();
    }

    update() {
        this.bob.x = this.origin.x + this.radius * sin(this.angle);
        this.bob.y = this.origin.y + this.radius * cos(this.angle);
        this.aAcc = -this.fricCoeff / (this.mass * this.radius ** 2) * this.aVel + this.g * sin(this.angle) / this.radius;
        this.aVel += this.aAcc;
        this.angle += this.aVel;
        if(abs(this.aVel) < 0.001 && abs(this.aAcc) < 0.001) {
            return;
        } else {
            this.trajectory.push(createVector(this.aVel, this.aAcc));
        }
        
    }

    showTrajectory(){

    }
}