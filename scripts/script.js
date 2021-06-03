

const menu = document.querySelector('.side-menu');
const menuBtn = document.querySelector('.menu-btn i');
menuBtn.addEventListener('click', navActivation);

function navActivation() {
  if (menuBtn.classList.contains('fa-bars')) {
    menuBtn.classList.remove('fa-bars');
    menuBtn.classList.add('fa-times');
    menu.classList.add('active');
  } else {
    menuBtn.classList.remove('fa-times');
    menuBtn.classList.add('fa-bars');
    menu.classList.remove('active');
  }
}



