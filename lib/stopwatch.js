/*
var T = T || (function () { // If T (Timer) is not defined, create module

	var timeElapsed  = 0,
		timerStarted = 0;

    // Initialize the application
    var init = function () {
        console.log("Initialized!");
    };

    // Initialize the application
    var startTimer = function (startTime) {
    	timerStarted = startTime; // argument externally supplied
        console.log("startTime: "+startTime);
        return timerStarted;
    };

    var stopTimer = function (endTime) {
    	timeElapsed = endTime - timerStarted + timeElapsed;
    	console.log("timeElapsed: "+timeElapsed +" ms");
        return timeElapsed;
    };

    var resetTimer = function () {
    	timeElapsed = 0;
		timerStarted = 0;
		return timeElapsed;
    };
     
    // Return the public facing methods for the App
    return {
        init: init,
        timerStarted: timerStarted,
        startTimer: startTimer,
        stopTimer: stopTimer,
        timeElapsed: timeElapsed,
        resetTimer: resetTimer
    };
}());
 
T.init();
*/