/* eslint no-undef: off */
const owl = $('.owl-carousel');

document.addEventListener('keydown', function (event) {
	if (event.keyCode === 37) {
		owl.trigger('prev.owl.carousel');
	} else if (event.keyCode === 39) {
		owl.trigger('next.owl.carousel');
	}
});

owl.owlCarousel({
	center: true,
	loop: true,
	items: 2,
	margin: 10,
	responsive: {
		576: {
			items: 2,
		},
		768: {
			items: 3,
			stagePadding: 100,
		},
		992: {
			items: 4,
			stagePadding: 100,
		},
	},
});
