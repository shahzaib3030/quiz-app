const questions = [
    {
        question: "Which language is used to style a webpage?",
        answers: ["HTML", "CSS", "JavaScript", "Python"],
        correct: "CSS"
    },

    {
        question: "Which language is used to add functionality to a webpage?",
        answers: ["HTML", "CSS", "JavaScript", "SQL"],
        correct: "JavaScript"
    },

    {
        question: "Which tag is used for the largest heading in HTML?",
        answers: ["<p>", "<h1>", "<div>", "<img>"],
        correct: "<h1>"
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: ["variable", "let", "define", "varname"],
        correct: "let"
    }
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const buttons = document.querySelectorAll(".answer");
const nextButton = document.getElementById("next");
const result = document.getElementById("result");

function showQuestion() {

    let current = questions[currentQuestion];

    question.innerText = current.question;

    buttons.forEach(function(button, index) {

        button.innerText = current.answers[index];

        button.disabled = false;

        button.onclick = function() {

            if (button.innerText === current.correct) {
                score++;
            }

            buttons.forEach(function(btn) {
                btn.disabled = true;
            });
        };
    });
}

nextButton.onclick = function() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        question.innerText = "Quiz Completed!";

        buttons.forEach(function(button) {
            button.style.display = "none";
        });

        nextButton.style.display = "none";

        result.innerText = "Your Score: " + score + " / " + questions.length;
    }
};

showQuestion();