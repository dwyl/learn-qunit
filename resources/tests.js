test( "Timer startTime is Zero when first initialze the app", function() {
	equal( T.timerStarted, 0, true );
});

test( "Timer starts counting from *NOW* (when instructed)", function() {
	var startTime = new Date().getTime();
	equal( T.startTimer(startTime), startTime, true );
});

test( "Timer stops counting when stopTimer fires", function() {
	var startTime   = new Date().getTime(),
		endTime     = 0,
		timeElapsed = 0;
	equal( T.startTimer(startTime), startTime, true );
	endTime = startTime + 500; // manually add 500 miliseconds
	timeElapsed = endTime - startTime;
	equal( T.stopTimer(endTime), timeElapsed, true );
});