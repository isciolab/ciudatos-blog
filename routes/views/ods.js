const keystone = require('keystone');

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;
	locals.title = 'Visualización de datos | Ciudatos';
	locals.section = 'visualizacion';
	const { section } = req.query;
	locals.data = {};
	locals.data.section = section;
	view.render('ods');
};
