// Rating state
const ratingState = document.querySelector(".rating-state");
const ratingButtons = document.querySelectorAll("#rate");

const ratingSubmit = document.getElementById("submit");
// Thank you state
const thankyouState = document.querySelector(".thankyou-state");
const thankyouStateRate = document.getElementById("thankyou-state_rate");

for (const rate of ratingButtons) {
  rate.addEventListener("click", function (e) {
    // Remove the 'selected' class from all buttons
    for (const btn of ratingButtons) {
      btn.classList.remove("selected");
    }

    // Add the 'selected' class to the clicked button
    this.classList.add("selected");

    // Update the rating display
    thankyouStateRate.innerText = this.innerText;
  });
}

ratingSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  ratingState.style.display = "none";
  thankyouState.style.display = "block";
});
