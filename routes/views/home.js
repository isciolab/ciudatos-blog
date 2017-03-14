var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	if (req.params.lang) {
    	if(["es","en","it"].indexOf(req.params.lang) > -1){
	        req.setLocale(req.params.lang);		
    	}
    } else{
        req.setLocale("es");
    }

    locals.language = req.getLocale();

	// Render the view
	view.render('home');
};
