const keystone = require('keystone');
const City = keystone.list('City').model;

exports = module.exports = function (req, res, follow) {
	const view = new keystone.View(req, res);
	const locals = res.locals;
	const { city } = req.params;

	function capitalize (str) {
		if (!str) return;
		return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
	}

	locals.data = {
		city: city || 'cali',
		cities: [],
	};

	view.on('init', async next => {
		try {
			locals.data.cities = await City.getPublishedCities();
			const cities = locals.data.cities.map(city => city.slug);
			if (!cities.includes(locals.data.city)) {
				return follow();
			}
			locals.title = `Ciudades - ${capitalize(locals.data.city)} | Ciudatos`;
			locals.section = 'ciudades';
		} catch (error) {
			return next(error);
		}
		return next();
	});

	view.render('city');
};
