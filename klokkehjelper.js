//modifisert utgave av klokken på w3schools.com
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90

var userMin = 0;
var userHrs = 12;
var minWord;
var hrsWord;

var minDigit;
var hrsDigitAM;
var hrsDigitPM;

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.lineWidth = radius*0.03;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var hour = userHrs;
    var minute = userMin;
    var second = 0;
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.05);
    //second
    //second=(second*Math.PI/30);
    //drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

drawClock();
minWithWords();
hrsWithWords();

timeWithWords();
digitalAM();
digitalPM();

function timeWithWords() {
	document.getElementById("time-with-words").innerHTML = minWord + " " + hrsWord;
}

function digitalAM() {
	document.getElementById("digital-am").innerHTML = hrsDigitAM + ":" + minDigit;
}

function digitalPM() {
	document.getElementById("digital-pm").innerHTML = hrsDigitPM + ":" + minDigit;
}

function addMin() {
	userMin = userMin + 5;
	minBounds();
	hourBounds();
	drawClock();
	minWithWords();
	hrsWithWords();
	timeWithWords();
	digitalAM();
	digitalPM();
}

function addQuarter() {
	userMin = userMin + 15;
	minBounds();
	hourBounds();
	drawClock();
	minWithWords();
	hrsWithWords();
	timeWithWords();
	digitalAM();
	digitalPM();
}

function addHalfHr() {
	userMin = userMin + 30;
	minBounds();
	hourBounds();
	drawClock();
	minWithWords();
	hrsWithWords();
	timeWithWords();
	digitalAM();
	digitalPM();
}

function addHrs() {
	userHrs = userHrs + 1;
	minBounds();
	hourBounds();
	drawClock();
	minWithWords();
	hrsWithWords();
	timeWithWords();
	digitalAM();
	digitalPM();
}

function minBounds() {
	if(userMin >= 60) {
		userMin = userMin - 60;
		userHrs = userHrs + 1;
	}
}

function hourBounds() {
	if(userHrs > 23) {
		userHrs = 0;
	}
}

function minWithWords() {
	if(userMin == 5) {
		minWord = "fem over";
		minDigit = "05";
	}
	else if(userMin == 10) {
		minWord = "ti over";
		minDigit = "10";
	}
	else if(userMin == 15) {
		minWord = "kvart over";
		minDigit = "15";
	}
		if(userMin == 20) {
		minWord = "ti på halv";
		minDigit = "20";
	}
	else if(userMin == 25) {
		minWord = "fem på halv";
		minDigit = "25";
	}
	else if(userMin == 30) {
		minWord = "halv";
		minDigit = "30";
	}
		if(userMin == 35) {
		minWord = "fem over halv";
			minDigit = "35";
	}
	else if(userMin == 40) {
		minWord = "ti over halv";
		minDigit = "40";
	}
	else if(userMin == 45) {
		minWord = "kvart på";
		minDigit = "45";
	}
		if(userMin == 50) {
		minWord = "ti på";
		minDigit = "50";
	}
	else if(userMin == 55) {
		minWord = "fem på";
		minDigit = "55";
	}
	else if(userMin == 0) {
		minWord = "";
		minDigit = "00";
	}
	
}

function hrsWithWords() {
	if((userHrs == 1 || userHrs == 13) && userMin < 20) {
		hrsWord = "ett";
		hrsDigitAM = "01";
		hrsDigitPM = "13";
	}
	else if((userHrs == 1 || userHrs == 13) && userMin >= 20) {
		hrsWord = "to";
		hrsDigitAM = "01";
		hrsDigitPM = "13";
	}
	else if((userHrs == 2 || userHrs == 14) && userMin < 20) {
		hrsWord = "to";
		hrsDigitAM = "02";
		hrsDigitPM = "14";
	}
	else if((userHrs == 2 || userHrs == 14) && userMin >= 20) {
		hrsWord = "tre";
		hrsDigitAM = "02";
		hrsDigitPM = "14";
	}
	else if((userHrs == 3 || userHrs == 15) && userMin < 20) {
		hrsWord = "tre";
		hrsDigitAM = "03";
		hrsDigitPM = "15";
	}
	else if((userHrs == 3 || userHrs == 15) && userMin >= 20) {
		hrsWord = "fire";
		hrsDigitAM = "03";
		hrsDigitPM = "15";
	}
	else if((userHrs == 4 || userHrs == 16) && userMin < 20) {
		hrsWord = "fire";
		hrsDigitAM = "04";
		hrsDigitPM = "16";
	}
	else if((userHrs == 4 || userHrs == 16) && userMin >= 20) {
		hrsWord = "fem";
		hrsDigitAM = "04";
		hrsDigitPM = "16";
	}
	else if((userHrs == 5 || userHrs == 17) && userMin < 20) {
		hrsWord = "fem";
		hrsDigitAM = "05";
		hrsDigitPM = "17";
	}
	else if((userHrs == 5 || userHrs == 17) && userMin >= 20) {
		hrsWord = "seks";
		hrsDigitAM = "05";
		hrsDigitPM = "17";
	}
	
	else if((userHrs == 6 || userHrs == 18) && userMin < 20) {
		hrsWord = "seks";
		hrsDigitAM = "06";
		hrsDigitPM = "18";
	}
	else if((userHrs == 6 || userHrs == 18) && userMin >= 20) {
		hrsWord = "sju";
		hrsDigitAM = "06";
		hrsDigitPM = "18";
	}
	else if((userHrs == 7 || userHrs == 19) && userMin < 20) {
		hrsWord = "sju";
		hrsDigitAM = "07";
		hrsDigitPM = "19";
	}
	else if((userHrs == 7 || userHrs == 19) && userMin >= 20) {
		hrsWord = "åtte";
		hrsDigitAM = "07";
		hrsDigitPM = "19";
	}
	else if((userHrs == 8 || userHrs == 20) && userMin < 20) {
		hrsWord = "åtte";
		hrsDigitAM = "08";
		hrsDigitPM = "20";
	}
	else if((userHrs == 8 || userHrs == 20) && userMin >= 20) {
		hrsWord = "ni";
		hrsDigitAM = "08";
		hrsDigitPM = "20";
	}
	else if((userHrs == 9 || userHrs == 21) && userMin < 20) {
		hrsWord = "ni";
		hrsDigitAM = "09";
		hrsDigitPM = "21";
	}
	else if((userHrs == 9 || userHrs == 21) && userMin >= 20) {
		hrsWord = "ti";
		hrsDigitAM = "09";
		hrsDigitPM = "21";
	}
	else if((userHrs == 10 || userHrs == 22) && userMin < 20) {
		hrsWord = "ti";
		hrsDigitAM = "10";
		hrsDigitPM = "22";
	}
	else if((userHrs == 10 || userHrs == 22) && userMin >= 20) {
		hrsWord = "elleve";
		hrsDigitAM = "10";
		hrsDigitPM = "22";
	}
	else if((userHrs == 11 || userHrs == 23) && userMin < 20) {
		hrsWord = "elleve";
		hrsDigitAM = "11";
		hrsDigitPM = "23";
	}
	else if((userHrs == 11 || userHrs == 23) && userMin >= 20) {
		hrsWord = "tolv";
		hrsDigitAM = "11";
		hrsDigitPM = "23";
	}
	else if((userHrs == 12 || userHrs == 0) && userMin < 20) {
		hrsWord = "tolv";
		hrsDigitAM = "00";
		hrsDigitPM = "12";
	}
	else if((userHrs == 12 || userHrs == 0) && userMin >= 20) {
		hrsWord = "ett";
		hrsDigitAM = "00";
		hrsDigitPM = "12";
	}
}

$('#analog-visibility').click(function(){
  if ( $('#c').css('visibility') == 'hidden' )
    $('#c').css('visibility','visible');
  else
    $('#c').css('visibility','hidden');
});

$('#am-visibility').click(function(){
  if ( $('#digital-am').css('visibility') == 'hidden' )
    $('#digital-am').css('visibility','visible');
  else
    $('#digital-am').css('visibility','hidden');
});

$('#pm-visibility').click(function(){
  if ( $('#digital-pm').css('visibility') == 'hidden' )
    $('#digital-pm').css('visibility','visible');
  else
    $('#digital-pm').css('visibility','hidden');
});

$('#words-visibility').click(function(){
  if ( $('#time-with-words').css('visibility') == 'hidden' )
    $('#time-with-words').css('visibility','visible');
  else
    $('#time-with-words').css('visibility','hidden');
});