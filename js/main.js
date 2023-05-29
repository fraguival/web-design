const ham = document.querySelector('.ham')
const menu = document.querySelector('.menu')

ham.addEventListener('click', () => {

    ham.classList.toggle('gate')
    menu.classList.toggle('look')
})

