learn-qunit
===========

A quick introduction to QUnit JavaScript Unit Testing.

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
to Mocha and Jasmine. <br />
I'm not advocating one testing framework over another.
I've used Mocha JS quit a bit in the past and wrote a 
[Learn Mocha tutorial](https://github.com/nelsonic/learn-mocha) 
and I used [Jasmine](http://pivotal.github.io/jasmine) *extensively* 
[@MakePositive](https://twitter.com/nelsonic/status/321304049263722496/photo/1)
... I actually *suggest* you ***make time*** to learn a *few* 
JS testing frameworks and then *pick* the one you like best!

## Start Here!

```sh
git clone https://github.com/nelsonic/learn-qunit.git
```

Open the **learn-quint** directory and have a look around.
The main file you need is the **index.html**
(this can be called *what-ever-you-like.html* as long as it includes 
necessary qunit.js files and **test.js** where the tests are. 
both these files are in the ./**resources** directory)


**Note**: To facilitate *offline* learning I've included **qunit.js** 
and **qunit.css** in the **/resources** directory, 
but on a "real" project you should use the **CDN** versions
(see http://qunitjs.com/ bottom of the homepage for details.)




## Useful Links


- QUnit **intro tutorial**: http://qunitjs.com/intro/
- QUnit on **GitHub**: https://github.com/jquery/qunit
- QUnit **API Docs**: http://api.qunitjs.com/category/all/
- QUnit **Cookbook** (plenty of *examples*!): http://qunitjs.com/cookbook/
- Blanket.js **Test Coverage**: http://blanketjs.org/
- JQuery's TestSwarm: http://swarm.jquery.org/

> **PhantomJS** with QUnit: http://www.ianlewis.org/en/phantom-qunit-test-runner