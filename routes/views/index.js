const keystone = require('keystone');
const Document = keystone.list('Document').model;
const Home = keystone.list('Home').model;
const City = keystone.list('City').model;
const { sampleSize } = require('lodash');

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;

	locals.section = 'home';

	locals.data = {
		documents: [],
		info: [],
		cities: [],
	};

	view.on('init', async function (next) {
		try {
			const info = await Home.getHomeInfo();
			const cities = await City.getPublishedCities();
			const documents = await Document.getPublishedDocuments();

			locals.data.info = info[0];
			locals.data.cities = cities;
			locals.data.documents = sampleSize(documents.filter(doc => doc.file.url), 3);
		} catch (error) {
			return next(error);
		}
		next();
	});

	view.render('index');
};
