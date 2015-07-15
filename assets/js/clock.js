var timeEL = document.getElementById('time');

var nextOpacity = 0;

window.setInterval(function () {
	var d = new Date();
		d.getHours
		d.getMinutes
		d.getSeconds
    var r = document.getElementById('radial-2');
    r.style.opacity = nextOpacity;

	if (nextOpacity == 1) {
		nextOpacity = 0;
	} else {
		nextOpacity = 1;
	}
}, 1000);

