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
	items: 2,
	loop: true,
	margin: 10,
	nav: true,
	slideBy: 1,
	navText: ['<span class="glyphicon glyphicon-chevron-left"</span>', '<span class="glyphicon glyphicon-chevron-right"</span>'],
	responsive: {
		576: {
			items: 2,
		},
		768: {
			items: 3,
			stagePadding: 100,
			slideBy: 2,
		},
		992: {
			items: 4,
			stagePadding: 100,
			slideBy: 3,
		},
	},
});
