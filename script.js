// Getting Elements
let opnBtn = document.querySelector('.open-dailog');
let modal = document.querySelector('#modal');
let closeBtn = document.querySelector('.close-dailog');
const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navmenu');
const currYearEle = document.getElementById('currentYear');

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
document.addEventListener('DOMContentLoaded', function () {
	hamburgerButton.addEventListener('click', function () {
		navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
	});
});

// Setting current year in footer
const currYear = new Date().getFullYear();
currYearEle.innerText = currYear;
