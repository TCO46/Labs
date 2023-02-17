var startBtn1 = document.getElementById("start1")
var stopBtn1 = document.getElementById("stop1")
var pauseBtn1 = document.getElementById("pause1")

var startBtn2 = document.getElementById("start2")
var stopBtn2 = document.getElementById("stop2")
var pauseBtn2 = document.getElementById("pause2")

var startBtn3 = document.getElementById("start3")
var stopBtn3 = document.getElementById("stop3")
var pauseBtn3 = document.getElementById("pause3")

var startBtn4 = document.getElementById("start4")
var stopBtn4 = document.getElementById("stop4")
var pauseBtn4 = document.getElementById("pause4")

var startBtn5 = document.getElementById("start5")
var stopBtn5 = document.getElementById("stop5")
var pauseBtn5 = document.getElementById("pause5")

var stopAll = document.getElementById("stopAll")
var startAll = document.getElementById("startAll")

var Interval1;
var Interval2;
var Interval3;
var Interval4;
var Interval5;

stopAll.onclick = () => {
    clearInterval(Interval1);
    clearInterval(Interval2);
    clearInterval(Interval3);
    clearInterval(Interval4);
    clearInterval(Interval5);
    let s = 0;
    let m = 0;
    document.getElementById("seconds1").innerHTML = "0" + s;
    document.getElementById("minutes1").innerHTML = "0" + m;

    document.getElementById("seconds2").innerHTML = "0" + s;
    document.getElementById("minutes2").innerHTML = "0" + m;

    document.getElementById("seconds3").innerHTML = "0" + s;
    document.getElementById("minutes3").innerHTML = "0" + m;

    document.getElementById("seconds4").innerHTML = "0" + s;
    document.getElementById("minutes4").innerHTML = "0" + m;

    document.getElementById("seconds5").innerHTML = "0" + s;
    document.getElementById("minutes5").innerHTML = "0" + m;
}

startAll.onclick = () => {
    clearInterval(Interval1);
    clearInterval(Interval2);
    clearInterval(Interval3);
    clearInterval(Interval4);
    clearInterval(Interval5);

    Interval1 = setInterval(function() {
        startTimer("seconds1", "minutes1");
    }, 1000);

    Interval2 = setInterval(function() {
        startTimer("seconds2", "minutes2");
    }, 1000);

    Interval3 = setInterval(function() {
        startTimer("seconds3", "minutes3");
    }, 1000);

    Interval4 = setInterval(function() {
        startTimer("seconds4", "minutes4");
    }, 1000);

    Interval5 = setInterval(function() {
        startTimer("seconds5", "minutes5");
    }, 1000);
}

// Timer 1
startBtn1.onclick = () => {
    clearInterval(Interval1);
    Interval1 = setInterval(function() {
        startTimer("seconds1", "minutes1");
    }, 1000);
}

stopBtn1.onclick = () => {
    clearInterval(Interval1);
    let s = 0;
    let m = 0;
    document.getElementById("seconds1").innerHTML = "0" + s;
    document.getElementById("minutes1").innerHTML = "0" + m;
}

pauseBtn1.onclick = () => {
    clearInterval(Interval1);
}

// Timer 2
startBtn2.onclick = () => {
    clearInterval(Interval2);
    Interval2 = setInterval(function() {
        startTimer("seconds2", "minutes2");
    }, 1000);
}

stopBtn2.onclick = () => {
    clearInterval(Interval2);
    let s = 0;
    let m = 0;
    document.getElementById("seconds2").innerHTML = "0" + s;
    document.getElementById("minutes2").innerHTML = "0" + m;
}

pauseBtn2.onclick = () => {
    clearInterval(Interval2);
}

//Timer 3
startBtn3.onclick = () => {
    clearInterval(Interval3)
    Interval3 = setInterval(function() { startTimer("seconds3", "minutes3") }, 1000)
}

stopBtn3.onclick = () => {
    clearInterval(Interval3)
    let s = 0
    let m = 0
    document.getElementById("seconds3").innerHTML = "0" + s;
    document.getElementById("minutes3").innerHTML = "0" + m;
}

pauseBtn3.onclick = () => {
    clearInterval(Interval3)
}

//Timer 4
startBtn4.onclick = () => {
    clearInterval(Interval4)
    Interval4 = setInterval(function() { startTimer("seconds4", "minutes4") }, 1000)
}

stopBtn4.onclick = () => {
    clearInterval(Interval4)
    let s = 0
    let m = 0
    document.getElementById("seconds4").innerHTML = "0" + s;
    document.getElementById("minutes4").innerHTML = "0" + m;
}

pauseBtn4.onclick = () => {
    clearInterval(Interval4)
}

//Timer 5
startBtn5.onclick = () => {
    clearInterval(Interval5)
    Interval5 = setInterval(function() { startTimer("seconds5", "minutes5") }, 1000)
}

stopBtn5.onclick = () => {
    clearInterval(Interval5)
    let s = 0
    let m = 0
    document.getElementById("seconds5").innerHTML = "0" + s;
    document.getElementById("minutes5").innerHTML = "0" + m;
}

pauseBtn5.onclick = () => {
    clearInterval(Interval5)
}
function startTimer(id1, id2) {
    var secondsElement = document.getElementById(id1);
    var minutesElement = document.getElementById(id2);
    
    var functionS = parseInt(secondsElement.textContent);
    var functionM = parseInt(minutesElement.textContent);

    functionS++;

    if (functionS <= 9) {
        secondsElement.innerHTML = "0" + functionS;
    }

    if (functionS > 9) {
        secondsElement.innerHTML = functionS;
    }

    if (functionS > 59) {
        functionM++;
        minutesElement.innerHTML = "0" + functionM;

        functionS = 0;
        secondsElement.innerHTML = "0" + functionS;
    }

    if (functionM > 9) {
        minutesElement.innerHTML = functionM;
    }
}