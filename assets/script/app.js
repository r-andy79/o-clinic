// SLIDER

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const popUpBtn = document.querySelector('.pop-up__button');
const popUpEl = document.querySelector('.pop-up');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling) {
        //Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if(current.previousElementSibling) {
        //Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

// Button events

if(nextBtn !== null) {
    nextBtn.addEventListener('click', (e) => { 
        nextSlide();
        if(auto) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    });
}

if(prevBtn !== null) {
    prevBtn.addEventListener('click', (e) => { 
        prevSlide();
        if(auto) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    });
}

if(popUpBtn !== null) {
    popUpBtn.addEventListener('click', () => {
        popUpEl.classList.remove('pop-up__active');
    })
}


// Auto slide
if(auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);

}

// ====== MENU SHOW AND HIDE ======

const navMenu = document.querySelector('.nav'),
      toggleMenu = document.querySelector('.header__toggle'),
      closeMenu = document.querySelector('.nav__close')

// SHOW

if(toggleMenu !== null) {
    toggleMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    })
}


// HIDE

if(closeMenu !== null) {
    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('show');
    })
}


// ACTIVE LINK AND REMOVE MENU
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    // Active link
    navLink.forEach(link => link.classList.remove('active'));
    console.log(this)
    this.classList.add('active');

    // Remove mobile menu
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger__icon');
const closeIcon = document.querySelector('.close__icon');
console.log(hamburger);
hamburger.addEventListener('click', function() {
    this.classList.toggle('close');
})

// ACCORDION

const accordionTitles = document.querySelectorAll('.accordion__title');

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

// READ MORE / LESS

const readBtns = document.querySelectorAll('.read-more-less-btn');
console.log(readBtns);
const additionalText = document.querySelector('.additional__paragraph');

function showHideText() {
    const siblingText = this.previousElementSibling;
        if(siblingText.style.display === 'none' || siblingText.style.display === '') {
            siblingText.style.display = 'block';
            this.textContent = 'Zwi??';
        } else {
            siblingText.style.display = 'none';
            this.textContent = 'Rozwi??';
        }
    }

if(readBtns !== null) {
    readBtns.forEach(el => el.addEventListener('click', showHideText))
}