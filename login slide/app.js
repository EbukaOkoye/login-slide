const btnLogIn = document.querySelector(".btn_login");
const btnSignUp = document.querySelector(".btn_signup");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const hidden = document.querySelector(".hidden");
const card = document.querySelector(".card");

btnLogIn.addEventListener("click", () => {
  overlay.style.marginLeft = "32.5rem";
  form.style.display = "none";
  hidden.style.display = "flex";
});

btnSignUp.addEventListener("click", () => {
  overlay.style.marginLeft = "-32.5rem";
  form.style.display = "flex";
  hidden.style.display = "none";
});
