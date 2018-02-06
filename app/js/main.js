const burger = document.querySelector('.hamburger');
const cancel = document.querySelector('.cancel');
const subMenu = document.querySelector('.sub-menu');


burger.addEventListener('click', function() {
  subMenu.classList.toggle('is-open');
})

cancel.addEventListener('click', function() {
  subMenu.classList.toggle('is-open');
})
