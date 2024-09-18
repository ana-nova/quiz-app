document.querySelectorAll('.show-answer-btn').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.previousElementSibling;
      answer.classList.toggle('hidden');

      // Change the button text based on the visibility of the answer
      if (answer.classList.contains('hidden')) {
        button.textContent = 'Show Answer';
      } else {
        button.textContent = 'Hide Answer';
      }
    });
  });

  // Finde den Bookmark-Button
const bookmarkButton = document.querySelector(".bookmark-btn-one");

// Event Listener für den Bookmark-Button hinzufügen
bookmarkButton.addEventListener("click", () => {
  // Überprüfen, welches Symbol aktuell angezeigt wird, und es umschalten
  if (bookmarkButton.textContent === "🖤") {
    bookmarkButton.textContent = "🩷"; // Wenn es 🖤 ist, setze 🩷
  } else {
    bookmarkButton.textContent = "🖤"; // Wenn es 🩷 ist, setze 🖤
  }
});
