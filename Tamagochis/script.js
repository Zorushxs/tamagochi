let hunger;
let bore;
let fatigue;
let liveStatus = true
let color = ""
const idHungerProgressBar = "#hungerBar";
const idBoreProgressBar = "#boreBar";
const idFatigueProgressBar = "#fatigueBar";
const idEatButton = "#eatButton";
const idPlayButton = "#playButton";
const idSleepButton = "#sleepButton";
const bars = [idHungerProgressBar, idFatigueProgressBar, idBoreProgressBar];

const MAX_STATS = 100
const MIN_STATS = 0

window.onload = function () {
    start()
}

function start() {
    hunger = 85;
    fatigue = 78;
    bore = 65;
    $(bars[0]).css("width", hunger + "%")
    $(bars[1]).css("width", fatigue + "%")
    $(bars[2]).css("width", bore + "%")
    $(bars[0]).css("color", updateColorFeelingBar0(hunger))
    $(bars[1]).css("color", updateColorFeelingBar1(fatigue))
    $(bars[2]).css("color", updateColorFeelingBar2(bore))
}

function statsMaxMin() {
    if (hunger < MIN_STATS) {
        hunger = MIN_STATS;
    } else if (hunger > MAX_STATS) {
        hunger = MAX_STATS
    }
    if (fatigue < MIN_STATS) {
        fatigue = MIN_STATS
    } else if (fatigue > MAX_STATS) {
        fatigue = MAX_STATS
    }
    if (bore < MIN_STATS) {
        bore = MIN_STATS
    } else if (bore > MAX_STATS) {
        bore = MAX_STATS
    }
    if (hunger == MAX_STATS) {
        liveStatus = false
        console.log("Me has matado cabrón")
        Swal.fire(
            'Good job!',
            'You killed me!',
            'success'
        )
    }
    if (fatigue == MAX_STATS) {
        liveStatus = false
        console.log("Me has matado cabrón " + liveStatus)
        Swal.fire(
            'Good job!',
            'You killed me!',
            'success'
        )
    }
}

function eat() {
    if (liveStatus == true) {
        hunger -= 5;
        bore += 1;
        fatigue += 2;
        statsMaxMin()
    } else {
        console.log("The bug is dead.");
    }
}

function sleep() {
    if (liveStatus == true) {
        hunger += 1.5;
        bore += 1;
        fatigue -= 5.5;
        statsMaxMin()
    } else {
        console.log("The bug is dead.");
    }
}

function play() {
    if (liveStatus == true) {
        hunger += 4.5;
        bore -= 6;
        fatigue += 3.5;
        statsMaxMin()
    } else {
        console.log("The bug is dead.");
    }
}
/*
function isAlive() {
    let liveStatus = true;
    if (hunger >= MAX_STATS || fatigue >= MAX_STATS) {
        liveStatus = false;
    }
    return liveStatus;
}*/

///////////////////////////////////////////////// UPDATING BARS /////////////////////////////////////////////////////
function updateState() {
    let feelings = [hunger, fatigue, bore];
    updateWidthFeelingBar(feelings);
    updateColorFeelingBar0(feelings[0])
    updateColorFeelingBar1(feelings[1])
    updateColorFeelingBar2(feelings[2])
}

/* ANTES TENIA SENTIDO PARA HACER PORCENTUAL EL VALOR
function getCurrentFeelingStat(valueFeeling) {
    let percentage = (parseInt(valueFeeling) * 100) / MAX_STATS;
    return percentage;
}*/

function updateWidthFeelingBar(widthFeelings) {
    if (liveStatus == true) {
        for (let i = 0; i < widthFeelings.length; i++) {
            console.log("bars[i]: " + bars[i] + " currentFeelingStat: " + widthFeelings[i]);
            $(bars[i]).css("width", widthFeelings[i] + "%");
        }
    } else {
        for (let i = 0; i < widthFeelings.length; i++) {
            $(bars[i]).css("width", MIN_STATS + "%");
        }
    }
}

function updateColorFeelingBar0(colorFeelings) {
    if ((0 <= colorFeelings) && (colorFeelings < 15)) {
        color = "rgb(235, 46, 46)"
    } else if ((15 <= colorFeelings) && (colorFeelings < 35)) {
        color = "rgb(235, 90, 46)"
    } else if ((35 <= colorFeelings) && (colorFeelings < 40)) {
        color = "rgb(232, 235, 46)"
    } else if ((40 <= colorFeelings) && (colorFeelings < 50)) {
        color = "rgb(46, 235, 56)"
    } else if ((50 <= colorFeelings) && (colorFeelings < 65)) {
        color = "rgb(46, 235, 56)"
    } else if ((65 <= colorFeelings) && (colorFeelings < 80)) {
        color = "rgb(232, 235, 46)"
    } else if ((80 <= colorFeelings) && (colorFeelings < 91)) {
        color = "rgb(235, 90, 46)"
    } else if ((80 <= colorFeelings) && (colorFeelings <= 100)) {
        color = "rgb(235, 46, 46)"
    }
    $(bars[0]).css("background-color", color);
}

function updateColorFeelingBar1(colorFeelings) {
    if ((0 <= colorFeelings) && (colorFeelings < 15)) {
        color = "rgb(46, 235, 178)"
    } else if ((15 <= colorFeelings) && (colorFeelings < 35)) {
        color = "rgb(46, 235, 131)"
    } else if ((35 <= colorFeelings) && (colorFeelings < 40)) {
        color = "rgb(52, 235, 46)"
    } else if ((40 <= colorFeelings) && (colorFeelings < 50)) {
        color = "rgb(163, 235, 46)"
    } else if ((50 <= colorFeelings) && (colorFeelings < 65)) {
        color = "rgb(235, 185, 46)"
    } else if ((65 <= colorFeelings) && (colorFeelings < 80)) {
        color = "rgb(235, 131, 46)"
    } else if ((80 <= colorFeelings) && (colorFeelings < 91)) {
        color = "rgb(235, 90, 46)"
    } else if ((80 <= colorFeelings) && (colorFeelings <= 100)) {
        color = "rgb(235, 46, 46)"
    }
    $(bars[1]).css("background-color", color);
}

function updateColorFeelingBar2(colorFeelings) {
    if ((0 <= colorFeelings) && (colorFeelings < 15)) {
        color = "rgb(46, 235, 178)"
    } else if ((15 <= colorFeelings) && (colorFeelings < 35)) {
        color = "rgb(46, 235, 131)"
    } else if ((35 <= colorFeelings) && (colorFeelings < 40)) {
        color = "rgb(52, 235, 46)"
    } else if ((40 <= colorFeelings) && (colorFeelings < 50)) {
        color = "rgb(163, 235, 46)"
    } else if ((50 <= colorFeelings) && (colorFeelings < 65)) {
        color = "rgb(235, 185, 46)"
    } else if ((65 <= colorFeelings) && (colorFeelings < 80)) {
        color = "rgb(235, 131, 46)"
    } else if ((80 <= colorFeelings) && (colorFeelings < 91)) {
        color = "rgb(235, 90, 46)"
    } else if ((80 <= colorFeelings) && (colorFeelings <= 100)) {
        color = "rgb(235, 46, 46)"
    }
    $(bars[2]).css("background-color", color);
}

/* COLORES ANTIGUOS
function updateColorFeelingBar(feelings) {
    for (let i = 0; i < feelings.length; i++) {
        let color = "";
        switch (feelings[i]) {
            case 10: color = "red"; break;
            case 20: color = "yellow"; break;
            case 30: color = "orange"; break;
            case 40: color = "blue"; break;
            case 50: color = "green"; break;
        }
        $(bars[i]).css("background-color", color);
    }
}*/



/////////////////////////////////////////// FUNCTIONS TO PROVE HOW IT WORKS ON CONSOLE /////////////////////////////////////
function showState() {
    console.log("Hambre: " + hunger);
    console.log("Fatigue: " + fatigue);
    console.log("Bore: " + bore);
}



//////////////////////////////////////////// JQUERY FUNCTIONS, EVENTS LISTENER ///////////////////////////////////
$(document).ready(function () {
    $(idPlayButton).click(function () {
        play();
        updateState()
    });

    $(idSleepButton).click(function () {
        sleep();
        updateState()
    });

    $(idEatButton).click(function () {
        eat();
        updateState()
    });
});

$(document).ready(function(){
    if(window.innerWidth < 768){
        $('#playButton').addClass('btn-sm');
        $('#eatButton').addClass('btn-sm');
        $('#sleepButton').addClass('btn-sm');
        $('#playButton').removeClass('btn-lg');
        $('#eatButton').removeClass('btn-lg');
        $('#sleepButton').removeClass('btn-lg');
    }
});



//ESTA ES LA BUENA PARA HACER LA ADAPTACIÓN DEBOTONES!!!!!! 24/02/2022
$(window).resize(function(){
    if(window.innerWidth < 768){
        $('#playButton').addClass('btn-sm');
        $('#eatButton').addClass('btn-sm');
        $('#sleepButton').addClass('btn-sm');
        $('#playButton').removeClass('btn-lg');
        $('#eatButton').removeClass('btn-lg');
        $('#sleepButton').removeClass('btn-lg');
    }
});

$(window).resize(function(){
    if(window.innerWidth > 768){
        $('#playButton').addClass('btn-lg');
        $('#eatButton').addClass('btn-lg');
        $('#sleepButton').addClass('btn-lg');
        $('#playButton').removeClass('btn-sm');
        $('#eatButton').removeClass('btn-sm');
        $('#sleepButton').removeClass('btn-sm');
    }
});

function hourglass() {
  $("#reloj").innerHTML = "&#xf251;";
  setTimeout(function () {
    $("#reloj").innerHTML = "&#xf252;";
    }, 1000);
  setTimeout(function () {
    $("#reloj").innerHTML = "&#xf253;";
    }, 2000);
}
hourglass();
setInterval(hourglass, 3000);




/////////////////////////////////////////////timer implementation ////////////////////////////////////////////

function tictac(){
    if(liveStatus = true){
        hunger += 2;
        bore += 1.5;
        fatigue += 0.5;
        statsMaxMin()
    } else {
        console.log("The bug is dead.")
    }
    updateState();
}


const myInterval = setInterval('tictac()', 7000); 


