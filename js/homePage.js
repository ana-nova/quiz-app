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

// Finde den Bookmark-Button (nur für eine Card)
const bookmarkButton = document.querySelector(".bookmark-btn-one");

// Event Listener für den Bookmark-Button hinzufügen
bookmarkButton.addEventListener("click", () => {
  // Finde das Icon innerhalb des Buttons
  const icon = bookmarkButton.querySelector("i");

  // Überprüfen, welches Symbol aktuell angezeigt wird und es umschalten
  if (icon.classList.contains("ri-heart-line")) {
    icon.classList.replace("ri-heart-line", "ri-heart-fill"); // Wenn es "ri-heart-line" ist, setze "ri-heart-fill"
  } else {
    icon.classList.replace("ri-heart-fill", "ri-heart-line"); // Wenn es "ri-heart-fill" ist, setze "ri-heart-line"
  }
});

/* 
classList.replace() benötigt zwei Argumente: Klasse die ich ersetzen will + Klasse die hinzugefügt werden soll
das wäre die lange Schreibweise:
if (icon.classList.contains("ri-heart-line")) {
  icon.classList.remove("ri-heart-line");
  icon.classList.add("ri-heart-fill");
*/