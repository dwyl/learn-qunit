test( "Timer startTime is Zero when first initialze the app", function() {
	equal( T.timerStarted, 0, true );
});

test( "Timer starts counting from *NOW* (when instructed)", function() {
	var startTime = new Date().getTime();
	equal( T.startTimer(startTime), startTime, true );
});

test( "Timer starts counting from *NOW* (when instructed)", function() {
	var startTime = new Date().getTime();
	equal( T.startTimer(startTime), startTime, true );
	equal( T.startTimer(startTime), startTime, true );
});