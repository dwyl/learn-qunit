learn-qunit
===========

A quick introduction to QUnit JavaScript Unit Testing.

Try it: https://nelsonic.s3.amazonaws.com/learn-qunit/index.html?coverage=true

![QUnit Logo](http://i.imgur.com/Y5YzoDu.png "QUnit Logo")

## What is QUnit?

The *official* description on http://qunitjs.com/ is:

> QUnit is a **powerful**, ***easy-to-use*** JavaScript unit testing framework.
> It's used by the jQuery, jQuery UI and jQuery Mobile projects <br />
> and is capable of testing any **generic** JavaScript code.

## Why Should I Learn (How to Use) QUnit?

My **Top Five** reasons you should learn QUnit are:

1. ***Shallow learning curve***. (*start testing in 5 mins*!)
2. ***Browser Based*** so there's ***Nothing to Install*** or *Configure*! 
3. Great ***Documentation*** (see **Useful Links** below)
4. ***Well established*** and used extensively by JQuery developers.
5. Great ***Ecosystem***! (QMock, TestSwarm & Blanket.js -> *code coverage*)

If you have ever had to test (and re-test) a web site/app 
(*[ad nauseam](http://en.wikipedia.org/wiki/Ad_nauseam)*)
in *several* browsers, <br />
this screenshot will look like ***nirvana*** to you:
![Test Swarm Results for QUnit](http://i.imgur.com/A63wZaA.png "Test Swarm Results")
These are the **Continuous Integration** (CI) Tests for QUnit. <br />
Each time a comit is saved the entire suite of (*automated*) tests is run in
*all* modern browsers **autmatically**!

*Yes*, most of these *reasons* (for learning QUnit) are also applicable 
to and Jasmine. <br />
I'm not advocating one testing framework over another.
I've used Mocha JS quite a bit in the past and wrote a 
[Learn Mocha tutorial](https://github.com/nelsonic/learn-mocha) 
and I used [Jasmine](http://pivotal.github.io/jasmine) *extensively* 
[@MakePositive](https://twitter.com/nelsonic/status/321304049263722496/photo/1)
... I actually *suggest* you ***make time*** to learn a *few* 
JS testing frameworks and then *pick* the one you like best!

## Start Here!

```sh
git clone https://github.com/nelsonic/learn-qunit.git
```

Open the **learn-qunit** directory and have a look around.
The main file you need to inspect is ./test/**index.html**:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Learn QUnit</title>
  <link rel="stylesheet" href="resources/qunit.css">
</head>
<body>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
  <script src="resources/qunit.js"></script>
  <script src="test/tests.js"></script>
</body>
</html>
```

(it references two JavaScript files **qunit.js** which is in the ./**resources** directory and **test.js** 
which is in the ./**test** directory)

In the *body* of the **index.html** file there are two div elements 
with ids of **qunit** and **qunit-fixture** these are where QUnit will
display the results of our unit tests.

## Example Project: Stopwatch

In a previous tutorial I built a simple stopwatch:
https://github.com/nelsonic/stopwatch but its *deliberately* "minimalist" 
(did *not* have tests and all code was contained in a single html file)
*This* time we are going to do it the "*right*" way, then you can compare.

#### What Functionality Does Our Stopwatch Need?

- Counter should be at Zero when we start
- Start Counting time from a specific point
- Stop Counting
- Continue Counting (without resetting) pick up where we left off.
- Re-set the counter to Zero.

#### Folder/File Structure

- ./**lib** contains the **stopwatch.js** module file
- ./**test** contains the **tests.js** file with all our tests and 
**index.html** which is our QUnit "test runner" html file.

**Note**: To facilitate *offline* learning I've included **qunit.js** 
and **qunit.css** in the **/resources** directory, 
but on a "real" project you should use the **CDN** versions
(see http://qunitjs.com/ *bottom* of the *homepage* for latest links.)

### Write A Unit Test

Unit tests in QUnit are insanely simple as you are about to see!

We expect a Timer/Stopwatch to be Zero before we start it.
![A stopwatch before start](https://raw.github.com/nelsonic/stopwatch/master/screenshots/Stopwatch-go.png "Stopwatch Zero")
(that's a lot of zeros! one would be enough.)

Lets write a test for that:
```javascript
test( "timeElapsed should be Zero before we start the Timer", function() {
  equal( T.timeElapsed, 0, true );
});
```

We pass what we're looking to test in as the first parameter to the _equal_ assertion and our **expected** result in as the second parameter.
This test assumes we have a **T** (Timer) Module.
The T module should have a variable called **timerStarted**
which should be 0 (zero) before we start the timer.

For more tests see: ./test/**tests.js** 

### Watch Unit Tests FAIL

Run the tests by opening **index.html**.
Our first fail is because we do not have a variable called "T":
!["QUnit Test Fails no T"](http://i.imgur.com/U0STEpL.png "Qunit fails no T variable")


### Write Code to PASS the Unit Test

First we create the T (Timer) Module and our two main variables 
**timeElapsed** and **timeStarted

```javascript
var T = (function () { // create a basic module ("IIFE") for our Timer
    'use strict';

    var timeElapsed  = 0, // number of miliseconds since timerStarted
        timeStarted = 0; // timestamp when timer was started

    // allow external access to private variables & methods by returning them:
    return {
        timeStarted: timeStarted,
        timeElapsed: timeElapsed
    };
}());
```
If this "*wrapped*" JavaScript function looks strange to you, 
read this: <br />
http://en.wikipedia.org/wiki/Immediately-invoked_function_expression

Now our first unit test **passes**:

![First Unit Test Passes](http://i.imgur.com/VxVbS0o.png "Test Passes")

### Repeat the TDD Process

The next unit test we need to write is to start our timer:

```javascript
test( "startTimer() starts counting from *NOW* (when instructed)", function() {
    var startTime = new Date().getTime();
    equal( T.startTimer(startTime), startTime, true );
});
```
All this does is checks the timer started when we asked it to.

![Second Test Failing](http://i.imgur.com/OFqGeff.png "Second Test Failing")


#### Write *Just* Enough Code to Pass this Test

```javascript
// Initialize the application
var startTimer = function (startTime) {
    timerStarted = startTime; // argument externally supplied
    console.log("startTime: "+startTime);
    return timerStarted;
};
```

That does *just* enough to pass the test.
![Second QUnit Test Passing](http://i.imgur.com/WHJtGpU.png "Second Test Pass")

### [Rinse Repeat](http://www.urbandictionary.com/define.php?term=rinse%20repeat)

Once you have your process nailed:

- Write a test and watch it fail
- Write *just* enough code to pass the test 
(without breaking any other test that was already passing!)

You can go through all the requirements for the stopwatch and *grow* your
application one feature at a time.


![All QUnit Tests Passing](http://i.imgur.com/dG4zLXH.png "All Tests Passing")

Once you have a full batch of passing tests you can relase the app!

## Bonus Level: Blanket.js (Test Coverage)

Following the Blanket.js 
[Getting Started Guide](https://github.com/alex-seville/blanket/blob/master/docs/getting_started_browser.md)

1. (Download and) Add **blanket.js** file to ./resources
2. Referecent **blanket.js** script in index.html (our test runner) *below* qunit.
3. Add the **data-cover** atribute to the `<script>` we are testing `<script src="lib/stopwatch.js" data-cover></script>`
4. Re-run the test runner (refresh the index.html page)
5. Enable coverage checkbox and refresh again.

You should now see the test coverage for the project!

![Blanket Test Coverage 100%](http://i.imgur.com/c2ZsOi4.png "100% Test Coverage")

**Note**: for some reason this was giving an **error** in **Google Chrome**...
This appears to be a *known issue*: 
http://stackoverflow.com/questions/14481029/how-to-stop-global-failures-in-qunit  
I tried adding JQuery to index.html but still get the same error in Chrome.
Further investigation in the Chrome Developer Console reveals the following error detail:

- Cross origin requests are only supported for HTTP.
- Uncaught NetworkError: A network error occurred.  [**blanket.js:5317**]

This error is due to accessing index.html on *localhost*. When I put the files
on **S3** it works flawlessly in all browsers. 
http://nelsonic.s3.amazonaws.com/learn-qunit/index.html?coverage=true


## Useful Links


- QUnit **intro tutorial**: http://qunitjs.com/intro/
- QUnit on **GitHub**: https://github.com/jquery/qunit
- QUnit **API Docs**: http://api.qunitjs.com/category/all/
- QUnit **Cookbook** (plenty of *examples*!): http://qunitjs.com/cookbook/
- QUnit **Assertions** (other than ``equal()``): http://api.qunitjs.com/category/assert/
- Blanket.js **Test Coverage**: http://blanketjs.org/
- JQuery's TestSwarm: http://swarm.jquery.org/
- QUnit "**Before Each**" (workaround): http://stackoverflow.com/questions/1683416/how-do-i-run-a-function-before-each-test-when-using-qunit
- QUnit with Sinon (Backbone): http://addyosmani.com/blog/unit-testing-backbone-js-apps-with-qunit-and-sinonjs/

> **PhantomJS** with QUnit: http://www.ianlewis.org/en/phantom-qunit-test-runner
