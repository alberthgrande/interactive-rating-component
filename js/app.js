// Rating state
const ratingState = document.querySelector(".rating-state");
const ratingButton = document.querySelectorAll("#rate");

const ratingSubmit = document.getElementById("submit");
// Thank you state
const thankyouState = document.querySelector(".thankyou-state");
const thankyouStateRate = document.getElementById("thankyou-state_rate");

for (i of ratingButton) {
  i.addEventListener("click", function (e) {
    const target = e.target;
    thankyouStateRate.innerText = this.innerText;
    target.style.backgroundColor = "hsl(216, 12%, 54%)";
  });
}

ratingSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  ratingState.style.display = "none";
  thankyouState.style.display = "block";
});
