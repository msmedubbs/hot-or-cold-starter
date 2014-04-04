var theAnswer = 10;
var guessCounter = 0;

var guessCompare = function (latestGuess) {
	var distance = Math.abs(theAnswer-latestGuess);

	if (latestGuess == theAnswer) {
		$("#feedback").text("You guessed my number!");
	}
	else if (distance >= 50) {
		$("#feedback").text("Ice cold");
	}
	else if (distance >= 30 && distance < 50) {
		$("#feedback").text("Cold");
	}
	else if (distance >= 20 && distance < 30) {
		$("#feedback").text("Warm");
	}
	else if (distance >= 10 && distance < 20) {
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
           guessCompare(my_entry);
           $("#count").text(guessCounter);
        }
        else{
			$("#feedback").text("Enter a guess from 1 to 100");
        }
    });

});


