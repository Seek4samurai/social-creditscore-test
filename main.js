const quizData = [
    {
        question: "What happened on 4th June 1989?",
        a: "Nothing",
        b: "Something",
        c: "Someone did something",
        d: "Everything"

    }, {
        question: "Is China Communist or Capitalist",
        a: "Capitalist",
        b: "None of these",
        c: "Communist",
        d: "All of the above"
    }, {
        question: "Is Taiwan a Country",
        a: "Yes",
        b: "No",
        c: "Don't Know",
        d: "Maybe"
    }
]

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;
loadQuiz();


function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


    currentQuestion++;
}