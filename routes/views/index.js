const keystone = require('keystone');
const Document = keystone.list('Document').model;
const Home = keystone.list('Home').model;
const { sampleSize } = require('lodash');

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;

	locals.section = 'home';

	locals.data = {
		documents: [],
		info: []
	};

	view.on('init', function (next) {
		Document.find({ state: 'published' }, (err, results) => {
			if (err) {
				return next(err);
			}
			locals.data.documents = results.filter(r => r.file.url);
			locals.data.documents = sampleSize(locals.data.documents, 3);
			next();
		});
	});

	view.on('init', function (next) {
		Home.find({}, (err, results) => {
			if (err || !results.length) {
				return next(err);
			}
			locals.data.info = results[0];
			next();
		});
	});

	view.render('index');
};
