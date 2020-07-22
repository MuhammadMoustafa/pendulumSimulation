class Trajectory{
    scale = 4000
    constructor(){
        this.points = []
        
    }

    show(){
        stroke(100, 100, 100)
        noFill();
        beginShape();
        this.points.forEach( p => {
            vertex(p.x * scale, p.y * scale);
        });
        endShape();

        stroke(100, 125, 255);
        strokeWeight(6)
        ellipse(this.aVel * this.scale, this.aAcc * this.scale, 10, 10);

    }

    
}