const dislcaimerContainer = document.querySelector(".disclaimer-container");
const dislcaimerButton = document.querySelector(".disclaimer-btn");

dislcaimerButton.addEventListener("click", () => {
    dislcaimerContainer.classList.remove("active");
    localStorage.setItem("courtwiseDisclaimerBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("courtwiseDisclaimerBannerDisplayed")) {
    dislcaimerContainer.classList.add("active");
  }
}, 1000);