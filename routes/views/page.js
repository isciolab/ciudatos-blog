var keystone = require('keystone'),
    async = require('async');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res),
        locals = res.locals;

    // Init locals
    if (req.params.lang) {
        if (["es", "en"].indexOf(req.params.lang) > -1) {
            req.setLocale(req.params.lang);
        }
    }

    locals.language = req.getLocale();
    locals.page = req.params.page;
    locals.title = "Ciudatos - " + req.url;
    locals.noSectionsNav = true;

    locals.data = {
        page: {}
    };

    // Load current page
    view.on('init', function(next) {
        // console.log(locals.page)

        if (req.params.page) {
            keystone.list('Page').model.findOne({
                key: locals.page
            }).exec(function(err, result) {
                locals.data.page = result;
                next(err);
            });
        } else {
            next();
        }
    });

    // Load primary pages
    view.on('init', function(next) {

        keystone.list('Page').model.find()
            .where('primary').equals(true)
            .sort('-weight')
            .exec(function(err, results) {
                if (err || !results.length) {
                    return next(err);
                }
                locals.data.pagesPrimary = results;
                next(err);
            });
    });

    view.render('page')
};


