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


  document.querySelectorAll('.bookmark-btn-one').forEach(button => {
    // Event Listener für den Bookmark-Button hinzufügen
    button.addEventListener("click", () => {
      // Finde das Icon innerhalb des Buttons
      const icon = button.querySelector("i");
  
      // Überprüfen, welches Symbol aktuell angezeigt wird und es umschalten
      if (icon.classList.contains("ri-heart-line")) {
        icon.classList.replace("ri-heart-line", "ri-heart-fill"); // Wenn es "ri-heart-line" ist, setze "ri-heart-fill"
      } else {
        icon.classList.replace("ri-heart-fill", "ri-heart-line"); // Wenn es "ri-heart-fill" ist, setze "ri-heart-line"
      }
    });
  });
  


/* 
classList.replace() benötigt zwei Argumente: Klasse die ich ersetzen will + Klasse die hinzugefügt werden soll
das wäre die lange Schreibweise:
if (icon.classList.contains("ri-heart-line")) {
  icon.classList.remove("ri-heart-line");
  icon.classList.add("ri-heart-fill");
*/

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Star-Container leeren, bevor neue Sterne hinzugefügt werden
  starContainer.innerHTML = "";

  // Schleife, um 5 Sterne zu rendern
  for (let i = 1; i <= 5; i++) {
    // Erstelle ein <img> Element
    const star = document.createElement("img");

    // Überprüfen, ob der Stern ausgefüllt sein soll oder nicht
    if (i <= filledStars) {
      // Setze das Bild für einen ausgefüllten Stern
      star.src = "../assets/star-filled.svg";
    } else {
      // Setze das Bild für einen leeren Stern
      star.src = "../assets/star-empty.svg";
    }

        // Füge das Bild in den starContainer ein
    starContainer.append(star);

  }
  
    const stars = document.querySelectorAll('[data-js="star-container"] img');
    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        // Rufe renderStars erneut auf und übergebe die neue Anzahl ausgefüllter Sterne
        renderStars(index + 1);
      });
    });



}

// default anzeige
renderStars(0);
