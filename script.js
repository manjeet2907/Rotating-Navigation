const open = document.getElementById('open')
const close = document.getElementById('close')
const contain = document.querySelector('.contain')

open.addEventListner('click' , () => {
    contain.classList.add('show-nav')
})

close.addEventListner('click' , () => {
    contain.classList.remove('show-nav')
})
