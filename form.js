const form = document.querySelector('[data-js="form"]');

const questionInput = document.querySelector('[data-js="form-question"]');
const questionCounter = document.querySelector(
  '[data-js="form-question-counter"]'
);

const answerInput = document.querySelector('[data-js="form-answer"]');
const answerCounter = document.querySelector('[data-js="form-answer-counter"]');

const tagInput = document.querySelector('[data-js="form-tag"]');

form.addEventListener("submit", handleSubmit);

questionInput.addEventListener("keyup", () => {
  questionCounter.textContent = `${
    150 - questionInput.value.length
  } characters left`;
});

answerInput.addEventListener("keyup", () => {
  answerCounter.textContent = `${
    150 - answerInput.value.length
  } characters left`;
});

function handleSubmit(event) {
  event.preventDefault();

  //const formData = new FormData(form);
  //const data = Object.fromEntries(formData);

  const newCard = document.createElement("section");
  newCard.className = "card__question-card";

  const newQuestion = document.createElement("p");
  newQuestion.textContent = questionInput.value;

  const newBookmark = document.createElement("img");
  newBookmark.className = "card__bookmark-image";

  const newButton = document.createElement("button");
  newButton.className = "card__answer-button";
  newButton.textContent = "Show Answer";

  const newAnswer = document.createElement("p");
  newAnswer.className = "card__answer";
  newAnswer.textContent = answerInput.value;

  const newTag = document.createElement("ul");
  newTag.className = "card__tag-categories";

  const newTagItem = document.createElement("li");
  newTagItem.className = "card__tag";
  newTagItem.textContent = tagInput.value;

  newTag.appendChild(newTagItem);

  newCard.appendChild(newQuestion);
  newCard.appendChild(newBookmark);
  newCard.appendChild(newButton);
  newCard.appendChild(newAnswer);
  newCard.appendChild(newTag);

  const cardContainer = document.querySelector('[data-js="card-container"]');

  cardContainer.appendChild(newCard);

  newAnswer.style.display = "none";

  newButton.addEventListener("click", (event) => {
    if (newAnswer.style.display === "none") {
      newAnswer.style.display = "block";
      newButton.innerHTML = "Hide Answer";
    } else {
      newAnswer.style.display = "none";
      newButton.innerHTML = "Show Answer";
    }
  });

  form.reset();
}
