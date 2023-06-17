const links = document.querySelectorAll('nav a');
const navItems = document.querySelectorAll('.header li');
const burger = document.querySelector('.burger');
const navList = document.querySelector('.header ul');
const closeButton = document.querySelector('img[alt="close"]');
const mainPhoto = document.querySelector('[alt="main-photo"]');
const carusel = document.querySelector('.carusel');
const diplomas = document.querySelectorAll('.carusel__slide img');
const slide = document.querySelector('.carusel__slide');
const rightScroll = document.querySelector('.right-scroll');
const leftScroll = document.querySelector('.left-scroll');
let counter = 0;

function addBurger() {
    if (window.innerWidth <= 600) {
        burger.classList.remove('hidden');
        navItems.forEach(item => {
            item.classList.add('hidden');
        });
    };
}

function showBurgerList() {
    burger.addEventListener('click', (e) => {
        navList.setAttribute('id', 'new-nav');
        mainPhoto.classList.add('main-photo');
        closeButton.classList.remove('hidden')
        navItems.forEach(item => {
            item.classList.remove('hidden');
        });
    });
}

function hideBurgerList() {
    navList.addEventListener('click', () => {
        navList.removeAttribute('id');
        mainPhoto.classList.remove('main-photo');
        closeButton.classList.add('hidden')
        if (window.innerWidth <= 600) {
            navItems.forEach(item => {
            item.classList.add('hidden');
        });
        }
    })
}

function makeSizeItem() {
    diplomas.forEach(item => {
    let diplomaWidht = carusel.clientWidth;
        item.style.width = `${diplomaWidht}px`
       
})
}

 rightScroll.addEventListener('click', () => {
    if (counter >= diplomas.length - 1) counter = 1;
    slide.classList.add('carusel-animation')
    counter++;
    diplomaWidht = carusel.clientWidth;
    slide.style.transform = `translateX(-${diplomaWidht * counter}px)`;
});

leftScroll.addEventListener('click', () => {
    if (counter <= 0) counter = 1;
    slide.classList.add('carusel-animation')
    counter--;
    diplomaWidht = carusel.clientWidth;
    slide.style.transform = `translateX(-${diplomaWidht * counter}px)`;
});


addBurger();
showBurgerList();
hideBurgerList();
makeSizeItem();
window.addEventListener('resize', makeSizeItem);








  

       
