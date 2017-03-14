var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'documents';

	if (req.params.lang) {
    	if(["es","en"].indexOf(req.params.lang) > -1){
	        req.setLocale(req.params.lang);		
    	}
    } else{
        req.setLocale("es");
    }

	locals.data = {
		documents: []
	};


    // Load Documents
    view.on('init', function(next) {
        var q = keystone.list('Document').model.find()
        .where('state','published');
        q.exec(function(err, results) {
            locals.data.documents = results;
            next(err);
        });
    });


	// Render the view
	view.render('documents');
};
