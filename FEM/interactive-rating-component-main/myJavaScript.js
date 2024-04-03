const submitBtn = document.getElementById("submit-button");
const ratingPage = document.getElementById("rating");
const thankYouPage = document.getElementById("thank-you");
const rate = document.querySelectorAll(".rating__score");
const displayRating = document.getElementById("display-rating");

submitBtn.addEventListener("click", () => {
  ratingPage.style.display = "none";
  thankYouPage.style.display = "flex";
});

rate.forEach((rate) => {
  rate.addEventListener("click", () => {
    displayRating.textContent = rate.innerHTML;
  });
});
