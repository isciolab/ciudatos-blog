const keystone = require('keystone');
const Document = keystone.list('Document').model;
const _ = require('lodash');

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;

	locals.section = 'home'
	
  locals.data = {
  	documents: [],
  };

	view.on('init', function(next) {
		Document.find({ state: 'published'}, (err, results) => {
			if (err) {
				next(err)
			}
			locals.data.documents = _.sampleSize(results, 3);
			next();
		});
	});

	view.render('home');
};
