export const facts = [
    'Harrison was the first president to have electricity in the White House',
    'He was the grandson of the 9th US President, William Henry Harrison',
    'Harrison won the electoral college but lost the popular vote',
    'He signed the Sherman Antitrust Act into law',
    'Six states were admitted to the Union during his presidency',
];

// Track the last shown fact to avoid repeats
let lastFactIndex = -1;

export function showRandomFact() {
    const factText = document.getElementById('fact-text');
    let randomIndex;

    // Keep generating a new random index until we get one different from the last shown
    do {
        randomIndex = Math.floor(Math.random() * facts.length);
    } while (randomIndex === lastFactIndex && facts.length > 1);

    // Update the last shown fact index
    lastFactIndex = randomIndex;

    // Fade out, change text, fade in
    factText.style.opacity = '0';
    setTimeout(() => {
        factText.textContent = facts[randomIndex];
        factText.style.opacity = '1';
    }, 200);
}
