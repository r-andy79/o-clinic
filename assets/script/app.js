// // ====== MENU SHOW AND HIDE ======

// const navMenu = document.querySelector('.nav'),
//       toggleMenu = document.querySelector('.header__toggle'),
//       closeMenu = document.querySelector('.nav__close')

// // SHOW

// toggleMenu.addEventListener('click', () => {
//     navMenu.classList.toggle('show');
// })

// // HIDE

// closeMenu.addEventListener('click', () => {
//     navMenu.classList.remove('show');
// })

// // ACTIVE LINK AND REMOVE MENU
// const navLink = document.querySelectorAll('.nav__link');

// const linkAction = () => {
//     // Active link
//     navLink.forEach(link => link.classList.remove('active'));
//     console.log(this)
//     this.classList.add('active');

//     // Remove mobile menu
//     navMenu.classList.remove('show');
// }

// navLink.forEach(n => n.addEventListener('click', linkAction));

const hamburger = document.querySelector('.hamburger');
console.log(hamburger);
hamburger.addEventListener('click', function() {
    this.classList.toggle('close');
})

// ACCORDION

const accordionTitles = document.querySelectorAll('.accordion__title');
console.log(accordionTitles);

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', () => {
        const height = accordionTitle.nextElementSibling.scrollHeight;
        accordionTitle.classList.toggle('active__header')
        if(accordionTitle.classList.contains('active__header')) {
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
        } else {
            accordionTitle.nextElementSibling.style.maxHeight = 0;
        }
    })
})