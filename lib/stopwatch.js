var T = (function () { // Create T (Timer) module 
    'use strict';

    var timeElapsed  = 0, // number of miliseconds since timerStarted
        timerStarted = 0; // timestamp when timer was started

    // allow external access to private variables & methods by returning them:
    return {
        timerStarted: timerStarted,
        timeElapsed: timeElapsed
    };
}());