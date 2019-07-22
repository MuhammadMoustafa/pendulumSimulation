class Pendulum {

    constructor(origin, length) {

        this.origin = origin;
        this.length = length;
        this.bob = createVector(origin.x, length);
        this.angle = PI / 4;
        this.radius = 50;
        this.aAcc = 0;
        this.aVel = 0;
        this.g = -0.0001;
    }

    show() {
        stroke(255);
        strokeWeight(3);
        line(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
        ellipse(this.bob.x, this.bob.y, this.radius, this.radius);
    }

    go() {
        this.update();
        this.show();
    }

    update() {
        this.bob.x = this.origin.x + this.length * sin(this.angle);
        this.bob.y = this.origin.y + this.length * cos(this.angle);
        this.aAcc = this.g * sin(this.angle);
        this.aVel += this.aAcc;
        this.angle += this.aVel;
    }

    dragged(x, y) {
        this.aVel = 0;
        this.aAcc = 0;
        this.angle = PI / 2 - this.origin.angleBetween(createVector(x - this.origin.x, this.origin.y - y));
        fill(100)
        stroke(150);
    }
}