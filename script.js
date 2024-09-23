const logo = document.getElementById('logo')
const modal = document.getElementById('modal')
const close = document.getElementById('close')
const backdrop = document.getElementById('backdrop')
logo.addEventListener('click', showModal)
close.addEventListener('click', showModal)

function showModal() {
    modal.classList.toggle('show')
    backdrop.classList.toggle('show')
}

const email = document.getElementById('email')
const emailConfirm = document.getElementById('emailConfirm')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('passwordConfirm')
const submit = document.getElementById('submit')

submit.addEventListener('click', e => {
    e.preventDefault();
    emailValidation();
    passwordValidation();
})
function emailValidation() {
    if(email.value != emailConfirm.value) {
        email.setCustomValidity('Email addresses do not match');
        email.reportValidity();
        emailConfirm.setCustomValidity('Email addresses do not match')
    }else {
        email.setCustomValidity('');
        emailConfirm.setCustomValidity('')
    }
}
function passwordValidation() {
    if(password.value != passwordConfirm.value) {
        password.setCustomValidity('passwords do not match');
        password.reportValidity();
        passwordConfirm.setCustomValidity('passwords do not match')
    }else {
        password.setCustomValidity('');
        passwordConfirm.setCustomValidity('')
    }
}