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
            <style>.outro-buttons{display: inline; display: flex; flex-direction: row; margin-top: 178px}</style>
            <div class = "outro-buttons">
            <button onclick="location.reload()">Replay</button>
            <button id="myButton" class="float-left submit-button" >See something even better</button>
            </div>
            `
        }
    }
});

window.onload = function () {
    document.getElementById("tah_audio").play();
}