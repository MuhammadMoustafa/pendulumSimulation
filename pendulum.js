class Pendulum {

    constructor(origin, radius) {

        this.origin = origin;
        this.radius = radius;
        this.bob = createVector(origin.x, radius);
        this.angle = PI / 4;
        this.pendRadius = 50;
        this.aAcc = 0;
        this.aVel = 0;
        this.g = -10;
        this.mass = 500;
        this.fricCoeff = 10000;
    }

    show() {
        stroke(255);
        strokeWeight(3);
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
    }

    dragged(x, y) {
        this.aVel = 0;
        this.aAcc = 0;
        this.angle = PI / 2 - this.origin.angleBetween(createVector(x - this.origin.x, this.origin.y - y));
        this.radius = dist(this.origin.x, this.origin.y, x, y);
        fill(100)
        stroke(150);
    }
}