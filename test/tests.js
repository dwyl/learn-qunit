test( "timeElapsed should be Zero before we start the Timer", function() {
    equal( T.timeStarted, 0);
});

test( "startTimer() starts counting from *NOW* (when instructed)", function() {
    var startTime = new Date().getTime();
    equal( T.startTimer(startTime), startTime);
});

test( "stopTimer() stops counting", function() {
    var startTime   = new Date().getTime(),
        endTime     = 0,
        timeElapsed = 0;
    equal( T.startTimer(startTime), startTime);
    endTime = startTime + 2000; // manually add 1 second
    timeElapsed = endTime - startTime;
    equal( T.stopTimer(endTime), timeElapsed);
});

test( "startTimer() should continue counting after stopTimer()", function() {
    T.resetTimer(); // reset (would prefer to do this in a beforeEach!)

    // part 1 - the first interval
    var startTime   = new Date().getTime(),
        endTime     = 0,
        timeElapsed = 0;
    equal( T.startTimer(startTime), startTime);
    endTime = startTime + 5000; // manually add 5 seconds
    // timeElapsed = endTime - startTime;
    equal( T.stopTimer(endTime), 5000);
    console.log("Pause timer ...");

    // part 2 - start the timer again
    startTime = new Date().getTime();
    equal( T.startTimer(startTime), startTime);
    // this time we are "measuring" 7 (seven) seconds
    endTime = startTime + 7000; // manually add 7 seconds
    // but when we stopTimer we expect to have counted a total of 12 sec
    // because we include the 5 sec from first interval and 7 sec from second.
    // timeElapsed = endTime - startTime + timeElapsed;
    equal( T.stopTimer(endTime), 12000);
});

test( "resetTimer() should reset to zero ready for a new activity", function() {
    var startTime   = new Date().getTime(),
        endTime     = 0,
        timeElapsed = T.resetTimer();
    equal( T.startTimer(startTime), startTime);
    endTime = startTime + 2000; // manually add 1 second
    timeElapsed = endTime - startTime;
    equal( T.stopTimer(endTime), timeElapsed);
    equal( T.resetTimer(), 0);
});

test( "renderTimer() displays time as a string of digits separated by colons", function() {
    //                      hours   minutes   seconds   miliseconds
    var dayInMilliseconds =  24   *   60    *   60    *   1000;
    // start the timer yesterday! :-o
    var startTime = new Date().getTime() - (dayInMilliseconds - 1000) ;
    // equal( T.startTimer(startTime), startTime);\
    T.resetTimer(); // reset before restart
    console.log('>>>>>>>' + startTime + ' | dayInMilliseconds: '+ dayInMilliseconds)
    console.log('>>>>>>>'+ new Date(startTime));
    T.startTimer(startTime); // init the start time
    equal( T.renderTimer(startTime), '23:59:59:00')
});

// display leading zeros for hours/seconds/minutes less than 10
test( "renderTimer() display leading zeros", function() {
    // simulate timer at 09:08:07:06 to exercise leading zeros
    var h = 60 * 60 * 1000 * 9; // 9 hours in milliseconds
    var m = 60 * 1000 * 8;      // 8 minutes
    var s = 1000 * 7;           // 7 seconds
    var leadingZeroStartTime = h + m + s + 6;
    // start the timer yesterday! :-o
    var startTime = new Date().getTime() - leadingZeroStartTime;
    T.startTimer(startTime);
    // equal( T.startTimer(startTime), startTime);
    equal( T.renderTimer(startTime), '09:08:07:00');
});

test("Start Timing() programatically", function(Q) {
    var startTime = new Date().getTime();
    Q.equal( T.startTimer(startTime), startTime);
    var done = Q.async();
    T.timing(); // start interval
    setTimeout(function() {
      ok( true, "timing done" );
      done();
    }, 100);
});
