function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(10);
	this.phasePlane = new PhasePlane(createVector(width / 2, height/2));
	this.currentLimitCycle = new LimitCycle(createVector(0,0));
	this.limitCycles = [];
	this.limitCycles.push(this.currentLimitCycle);
}

function draw() {
	background(0);
	
	//this.phasePlane.showInitials(this.pendulums);
	this.phasePlane.show();
	this.phasePlane.showTrajectories(this.limitCycles);
	this.currentLimitCycle.go();
	this.phasePlane.showCurrentPoint(this.currentLimitCycle);
	/*
	this.pendulums.forEach(pendulum => {
		pendulum.show();
	});
	*/
	//pp.show();
}


function mouseClicked() {
	x1 = mouseX - this.phasePlane.origin.x;
	x2 = mouseY - this.phasePlane.origin.y;
	origin = createVector(x1/this.phasePlane.scale, x2/this.phasePlane.scale);
	this.currentLimitCycle = new LimitCycle(origin);
	this.limitCycles.push(this.currentLimitCycle);
	console.log(mouseY, this.phasePlane.origin.y, x2);
	//console.log(this.currentLimitCycle.trajectory);
}