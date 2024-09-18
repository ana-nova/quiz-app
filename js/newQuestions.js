// Hol das Formular und den Quiz-Container
const form = document.querySelector('[data-js="form"]');
const quizContainer = document.querySelector('.quiz-container');

// Event Listener für den Submit-Button
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Verhindert das automatische Neuladen der Seite

  // Hol die Werte der Felder
  const question = document.querySelector("#quiz-question").value;
  const answer = document.querySelector("#quiz-answer").value;
  const tag = document.querySelector("#quiz-tag").value;

  // Erstelle eine neue Quiz-Card
  const quizCard = document.createElement("section");
  quizCard.classList.add("quiz-card");

  // Erstelle die Frage (h2 Element)
  const quizQuestion = document.createElement("h2");
  quizQuestion.classList.add("quiz-question");
  quizQuestion.textContent = question; // Setze den Textinhalt der Frage

  // Erstelle den Antwort-Bereich (p Element)
  const quizAnswer = document.createElement("p");
  quizAnswer.classList.add("quiz-answer");
  quizAnswer.textContent = answer; // Setze den Textinhalt der Antwort

  // Erstelle die Tags (div Element)
  const quizTags = document.createElement("div");
  quizTags.classList.add("quiz-tags");

  // Erstelle ein Tag (span Element)
  const tagElement = document.createElement("span");
  tagElement.classList.add("tag");
  tagElement.textContent = `# ${tag}`; // Setze den Textinhalt des Tags

  // Füge das Tag dem Tag-Bereich hinzu
  quizTags.appendChild(tagElement);

  // Füge die Frage, die Antwort und die Tags der Quiz-Card hinzu
  quizCard.appendChild(quizQuestion);
  quizCard.appendChild(quizAnswer);
  quizCard.appendChild(quizTags);

  // Füge die neue Quiz-Card dem Container unterhalb des Formulars hinzu
  quizContainer.appendChild(quizCard);

  // Leere das Formular nach dem Absenden
  form.reset();
});


/* 
appendChild(): Fügt nur ein einzelnes DOM-Element hinzu.
append(): Kann sowohl DOM-Elemente als auch Text anhängen und sogar mehrere Elemente oder Textstücke auf einmal. */