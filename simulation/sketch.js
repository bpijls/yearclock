function Disc(radius, mappingRange) {
	this.radians = 0;
	this.markerRadius = 10;

	this.show = function () {		
		push();
		rotate(this.radians);
		translate(radius/2, 0);						
		fill(255,0,0);		
		ellipse(0, 0, this.markerRadius, this.markerRadius);
		pop();
	}

	this.rotate = function(unit){
		this.radians = map(unit, mappingRange[0], mappingRange[1], 0, 2*Math.PI);
	}
}

var disc = [];
var minutes = 0;
const MINUTES_PER_YEAR = 365*24*60;

function setup() {
	createCanvas(500,500);

	for (var iDisk=0; iDisk<24; iDisk++){
		radius = map(iDisk, 24, 0, 50, width);
		disc.push(new Disc(radius, [0, MINUTES_PER_YEAR/(iDisk+1)]));
	}
}

function draw() {
	background(0);
  	translate(width/2, height/2);
	disc.forEach(function(aDisc){aDisc.rotate(minutes);});
  	disc.forEach(function(aDisc){aDisc.show();});

  	minutes += 60;
}