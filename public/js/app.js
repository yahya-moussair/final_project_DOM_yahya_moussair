let menuBtn = document.querySelector('#open')
let closeBtn = document.querySelector('#close')
let navBar = document.querySelector('.navLinks')

menuBtn.addEventListener('click' , () => {
    navBar.style.top = '50%'
    body.style.background = '#ccc'
})
closeBtn.addEventListener('click' , () => {
    navBar.style.top = '-200%'
    body.style.background = 'none'
})