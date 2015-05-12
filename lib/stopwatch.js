var T = (function () { // If T (Timer) is not defined, create module

    var timeElapsed = 0,
        timeStarted = 0,
        timerInterval;

    // Initialize the application
    var startTimer = function (startTime) {
        timeStarted = startTime || timeStarted || new Date().getTime();
        console.log("startTime: "+startTime);
        $('#go').hide();
        $('#clear').hide()
        $('#stop').show();
        timing();
        return timeStarted;
    };

    var stopTimer = function (endTime) {
        timeElapsed = endTime - timeStarted + timeElapsed;
        console.log("timeElapsed: "+timeElapsed +" ms");
        clearInterval(timerInterval);
        $('#stop').hide();
        $('#go').show();
        $('#clear').show();
        return timeElapsed;
    };

    var resetTimer = function () {
        timeElapsed = 0;
        timeStarted = 0;
        $('#timer').html('00:00:00:00'); // reset to zero
        $('#clear').hide(); // don't need this anymore
        return timeElapsed;
    };

    var timing = function() {
      timerInterval = setInterval(function(){
        renderTimer();
      },20)
    }

    function renderTimer() {
      // initilized all local variables:
      var hours='00', minutes='00', miliseconds=0, seconds='00',
      time = '',
      timeNow = new Date().getTime(); // timestamp (miliseconds)

      var elapsed = timeNow - timeStarted;

      // milliseconds
      if(elapsed > 10) {
        miliseconds = Math.floor((elapsed % 1000) / 10);
        if(miliseconds < 10) {
          miliseconds = '0'+String(miliseconds);
        }
      }
      // seconds
      if(elapsed > 1000) {
        seconds = Math.floor(elapsed / 1000);
        if (seconds > 60) {
          seconds = seconds % 60;
        }
        if(seconds < 10) {
          seconds = '0'+String(seconds);
        }
      }

      // minutes
      if(elapsed > 60000) {
        minutes = Math.floor(elapsed/60000);
        if (minutes > 60) {
          minutes = minutes % 60;
        }
        if(minutes < 10) {
          minutes = '0'+String(minutes);
        }
      }

      // hours
      if(elapsed > 3600000) {
        hours = Math.floor(elapsed/3600000);
        if(hours < 10) {
          hours = '0'+String(hours);
        }
      }

      time  =  hours   + ':'
      time += minutes + ':'
      time += seconds + ':'
      time += miliseconds;

      $('#timer').html(time); // update the UI
      return time;
    }

    // Return (export) the public facing methods for the App
    return {
        timeStarted : timeStarted,
        timeElapsed : timeElapsed,
        startTimer  : startTimer,
        stopTimer   : stopTimer,
        resetTimer  : resetTimer,
        renderTimer : renderTimer,
        timing      : timing
    };
}());
