test( "timeElapsed should be Zero before we start the Timer", function() {
	equal( T.timerStarted, 0, true );
});

test( "startTimer() starts counting from *NOW* (when instructed)", function() {
    var startTime = new Date().getTime();
    equal( T.startTimer(startTime), startTime, true );
});