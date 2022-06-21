//////////////////////infographic about Aarhus//////////////////////
const introduceIulian = document.getElementById("introduce-iulian");
const w1d1 = document.getElementById("w1d1");
introduceIulian.addEventListener("click", function () {
  w1d1.classList.remove("invisible");
  w1d1.classList.add("visible");
});
const closePopup = document.getElementById("close-btn-3");
closePopup.addEventListener("click", function () {
  w1d1.classList.add("invisible");
  w1d1.classList.remove("visible");
});

//////////////////////story quiz about Denmark facts//////////////////////
const beforeAfterPinterest = document.getElementById(
  "pictures-before-and-after-iulian"
);
const w2d6 = document.getElementById("w2d6");
beforeAfterPinterest.addEventListener("click", function () {
  w2d6.classList.remove("invisible");
  w2d6.classList.add("visible");
});
const closePopupTwo = document.getElementById("close-btn-2");
closePopupTwo.addEventListener("click", function () {
  w2d6.classList.add("invisible");
  w2d6.classList.remove("visible");
});

//////////////////////story quiz about Denmark facts//////////////////////
const askQuestions = document.getElementById("ask-answear-questions");
const w3d1 = document.getElementById("w3d1");
askQuestions.addEventListener("click", function () {
  w3d1.classList.remove("invisible");
  w3d1.classList.add("visible");
});
const closePopupThree = document.getElementById("close-btn-4");
closePopupThree.addEventListener("click", function () {
  w3d1.classList.add("invisible");
  w3d1.classList.remove("visible");
});

//////////////////////story quiz about Denmark facts//////////////////////
const postFreeHaircut = document.getElementById("post-free-haircut");
const w4d2 = document.getElementById("w4d2");
postFreeHaircut.addEventListener("click", function () {
  w4d2.classList.remove("invisible");
  w4d2.classList.add("visible");
});
const closePopupFour = document.getElementById("close-btn-5");
closePopupFour.addEventListener("click", function () {
  w4d2.classList.add("invisible");
  w4d2.classList.remove("visible");
});

//////////////////////tiktok recap//////////////////////
const prices = document.getElementById("post-of-price-list");
const w4d5 = document.getElementById("w4d5");
prices.addEventListener("click", function () {
  w4d5.classList.remove("invisible");
  w4d5.classList.add("visible");
});
const closePopupFive = document.getElementById("close-btn-6");
closePopupFive.addEventListener("click", function () {
  w4d5.classList.add("invisible");
  w4d5.classList.remove("visible");
});
