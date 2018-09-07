var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

var routes = {
	views: importRoutes('./views'),
};

exports = module.exports = function (app) {
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/visualizacion', routes.views.visualize);
	app.get('/ods', routes.views.ods);
	app.get('/mock', routes.views.ods);
	app.get('/ciudades', routes.mock.city);
	app.get('/ciudades/:city', routes.views.city);
	app.get('/datos', routes.views.data);
	app.get('/about', routes.views.about);
	app.get('/temas', routes.views.topics);
	app.get('/publicaciones', routes.views.documents);
	app.use((req, res, next) => {
		res.render('errors/404');
	});
};
