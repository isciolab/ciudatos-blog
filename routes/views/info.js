var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // locals.section is used to set the currently selected
    // item in the header navigation.
    locals.section = 'info';

    if (req.params.lang) {
        if (["es", "en","it"].indexOf(req.params.lang) > -1) {
            req.setLocale(req.params.lang);
        }
    } else {
        req.setLocale("es");
    }

    locals.language = req.getLocale();
    locals.page = req.params.page;



    var pages = {
        "about": ["sobre"],
        "visualize":["visualizacion"]
    }

    var input = req.params.page;
    var out = "home_es";
    var slugs = Object.keys(pages);
    for (i in slugs) {
        var variants = pages[slugs[i]];
        if (variants.indexOf(input) > -1) {
            var out = slugs[i];
        }
    }
    console.log("INFO: ",out)



    // Render the view
    view.render(out);
};
