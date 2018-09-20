$( document ).ready(function() {
	var score = 0;
	var questionNumber = 0;
var questions = [
	{
		question:"AsrtoWorld is an album released in which year?",
		answers:["2015", "2016", "2017", "2018"],
		correctAnswer: "2018"
	},
	{
		question:"What Company did Dr. Dre co-found?",
		answers:["Beats", "Apple", "Spotify", "Uber"],
		correctAnswer: "Beats"
	},
	{
		question:"What does A$AP stand for?",
		answers:["As Soon As Possible", "Always Strive And Prosper", "Automated Sandwich And Popcorn", "Anything Stupid Achieves Promotions"],
		correctAnswer: "Always Strive And Prosper"
	},]

function loadQuestion(){
	if(questionNumber > questions.length-1){
		alert("YOU WON!")
		startGame()
		return
	}
	else{
		$("#question").text(questions[questionNumber].question)
		$("#choice0").text(questions[questionNumber].answers[0])
		$("#choice1").text(questions[questionNumber].answers[1])
		$("#choice2").text(questions[questionNumber].answers[2])
		$("#choice3").text(questions[questionNumber].answers[3])

	}
}

$(".answerButtons").on("click", function(){
	console.log(this)
	console.log(this.children[0].innerHTML)
	if(questions[questionNumber].correctAnswer===this.children[0].innerHTML){
		score++;
		questionNumber++;
		loadQuestion();

	}
	else{
		questionNumber++
		loadQuestion();

	}

})

function startGame(){
	 score = 0;
	 questionNumber = 0;
	loadQuestion();
}
startGame();
});

$("<div class= div>").text("You got" + score + "out of" + quiz.length + "correct.");
text(Math.round(score / quiz.length * 100) + '%').insertAfter("#div");

