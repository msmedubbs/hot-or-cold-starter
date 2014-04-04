var theAnswer = 10;
var guessCounter = 0;

var guessCompare = function (latestGuess) {
	var Distance = Math.abs(theAnswer-latestGuess);

	if (latestGuess === theAnswer) {
		$("#feedback").text("You guessed my number!");
	}
	else if (Distance >= 50) {
		$("#feedback").text("Ice cold");
	}
	else if (Distance >= 30 && Distance < 50) {
		$("#feedback").text("Cold");
	}
	else if (Distance >= 20 && Distance < 30) {
		$("#feedback").text("Warm");
	}
	else if (Distance >= 10 && Distance < 20) {
		$("#feedback").text("Hot");
	}
	else {
		$("#feedback").text("Very Hot");
	}
};

var newGame = function () {
	guessCounter = 0;
	// generate new theAnswer
};

$(document).ready(function () {

	/*--- Display information modal box ---*/
	$(".what").click(function () {
	$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function () {
		$(".overlay").fadeOut(1000);
	});

	/*--- Watch for New Game click ---*/
	$(".new").click(function () {
		newGame();
	});

	/*--- Watch for Guess click ---*/
	$("#guessButton").click(function () {
    var my_entry = $("#userGuess").val();

        if (my_entry >= 1 && my_entry <= 100){
           guessCounter += 1;
           console.log(guessCounter);
           guessCompare(my_entry);
           //$("#count").text();
        }
        else{
			$("#feedback").text("Enter a guess from 1 to 100");
        }
    });

});


