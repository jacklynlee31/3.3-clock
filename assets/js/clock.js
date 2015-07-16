var nextOpacity = 0;

window.setInterval(function () {
	var currentTime = new Date ();
	var hours = currentTime.getHours ();
	var minutes = currentTime.getMinutes ();
	var seconds = currentTime.getSeconds ();

    var r = document.getElementById('radial-2');
    r.style.opacity = nextOpacity;

	if (nextOpacity == 1) {
		nextOpacity = 0;
	} else {
		nextOpacity = 1;
	}
}, 1000);

clock.innerHTML = padZeros(hours) + ':' + padZeros(minutes) + ':' + padZeros(seconds);

// var timeEL = document.getElementById('time');

// document.getElementById ("clock").innerHTML = "hours:minutes:seconds";

// var clockEl = document.getElementById("clock");


// 	var timeString = "hours:minutes:seconds" ;
// }
// then later do `clock.innerHTML = someVariable`l
//
// var x = "hour:minute:second"
// undefined
// x
// "hour:minute:second"

//add a 0 before single digit numbers

// function padZeros (num) {
//     if (num < ___) {
//         return '0' + ___;
//     }

//     return ___;
// }

