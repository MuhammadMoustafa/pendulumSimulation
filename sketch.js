function setup() {
	createCanvas(windowWidth, 900);

	this.currentPendulum = new Pendulum(createVector(width / 2, 0), 180)
	this.phasePlane = new PhasePlane(createVector(width / 2, 650));
	this.pendulums = [];
	this.pendulums.push(this.currentPendulum);
}

function draw() {
	background(0);
	
	this.phasePlane.showInitials(this.pendulums);
	this.phasePlane.show();
	this.phasePlane.showTrajectories(this.pendulums);
	this.currentPendulum.go();
	this.phasePlane.showCurrentPoint(this.currentPendulum);
	/*
	this.pendulums.forEach(pendulum => {
		pendulum.show();
	});
	*/
	//pp.show();
}


function mouseClicked() {
	let p = this.currentPendulum;
	p.aVel = 0;
	p.aAcc = 0;
	angle = PI / 2 - p.origin.angleBetween(createVector(mouseX - p.origin.x, p.origin.y - mouseY));
	radius = dist(p.origin.x, p.origin.y, mouseX, mouseY);
	this.currentPendulum = new Pendulum(p.origin, radius, angle);
	this.pendulums.push(this.currentPendulum);
}