const keystone = require('keystone');

exports = module.exports = function (req, res, next) {
	const view = new keystone.View(req, res);
	const locals = res.locals;
	const { city } = req.params;
	const cities = ['barranquilla', 'bogota', 'bucaramanga', 'cali', 'cali',  'cartagena', 'cucuta', 'ibague', 'manizales', 'medellin', 'pereira', 'santa-marta'];
	
	locals.data = {
		city: city || 'bogota',
	};

	if (cities.indexOf(locals.data.city) > -1) {
		locals.title = `Ciudades - | Ciudatos`;
		locals.section = 'ciudades';
		view.render('city');
	} else {
		next();
	}
};
