const keystone = require('keystone');

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;
	const section = req.query.data || undefined
	locals.data = {}
	locals.data.iframe = section ? `https://randommonkey.shinyapps.io/appDownload/?data=${section}` : `https://randommonkey.shinyapps.io/appDownload/`
	locals.title = 'Sobre Nosotros | Ciudatos';
	locals.section = 'base-de-datos';
	view.render('bases-de-datos');
};
