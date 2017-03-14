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


    locals.data = {
        posts: []
    };


    // Load the posts
    view.on('init', function(next) {

        var q = keystone.list('Post')
            .model.find()
            .where('state', 'published')
            // .where('lang', locals.language)
            .sort('-publishedDate')
            .limit(3)
            .populate('authors categories sections');

        q.exec(function(err, results) {
            locals.data.posts = results;         
            next(err);
        });

    });



	// Render the view
	view.render('home_es');
};