const keystone = require('keystone');

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;
	locals.title = 'Temas | Ciudatos';
	locals.section = 'temas';
	view.render('temas');
};
