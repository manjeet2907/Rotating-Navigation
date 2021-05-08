const open = document.getElementById('open');
const Close = document.getElementById('close');
const container = document.querySelector('.contain');

Open.addEventListner('click' , () => {
    container.classList.add('show-nav')
})

Close.addEventListner('click' , () => {
    container.classList.remove('show-nav')}
    )