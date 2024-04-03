const subscribeBtn = document.getElementById("subscribe-btn");
const dismissBtn = document.getElementById("dismiss-btn");
const invalidError = document.getElementById("invalid-error");
const signUp = document.getElementById("sign-up__container");
const success = document.getElementById("success");
const emailConfirmation = document.getElementById("email-confirmation");
const userEmail = document.getElementById("email");
// FOR DISPLAY RESET
const signUpDefaultDisplay =
  document.getElementById("sign-up__container").style.display;
const successUpDefaultDisplay =
  document.getElementById("success").style.display;

subscribeBtn.addEventListener("click", () => {
  if (userEmail.checkValidity() == true) {
    invalidError.style.display = "none";
    submit();
  } else if (userEmail.checkValidity() == false) {
    invalidError.style.display = "block";
  } else {
  }
});

dismissBtn.addEventListener("click", () => {
  success.style.display = successUpDefaultDisplay;
  signUp.style.display = signUpDefaultDisplay;
});

function submit() {
  success.style.display = "flex";
  signUp.style.display = "none";
  emailConfirmation.textContent = userEmail.value;
}
