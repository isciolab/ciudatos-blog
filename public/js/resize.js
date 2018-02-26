function resize () {
	const windowHeight = window.innerHeight;
	const headerHeight = document.querySelector('header').offsetHeight;
	const iframe = document.querySelector('iframe');
	document.querySelector('main').style.marginTop = headerHeight + 'px';
	iframe.style.height = (windowHeight - headerHeight) + 'px';
}

window.addEventListener('load', function () {
	resize();
	window.addEventListener('resize', resize);
});
