const bookmark = document.querySelector('[data-js="bookmark-image"]');

const answerButton = document.querySelector('[data-js="card-answer-button"]');

const answerCard = document.querySelector('[data-js="card-answer"]');
_____________________________________;

answerCard.style.display = "none";

bookmark.addEventListener("click", (event) => {
  bookmark.classList.toggle("bookmark-toggle");
});

answerButton.addEventListener("click", (event) => {
  if (answerCard.style.display === "none") {
    answerCard.style.display = "block";
  } else {
    answerCard.style.display = "none";
  }
});
