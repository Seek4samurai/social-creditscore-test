const quizData = [
    {
        question: "Is China Communist or Capitalist",
        a: "Capitalist",
        b: "None of these",
        c: "Communist",
        d: "All of the above",
        correct: "c"
    }, {
        question: "What happened on 4th June 1989?",
        a: "Nothing",
        b: "Something",
        c: "Someone did something",
        d: "Everything",
        correct: "a"
    }, {
        question: "Is Taiwan a Country",
        a: "Yes",
        b: "No",
        c: "Don't Know",
        d: "Maybe",
        correct: "b"
    }, {
        question: "Who's WWE popular wrestler",
        a: "Boogeyman",
        b: "Zhong Xina",
        c: "Cobalt Trump",
        d: "John Cena",
        correct: "b"
    }, {
        question: "Which country is the best",
        a: "China",
        b: "Russia",
        c: "USA",
        d: "India",
        correct: "a"
    }
]


let currentQuestion = 0;
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;


    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
};

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }
    if (answer) {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Congratulation!<br>You Passed the test!<br>Your Social credit score is ${score}000</h2>
            <style>.outro-buttons{display: inline; display: flex; flex-direction: row;}</style>
            <div class = "outro-buttons">
            <button onclick="location.reload()">Replay</button>
            <button onclick="">See something even better</button>
            </div>
            `
        }
    }
});
