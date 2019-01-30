const keystone = require('keystone');

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;
	const section = req.query.data || undefined
	locals.data = {}
	locals.data.iframe = section ? `http://88.208.3.175:3838/ciudatos-app-2/appDownload/?data=${section}` : `http:/88.208.3.175:3838/ciudatos-app-2/appDownload/`
	locals.title = 'Bases de datos | Ciudatos';
	locals.section = 'base-de-datos';
//	view.render('bases-de-datos');
	view.render('index');
};
