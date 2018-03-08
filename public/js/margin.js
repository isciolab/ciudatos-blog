/* eslint no-undef: off */

function margin () {
	const headerHeight = document.querySelector('header').offsetHeight;
	document.querySelector('main').style.marginTop = headerHeight + 'px';
}

window.addEventListener('load', function () {
	margin();
	window.addEventListener('resize', margin);
});
