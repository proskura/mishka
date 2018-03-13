var menuOpenCloseBtn = document.querySelector('.main-nav__toggle');
var mainMenu = document.querySelector('.main-nav');

menuOpenCloseBtn.addEventListener( 'click', function(event) {
	event.preventDefault();

	mainMenu.classList.toggle( 'main-nav--closed' );
} );