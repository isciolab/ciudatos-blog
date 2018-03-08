const keystone = require('keystone');

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;
	locals.title = 'Ciudades | Ciudatos';
	locals.section = 'ciudades';
	view.render('city');
};
