
/*grabbing my versatile button and setting its values*/
var submitBtn = document.getElementById('myBtn');
var currentQuestion = 0;
var score =0;


var quizForm = document.getElementById('quiz');
var question;
var choices;
/*adding radio buttons to make my life easier*/
var radioButtons = document.getElementsByName('radioOptions');
var index = 0;

function startQuiz() {
	
    if (currentQuestion === 0) {
        submitBtn.value = "Start Quiz";
    }
}

/*loop for questions and choices*/
function showQuestion () {
    choices = allQuestions[currentQuestion].choices;
    question = allQuestions[currentQuestion].title;
    if (currentQuestion < allQuestions.length) {
        submitBtn.value = "Next";
        quizForm.innerHTML = "<h1>" + question + "</h1>";
        for (var i = 0; i < choices.length; i++) {
            quizForm.innerHTML += "<label><input type='radio' name='radioOptions' value='" + choices[i] + "'/>" + choices[i] + "</label>";
        }
        if (currentQuestion == allQuestions.length - 1) {
            submitBtn.value = "Submit";
        } else if (currentQuestion > allQuestions.length - 1) {
            calcQuiz();
        }
    }
}
/*checking users selection*/
function usersInput() {

    if (radioButtons.length > 1) {

            var checked = false;
        for (var i = 0; i < radioButtons.length; i++) {
            var selection = radioButtons[i];

             if (selection.checked) {

                var index = [i];
                if (i === allQuestions[currentQuestion].answer) {
                    score++;

                }
                if (currentQuestion < allQuestions.length -1) {
                    currentQuestion++;

                } else {
                    console.log('quiz complete');
                    calcQuiz();
                   return false;
                }
                break;
            }
        }
        
    }
        showQuestion();
}

function calcQuiz() {
    quizForm.innerHTML = "<h1>Quiz complete!</h1><p class='total'>Your score is " + score + " out of " + allQuestions.length + "</h1>";

    submitBtn.remove();
}
window.onload = startQuiz();
submitBtn.addEventListener('click', usersInput);


/* set up form iput for highscore
/* save to local storage

var score = 0;
var highscore = localStorage.getItem("highscore")*/