var T = (function () { // If T (Timer) is not defined, create module

    var timeElapsed = 0,
        timeStarted = 0;

    // Initialize the application
    var init = function () {
        console.log("Initialized!");
    };

    // Initialize the application
    var startTimer = function (startTime) {
        timeStarted = startTime; // argument externally supplied
        console.log("startTime: "+startTime);
        return timeStarted;
    };

    var stopTimer = function (endTime) {
        timeElapsed = endTime - timeStarted + timeElapsed;
        console.log("timeElapsed: "+timeElapsed +" ms");
        return timeElapsed;
    };

    var resetTimer = function () {
        timeElapsed = 0;
        timeStarted = 0;
        return timeElapsed;
    };
     
    // Return the public facing methods for the App
    return {
        init: init,
        timeStarted: timeStarted,
        timeElapsed: timeElapsed,
        startTimer: startTimer,
        stopTimer: stopTimer,
        resetTimer: resetTimer
    };
}());
