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