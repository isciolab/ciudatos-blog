const keystone = require('keystone');
const Document = keystone.list('Document').model;

exports = module.exports = function (req, res) {
  const view = new keystone.View(req, res);
  const locals = res.locals;
  
  locals.section = 'documents';

  locals.data = {
    documents: []
  };

  view.on('init', function(next) {
    Document.find({ state: 'published' }, function(err, results) {
      if (err || !results.length) {
        return next(err);
      }
      locals.data.documents = results;
      next();
    })
  });

	view.render('documents');
};
