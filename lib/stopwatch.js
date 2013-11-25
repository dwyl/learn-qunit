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

    var stopTimer = function (stopTime) {

    };
     
    // Return the public facing methods for the App
    return {
        init: init,
        timerStarted: timerStarted,
        startTimer: startTimer
    };
}());
 
T.init();