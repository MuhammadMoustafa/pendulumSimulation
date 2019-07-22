function setup() {
	createCanvas(windowWidth, 900);

	p = new Pendulum(createVector(width / 2, 0), 180)
	pp = new PhasePlane(createVector(width / 2, 650));
}

function draw() {
	background(0);
	p.go();
	pp.show();
}


function mouseDragged() {
	p.dragged(mouseX, mouseY);
}