const iconMenu = document.querySelector('#icon-menu')
const menu = document.querySelector('#menu')

iconMenu.addEventListener('click', () => {
    'use strict'
    menu.classList.toggle('show')
})

const app = document.getElementById('typewriter')

    const typewriter = new Typewriter(app, {
        loop: true,
        delay: 75
    })
    typewriter
        .typeString('La ciudad del tomate')
        .pauseFor(200)
        .start()