var S = S || (function () { // If S (Stopwatch) is not defined, create module

	var startTime = 0;

    // Initialize the application
    var init = function () {
        console.log("Initialized!")
    };
     
    // Return the public facing methods for the App
    return {
        init: init,
        startTime: startTime
    };
}());
 
S.init();