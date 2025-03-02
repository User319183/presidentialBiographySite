import { showRandomFact } from './modules/facts.js';
import { showQuestion, checkAnswer, nextQuestion } from './modules/quiz.js';
import { showEvent, initializeTimeline } from './modules/timeline.js';
import { initializeNavigation } from './modules/navigation.js';

// Initialize navigation
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();

    // Initialize timeline if on timeline page
    if (document.querySelector('.timeline-event')) {
        initializeTimeline();
    }

    // Initialize quiz if on quiz page
    if (document.getElementById('question')) {
        showQuestion();
    }
});

// Make functions globally available
window.showRandomFact = showRandomFact;
window.showEvent = showEvent;
window.checkAnswer = checkAnswer;
window.nextQuestion = nextQuestion;
