const keystone = require('keystone');
const Document = keystone.list('Document').model;

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;

	locals.title = 'Publicaciones | Ciudatos';
	locals.section = 'publicaciones';

	locals.data = {
		documents: [],
	};

	view.on('init', function (next) {
		Document.find({ state: 'published' }, function (err, results) {
			if (err || !results.length) {
				return next(err);
			}
			locals.data.documents = results.filter(r => r.file.filename);
			next();
		});
	});

	view.render('documents');
};
