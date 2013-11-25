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
	endTime = startTime + 1000; // manually add 1 second
	timeElapsed = endTime - startTime;
	equal( T.stopTimer(endTime), timeElapsed, true );
});

test( "Timer continues counting (picks up where left off)", function() {
	// part 1 - the first interval
	var startTime   = new Date().getTime(),
		endTime     = 0,
		timeElapsed = 0;
	equal( T.startTimer(startTime), startTime, true );
	endTime = startTime + 5000; // manually add 5 seconds
	timeElapsed = endTime - startTime;
	equal( T.stopTimer(endTime), timeElapsed, true );
	console.log("Pause timer...")
	// part 2 - second interval includes the 5 seconds from first interval!
	// by subtracting the previous interval's timeElapsed from the current
	// interval's startTime we are actually tricking the timer into starting
	// counting from 5 seconds in the past!
	startTime = new Date().getTime() - timeElapsed;
	equal( T.startTimer(startTime), startTime, true );
	// this time we are "measuring" 7 (seven) seconds
	endTime = startTime + 7000; // manually add 7 seconds
	// but when we stopTimer we expect to have counted a total of 12 sec
	// because we include the 5 sec from first interval and 7 sec from second.
	timeElapsed = endTime - startTime;
	console.log("timeElapsed: "+timeElapsed)
	equal( T.stopTimer(endTime), 12000, true );
});