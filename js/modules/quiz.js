export const questions = [
    {
        question: 'When was Benjamin Harrison born?',
        options: ['1830', '1833', '1835', '1837'],
        correct: 1,
        feedback: 'Benjamin Harrison was born in 1833 in North Bend, Ohio.',
    },
    {
        question: 'Which famous act did Harrison sign into law?',
        options: ['Homestead Act', 'Sherman Antitrust Act', 'Pendleton Act', 'Dawes Act'],
        correct: 1,
        feedback:
            'Harrison signed the Sherman Antitrust Act in 1890, which was the first federal law against monopolies.',
    },
    {
        question: 'How many states were admitted to the Union during his presidency?',
        options: ['Four', 'Five', 'Six', 'Seven'],
        correct: 2,
        feedback:
            "Six states were admitted to the Union during Harrison's presidency: North Dakota, South Dakota, Montana, Washington, Idaho, and Wyoming.",
    },
];

let currentQuestion = 0;
let score = 0;
let answered = false;

export function showQuestion() {
    if (!document.getElementById('question')) return;
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    document.getElementById('total-questions').textContent = questions.length;

    const optionsHtml = question.options
        .map(
            (option, index) =>
                `<button class="option-btn shadow-sm" onclick="checkAnswer(${index})">
      <span class="option-letter fw-bold me-2">${String.fromCharCode(65 + index)}.</span> ${option}
    </button>`
        )
        .join('');

    document.getElementById('options').innerHTML = optionsHtml;
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    answered = false;

    updateProgress();
}

export function checkAnswer(index) {
    if (answered) return;
    const question = questions[currentQuestion];
    const feedback = document.getElementById('feedback');
    const options = document.querySelectorAll('.option-btn');

    answered = true;

    if (index === question.correct) {
        score++;
        options[index].classList.add('correct');
        feedback.className = 'alert alert-success mt-3';
        feedback.textContent = 'Correct! ' + question.feedback;
    } else {
        options[index].classList.add('incorrect');
        options[question.correct].classList.add('correct');
        feedback.className = 'alert alert-danger mt-3';
        feedback.textContent = 'Incorrect. ' + question.feedback;
    }

    document.getElementById('score').textContent = score;
    feedback.style.display = 'block';
    document.getElementById('next-btn').style.display = 'block';
}

export function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showFinalScore();
    } else {
        showQuestion();
    }
}

function updateProgress() {
    const progress = (currentQuestion / questions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
}

function showFinalScore() {
    const quizContainer = document.querySelector('.card-body');
    const percentage = Math.round((score / questions.length) * 100);
    quizContainer.innerHTML = `
    <h4 class="mb-4 fw-bold">Quiz Complete!</h4>
    <div class="text-center mb-4">
      <div class="h2 mb-2">${score} out of ${questions.length}</div>
      <div class="badge bg-primary fs-5 px-3 py-2">${percentage}%</div>
    </div>
    <p class="mb-4 lead text-center">${getFeedbackMessage(percentage)}</p>
    <div class="text-center">
      <button onclick="location.reload()" class="btn btn-primary px-4 py-2">Try Again</button>
    </div>
  `;
}

function getFeedbackMessage(percentage) {
    if (percentage === 100) return "Perfect! You're a Benjamin Harrison expert!";
    if (percentage >= 80) return 'Great job! You know your presidential history well!';
    if (percentage >= 60) return 'Good effort! Keep learning about Benjamin Harrison!';
    return "Keep studying! There's more to learn about Benjamin Harrison.";
}
