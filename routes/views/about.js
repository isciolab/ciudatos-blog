const keystone = require('keystone');
const About = keystone.list('About').model;

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;
	locals.title = 'Sobre Nosotros | Ciudatos';
	locals.section = 'about';
	locals.data = {}

	view.on('init', function (next) {
		About.find({}, (err, results) => {
			if (err || !results.length) {
				return next(err);
			}
			console.log(results)
			locals.data.info = results[0];
			next();
		});
	});

	view.render('about');
};
