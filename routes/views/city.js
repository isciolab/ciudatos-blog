const keystone = require('keystone');
const url = require('url');

exports = module.exports = function(req, res) {
  const view = new keystone.View(req, res);
  const locals = res.locals;
  const urlObj = url.parse(req.url);
  console.log(req.originalUrl);
  view.render('city');
}