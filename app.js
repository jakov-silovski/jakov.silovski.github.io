function ready(){
const hamburger = document.querySelector('.nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.nav-bar .nav-list ul li a');
const header = document.querySelector('.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
}