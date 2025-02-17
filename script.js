
/*
 * This file contains the JavaScript functionality for the Benjamin Harrison website
 * It handles random facts, scrolling, and timeline event displays
 */

// Array of interesting facts about Benjamin Harrison
const facts = [
  "Harrison was the first president to have electricity in the White House",
  "He was the grandson of the 9th US President, William Henry Harrison",
  "Harrison won the electoral college but lost the popular vote",
  "He signed the Sherman Antitrust Act into law",
  "Six states were admitted to the Union during his presidency"
];

/**
 * Displays a random fact with a fade animation
 * Uses opacity transitions for smooth visual effect
 */
function showRandomFact() {
  const factText = document.getElementById('fact-text');
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.style.opacity = '0';
  setTimeout(() => {
    factText.textContent = facts[randomIndex];
    factText.style.opacity = '1';
  }, 200);
}

/* 
 * Smooth scroll for navigation links
 * Targets all anchor tags with href starting with #
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/**
 * Timeline event handler - displays historical events
 */
function showEvent(year) {
  const eventDetails = document.getElementById('event-details');
  // Object mapping years to significant events in Harrison's life
  const events = {
    '1833': 'Benjamin Harrison was born in North Bend, Ohio',
    '1852': 'Graduated from Miami University in Oxford, Ohio',
    '1862': 'Served as Colonel in the Union Army during Civil War',
    '1888': 'Won presidential election against Grover Cleveland',
    '1890': 'Signed the Sherman Antitrust Act',
    '1901': 'Passed away in Indianapolis, Indiana'
  };
  eventDetails.textContent = events[year];
}

// Quiz functionality
const questions = [
  {
    question: "When was Benjamin Harrison born?",
    options: ["1830", "1833", "1835", "1837"],
    correct: 1,
    feedback: "Benjamin Harrison was born in 1833 in North Bend, Ohio."
  },
  {
    question: "Which famous act did Harrison sign into law?",
    options: ["Homestead Act", "Sherman Antitrust Act", "Pendleton Act", "Dawes Act"],
    correct: 1,
    feedback: "Harrison signed the Sherman Antitrust Act in 1890, which was the first federal law against monopolies."
  },
  {
    question: "How many states were admitted to the Union during his presidency?",
    options: ["Four", "Five", "Six", "Seven"],
    correct: 2,
    feedback: "Six states were admitted to the Union during Harrison's presidency: North Dakota, South Dakota, Montana, Washington, Idaho, and Wyoming."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

/**
 * Displays the current question and options
 */
function showQuestion() {
  if (!document.getElementById('question')) return;
  const question = questions[currentQuestion];
  document.getElementById('question').textContent = question.question;
  document.getElementById('total-questions').textContent = questions.length;

  const optionsHtml = question.options.map((option, index) =>
    `<button class="option-btn list-group-item list-group-item-action" onclick="checkAnswer(${index})">${option}</button>`
  ).join('');

  document.getElementById('options').innerHTML = optionsHtml;
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';
  answered = false;

  updateProgress();
}

/**
 * Checks the selected answer and updates the score
 */
function checkAnswer(index) {
  if (answered) return; // Prevent multiple answers

  const question = questions[currentQuestion];
  const feedback = document.getElementById('feedback');
  const options = document.querySelectorAll('.option-btn');

  answered = true;

  if (index === question.correct) { // If correct, increase score
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

/**
 * Gives the user a chance to answer the current question before moving to the next one
 */
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showFinalScore();
  } else {
    showQuestion();
  }
}

/**
 * Updates the progress bar based on the current question
 */
function updateProgress() {
  const progress = ((currentQuestion) / questions.length) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
}

/**
 * Displays the final score and resets the quiz
 */
function showFinalScore() {
  const quizContainer = document.querySelector('.card-body');
  const percentage = (score / questions.length) * 100; // Calculate percentage
  quizContainer.innerHTML = `
    <h4 class="mb-4">Quiz Complete!</h4>
    <p class="h5 mb-3">Your final score: ${score} out of ${questions.length} (${percentage}%)</p>
    <p class="mb-4">${getFeedbackMessage(percentage)}</p>
    <button onclick="location.reload()" class="btn btn-primary">Try Again</button>
  `;
}

/**
 * Returns a feedback message based on the quiz score
 */
function getFeedbackMessage(percentage) {
  if (percentage === 100) return "Perfect! You're a Benjamin Harrison expert!"; // If the user gets 100%
  if (percentage >= 80) return "Great job! You know your presidential history well!"; // If the user gets 80% or more
  if (percentage >= 60) return "Good effort! Keep learning about Benjamin Harrison!"; // If the user gets 60% or more
  return "Keep studying! There's more to learn about Benjamin Harrison.";
}

// If on quiz page, initalize the quiz
if (document.getElementById('question')) {
  showQuestion();
}
