// Getting Elements
const opnBtn = document.querySelector('.open-dailog');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('.close-dailog');
const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navmenu');
const currYearEle = document.getElementById('currentYear');

// Setting current year in footer
const currYear = new Date().getFullYear();
currYearEle.innerText = currYear;

// Model Show/Hide
opnBtn.addEventListener('click', () => {
  modal.showModal();
  opnBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  modal.close();
  opnBtn.style.display = 'flex';
});

// Hamburger Show/Hide
hamburgerButton.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navMenu.style.display = 'flex';
  } else if (window.innerWidth <= 768) {
    navMenu.style.display = 'none';
  }
});
