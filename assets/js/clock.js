var timeEL = document.getElementById('clock');
var nextOpacity = 0;

function padZeros (num) {
    if (num < 10) {
        return '0' + num;
    }

    return num;
}

window.setInterval(function () {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();

    var r = document.getElementById('radial-2');
    r.style.opacity = nextOpacity;

	if (nextOpacity == 1) {
		nextOpacity = 0;
	} else {
		nextOpacity = 1;
	}

	timeEL.innerHTML = padZeros(hours) + ':' + padZeros(minutes) + ':' + padZeros(seconds);
}, 1000);

// 	var timeString = "hours:minutes:seconds" ;
// }
// then later do `clock.innerHTML = someVariable`l
//
// var x = "hour:minute:second"
// undefined
// x
// "hour:minute:second"

//add a 0 before single digit numbers

