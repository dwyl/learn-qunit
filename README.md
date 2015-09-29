![QUnit Logo](http://i.imgur.com/Y5YzoDu.png "QUnit Logo")  [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/docdis/learn-qunit/issues) [![Join the chat at https://gitter.im/docdis/javascript-best-practice](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/docdis/?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Learn QUnit Test Driven Development (TDD)
===========

A ***quick introduction*** to JavaScript unit ***testing with  QUnit.js*** for ***complete beginners***!

## *Just Started* Developing Web/Mobile Apps?

If you are *new* to Web/Mobile Application development,
its *easy* to *overlook* the (*many*) *benefits* of (*automated*) *testing* (*please* ***star***/*bookmark this page so you can come back to it later*) ... we still ***encourage everyone*** to ***learn about testing***
and have made every effort to keep this tutorial *accessible* to beginners (*simple code/examples*), but *acknowledge* this is ***a bit "theoretical"*** until
you have felt the ***pain*** of having an app "***breaking***" due to
***insufficient testing*** ...

## (*Chose Your Favourite*) Analogy

### Musicians Learn *Fundamental Skills* on their Instrument

Most of us have at least *attempted* to learn a musical instrument.
Learning Test Driven Development (TDD) is like learning/practicing "*scales*"
when learning to play a musical instrument.
It can seem like a "*waste of time*" to a ~~young~~ *novice musician* who *only*
wants to learn *enough* to play their favourite song, *but* by learning/practicing sequences of notes in quick succession, we are able to unlock a whole
other level of musical excellence.

[![Vanessa-Mae plays Toccata](http://i.imgur.com/yySHc8q.png)](https://youtu.be/Hg8Fa_EUQqY?t=1m24s "Vanessa-Mae plays Toccata - Click to Play")

*Persistence* pays *handsomly*. (*Automated*) *Testing* is one of the *fundamental skills* of *software development*.
*Embrace* it if you want to unlock the next level in your ***creativity***.

### Buildings Need a *Good Foundation*

Consider what it takes to build even a modest *physical* building.
Anything over a single level requires much consideration and planning.
If you are *lucky* enough to live in a country with *well established building
regulations* the following sight will be unfamiliar to you:

[![Building Collapse](http://i.imgur.com/rlGgewO.png)](https://youtu.be/tzGJs-uyaSY?t=18s "Building Collapse - Click to Watch")

When a building is constructed by inexperienced people,
they often "*forget*" to dig/lay a foundation.
This failure will only be visible months/years later (*usually after
  the cowboy builders have made off with the cash*).
(Automated) tests are the foundation of great software.
Competent civil engineers would not *dream* of constructing a building without
a foundation, as software engineers we should have the same approach.

[![Building in 6 Days](http://i.imgur.com/lFohP7J.jpg)](https://youtu.be/PNv13fY_3jY?t=1m28s "Building Construction Time Lapse - Click to Watch!")

The ***confidence*** that comes when building upon a solid foundation only arises if we ***put in the time*** to *first* ***dig a foundation***.

### Car Designers Have a *Testing Mindset*

*Thinking about* ***how*** you will ***test your solution*** to a problem, changes the way you *perceive* the problem. It might seem initially counter-intuitive to
think about the test *before* you have solved the problem, but we *urge* you to consider the perspective of a car designer:

![car designer crash test](http://i.imgur.com/NpJuu14.jpg)

We don't like thinking about car accidents (*they are brutal and often fatal!*)
but a *great* car designer will *always* consider the "*worst case scenario*"
for their vehicle and *design* with that eventuality in mind.

[![Lambo Crash and Burn](http://i.imgur.com/XcWqHxz.jpgg)](https://youtu.be/erxJcpTkhek?t=50s "Lambo Crash and Burn - Click to Watch!")

Sure, the fast convertible *looks nice*, but if you had to ***pick a car for your loved ones***, would it be sports car
or the [*Volvo*](https://www.youtube.com/watch?v=46Zdvwacxik)
with the dedicated team of life-saving expert engineers.

[![Volvo Crash Test](http://i.imgur.com/q1Z9NwO.png)](https://www.youtube.com/watch?v=uoENbWQFE_I "Volvo Crash Test - Click to Watch")

Put your [*lab coat*](https://github.com/nelsonic/nelsonic.github.io/issues/6) on
and *embrace* the ***discipline*** of proactively thinking about how to test your creations!

## Why?

Wether novice or experienced, (*automated*) testing is the foundation we need
to build great apps.

If you have already built a few apps and felt the ***pain*** of having to ***manually*** test (*and* ***re-test***)
in ***several browsers***, this screenshot will look like ***nirvana*** to you:  

![Test Swarm Results](http://i.imgur.com/A63wZaA.png "Test Swarm Results")

These are the **Continuous Integration** (CI) Tests for QUnit. <br />
Each time a commit is saved the entire suite of (*automated*) tests is run in
*all* modern browsers **automatically** to *confirm that everything still works
as expected*.


## What?

The *official* description on http://qunitjs.com/ is:

> QUnit is a **powerful**, ***easy-to-use*** JavaScript unit testing framework.  
> It's used by the jQuery, jQuery UI and jQuery Mobile projects <br />
> and is capable of testing ***any generic JavaScript*** code.

## Key Advantages of QUnit?

Our **Top Five** reasons you should learn QUnit are:

1. ***Shallow learning curve***. (*start testing in 5 mins*!)
2. ***See*** your tests in the ***Browser*** (*Nothing to Install or Configure!* *... also works in* ***Node.js*** *server code*!)
3. Great ***Documentation*** (*see **Useful Links** below*)
4. ***Well established*** and used extensively by JQuery developers (*so you know it* ***works everywhere***!)
5. Great ***Ecosystem***! (QMock, TestSwarm & Blanket.js -> *client-side code coverage*)

## How? ... Example Project: Stopwatch

We are going to build a **StopWatch** mini web application.  
This is what the end result looks like: (Try it!) https://qunit.herokuapp.com/?coverage=true

#### What Functionality Does Our Stopwatch Need?

- Counter should be at Zero when we start
- Start Counting time from a specific point
- Stop Counting
- Continue Counting (without resetting) pick up where we left off.
- Re-set the counter to Zero.

#### Folder/File Structure

- /**lib** contains the **stopwatch.js** module file
- /**test** contains the **tests.js** file with all our tests and
**index.html** which is our QUnit "test runner" html file.

**Note**: To facilitate *offline* learning I've included **qunit.js**
and **qunit.css** in the **/resources** directory,
but on a "real" project you should use the **CDN** versions
(see http://qunitjs.com/ *bottom* of the *homepage* for latest links.)



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
with ids of **quint** and **qunit-fixture** these are where QUnit will
display the results of our unit tests.

### Write A Unit Test

Unit tests in QUnit are insanely simple as you are about to see!

We expect a Timer/Stopwatch to be Zero before we start it.

![A stopwatch before start](https://raw.githubusercontent.com/nelsonic/nelsonic.github.io/master/img/Stopwatch-go.png "Stopwatch Zero")

(that's a lot of zeros! one would be enough.)

Lets write a test for that:
```javascript
test( "timeElapsed should be Zero before we start the Timer", function() {
  equal( T.timeElapsed, 0, 'Message: timer is zero at start' );
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
https://qunit.herokuapp.com/?coverage=true


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
- QUnit ***Asynchronous*** tests: https://api.qunitjs.com/async/

## FAQ

**Q**: Is QUnit *similar* to "*XYZ*" testing I heard was good...?  
*Yes*, most javascript testing frameworks are pretty similar. Most of the *reasons* (for learning QUnit) we described above are also applicable to Mocha, Jasmine, etc.  
We are not saying one test framework is "better" than the other.  
In the past 5 years we have made a point of using ***all*** the JavaScript testing frameworks we wrote a popular
[Mocha.js Tutorial](https://github.com/nelsonic/learn-mocha)
... we actually *suggest* you ***make time*** to ***learn a few***
JS testing frameworks and then *pick* the one that suits your needs!

## What's Next?

+ **SauceLabs Cross-Browser Testing**: https://github.com/docdis/learn-saucelabs
+ **PhantomJS** with QUnit: http://www.ianlewis.org/en/phantom-qunit-test-runner
