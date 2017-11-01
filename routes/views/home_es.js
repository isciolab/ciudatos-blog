const keystone = require('keystone');

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	let locals = res.locals;

	locals.section = 'home';

	if (req.params.lang) {
  	if(["es","en","it"].indexOf(req.params.lang) > -1){
      req.setLocale(req.params.lang);
  	}
  } else {
  	req.setLocale("es");
  }

  locals.language = req.getLocale();

  locals.data = {
  	documents: [],
  };

	// Load Documents
	view.on('init', function(next) {
		const q = keystone.list('Document').model.find().where('state','published');
		q.exec(function(err, results) {
			locals.data.documents = results;
			next(err);
		});
	});

	view.render('home_es');
};
