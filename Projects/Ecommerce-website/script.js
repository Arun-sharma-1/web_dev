// Script for navigation bar
const bar = document.querySelector('.bar');
const navbar = document.querySelector('.navbar')
const closeBtn = document.querySelector('#close');

if (bar) {
    bar.addEventListener('click', () => {
        console.log('arun')
        navbar?.classList.add('active')
    })
}
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        navbar?.classList.remove('active')
    })
}


//Script for changing images
var mainImg = document.querySelector('#MainImg')
var smallImg = document.querySelectorAll('.small-img')
smallImg.forEach(img => {
    img.addEventListener('click', (e) => {
        mainImg.src = img.src;
    })
});
