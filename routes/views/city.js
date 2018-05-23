const keystone = require('keystone');

exports = module.exports = function (req, res, next) {
	const view = new keystone.View(req, res);
	const locals = res.locals;
	const { city } = req.params;
	// const cities = ['barranquilla', 'bogota', 'bucaramanga', 'cali', 'cali',  'cartagena', 'cucuta', 'ibague', 'manizales', 'medellin', 'pereira', 'santa-marta'];
	const cities = ['cali',  'cartagena', 'manizales', 'medellin', 'santa-marta'];

	function capitalize (str) {
		if (!str) return
		return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
	}
	
	locals.data = {
		city: city || 'cali',
	};

	if (cities.indexOf(locals.data.city) > -1) {
		locals.title = `Ciudades - ${capitalize(locals.data.city)} | Ciudatos`;
		locals.section = 'ciudades';
		view.render('city');
	} else {
		next();
	}
};
