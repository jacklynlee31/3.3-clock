var timeEL = document.getElementById('time');

var nextOpacity = 0;

window.setInterval(function () {

document.getElementById ("clock").innerHTML = "hours:minutes:seconds";

var clockEl = document.getElementById ("clock");

function time(){
	var currentTime = new Date ();
	var hours = currentTime.getHours ();
	var minutes = currentTime.getMinutes ();
	var seconds = currentTime.getSeconds ();

	var timeString = "hours:minutes:seconds" ;


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

}
    var r = document.getElementById('radial-2');
    r.style.opacity = nextOpacity;

	if (nextOpacity == 1) {
		nextOpacity = 0;
	} else {
		nextOpacity = 1;
	}
}, 1000);

