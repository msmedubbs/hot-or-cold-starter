var theAnswer = Math.floor((Math.random()*100)+1);
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
	theAnswer = Math.floor((Math.random()*100)+1);
	$("#feedback").text("Make your Guess!");
	$("#count").text(guessCounter);
	$("#userGuess").val('');
	$("#userGuess").attr("placeholder", "Enter your Guess");
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
		guessCounter += 1;
		$("#count").text(guessCounter);

        if (my_entry >= 1 && my_entry <= 100){
           guessCompare(my_entry);
        }
        else{
			$("#feedback").text("Enter a guess from 1 to 100");
        }
    });

	/*--- Watch for Enter ---*/
    $(document).keypress(function(e){
		if(e.which == 13){
			var my_entry = $("#userGuess").val();
			guessCounter += 1;
			$("#count").text(guessCounter);

			if (my_entry >= 1 && my_entry <= 100){
				guessCompare(my_entry);
			}
			else{
				$("#feedback").text("Enter a guess from 1 to 100");
			}
		}
    });

});


