const { some } = require('lodash');
const keystone = require('keystone');
const Profile = keystone.list('Profile').model;

exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'Visualizar', key: 'visualize', href: '/visualizacion'},
		{ label: 'Ciudades', key: 'cities', href: '/ciudades' },
		{ label: 'Temas', key: 'topics', href: '/temas' },
		{ label: 'Publicaciones', key: 'documents', href: '/informes' },
		{ label: 'Quiénes somos', key: 'about', href: '/about'}
	];
	res.locals.user = req.user;

	Profile.find({}).sort({ order: 1 }).exec((err, profiles) => {
		res.locals.profiles = profiles
		next();
	})
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
