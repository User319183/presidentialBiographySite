const events = {
    1833: 'Benjamin Harrison was born on August 20, 1833, in North Bend, Ohio. He was the grandson of William Henry Harrison, the 9th president of the United States.',
    1852: 'Harrison graduated from Miami University in Oxford, Ohio with distinction. He was a member of the Phi Delta Theta fraternity and showed early promise in law and debate.',
    1862: 'During the American Civil War, Harrison served as a colonel in the Union Army, commanding the 70th Indiana Infantry Regiment. His military service shaped his future political views.',
    1888: 'Harrison defeated incumbent President Grover Cleveland in the 1888 presidential election, despite losing the popular vote. This made him one of only five presidents to win the electoral college while losing the popular vote.',
    1890: 'As president, Harrison signed the Sherman Antitrust Act into law, the first federal legislation designed to limit monopolies and protect competition in the marketplace.',
    1901: 'Benjamin Harrison passed away on March 13, 1901, in Indianapolis, Indiana at the age of 67, leaving behind a legacy as a committed public servant and distinguished president.',
};

export function showEvent(year) {
    const eventDetails = document.getElementById('event-details');
    const eventContent = events[year];

    // Fade effect
    eventDetails.style.opacity = '0';

    setTimeout(() => {
        eventDetails.textContent = eventContent;
        eventDetails.style.opacity = '1';
    }, 300);

    // Hide prompt if visible
    const prompt = document.querySelector('.event-prompt');
    if (prompt) {
        prompt.style.display = 'none';
    }
}

export function initializeTimeline() {
    // Show first event by default
    showEvent('1833');

    // Click listeners for timeline events
    document.querySelectorAll('.timeline-event').forEach((event) => {
        event.addEventListener('click', function () {
            // Remove active class from all events
            document.querySelectorAll('.timeline-event').forEach((e) => {
                e.classList.remove('active');
            });

            // Add active class to clicked event
            this.classList.add('active');

            // Show event details
            const year = this.getAttribute('data-year');
            showEvent(year);

            // Hide prompt
            document.querySelector('.event-prompt').style.display = 'none';
        });
    });

    // Set first event as active by default
    document.querySelector('.timeline-event').classList.add('active');
}
