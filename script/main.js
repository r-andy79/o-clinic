// ===== MENU SHOW AND HIDE =====
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close');

// SHOW
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
})

// HIDE
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
})

// ACTIVE AND REMOVE MENU
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
  // Active link
  navLinks.forEach(navLink => navLink.classList.remove('active'));
  this.classList.add('active');

  // Remove mobile menu
  navMenu.classList.remove('show')
}

navLinks.forEach(navLink => navLink.addEventListener('click', linkAction));