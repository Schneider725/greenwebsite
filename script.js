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