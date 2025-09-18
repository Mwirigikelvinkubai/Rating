let selectedRating = 0;
const stars = document.querySelectorAll(".stars button");

stars.forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = star.getAttribute("data-value");
    document.getElementById("ratingInput").value = selectedRating;

    stars.forEach(s => s.classList.remove("selected"));
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add("selected");
    }
  });
});

const form = document.getElementById("ratingForm");
form.addEventListener("submit", (event) => {
  if (selectedRating === 0) { 
    alert("Please select a rating before submitting."); 
    event.preventDefault(); 
    return; 
  }
  setTimeout(() => {
    document.getElementById("thankyou").style.display = "block";
    form.reset();
    stars.forEach(s => s.classList.remove("selected"));
    selectedRating = 0;
  }, 500);
});
