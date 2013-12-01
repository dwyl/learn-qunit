test( "timeElapsed should be Zero before we start the Timer", function() {
	equal( T.timeStarted, 0, true );
});

test( "startTimer() starts counting from *NOW* (when instructed)", function() {
    var startTime = new Date().getTime();
    equal( T.startTimer(startTime), startTime, true );
});

test( "stopTimer() stops counting", function() {
    var startTime   = new Date().getTime(),
        endTime     = 0,
        timeElapsed = 0;
    equal( T.startTimer(startTime), startTime, true );
    endTime = startTime + 2000; // manually add 1 second
    timeElapsed = endTime - startTime;
    equal( T.stopTimer(endTime), timeElapsed, true );
});

test( "startTimer() should continue counting after stopTimer()", function() {
    T.resetTimer(); // reset (would prefer to do this in a beforeEach!)

    // part 1 - the first interval
    var startTime   = new Date().getTime(),
        endTime     = 0,
        timeElapsed = 0;
    equal( T.startTimer(startTime), startTime, true );
    endTime = startTime + 5000; // manually add 5 seconds
    // timeElapsed = endTime - startTime;
    equal( T.stopTimer(endTime), 5000, true );
    console.log("Pause timer ...")

    // part 2 - start the timer again
    startTime = new Date().getTime();
    equal( T.startTimer(startTime), startTime, true );
    // this time we are "measuring" 7 (seven) seconds
    endTime = startTime + 7000; // manually add 7 seconds
    // but when we stopTimer we expect to have counted a total of 12 sec
    // because we include the 5 sec from first interval and 7 sec from second.
    // timeElapsed = endTime - startTime + timeElapsed;
    equal( T.stopTimer(endTime), 12000, true );
});

test( "resetTimer() should reset to zero ready for a new activity", function() {
    var startTime   = new Date().getTime(),
        endTime     = 0,
        timeElapsed = T.resetTimer();
    equal( T.startTimer(startTime), startTime, true );
    endTime = startTime + 2000; // manually add 1 second
    timeElapsed = endTime - startTime;
    equal( T.stopTimer(endTime), timeElapsed, true );
    equal( T.resetTimer(), 0, true );
});
