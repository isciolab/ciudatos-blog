const keystone = require('keystone');
const City = keystone.list('City').model;

exports = module.exports = function (req, res, follow) {
	const view = new keystone.View(req, res);
	const locals = res.locals;
	const { city } = req.params;
	const cities = ['cali', 'cartagena', 'manizales', 'medellin', 'santa-marta'];

	function capitalize (str) {
		if (!str) return;
		return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
	}

	locals.data = {
		city: city || 'cali',
		cities: [],
	};

	view.on('init', async next => {
		if (cities.includes(locals.data.city)) {
			locals.title = `Ciudades - ${capitalize(locals.data.city)} | Ciudatos`;
			locals.section = 'ciudades';
			try {
				locals.data.cities = await City.getPublishedCities();
			} catch (error) {
				return next(error);
			}
			return next();
		}
		return follow();
	});

	view.render('city');
};
