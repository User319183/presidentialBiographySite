
export const facts = [
  "Harrison was the first president to have electricity in the White House",
  "He was the grandson of the 9th US President, William Henry Harrison",
  "Harrison won the electoral college but lost the popular vote",
  "He signed the Sherman Antitrust Act into law",
  "Six states were admitted to the Union during his presidency"
];

export function showRandomFact() {
  const factText = document.getElementById('fact-text');
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.style.opacity = '0';
  setTimeout(() => {
    factText.textContent = facts[randomIndex];
    factText.style.opacity = '1';
  }, 200);
}
