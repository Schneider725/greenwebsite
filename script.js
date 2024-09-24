const logo = document.getElementById("logo");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const backdrop = document.getElementById("backdrop");
logo.addEventListener("click", showModal);
close.addEventListener("click", showModal);

function showModal() {
  modal.classList.toggle("show");
  backdrop.classList.toggle("show");
}
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const emailConfirm = document.getElementById("emailConfirm");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const btnsubmit = document.getElementById("btnsubmit");
const form = document.getElementById("Form");

let submitAttempt = false;
btnsubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (submitAttempt == false) {
    addSubmitClass();
  }
  const firstName = nameValidation(first)
  const lastName = nameValidation(last)
  const emailForm = emailValidation();
  const passwordForm = passwordValidation();
  if (emailForm && passwordForm && firstName && lastName) {
    form.submit();
  }
});
function nameValidation(name) {
    if(name.value == '') {
        name.setCustomValidity('Field cannot be empty')
        name.reportValidity()
        return false
    } else {
        name.setCustomValidity("")
        return true
    }
}
function emailValidation() {
  if (email.value != emailConfirm.value) {
    emailConfirm.setCustomValidity("Email addresses do not match");
    emailConfirm.reportValidity();
    return false;
  } else if (email.value == '' || emailConfirm == '') {
    email.setCustomValidity('All fields must be completed')
    return false;
  } else {
    email.setCustomValidity("");
    emailConfirm.setCustomValidity("");
    return true;
  }
}
function passwordValidation() {
  if (password.value != passwordConfirm.value) {
    password.setCustomValidity("passwords do not match");
    password.reportValidity();
    passwordConfirm.setCustomValidity("passwords do not match");
    passwordConfirm.reportValidity();
    return false;
  } else if(password.value == '' || passwordConfirm.value == '') {
    passwordConfirm.setCustomValidity("Fill all fields");
    passwordConfirm.reportValidity();
  } else{
    password.setCustomValidity("");
    passwordConfirm.setCustomValidity("");
    return true;
  }
}

function addSubmitClass() {
  first.classList.add("submit-attempt");
  last.classList.add("submit-attempt");
  email.classList.add("submit-attempt");
  emailConfirm.classList.add("submit-attempt");
  password.classList.add("submit-attempt");
  passwordConfirm.classList.add("submit-attempt");
  submitAttempt = true;
}

emailConfirm.addEventListener("input", emailValidation);
passwordConfirm.addEventListener("input", passwordValidation);
first.addEventListener("input", () => checkFieldValidity(first));
last.addEventListener("input", () => checkFieldValidity(last));
