const year = document.getElementById("year");
let form = document.getElementById("form");
// year.innerHTML = new Date().getFullYear();
console.log(form);

const email = document.getElementById("floating_email");
const emailError = document.getElementById("eErr");
const submit = document.getElementById("submit");
email.addEventListener("input", (e) => {
  if (email.value.trim !== "") {
    emailError.textContent = "";
  }
  console.log(e.target.value);
});
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value == "") {
    console.log("input field is empty");
    emailError.textContent = "input field is empty";
  } else {
    if (email.value !== "") {
      emailError.textContent = "";
      console.log(email.value);
    }
    email.value;
    emailError.textContent = "";
  }
});
