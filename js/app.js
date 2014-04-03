$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
		$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	$("#guessButton").click(function(){
    var newGuess = $("#userGuess").val();
        if (newGuess >= 1 && newGuess <= 100){
            alert("between");
        }

        else{
			alert("Type an item in before you add it.");
        }
    });
});
